
/**
 * Cliente HTTP para comunicação com a API
 * 
 * Fornece funções auxiliares para fazer requisições HTTP
 * com tratamento de erros e configurações padrão.
 */

import { API_CONFIG, DEFAULT_HEADERS } from '@/app/config/api';

/**
 * Erro customizado para erros da API
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Opções para requisições HTTP
 */
interface FetchOptions extends RequestInit {
  timeout?: number;
}

/**
 * Função auxiliar para fazer requisições HTTP com timeout
 */
async function fetchWithTimeout(
  url: string,
  options: FetchOptions = {}
): Promise<Response> {
  const { timeout = API_CONFIG.TIMEOUT, ...fetchOptions } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        ...DEFAULT_HEADERS,
        ...fetchOptions.headers,
      },
    });

    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error instanceof Error && error.name === 'AbortError') {
      throw new ApiError(
        `Request timeout after ${timeout}ms`,
        408,
        'Request Timeout'
      );
    }
    
    throw error;
  }
}

/**
 * Faz uma requisição GET para a API
 */
export async function apiGet<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;

  try {
    const response = await fetchWithTimeout(url, {
      method: 'GET',
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new ApiError(
        errorData?.message || `HTTP Error ${response.status}`,
        response.status,
        response.statusText,
        errorData
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(
      error instanceof Error ? error.message : 'Unknown error',
      500,
      'Internal Server Error'
    );
  }
}

/**
 * Faz uma requisição POST para a API
 */
export async function apiPost<T>(
  endpoint: string,
  data: any,
  options: FetchOptions = {}
): Promise<T> {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;

  try {
    const response = await fetchWithTimeout(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new ApiError(
        errorData?.message || `HTTP Error ${response.status}`,
        response.status,
        response.statusText,
        errorData
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(
      error instanceof Error ? error.message : 'Unknown error',
      500,
      'Internal Server Error'
    );
  }
}

/**
 * Verifica se a API está disponível
 */
export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetchWithTimeout(`${API_CONFIG.BASE_URL}/health`, {
      method: 'GET',
      timeout: 5000,
    });
    return response.ok;
  } catch {
    return false;
  }
}
