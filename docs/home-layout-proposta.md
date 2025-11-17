# Proposta de Layout da Home - Estilo ratinhojunior.com.br

## Seções principais

1. Hero (dobra inicial)
   - Fundo com foto grande do Paranhos
   - Nome: **Leonaldo Paranhos**
   - Cargo: **Secretário de Estado do Turismo do Paraná**
   - Slogan: **"Vem pra cá, vem pro Paraná!"**
   - Botões:
     - "Conheça o Paraná com Paranhos" (link para /municipios ou /mapa)
     - "Biografia" (link para /biografia)

2. Biografia (resumo)
   - Bloco com texto curto da biografia
   - Botão "Ler biografia completa" → /biografia

3. Números do Paraná / Painel
   - Cards com dados resumidos (vêm da API):
     - Municípios cadastrados
     - Prefeitos e vices com WhatsApp
     - Vereadores com WhatsApp
     - Territórios turísticos

4. Mapa e Municípios
   - Mapa do Paraná (imagem ou componente interativo)
   - Filtros:
     - Por território turístico
     - Por classificação (Ouro / Prata / Bronze / Sem)
   - Link para /municipios (lista completa)

5. Notícias / Clipping
   - Lista de 3–6 cards com:
     - Título
     - Resumo curto
     - Data
     - Link para matéria completa (/noticias ou link externo)

6. Redes sociais e Contato
   - Ícones para Instagram, Facebook, YouTube, etc.
   - Contato da equipe (e-mail institucional ou formulário)

## Esqueleto em React/Next (App Router)

Exemplo de componente para app/(site)/page.tsx:

```tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
              Portal Paranhos
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Leonaldo Paranhos
            </h1>
            <p className="mt-2 text-lg text-emerald-200">
              Secretário de Estado do Turismo do Paraná
            </p>
            <p className="mt-4 text-base text-slate-200 max-w-xl">
              Vem pra cá, vem pro Paraná! Um novo jeito de enxergar os 399 municípios,
              conectando pessoas, dados e oportunidades.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/municipios" className="px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 font-semibold">
                Conheça os municípios
              </a>
              <a href="/biografia" className="px-5 py-3 rounded-full border border-emerald-300 text-emerald-300 hover:bg-emerald-950 font-semibold">
                Biografia do Paranhos
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 rounded-3xl bg-slate-800 border border-slate-700" />
          </div>
        </div>
      </section>
    </main>
  );
}
```

Este arquivo serve como referência de layout para o frontend.
