
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import MarkdownContent from '../components/MarkdownContent';

export const metadata = {
  title: 'Sobre o Portal Paranhos',
  description: 'Conheça o Portal Paranhos - ecossistema de gestão pública, inovação e dados do Paraná',
};

export default function SobrePage() {
  const filePath = path.join(process.cwd(), 'content', 'sobre-portal-paranhos.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

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
            <Link href="/municipios" className="text-slate-300 hover:text-emerald-400 transition">
              Municípios
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-slate-900/50 backdrop-blur rounded-3xl border border-slate-800 p-8 md:p-12">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
              Institucional
            </span>
          </div>
          <MarkdownContent content={fileContent} />
          
          <div className="mt-12 pt-8 border-t border-slate-800">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
            >
              ← Voltar para a Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
