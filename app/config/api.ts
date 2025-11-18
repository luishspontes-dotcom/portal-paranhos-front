
/**
 * Configuração da API do Portal Paranhos
 * 
 * Este arquivo centraliza as configurações de acesso à API backend.
 * A URL base é configurada via variável de ambiente NEXT_PUBLIC_API_BASE_URL.
 */

export const API_CONFIG = {
  /**
   * URL base da API
   * Padrão: https://api.paranhospr.com.br
   * Pode ser sobrescrita via variável de ambiente NEXT_PUBLIC_API_BASE_URL
   */
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.paranhospr.com.br',
  
  /**
   * Timeout padrão para requisições (em milissegundos)
   */
  TIMEOUT: 30000,
  
  /**
   * Tempo de revalidação do cache do Next.js (em segundos)
   * 60 = 1 minuto
   * 3600 = 1 hora
   */
  REVALIDATE: 60,
} as const;

/**
 * Endpoints da API
 */
export const API_ENDPOINTS = {
  // Municípios
  MUNICIPIOS: '/municipios',
  MUNICIPIO_BY_ID: (id: string | number) => `/municipios/${id}`,
  MUNICIPIOS_BY_TERRITORIO: (territorioId: string | number) => `/municipios/territorio/${territorioId}`,
  
  // Territórios Turísticos
  TERRITORIOS: '/territorios',
  TERRITORIO_BY_ID: (id: string | number) => `/territorios/${id}`,
  
  // Vereadores
  VEREADORES: '/vereadores',
  VEREADORES_BY_MUNICIPIO: (municipioId: string | number) => `/vereadores/municipio/${municipioId}`,
  
  // Estatísticas
  STATS_GERAIS: '/stats/gerais',
  STATS_MUNICIPIO: (municipioId: string | number) => `/stats/municipio/${municipioId}`,
} as const;

/**
 * Headers padrão para requisições
 */
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
} as const;
