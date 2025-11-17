import Link from 'next/link';

export const metadata = {
  title: 'Municípios do Paraná | Portal Paranhos',
  description: 'Explore os 399 municípios do Paraná',
};

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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-50">
            Municípios do Paraná
          </h1>
          <p className="text-slate-400 text-lg">
            Explore os 399 municípios paranaenses
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded mt-6" />
        </div>
        
        <div className="bg-slate-900/50 backdrop-blur rounded-3xl border border-slate-800 p-12 text-center">
          <div className="text-8xl mb-6">🗺️</div>
          <h2 className="text-2xl font-bold mb-4 text-slate-100">
            Página em Construção
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Em breve você poderá explorar todos os municípios do Paraná, filtrar por território turístico, 
            classificação, visualizar dados de gestores, população, eleitores e muito mais.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-2">🏛️</div>
              <h3 className="font-semibold text-slate-200 mb-1">Dados Completos</h3>
              <p className="text-slate-500 text-sm">Prefeitos, vices e vereadores</p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold text-slate-200 mb-1">Estatísticas</h3>
              <p className="text-slate-500 text-sm">População e eleitores</p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-semibold text-slate-200 mb-1">Contatos</h3>
              <p className="text-slate-500 text-sm">WhatsApp e redes sociais</p>
            </div>
          </div>
          
          <div className="mt-12">
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
