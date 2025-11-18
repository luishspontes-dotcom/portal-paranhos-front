import Link from 'next/link';
import { listarMunicipios, getClassificacaoColor, formatarWhatsApp } from '@/app/services/municipios';
import type { Municipio } from '@/app/types/municipio';

export const metadata = {
  title: 'Municípios do Paraná | Portal Paranhos',
  description: 'Explore os 399 municípios do Paraná com dados completos de gestores, territórios turísticos e indicadores',
};

/**
 * Componente de Card de Município
 */
function MunicipioCard({ municipio }: { municipio: Municipio }) {
  const { nome, territorio, detalhe, stats } = municipio;
  
  return (
    <div className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition group">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        {/* Município Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-slate-50 group-hover:text-emerald-400 transition">
              {nome}
            </h3>
            {detalhe?.classification && (
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getClassificacaoColor(detalhe.classification)}`}>
                {detalhe.classification}
              </span>
            )}
          </div>
          
          {/* Território */}
          {territorio && (
            <p className="text-slate-400 text-sm mb-3">
              <span className="text-emerald-400 font-medium">Território:</span> {territorio.nome}
            </p>
          )}
          
          {/* Estatísticas */}
          {stats && (
            <div className="flex flex-wrap gap-3 mb-3">
              <div className="text-sm">
                <span className="text-slate-500">População:</span>{' '}
                <span className="text-slate-300 font-medium">{stats.population.toLocaleString('pt-BR')}</span>
              </div>
              <div className="text-sm">
                <span className="text-slate-500">Eleitores:</span>{' '}
                <span className="text-slate-300 font-medium">{stats.electors.toLocaleString('pt-BR')}</span>
              </div>
            </div>
          )}
          
          {/* Prefeito */}
          {detalhe?.prefeito && (
            <div className="bg-slate-800/50 rounded-lg p-3 mb-3">
              <p className="text-xs text-slate-500 mb-1">Prefeito(a)</p>
              <p className="text-slate-200 font-medium">{detalhe.prefeito.nome}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="text-xs text-slate-400">{detalhe.prefeito.partido}</span>
                {detalhe.prefeito.votacao && (
                  <span className="text-xs text-slate-400">
                    • {detalhe.prefeito.votacao.toLocaleString('pt-BR')} votos
                  </span>
                )}
              </div>
              {detalhe.prefeito.whatsapp && (
                <a
                  href={`https://wa.me/${detalhe.prefeito.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-xs text-emerald-400 hover:text-emerald-300"
                >
                  📱 {formatarWhatsApp(detalhe.prefeito.whatsapp)}
                </a>
              )}
            </div>
          )}
          
          {/* Vice-Prefeito */}
          {detalhe?.vice && (
            <div className="bg-slate-800/50 rounded-lg p-3">
              <p className="text-xs text-slate-500 mb-1">Vice-Prefeito(a)</p>
              <p className="text-slate-200 font-medium">{detalhe.vice.nome}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="text-xs text-slate-400">{detalhe.vice.partido}</span>
              </div>
              {detalhe.vice.whatsapp && (
                <a
                  href={`https://wa.me/${detalhe.vice.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-xs text-emerald-400 hover:text-emerald-300"
                >
                  📱 {formatarWhatsApp(detalhe.vice.whatsapp)}
                </a>
              )}
            </div>
          )}
          
          {/* Valor Destinado */}
          {detalhe?.allocatedValue && (
            <div className="mt-3 text-sm">
              <span className="text-slate-500">Valor Destinado:</span>{' '}
              <span className="text-emerald-400 font-semibold">
                R$ {detalhe.allocatedValue.toLocaleString('pt-BR')}
              </span>
            </div>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-full bg-slate-800 hover:bg-emerald-500 text-slate-300 hover:text-white text-sm font-medium transition whitespace-nowrap">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Página de Municípios
 */
export default async function MunicipiosPage() {
  // Buscar municípios da API (ou mock)
  const { municipios, total } = await listarMunicipios({ perPage: 50 });
  
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header/Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-emerald-400 hover:text-emerald-300 font-semibold text-lg">
            ← Portal Paranhos
          </Link>
          <nav className="flex gap-6">
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
            Municípios do Paraná
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore os {total} municípios do Paraná com dados completos de gestores, 
            territórios turísticos e indicadores populacionais.
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded mt-6" />
        </div>
        
        {/* Stats Summary */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-1">{total}</div>
            <p className="text-slate-400 text-sm">Municípios</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-1">
              {municipios.filter(m => m.detalhe?.classification === 'OURO').length}
            </div>
            <p className="text-slate-400 text-sm">Classificação Ouro</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-slate-300 mb-1">
              {municipios.filter(m => m.detalhe?.classification === 'PRATA').length}
            </div>
            <p className="text-slate-400 text-sm">Classificação Prata</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-1">
              {municipios.filter(m => m.detalhe?.classification === 'BRONZE').length}
            </div>
            <p className="text-slate-400 text-sm">Classificação Bronze</p>
          </div>
        </div>

        {/* Municípios List */}
        {municipios.length > 0 ? (
          <div className="space-y-4 mb-12">
            {municipios.map((municipio) => (
              <MunicipioCard key={municipio.id} municipio={municipio} />
            ))}
          </div>
        ) : (
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-300 mb-2">Nenhum município encontrado</h3>
            <p className="text-slate-500">Tente ajustar os filtros de busca</p>
          </div>
        )}

        {/* Future Features */}
        <div className="bg-slate-900/50 backdrop-blur rounded-3xl border border-slate-800 p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-slate-100">
            Recursos em Desenvolvimento
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="font-semibold text-slate-200 mb-2">Busca e Filtros</h3>
              <p className="text-slate-400 text-sm">
                Busque por nome, território turístico ou classificação municipal
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🗺️</div>
              <h3 className="font-semibold text-slate-200 mb-2">Mapa Interativo</h3>
              <p className="text-slate-400 text-sm">
                Visualize os municípios no mapa do Paraná com filtros por região
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-semibold text-slate-200 mb-2">Lista de Vereadores</h3>
              <p className="text-slate-400 text-sm">
                Acesse a lista completa de vereadores com contatos diretos
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
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
