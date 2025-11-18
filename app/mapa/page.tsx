
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Importar o mapa dinamicamente (client-side only) para evitar problemas de SSR
const MapaParana = dynamic(
  () => import('@/app/components/MapaParana'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-pulse">🗺️</div>
          <p className="text-slate-400">Carregando mapa...</p>
        </div>
      </div>
    )
  }
);

export const metadata = {
  title: 'Mapa dos Municípios | Portal Paranhos',
  description: 'Visualize no mapa os municípios do Paraná e suas localizações',
};

// Municípios para a lista
const municipios = [
  { id: 1, nome: 'Curitiba', regiao: 'Metropolitana', pop: '1.963.726' },
  { id: 2, nome: 'Cascavel', regiao: 'Oeste', pop: '348.051' },
  { id: 3, nome: 'Foz do Iguaçu', regiao: 'Oeste', pop: '258.823' },
  { id: 4, nome: 'Londrina', regiao: 'Norte', pop: '575.377' },
  { id: 5, nome: 'Maringá', regiao: 'Noroeste', pop: '430.157' },
  { id: 6, nome: 'Ponta Grossa', regiao: 'Campos Gerais', pop: '358.838' },
  { id: 7, nome: 'Guarapuava', regiao: 'Centro-Sul', pop: '182.644' },
  { id: 8, nome: 'Paranaguá', regiao: 'Litoral', pop: '156.174' },
];

export default function MapaPage() {
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
            <Link href="/agenda" className="text-slate-300 hover:text-emerald-400 transition">
              Agenda
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
            Mapa dos Municípios do Paraná
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Visualize a localização dos principais municípios do Estado do Paraná. 
            Clique nos marcadores para mais informações.
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded mt-6" />
        </div>

        {/* Mapa Interativo */}
        <div className="mb-12">
          <MapaParana />
        </div>

        {/* Informações */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Sobre o Mapa */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
              <span>📍</span>
              Sobre o Mapa
            </h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              O mapa exibe os principais municípios do Paraná onde há atuação 
              do Portal Paranhos. Utilize o zoom para explorar melhor a região 
              e clique nos marcadores para ver mais detalhes sobre cada município.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-slate-300">8 municípios em destaque</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-slate-300">Cobertura em todo o Paraná</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-slate-300">Dados atualizados de população</span>
              </div>
            </div>
          </div>

          {/* Municípios em Destaque */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
              <span>🏙️</span>
              Municípios em Destaque
            </h2>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {municipios.map((municipio) => (
                <div 
                  key={municipio.id}
                  className="bg-slate-800/50 rounded-lg p-3 hover:bg-slate-800 transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-slate-200">{municipio.nome}</h3>
                      <p className="text-xs text-slate-400">{municipio.regiao}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-emerald-400 font-medium">{municipio.pop}</p>
                      <p className="text-xs text-slate-500">habitantes</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recursos Futuros */}
        <div className="bg-slate-900/50 backdrop-blur rounded-3xl border border-slate-800 p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-slate-100">
            Recursos em Desenvolvimento
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="font-semibold text-slate-200 mb-2">Busca no Mapa</h3>
              <p className="text-slate-400 text-sm">
                Busque municípios diretamente no mapa e navegue entre regiões
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-semibold text-slate-200 mb-2">Dados Estatísticos</h3>
              <p className="text-slate-400 text-sm">
                Visualize dados demográficos e econômicos no mapa
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-semibold text-slate-200 mb-2">Mapas Temáticos</h3>
              <p className="text-slate-400 text-sm">
                Visualizações por território turístico, classificação e mais
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/municipios"
              className="inline-block px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition mr-4"
            >
              Ver Lista de Municípios
            </Link>
            <Link 
              href="/"
              className="inline-block px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold transition"
            >
              ← Voltar para a Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
