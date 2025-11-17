# Portal Paranhos - Frontend

## 📋 Sobre o Projeto

Portal Paranhos é um ecossistema de gestão pública, inovação e dados do Paraná. Conecta os 399 municípios do Estado, reunindo informações estratégicas sobre prefeitos, vice-prefeitos, vereadores, territórios turísticos e indicadores regionais.

**Coordenação:** Leonaldo Paranhos - Secretário de Estado do Turismo do Paraná

**Slogan:** *"Vem pra cá, vem pro Paraná!"*

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **React Markdown** (para renderização de conteúdo)

## 📁 Estrutura do Projeto

```
frontend/
├── app/
│   ├── biografia/          # Página de biografia do Leonaldo Paranhos
│   ├── sobre/              # Página sobre o Portal Paranhos
│   ├── municipios/         # Página de municípios (em construção)
│   ├── components/         # Componentes reutilizáveis
│   │   └── MarkdownContent.tsx  # Componente para renderizar markdown
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Home page
│   └── globals.css         # Estilos globais
├── content/                # Arquivos markdown com conteúdo
│   ├── biografia-paranhos.md
│   └── sobre-portal-paranhos.md
├── docs/                   # Documentação do projeto
│   ├── home-layout-proposta.md
│   └── municipios-checklist.md
└── public/                 # Arquivos estáticos
```

## 🎨 Páginas Implementadas

### 1. **Home (/)** 
Página principal com as seguintes seções:
- **Hero**: Nome, cargo, slogan e CTAs principais
- **Biografia Resumo**: Texto curto da biografia com link para página completa
- **Números do Paraná**: Cards com estatísticas (valores estáticos):
  - 399 Municípios
  - 507 Prefeitos com WhatsApp
  - 522 Vice-prefeitos com WhatsApp
  - 2.006 Vereadores com WhatsApp
- **Mapa e Municípios**: Visualização e filtros por território e classificação
- **Notícias/Clipping**: Cards com notícias (placeholder/mock)
- **Redes Sociais e Contato**: Links para redes sociais e email institucional
- **Footer**: Informações institucionais e links rápidos

### 2. **/biografia**
- Renderiza o conteúdo completo do arquivo `content/biografia-paranhos.md`
- Biografia oficial de Leonaldo Paranhos
- Versão curta e completa da trajetória política e profissional

### 3. **/sobre**
- Renderiza o conteúdo de `content/sobre-portal-paranhos.md`
- Informações institucionais sobre o Portal Paranhos
- Seções: O que é, O que oferece, Para que serve, Visão

### 4. **/municipios** (em construção)
- Placeholder para futura implementação
- Será integrada com API backend para listar os 399 municípios

## 🎨 Design System

### Cores Principais
- **Background**: Slate-950 (dark theme)
- **Accent**: Emerald-400/500 (verde)
- **Text**: Slate-50 (branco) e Slate-300 (cinza claro)

### Componentes
- Cards com hover effects
- Botões rounded-full com gradientes
- Borders com slate-800
- Backdrop blur em elementos sobrepostos

## 📝 Conteúdo

Todo o conteúdo é gerenciado via arquivos Markdown na pasta `/content`:
- ✅ Não há textos "hardcoded" inventados
- ✅ Todo conteúdo vem exclusivamente dos arquivos .md fornecidos
- ✅ Biografia e Sobre usam 100% do conteúdo oficial

## 🔢 Números Estáticos

Conforme especificado, os números da Home são **estáticos** (não vêm de API ainda):
- Municípios: **399**
- Prefeitos com WhatsApp: **507**
- Vice-prefeitos com WhatsApp: **522**
- Vereadores com WhatsApp: **2.006**

## 🛠️ Como Executar

### Instalação
```bash
cd /home/ubuntu/sgi-platform/frontend
npm install
```

### Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3000

### Build para Produção
```bash
npm run build
npm start
```

### Verificar Build
```bash
npm run build
```

## 🔗 Integrações Futuras

### Backend
O backend está localizado em `/home/ubuntu/sgi-platform/backend` (não disponível no ambiente atual).

Quando o backend estiver disponível, será necessário:
1. Configurar variáveis de ambiente (`.env.local`) com a URL da API
2. Criar serviços para consumir os endpoints
3. Implementar a listagem real de municípios em `/municipios`
4. Substituir números estáticos por chamadas à API

### Estrutura de Dados (Backend)
Conforme o checklist em `docs/municipios-checklist.md`, o banco possui:

**Tabelas principais:**
- `municipio` - Dados básicos dos municípios
- `municipio_detalhe` - Informações de gestores e classificação
- `vereador` - Dados completos dos vereadores
- `MunicipioStats` - População e eleitores (IBGE/TSE)

**Campos já preenchidos:**
- ✅ WhatsApp de prefeitos
- ✅ WhatsApp de vice-prefeitos  
- ✅ WhatsApp de vereadores (2.006 registros)

**Campos pendentes de alimentação:**
- ⏳ Dados políticos completos (nomes, partidos, votações)
- ⏳ Classificação municipal (Ouro/Prata/Bronze)
- ⏳ Valores destinados aos municípios
- ⏳ Estatísticas IBGE e TSE

## 📦 Próximos Passos

1. **Conectar ao Backend**
   - Configurar variáveis de ambiente
   - Criar hooks/services para API
   - Implementar autenticação (se necessário)

2. **Implementar Página de Municípios**
   - Listagem com filtros
   - Visualização por território turístico
   - Filtro por classificação
   - Cards com informações completas

3. **Sistema de Notícias**
   - CRUD de notícias
   - Clipping automático
   - Integração com redes sociais

4. **Mapa Interativo**
   - Implementar mapa do Paraná
   - Cliques em municípios
   - Visualização por região

5. **SEO e Performance**
   - Otimizar imagens
   - Implementar metadata dinâmica
   - Configurar sitemap

6. **Imagens e Assets**
   - Adicionar foto oficial do Leonaldo Paranhos
   - Criar logo do Portal Paranhos
   - Adicionar imagens dos municípios

## 📄 Sobre o Projeto

Portal Paranhos é um projeto pessoal de Leonaldo Paranhos, Secretário de Estado do Turismo do Paraná, e sua equipe.

© 2025 Portal Paranhos. Todos os direitos reservados.

---

*"Vem pra cá, vem pro Paraná!"* 🌲
