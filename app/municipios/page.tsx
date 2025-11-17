import Link from 'next/link';

export const metadata = {
  title: 'Municípios do Paraná | Portal Paranhos',
  description: 'Explore os 399 municípios do Paraná',
};

// Municípios Mock (exemplos para demonstração)
const municipiosMock = [
  {
    id: 1,
    nome: 'Curitiba',
    territorio: 'Curitiba e Região Metropolitana',
    classificacao: 'OURO',
    temPrefeito: true,
    temVice: true,
    temVereadores: true,
    quantidadeVereadores: 38,
  },
  {
    id: 2,
    nome: 'Cascavel',
    territorio: 'Oeste do Paraná',
    classificacao: 'OURO',
    temPrefeito: true,
    temVice: true,
    temVereadores: true,
    quantidadeVereadores: 21,
  },
  {
    id: 3,
    nome: 'Foz do Iguaçu',
    territorio: 'Cataratas do Iguaçu',
    classificacao: 'PRATA',
    temPrefeito: true,
    temVice: true,
    temVereadores: true,
    quantidadeVereadores: 19,
  },
  {
    id: 4,
    nome: 'Londrina',
    territorio: 'Norte do Paraná',
    classificacao: 'OURO',
    temPrefeito: true,
    temVice: true,
    temVereadores: true,
    quantidadeVereadores: 19,
  },
  {
    id: 5,
    nome: 'Maringá',
    territorio: 'Norte do Paraná',
    classificacao: 'PRATA',
    temPrefeito: true,
    temVice: true,
    temVereadores: true,
    quantidadeVereadores: 17,
  },
];

// Função auxiliar para obter cor da classificação
function getClassificacaoColor(classificacao: string) {
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

export default function MunicipiosPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header/Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur">
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
            Municípios
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Em breve, esta página será conectada ao banco de dados para exibir todos os 399 municípios do Paraná. 
            Por enquanto, veja alguns exemplos de como os dados serão apresentados.
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded mt-6" />
        </div>
        
        {/* Alert Box */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-2xl">🚧</span>
            <h2 className="text-xl font-bold text-emerald-400">Preview de Interface</h2>
          </div>
          <p className="text-slate-300 text-sm">
            Os dados abaixo são exemplos para demonstração. A conexão com a API backend será implementada em breve.
          </p>
        </div>

        {/* Municípios Mock List */}
        <div className="space-y-4 mb-12">
          {municipiosMock.map((municipio) => (
            <div 
              key={municipio.id}
              className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Município Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-50 group-hover:text-emerald-400 transition">
                      {municipio.nome}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getClassificacaoColor(municipio.classificacao)}`}>
                      {municipio.classificacao}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">
                    <span className="text-emerald-400 font-medium">Território:</span> {municipio.territorio}
                  </p>
                  
                  {/* Indicadores */}
                  <div className="flex flex-wrap gap-2">
                    {municipio.temPrefeito && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">
                        ✅ Prefeito com WhatsApp
                      </span>
                    )}
                    {municipio.temVice && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">
                        ✅ Vice com WhatsApp
                      </span>
                    )}
                    {municipio.temVereadores && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">
                        ✅ {municipio.quantidadeVereadores} Vereadores
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-full bg-slate-800 hover:bg-emerald-500 text-slate-300 hover:text-white text-sm font-medium transition">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Features */}
        <div className="bg-slate-900/50 backdrop-blur rounded-3xl border border-slate-800 p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-slate-100">
            Recursos Planejados
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
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-semibold text-slate-200 mb-2">Dados Completos</h3>
              <p className="text-slate-400 text-sm">
                População, eleitores, valores destinados e indicadores
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold text-slate-200 mb-2">Contatos Diretos</h3>
              <p className="text-slate-400 text-sm">
                WhatsApp de prefeitos, vices e vereadores
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
