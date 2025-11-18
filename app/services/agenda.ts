

/**
 * Serviço de Agenda de Eventos
 * 
 * Fornece funções para consumir dados de eventos da API.
 * Inclui funções mock para desenvolvimento sem backend.
 */

import { API_ENDPOINTS } from '@/app/config/api';
import { apiGet } from '@/app/lib/api-client';
import type {
  Evento,
  ListaEventosResponse,
  EventosFiltros,
  TipoEvento,
} from '@/app/types/agenda';

/**
 * Flag para usar dados mock (desenvolvimento sem backend)
 * Altere para false quando a API estiver disponível
 */
const USE_MOCK = true;

// ============================================================================
// FUNÇÕES MOCK (para desenvolvimento sem backend)
// ============================================================================

/**
 * Dados mock de eventos
 */
const EVENTOS_MOCK: Evento[] = [
  {
    id: 1,
    titulo: 'Inauguração de Centro Comunitário',
    descricao: 'Cerimônia de inauguração do novo Centro Comunitário do bairro Jardim das Américas, com presença de autoridades locais e comunidade.',
    data: '2025-11-20T10:00:00',
    horario: '10:00',
    cidade: 'Curitiba',
    tipo: 'INAUGURACAO',
    local: 'Centro Comunitário Jardim das Américas',
    endereco: 'Rua das Flores, 123 - Jardim das Américas',
    municipioId: 1,
    publico: true,
  },
  {
    id: 2,
    titulo: 'Audiência Pública sobre Transporte',
    descricao: 'Discussão sobre melhorias no sistema de transporte público da região metropolitana. Participação aberta à população.',
    data: '2025-11-22T18:00:00',
    horario: '18:00-20:00',
    cidade: 'Curitiba',
    tipo: 'AUDIENCIA_PUBLICA',
    local: 'Câmara Municipal de Curitiba',
    endereco: 'Rua Barão do Rio Branco, 2233',
    municipioId: 1,
    publico: true,
    inscricaoLink: 'https://exemplo.com/inscricao',
  },
  {
    id: 3,
    titulo: 'Reunião com Prefeitos da Região Oeste',
    descricao: 'Encontro para discussão de projetos de desenvolvimento regional e captação de recursos para infraestrutura.',
    data: '2025-11-25T14:00:00',
    horario: '14:00-17:00',
    cidade: 'Cascavel',
    tipo: 'REUNIAO',
    local: 'Prefeitura Municipal de Cascavel',
    municipioId: 2,
    publico: false,
  },
  {
    id: 4,
    titulo: 'Workshop de Turismo Sustentável',
    descricao: 'Capacitação para profissionais do turismo sobre práticas sustentáveis e ecoturismo na região das Cataratas.',
    data: '2025-11-28T09:00:00',
    dataFim: '2025-11-28T17:00:00',
    horario: '09:00-17:00',
    cidade: 'Foz do Iguaçu',
    tipo: 'WORKSHOP',
    local: 'Centro de Convenções Rafain',
    municipioId: 3,
    publico: true,
    inscricaoLink: 'https://exemplo.com/workshop-turismo',
  },
  {
    id: 5,
    titulo: 'Visita Técnica a Parque Industrial',
    descricao: 'Visita técnica ao novo parque industrial para conhecer as instalações e discutir oportunidades de emprego.',
    data: '2025-12-02T10:00:00',
    horario: '10:00-12:00',
    cidade: 'Londrina',
    tipo: 'VISITA_TECNICA',
    local: 'Parque Industrial Norte',
    municipioId: 4,
    publico: false,
  },
  {
    id: 6,
    titulo: 'Seminário de Agricultura Familiar',
    descricao: 'Seminário estadual sobre agricultura familiar, com palestras, painéis e feira de produtos regionais.',
    data: '2025-12-05T08:00:00',
    dataFim: '2025-12-06T18:00:00',
    horario: '08:00-18:00',
    cidade: 'Maringá',
    tipo: 'SEMINARIO',
    local: 'Centro Universitário de Maringá',
    municipioId: 5,
    publico: true,
    inscricaoLink: 'https://exemplo.com/seminario-agricultura',
  },
  {
    id: 7,
    titulo: 'Encontro Regional de Cultura',
    descricao: 'Encontro de secretários de cultura dos municípios dos Campos Gerais para troca de experiências e planejamento conjunto.',
    data: '2025-12-08T14:00:00',
    horario: '14:00-18:00',
    cidade: 'Ponta Grossa',
    tipo: 'ENCONTRO',
    local: 'Teatro Municipal',
    municipioId: 6,
    publico: false,
  },
  {
    id: 8,
    titulo: 'Conferência de Desenvolvimento Regional',
    descricao: 'Conferência sobre estratégias de desenvolvimento sustentável para a região Centro-Sul do Paraná.',
    data: '2025-12-10T09:00:00',
    dataFim: '2025-12-11T17:00:00',
    horario: '09:00-17:00',
    cidade: 'Guarapuava',
    tipo: 'CONFERENCIA',
    local: 'Centro de Eventos de Guarapuava',
    municipioId: 7,
    publico: true,
    inscricaoLink: 'https://exemplo.com/conferencia-desenvolvimento',
  },
  {
    id: 9,
    titulo: 'Cerimônia de Entrega de Veículos',
    descricao: 'Entrega de novos veículos para a frota municipal, incluindo ambulâncias e viaturas de fiscalização.',
    data: '2025-12-12T11:00:00',
    horario: '11:00',
    cidade: 'Paranaguá',
    tipo: 'CERIMONIA',
    local: 'Pátio da Prefeitura',
    municipioId: 8,
    publico: true,
  },
  {
    id: 10,
    titulo: 'Reunião de Planejamento 2026',
    descricao: 'Reunião estratégica para planejamento das ações e projetos para o ano de 2026.',
    data: '2025-12-15T09:00:00',
    horario: '09:00-12:00',
    cidade: 'Curitiba',
    tipo: 'REUNIAO',
    local: 'Secretaria de Estado',
    municipioId: 1,
    publico: false,
  },
  {
    id: 11,
    titulo: 'Workshop de Tecnologia na Educação',
    descricao: 'Capacitação de professores para uso de tecnologias digitais em sala de aula.',
    data: '2025-12-16T14:00:00',
    horario: '14:00-18:00',
    cidade: 'Cascavel',
    tipo: 'WORKSHOP',
    local: 'Centro de Formação de Professores',
    municipioId: 2,
    publico: true,
    inscricaoLink: 'https://exemplo.com/workshop-tecnologia',
  },
  {
    id: 12,
    titulo: 'Inauguração de Unidade de Saúde',
    descricao: 'Inauguração da nova UBS (Unidade Básica de Saúde) do bairro Portal da Foz.',
    data: '2025-12-18T10:00:00',
    horario: '10:00',
    cidade: 'Foz do Iguaçu',
    tipo: 'INAUGURACAO',
    local: 'UBS Portal da Foz',
    endereco: 'Av. das Cataratas, 4500',
    municipioId: 3,
    publico: true,
  },
  {
    id: 13,
    titulo: 'Audiência Pública sobre Meio Ambiente',
    descricao: 'Discussão sobre políticas ambientais e licenciamento de projetos na região metropolitana.',
    data: '2025-12-20T16:00:00',
    horario: '16:00-19:00',
    cidade: 'Londrina',
    tipo: 'AUDIENCIA_PUBLICA',
    local: 'Câmara Municipal',
    municipioId: 4,
    publico: true,
  },
  {
    id: 14,
    titulo: 'Encontro de Vereadores',
    descricao: 'Encontro regional de vereadores para discussão de boas práticas legislativas e troca de experiências.',
    data: '2025-12-22T09:00:00',
    horario: '09:00-13:00',
    cidade: 'Maringá',
    tipo: 'ENCONTRO',
    local: 'Câmara Municipal de Maringá',
    municipioId: 5,
    publico: false,
  },
  {
    id: 15,
    titulo: 'Visita a Obras de Infraestrutura',
    descricao: 'Visita às obras de duplicação da rodovia estadual e construção de viadutos.',
    data: '2025-12-27T08:00:00',
    horario: '08:00-11:00',
    cidade: 'Ponta Grossa',
    tipo: 'VISITA_TECNICA',
    local: 'Canteiro de Obras - PR 151',
    municipioId: 6,
    publico: false,
  },
];

/**
 * Lista eventos (mock)
 */
function listarEventosMock(filtros?: EventosFiltros): Promise<ListaEventosResponse> {
  let eventosFiltrados = [...EVENTOS_MOCK];

  // Aplicar filtros
  if (filtros?.cidade) {
    const cidadeLower = filtros.cidade.toLowerCase();
    eventosFiltrados = eventosFiltrados.filter(e =>
      e.cidade.toLowerCase().includes(cidadeLower)
    );
  }

  if (filtros?.tipo) {
    eventosFiltrados = eventosFiltrados.filter(e =>
      e.tipo === filtros.tipo
    );
  }

  if (filtros?.mes && filtros?.ano) {
    eventosFiltrados = eventosFiltrados.filter(e => {
      const eventData = new Date(e.data);
      return (
        eventData.getMonth() + 1 === filtros.mes &&
        eventData.getFullYear() === filtros.ano
      );
    });
  } else if (filtros?.mes) {
    eventosFiltrados = eventosFiltrados.filter(e => {
      const eventData = new Date(e.data);
      return eventData.getMonth() + 1 === filtros.mes;
    });
  }

  if (filtros?.municipioId) {
    eventosFiltrados = eventosFiltrados.filter(e =>
      e.municipioId === filtros.municipioId
    );
  }

  // Ordenar por data
  eventosFiltrados.sort((a, b) => 
    new Date(a.data).getTime() - new Date(b.data).getTime()
  );

  // Paginação
  const page = filtros?.page || 1;
  const perPage = filtros?.perPage || 20;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const eventosPaginados = eventosFiltrados.slice(start, end);

  return Promise.resolve({
    eventos: eventosPaginados,
    total: eventosFiltrados.length,
    page,
    perPage,
  });
}

/**
 * Busca evento por ID (mock)
 */
function buscarEventoPorIdMock(id: number): Promise<Evento | null> {
  const evento = EVENTOS_MOCK.find(e => e.id === id);
  return Promise.resolve(evento || null);
}

// ============================================================================
// FUNÇÕES REAIS (para uso com API)
// ============================================================================

/**
 * Lista todos os eventos (API)
 */
async function listarEventosApi(filtros?: EventosFiltros): Promise<ListaEventosResponse> {
  const params = new URLSearchParams();
  
  if (filtros?.cidade) params.append('cidade', filtros.cidade);
  if (filtros?.tipo) params.append('tipo', filtros.tipo);
  if (filtros?.mes) params.append('mes', filtros.mes.toString());
  if (filtros?.ano) params.append('ano', filtros.ano.toString());
  if (filtros?.municipioId) params.append('municipioId', filtros.municipioId.toString());
  if (filtros?.page) params.append('page', filtros.page.toString());
  if (filtros?.perPage) params.append('perPage', filtros.perPage.toString());

  const queryString = params.toString();
  const endpoint = queryString 
    ? `${API_ENDPOINTS.EVENTOS}?${queryString}` 
    : API_ENDPOINTS.EVENTOS;

  return await apiGet<ListaEventosResponse>(endpoint);
}

/**
 * Busca evento por ID (API)
 */
async function buscarEventoPorIdApi(id: number): Promise<Evento | null> {
  try {
    return await apiGet<Evento>(`${API_ENDPOINTS.EVENTOS}/${id}`);
  } catch {
    return null;
  }
}

// ============================================================================
// FUNÇÕES PÚBLICAS (escolhem entre mock ou API)
// ============================================================================

/**
 * Lista todos os eventos
 * 
 * @param filtros - Filtros opcionais para busca
 * @returns Lista de eventos com paginação
 */
export async function listarEventos(filtros?: EventosFiltros): Promise<ListaEventosResponse> {
  if (USE_MOCK) {
    return listarEventosMock(filtros);
  }
  return listarEventosApi(filtros);
}

/**
 * Busca evento por ID
 * 
 * @param id - ID do evento
 * @returns Evento ou null se não encontrado
 */
export async function buscarEventoPorId(id: number): Promise<Evento | null> {
  if (USE_MOCK) {
    return buscarEventoPorIdMock(id);
  }
  return buscarEventoPorIdApi(id);
}

/**
 * Função auxiliar para formatar data
 */
export function formatarData(data: string): string {
  const date = new Date(data);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Função auxiliar para formatar data curta
 */
export function formatarDataCurta(data: string): string {
  const date = new Date(data);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
  });
}

/**
 * Função auxiliar para obter nome do tipo de evento
 */
export function getTipoEventoNome(tipo: TipoEvento): string {
  const nomes: Record<TipoEvento, string> = {
    REUNIAO: 'Reunião',
    AUDIENCIA_PUBLICA: 'Audiência Pública',
    INAUGURACAO: 'Inauguração',
    VISITA_TECNICA: 'Visita Técnica',
    ENCONTRO: 'Encontro',
    WORKSHOP: 'Workshop',
    SEMINARIO: 'Seminário',
    CONFERENCIA: 'Conferência',
    CERIMONIA: 'Cerimônia',
    OUTRO: 'Outro',
  };
  return nomes[tipo] || tipo;
}

/**
 * Função auxiliar para obter cor do tipo de evento
 */
export function getTipoEventoColor(tipo: TipoEvento): string {
  const cores: Record<TipoEvento, string> = {
    REUNIAO: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    AUDIENCIA_PUBLICA: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    INAUGURACAO: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    VISITA_TECNICA: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    ENCONTRO: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    WORKSHOP: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    SEMINARIO: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    CONFERENCIA: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    CERIMONIA: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    OUTRO: 'bg-slate-500/10 text-slate-400 border-slate-500/30',
  };
  return cores[tipo] || cores.OUTRO;
}

/**
 * Função auxiliar para verificar se evento é futuro
 */
export function isEventoFuturo(data: string): boolean {
  return new Date(data) > new Date();
}
