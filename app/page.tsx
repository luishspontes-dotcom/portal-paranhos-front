import Link from 'next/link';

// Números do Paraná (estatísticas atualizadas)
const PARANA_STATS = {
  municipios: 399,
  prefeitosComWhatsApp: 507,
  vicesComWhatsApp: 522,
  vereadoresComWhatsApp: 2006,
} as const;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium tracking-wider uppercase">
                  Portal Paranhos
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Leonaldo<br />
                <span className="text-emerald-400">Paranhos</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-emerald-200 font-medium">
                Secretário de Estado do Turismo do Paraná
              </p>
              
              <p className="text-3xl md:text-4xl font-bold text-white mt-6">
                &ldquo;Vem pra cá, vem pro Paraná!&rdquo;
              </p>
              
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                Um novo jeito de enxergar os {PARANA_STATS.municipios} municípios do Paraná, conectando pessoas, dados e oportunidades em um único ecossistema de gestão pública e inovação.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/municipios"
                  className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition shadow-lg shadow-emerald-500/20"
                >
                  Conheça os municípios
                </Link>
                <Link 
                  href="/biografia"
                  className="px-6 py-3 rounded-full border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-950 font-semibold transition"
                >
                  Biografia
                </Link>
              </div>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-slate-800/50 border border-emerald-500/30 flex items-center justify-center backdrop-blur">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌲</div>
                    <p className="text-emerald-400 font-semibold">Foto do Paranhos</p>
                    <p className="text-slate-400 text-sm mt-1">(placeholder)</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-emerald-500/10 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-emerald-500/10 blur-2xl" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* BIOGRAFIA RESUMO */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem é Leonaldo Paranhos</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded" />
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Leonaldo Paranhos da Silva é Secretário de Estado do Turismo do Paraná. Nascido em 25 de maio de 1966, em Paraíso do Norte (PR), foi duas vezes prefeito de Cascavel, deputado estadual, vereador, vice-prefeito e presidente do IPEM-PR. Empreendedor e apaixonado por gestão pública, tem trajetória marcada pela defesa do desenvolvimento regional, do turismo e da melhoria dos serviços públicos.
            </p>
            <div className="flex justify-center mt-8">
              <Link 
                href="/biografia"
                className="px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold transition"
              >
                Ler biografia completa →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS DO PARANÁ */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Números do Paraná</h2>
            <p className="text-slate-400 text-lg">Conectando todo o Estado</p>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded mt-4" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Municípios */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500 transition group">
              <div className="text-5xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition">
                {PARANA_STATS.municipios}
              </div>
              <p className="text-slate-300 font-medium">Municípios</p>
              <p className="text-slate-500 text-sm mt-1">cadastrados no portal</p>
            </div>
            
            {/* Card 2 - Prefeitos */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500 transition group">
              <div className="text-5xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition">
                {PARANA_STATS.prefeitosComWhatsApp}
              </div>
              <p className="text-slate-300 font-medium">Prefeitos</p>
              <p className="text-slate-500 text-sm mt-1">com WhatsApp cadastrado</p>
            </div>
            
            {/* Card 3 - Vice-Prefeitos */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500 transition group">
              <div className="text-5xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition">
                {PARANA_STATS.vicesComWhatsApp}
              </div>
              <p className="text-slate-300 font-medium">Vice-Prefeitos</p>
              <p className="text-slate-500 text-sm mt-1">com WhatsApp cadastrado</p>
            </div>
            
            {/* Card 4 - Vereadores */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500 transition group">
              <div className="text-5xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition">
                {PARANA_STATS.vereadoresComWhatsApp.toLocaleString('pt-BR')}
              </div>
              <p className="text-slate-300 font-medium">Vereadores</p>
              <p className="text-slate-500 text-sm mt-1">com WhatsApp cadastrado</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAPA E MUNICÍPIOS */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore os Municípios</h2>
            <p className="text-slate-400 text-lg">Conheça cada região do Paraná</p>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded mt-4" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Mapa Placeholder */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🗺️</div>
                <p className="text-emerald-400 font-semibold text-xl">Mapa do Paraná</p>
                <p className="text-slate-400 mt-2">Interativo com os {PARANA_STATS.municipios} municípios</p>
              </div>
            </div>
            
            {/* Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Navegue por território e classificação</h3>
              <p className="text-slate-300 leading-relaxed">
                O Portal Paranhos organiza os municípios por território turístico e classificação administrativa, facilitando a visualização de dados estratégicos, contatos de gestores e indicadores regionais.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="text-slate-300">Municípios Ouro</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-slate-400" />
                  <span className="text-slate-300">Municípios Prata</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-600" />
                  <span className="text-slate-300">Municípios Bronze</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-slate-600" />
                  <span className="text-slate-300">Sem classificação</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Link 
                  href="/municipios"
                  className="inline-block px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition"
                >
                  Ver todos os municípios →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTÍCIAS / CLIPPING */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notícias e Clipping</h2>
            <p className="text-slate-400 text-lg">Acompanhe as últimas novidades</p>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded mt-4" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500 transition group">
              <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-slate-800 flex items-center justify-center">
                <span className="text-5xl">📰</span>
              </div>
              <div className="p-6">
                <span className="text-emerald-400 text-sm font-medium">15 Nov 2025</span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-emerald-400 transition">
                  Turismo no Paraná cresce 30%
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Dados mostram crescimento significativo no setor turístico paranaense...
                </p>
                <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
                  Ler mais →
                </a>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500 transition group">
              <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-slate-800 flex items-center justify-center">
                <span className="text-5xl">🎯</span>
              </div>
              <div className="p-6">
                <span className="text-emerald-400 text-sm font-medium">12 Nov 2025</span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-emerald-400 transition">
                  Portal conecta gestores
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Portal Paranhos facilita comunicação entre Estado e municípios...
                </p>
                <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
                  Ler mais →
                </a>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500 transition group">
              <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-slate-800 flex items-center justify-center">
                <span className="text-5xl">🌟</span>
              </div>
              <div className="p-6">
                <span className="text-emerald-400 text-sm font-medium">10 Nov 2025</span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-emerald-400 transition">
                  Territórios turísticos em destaque
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  18 territórios turísticos oficiais integrados ao portal...
                </p>
                <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
                  Ler mais →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REDES SOCIAIS E CONTATO */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conecte-se Conosco</h2>
          <p className="text-slate-400 text-lg mb-12">
            Siga o Portal Paranhos nas redes sociais
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="#" 
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-slate-700 hover:border-emerald-500 hover:bg-slate-800 transition"
            >
              <span className="text-2xl">📸</span>
              <span className="font-medium">Instagram</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-slate-700 hover:border-emerald-500 hover:bg-slate-800 transition"
            >
              <span className="text-2xl">👍</span>
              <span className="font-medium">Facebook</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-slate-700 hover:border-emerald-500 hover:bg-slate-800 transition"
            >
              <span className="text-2xl">▶️</span>
              <span className="font-medium">YouTube</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-slate-700 hover:border-emerald-500 hover:bg-slate-800 transition"
            >
              <span className="text-2xl">✕</span>
              <span className="font-medium">Twitter</span>
            </a>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-3">Contato Institucional</h3>
            <p className="text-slate-400 mb-4">
              Para dúvidas, sugestões ou parcerias, entre em contato conosco.
            </p>
            <a 
              href="mailto:contato@portalparanhos.pr.gov.br"
              className="inline-block px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition"
            >
              contato@portalparanhos.pr.gov.br
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-emerald-400 font-bold text-lg mb-4">Portal Paranhos</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Conectando os {PARANA_STATS.municipios} municípios do Paraná através de dados, gestão pública e inovação.
              </p>
            </div>
            
            <div>
              <h4 className="text-slate-300 font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/biografia" className="text-slate-400 hover:text-emerald-400 transition">
                    Biografia
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="text-slate-400 hover:text-emerald-400 transition">
                    Sobre o Portal
                  </Link>
                </li>
                <li>
                  <Link href="/municipios" className="text-slate-400 hover:text-emerald-400 transition">
                    Municípios
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-slate-300 font-semibold mb-4">Sobre</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Portal Paranhos é um projeto pessoal de Leonaldo Paranhos, Secretário de Estado do Turismo do Paraná, e sua equipe.
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-900 pt-8 text-center text-slate-500 text-sm">
            <p>© 2025 Portal Paranhos. Todos os direitos reservados.</p>
            <p className="mt-2">
              <strong className="text-emerald-400">&ldquo;Vem pra cá, vem pro Paraná!&rdquo;</strong>
            </p>
          </div>
        </div>
      </footer>
      
    </main>
  );
}
