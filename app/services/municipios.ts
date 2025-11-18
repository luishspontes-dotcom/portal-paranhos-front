
/**
 * Serviço de Municípios
 * 
 * Fornece funções para consumir dados de municípios da API.
 * Inclui funções mock para desenvolvimento sem backend.
 */

import { API_ENDPOINTS } from '@/app/config/api';
import { apiGet } from '@/app/lib/api-client';
import type {
  Municipio,
  MunicipioCompleto,
  ListaMunicipiosResponse,
  MunicipiosFiltros,
  StatsGerais,
  ClassificacaoMunicipal,
} from '@/app/types/municipio';

/**
 * Flag para usar dados mock (desenvolvimento sem backend)
 * Altere para false quando a API estiver disponível
 */
const USE_MOCK = true;

// ============================================================================
// FUNÇÕES MOCK (para desenvolvimento sem backend)
// ============================================================================

/**
 * Dados mock de municípios
 */
const MUNICIPIOS_MOCK: Municipio[] = [
  {
    id: 1,
    nome: 'Curitiba',
    ibgeCode: '4106902',
    territorioId: 1,
    territorio: {
      id: 1,
      nome: 'Curitiba e Região Metropolitana',
    },
    detalhe: {
      classification: 'OURO',
      allocatedValue: 5000000,
      prefeito: {
        nome: 'Eduardo Pimentel',
        partido: 'PSD',
        votacao: 450000,
        whatsapp: '+55 41 99999-0001',
      },
      vice: {
        nome: 'Paulo Martins',
        partido: 'PSD',
        whatsapp: '+55 41 99999-0002',
      },
    },
    stats: {
      ibge: '4106902',
      year: 2024,
      population: 1963726,
      electors: 1450000,
    },
  },
  {
    id: 2,
    nome: 'Cascavel',
    ibgeCode: '4104808',
    territorioId: 2,
    territorio: {
      id: 2,
      nome: 'Oeste do Paraná',
    },
    detalhe: {
      classification: 'OURO',
      allocatedValue: 3000000,
      prefeito: {
        nome: 'Leonaldo Paranhos',
        partido: 'PP',
        votacao: 85000,
        whatsapp: '+55 45 99999-0001',
      },
      vice: {
        nome: 'Vice Cascavel',
        partido: 'PP',
        whatsapp: '+55 45 99999-0002',
      },
    },
    stats: {
      ibge: '4104808',
      year: 2024,
      population: 348051,
      electors: 250000,
    },
  },
  {
    id: 3,
    nome: 'Foz do Iguaçu',
    ibgeCode: '4108304',
    territorioId: 3,
    territorio: {
      id: 3,
      nome: 'Cataratas do Iguaçu',
    },
    detalhe: {
      classification: 'PRATA',
      allocatedValue: 2500000,
      prefeito: {
        nome: 'Chico Brasileiro',
        partido: 'PSD',
        votacao: 75000,
        whatsapp: '+55 45 99999-1001',
      },
      vice: {
        nome: 'Vice Foz',
        partido: 'PSD',
        whatsapp: '+55 45 99999-1002',
      },
    },
    stats: {
      ibge: '4108304',
      year: 2024,
      population: 258823,
      electors: 190000,
    },
  },
  {
    id: 4,
    nome: 'Londrina',
    ibgeCode: '4113700',
    territorioId: 4,
    territorio: {
      id: 4,
      nome: 'Norte do Paraná',
    },
    detalhe: {
      classification: 'OURO',
      allocatedValue: 4000000,
      prefeito: {
        nome: 'Marcelo Belinati',
        partido: 'PP',
        votacao: 120000,
        whatsapp: '+55 43 99999-0001',
      },
      vice: {
        nome: 'Vice Londrina',
        partido: 'PP',
        whatsapp: '+55 43 99999-0002',
      },
    },
    stats: {
      ibge: '4113700',
      year: 2024,
      population: 575377,
      electors: 420000,
    },
  },
  {
    id: 5,
    nome: 'Maringá',
    ibgeCode: '4115200',
    territorioId: 4,
    territorio: {
      id: 4,
      nome: 'Norte do Paraná',
    },
    detalhe: {
      classification: 'PRATA',
      allocatedValue: 3500000,
      prefeito: {
        nome: 'Ulisses Maia',
        partido: 'PSD',
        votacao: 95000,
        whatsapp: '+55 44 99999-0001',
      },
      vice: {
        nome: 'Vice Maringá',
        partido: 'PSD',
        whatsapp: '+55 44 99999-0002',
      },
    },
    stats: {
      ibge: '4115200',
      year: 2024,
      population: 430157,
      electors: 310000,
    },
  },
  {
    id: 6,
    nome: 'Ponta Grossa',
    ibgeCode: '4119905',
    territorioId: 5,
    territorio: {
      id: 5,
      nome: 'Campos Gerais',
    },
    detalhe: {
      classification: 'BRONZE',
      allocatedValue: 2000000,
      prefeito: {
        nome: 'Elizabeth Schmidt',
        partido: 'UNIÃO',
        votacao: 65000,
        whatsapp: '+55 42 99999-0001',
      },
      vice: {
        nome: 'Vice Ponta Grossa',
        partido: 'UNIÃO',
        whatsapp: '+55 42 99999-0002',
      },
    },
    stats: {
      ibge: '4119905',
      year: 2024,
      population: 358838,
      electors: 260000,
    },
  },
  {
    id: 7,
    nome: 'Guarapuava',
    ibgeCode: '4108700',
    territorioId: 6,
    territorio: {
      id: 6,
      nome: 'Centro-Sul',
    },
    detalhe: {
      classification: 'BRONZE',
      allocatedValue: 1800000,
      prefeito: {
        nome: 'Celso Góes',
        partido: 'PSDB',
        votacao: 55000,
        whatsapp: '+55 42 99999-1001',
      },
      vice: {
        nome: 'Vice Guarapuava',
        partido: 'PSDB',
        whatsapp: '+55 42 99999-1002',
      },
    },
    stats: {
      ibge: '4108700',
      year: 2024,
      population: 182644,
      electors: 135000,
    },
  },
  {
    id: 8,
    nome: 'Paranaguá',
    ibgeCode: '4118204',
    territorioId: 7,
    territorio: {
      id: 7,
      nome: 'Litoral do Paraná',
    },
    detalhe: {
      classification: 'PRATA',
      allocatedValue: 2200000,
      prefeito: {
        nome: 'Marcelo Roque',
        partido: 'PSD',
        votacao: 48000,
        whatsapp: '+55 41 99999-2001',
      },
      vice: {
        nome: 'Vice Paranaguá',
        partido: 'PSD',
        whatsapp: '+55 41 99999-2002',
      },
    },
    stats: {
      ibge: '4118204',
      year: 2024,
      population: 156174,
      electors: 115000,
    },
  },
];

/**
 * Estatísticas gerais mock
 */
const STATS_GERAIS_MOCK: StatsGerais = {
  totalMunicipios: 399,
  prefeitosComWhatsApp: 507,
  vicesComWhatsApp: 522,
  vereadoresComWhatsApp: 2006,
  totalVereadores: 8500,
};

/**
 * Lista municípios (mock)
 */
function listarMunicipiosMock(filtros?: MunicipiosFiltros): Promise<ListaMunicipiosResponse> {
  let municipiosFiltrados = [...MUNICIPIOS_MOCK];

  // Aplicar filtros
  if (filtros?.nome) {
    const nomeLower = filtros.nome.toLowerCase();
    municipiosFiltrados = municipiosFiltrados.filter(m =>
      m.nome.toLowerCase().includes(nomeLower)
    );
  }

  if (filtros?.territorioId) {
    municipiosFiltrados = municipiosFiltrados.filter(m =>
      m.territorioId === filtros.territorioId
    );
  }

  if (filtros?.classificacao) {
    municipiosFiltrados = municipiosFiltrados.filter(m =>
      m.detalhe?.classification === filtros.classificacao
    );
  }

  // Paginação
  const page = filtros?.page || 1;
  const perPage = filtros?.perPage || 10;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const municipiosPaginados = municipiosFiltrados.slice(start, end);

  return Promise.resolve({
    municipios: municipiosPaginados,
    total: municipiosFiltrados.length,
    page,
    perPage,
  });
}

/**
 * Busca município por ID (mock)
 */
function buscarMunicipioPorIdMock(id: number): Promise<MunicipioCompleto | null> {
  const municipio = MUNICIPIOS_MOCK.find(m => m.id === id);
  
  if (!municipio) {
    return Promise.resolve(null);
  }

  return Promise.resolve({
    ...municipio,
    territorio: municipio.territorio!,
    detalhe: municipio.detalhe!,
    stats: municipio.stats!,
    vereadores: [],
  });
}

/**
 * Busca estatísticas gerais (mock)
 */
function buscarStatsGeraisMock(): Promise<StatsGerais> {
  return Promise.resolve(STATS_GERAIS_MOCK);
}

// ============================================================================
// FUNÇÕES REAIS (para uso com API)
// ============================================================================

/**
 * Lista todos os municípios
 */
async function listarMunicipiosApi(filtros?: MunicipiosFiltros): Promise<ListaMunicipiosResponse> {
  const params = new URLSearchParams();
  
  if (filtros?.nome) params.append('nome', filtros.nome);
  if (filtros?.territorioId) params.append('territorioId', filtros.territorioId.toString());
  if (filtros?.classificacao) params.append('classificacao', filtros.classificacao);
  if (filtros?.page) params.append('page', filtros.page.toString());
  if (filtros?.perPage) params.append('perPage', filtros.perPage.toString());

  const queryString = params.toString();
  const endpoint = queryString ? `${API_ENDPOINTS.MUNICIPIOS}?${queryString}` : API_ENDPOINTS.MUNICIPIOS;

  return await apiGet<ListaMunicipiosResponse>(endpoint);
}

/**
 * Busca município por ID
 */
async function buscarMunicipioPorIdApi(id: number): Promise<MunicipioCompleto | null> {
  try {
    return await apiGet<MunicipioCompleto>(API_ENDPOINTS.MUNICIPIO_BY_ID(id));
  } catch {
    return null;
  }
}

/**
 * Busca estatísticas gerais
 */
async function buscarStatsGeraisApi(): Promise<StatsGerais> {
  return await apiGet<StatsGerais>(API_ENDPOINTS.STATS_GERAIS);
}

// ============================================================================
// FUNÇÕES PÚBLICAS (escolhem entre mock ou API)
// ============================================================================

/**
 * Lista todos os municípios
 * 
 * @param filtros - Filtros opcionais para busca
 * @returns Lista de municípios com paginação
 */
export async function listarMunicipios(filtros?: MunicipiosFiltros): Promise<ListaMunicipiosResponse> {
  if (USE_MOCK) {
    return listarMunicipiosMock(filtros);
  }
  return listarMunicipiosApi(filtros);
}

/**
 * Busca município por ID
 * 
 * @param id - ID do município
 * @returns Município completo ou null se não encontrado
 */
export async function buscarMunicipioPorId(id: number): Promise<MunicipioCompleto | null> {
  if (USE_MOCK) {
    return buscarMunicipioPorIdMock(id);
  }
  return buscarMunicipioPorIdApi(id);
}

/**
 * Busca estatísticas gerais do portal
 * 
 * @returns Estatísticas gerais
 */
export async function buscarStatsGerais(): Promise<StatsGerais> {
  if (USE_MOCK) {
    return buscarStatsGeraisMock();
  }
  return buscarStatsGeraisApi();
}

/**
 * Função auxiliar para obter cor da classificação
 */
export function getClassificacaoColor(classificacao: ClassificacaoMunicipal): string {
  switch (classificacao) {
    case 'OURO':
      return 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30';
    case 'PRATA':
      return 'bg-slate-400/10 text-slate-300 border-slate-400/30';
    case 'BRONZE':
      return 'bg-orange-600/10 text-orange-400 border-orange-600/30';
    default:
      return 'bg-slate-600/10 text-slate-500 border-slate-600/30';
  }
}

/**
 * Função auxiliar para formatar número de telefone
 */
export function formatarWhatsApp(whatsapp: string): string {
  // Remove caracteres não numéricos
  const numeros = whatsapp.replace(/\D/g, '');
  
  // Formata: +55 (XX) XXXXX-XXXX
  if (numeros.length === 13) {
    return `+${numeros.slice(0, 2)} (${numeros.slice(2, 4)}) ${numeros.slice(4, 9)}-${numeros.slice(9)}`;
  }
  
  return whatsapp;
}
