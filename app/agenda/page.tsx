import Link from 'next/link';
import { 
  listarEventos, 
  formatarData, 
  getTipoEventoNome,
  getTipoEventoColor,
  isEventoFuturo
} from '@/app/services/agenda';
import type { Evento } from '@/app/types/agenda';

export const metadata = {
  title: 'Agenda de Eventos | Portal Paranhos',
  description: 'Acompanhe os eventos, reuniões e atividades nos municípios do Paraná',
};

/**
 * Componente de Card de Evento
 */
function EventoCard({ evento }: { evento: Evento }) {
  const { titulo, descricao, data, horario, cidade, tipo, local, endereco, publico, inscricaoLink } = evento;
  const dataFormatada = formatarData(data);
  const eventoFuturo = isEventoFuturo(data);
  
  return (
    <div className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition group">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Data Badge */}
        <div className="flex-shrink-0">
          <div className={`w-20 h-20 rounded-xl flex flex-col items-center justify-center ${
            eventoFuturo ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-slate-800/50 border border-slate-700/30'
          }`}>
            <div className={`text-2xl font-bold ${eventoFuturo ? 'text-emerald-400' : 'text-slate-400'}`}>
              {new Date(data).getDate()}
            </div>
            <div className={`text-xs uppercase ${eventoFuturo ? 'text-emerald-500' : 'text-slate-500'}`}>
              {new Date(data).toLocaleDateString('pt-BR', { month: 'short' })}
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex flex-wrap items-start gap-3 mb-3">
            <h3 className="text-xl font-bold text-slate-50 group-hover:text-emerald-400 transition flex-1">
              {titulo}
            </h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${getTipoEventoColor(tipo)}`}>
              {getTipoEventoNome(tipo)}
            </span>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-3 text-sm">
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>📅</span>
              <span>{dataFormatada}</span>
            </div>
            {horario && (
              <div className="flex items-center gap-1.5 text-slate-400">
                <span>🕐</span>
                <span>{horario}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>📍</span>
              <span className="text-emerald-400 font-medium">{cidade}</span>
            </div>
            {publico !== undefined && (
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                publico 
                  ? 'bg-green-500/10 text-green-400' 
                  : 'bg-amber-500/10 text-amber-400'
              }`}>
                {publico ? 'Aberto ao público' : 'Restrito'}
              </span>
            )}
          </div>

          {/* Descrição */}
          <p className="text-slate-300 text-sm mb-3 leading-relaxed">
            {descricao}
          </p>

          {/* Local */}
          {local && (
            <div className="bg-slate-800/50 rounded-lg p-3 mb-3">
              <p className="text-xs text-slate-500 mb-1">Local</p>
              <p className="text-slate-200 font-medium">{local}</p>
              {endereco && (
                <p className="text-xs text-slate-400 mt-1">{endereco}</p>
              )}
            </div>
          )}

          {/* Ações */}
          {inscricaoLink && (
            <div className="flex gap-2">
              <a
                href={inscricaoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-medium transition"
              >
                Inscrever-se
                <span>→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Página de Agenda
 */
export default async function AgendaPage() {
  // Buscar eventos
  const { eventos, total } = await listarEventos({ perPage: 50 });
  
  // Separar eventos futuros e passados
  const eventosFuturos = eventos.filter(e => isEventoFuturo(e.data));
  const eventosPassados = eventos.filter(e => !isEventoFuturo(e.data));
  
  // Estatísticas
  const cidades = Array.from(new Set(eventos.map(e => e.cidade)));
  const tiposEvento = Array.from(new Set(eventos.map(e => e.tipo)));
  
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header/Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-emerald-400 hover:text-emerald-300 font-semibold text-lg">
            ← Portal Paranhos
          </Link>
          <nav className="flex gap-6">
            <Link href="/municipios" className="text-slate-300 hover:text-emerald-400 transition">
              Municípios
            </Link>
            <Link href="/biografia" className="text-slate-300 hover:text-emerald-400 transition">
              Biografia
            </Link>
            <Link href="/sobre" className="text-slate-300 hover:text-emerald-400 transition">
              Sobre
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-50">
            Agenda de Eventos
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Acompanhe os eventos, reuniões e atividades nos municípios do Paraná. 
            Fique por dentro das datas importantes e participe.
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded mt-6" />
        </div>
        
        {/* Stats Summary */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-1">{total}</div>
            <p className="text-slate-400 text-sm">Total de Eventos</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">{eventosFuturos.length}</div>
            <p className="text-slate-400 text-sm">Eventos Futuros</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">{cidades.length}</div>
            <p className="text-slate-400 text-sm">Cidades</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-1">{tiposEvento.length}</div>
            <p className="text-slate-400 text-sm">Tipos de Evento</p>
          </div>
        </div>

        {/* Filtros (Visual) */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Filtros (em breve)</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-slate-400 mb-2">Mês</label>
              <select 
                disabled
                className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-500 cursor-not-allowed"
              >
                <option>Todos os meses</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Cidade</label>
              <select 
                disabled
                className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-500 cursor-not-allowed"
              >
                <option>Todas as cidades</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Tipo de Evento</label>
              <select 
                disabled
                className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-500 cursor-not-allowed"
              >
                <option>Todos os tipos</option>
              </select>
            </div>
          </div>
        </div>

        {/* Eventos Futuros */}
        {eventosFuturos.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <span>📅</span>
              Próximos Eventos
            </h2>
            <div className="space-y-4">
              {eventosFuturos.map((evento) => (
                <EventoCard key={evento.id} evento={evento} />
              ))}
            </div>
          </div>
        )}

        {/* Eventos Passados */}
        {eventosPassados.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <span>📚</span>
              Eventos Anteriores
            </h2>
            <div className="space-y-4">
              {eventosPassados.map((evento) => (
                <EventoCard key={evento.id} evento={evento} />
              ))}
            </div>
          </div>
        )}

        {/* Sem Eventos */}
        {eventos.length === 0 && (
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-xl font-bold text-slate-300 mb-2">Nenhum evento encontrado</h3>
            <p className="text-slate-500">Aguarde novos eventos em breve</p>
          </div>
        )}

        {/* Footer Info */}
        <div className="bg-slate-900/50 backdrop-blur rounded-3xl border border-slate-800 p-8 md:p-12 mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-slate-100">
            Fique por Dentro
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="text-4xl mb-3">🔔</div>
              <h3 className="font-semibold text-slate-200 mb-2">Notificações</h3>
              <p className="text-slate-400 text-sm">
                Em breve você poderá receber notificações sobre eventos da sua região
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-semibold text-slate-200 mb-2">Newsletter</h3>
              <p className="text-slate-400 text-sm">
                Cadastre-se para receber a agenda mensal de eventos por email
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/"
              className="inline-block px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition"
            >
              ← Voltar para a Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
