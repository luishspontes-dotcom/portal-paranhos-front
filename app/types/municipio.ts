
/**
 * Tipos TypeScript para Municípios
 * 
 * Baseado na estrutura do banco de dados conforme documentação:
 * - Tabela: municipio
 * - Tabela: municipio_detalhe
 * - Tabela: MunicipioStats
 */

/**
 * Classificação do município conforme critérios administrativos
 */
export type ClassificacaoMunicipal = 'OURO' | 'PRATA' | 'BRONZE' | 'SEM_CLASSIFICACAO';

/**
 * Território Turístico do Paraná
 */
export interface TerritorioTuristico {
  id: number;
  nome: string;
  descricao?: string;
}

/**
 * Estatísticas do município (IBGE/TSE)
 */
export interface MunicipioStats {
  ibge: string;
  year: number;
  population: number;
  electors: number;
}

/**
 * Dados do Prefeito
 */
export interface Prefeito {
  nome: string;
  partido: string;
  votacao: number;
  whatsapp?: string;
  email?: string;
}

/**
 * Dados do Vice-Prefeito
 */
export interface VicePrefeito {
  nome: string;
  partido: string;
  whatsapp?: string;
}

/**
 * Dados do Presidente da Câmara
 */
export interface PresidenteCamara {
  nome: string;
  partido: string;
}

/**
 * Vereador
 */
export interface Vereador {
  id: number;
  municipioId: number;
  nome: string;
  partido: string;
  votacao: number;
  whatsapp?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
}

/**
 * Detalhes completos do município
 */
export interface MunicipioDetalhe {
  classification: ClassificacaoMunicipal;
  allocatedValue?: number;
  prefeito?: Prefeito;
  vice?: VicePrefeito;
  presidenteCamara?: PresidenteCamara;
}

/**
 * Município (estrutura básica)
 */
export interface Municipio {
  id: number;
  nome: string;
  ibgeCode: string;
  territorioId: number;
  territorio?: TerritorioTuristico;
  detalhe?: MunicipioDetalhe;
  stats?: MunicipioStats;
  vereadores?: Vereador[];
}

/**
 * Município com dados completos (para página de detalhes)
 */
export interface MunicipioCompleto extends Municipio {
  territorio: TerritorioTuristico;
  detalhe: MunicipioDetalhe;
  stats: MunicipioStats;
  vereadores: Vereador[];
}

/**
 * Resposta da API para listagem de municípios
 */
export interface ListaMunicipiosResponse {
  municipios: Municipio[];
  total: number;
  page?: number;
  perPage?: number;
}

/**
 * Filtros para busca de municípios
 */
export interface MunicipiosFiltros {
  nome?: string;
  territorioId?: number;
  classificacao?: ClassificacaoMunicipal;
  page?: number;
  perPage?: number;
}

/**
 * Estatísticas gerais do Portal
 */
export interface StatsGerais {
  totalMunicipios: number;
  prefeitosComWhatsApp: number;
  vicesComWhatsApp: number;
  vereadoresComWhatsApp: number;
  totalVereadores: number;
}
