

/**
 * Tipos TypeScript para Agenda de Eventos
 * 
 * Define a estrutura de dados para eventos e atividades do Portal Paranhos
 */

/**
 * Tipos de eventos
 */
export type TipoEvento = 
  | 'REUNIAO'
  | 'AUDIENCIA_PUBLICA'
  | 'INAUGURACAO'
  | 'VISITA_TECNICA'
  | 'ENCONTRO'
  | 'WORKSHOP'
  | 'SEMINARIO'
  | 'CONFERENCIA'
  | 'CERIMONIA'
  | 'OUTRO';

/**
 * Evento da agenda
 */
export interface Evento {
  id: number;
  titulo: string;
  descricao: string;
  data: string; // ISO date format
  dataFim?: string; // ISO date format (para eventos de múltiplos dias)
  horario?: string; // Exemplo: "14:00" ou "14:00-16:00"
  cidade: string;
  tipo: TipoEvento;
  local?: string;
  endereco?: string;
  municipioId?: number; // Referência ao município
  link?: string;
  organizador?: string;
  publico?: boolean; // Se é aberto ao público
  inscricaoLink?: string;
}

/**
 * Resposta da API para listagem de eventos
 */
export interface ListaEventosResponse {
  eventos: Evento[];
  total: number;
  page?: number;
  perPage?: number;
}

/**
 * Filtros para busca de eventos
 */
export interface EventosFiltros {
  mes?: number; // 1-12
  ano?: number;
  cidade?: string;
  tipo?: TipoEvento;
  municipioId?: number;
  page?: number;
  perPage?: number;
}
