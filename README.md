# Portal Paranhos - Frontend

## 📋 Sobre o Projeto

Portal Paranhos é um ecossistema de gestão pública, inovação e dados do Paraná. Conecta os 399 municípios do Estado, reunindo informações estratégicas sobre prefeitos, vice-prefeitos, vereadores, territórios turísticos e indicadores regionais.

**Coordenação:** Leonaldo Paranhos - Secretário de Estado do Turismo do Paraná

**Slogan:** *"Vem pra cá, vem pro Paraná!"*

## 🚀 Tecnologias

- **Next.js 14.2.33** (App Router)
- **TypeScript 5**
- **TailwindCSS 3.4**
- **React 18**
- **React Markdown** (para renderização de conteúdo)

## 📁 Estrutura do Projeto

```
portal-paranhos-front/
├── app/
│   ├── biografia/              # Página de biografia do Leonaldo Paranhos
│   ├── sobre/                  # Página sobre o Portal Paranhos
│   ├── municipios/             # Página de municípios (conectada à API)
│   ├── components/             # Componentes reutilizáveis
│   │   └── MarkdownContent.tsx # Componente para renderizar markdown
│   ├── config/                 # Configurações da aplicação
│   │   └── api.ts              # Configuração da API
│   ├── services/               # Serviços de consumo de dados
│   │   └── municipios.ts       # Serviço de municípios
│   ├── types/                  # Tipos TypeScript
│   │   └── municipio.ts        # Tipos de municípios
│   ├── lib/                    # Bibliotecas auxiliares
│   │   └── api-client.ts       # Cliente HTTP
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Home page
│   └── globals.css             # Estilos globais
├── content/                    # Arquivos markdown com conteúdo
│   ├── biografia-paranhos.md
│   └── sobre-portal-paranhos.md
├── docs/                       # Documentação do projeto
│   ├── home-layout-proposta.md
│   └── municipios-checklist.md
├── .env.example                # Exemplo de variáveis de ambiente
├── package.json
├── tsconfig.json
└── tailwind.config.ts
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

### 4. **/municipios** ✨ **NOVO**
- **Conectada à API** (ou dados mock para desenvolvimento)
- Lista todos os municípios do Paraná com dados completos
- Exibe informações de:
  - Nome e classificação (Ouro/Prata/Bronze)
  - Território turístico
  - População e eleitores
  - Prefeito (nome, partido, votação, WhatsApp)
  - Vice-prefeito (nome, partido, WhatsApp)
  - Valor destinado ao município
- Cards interativos com hover effects
- Estatísticas resumidas no topo da página

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

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/luishspontes-dotcom/portal-paranhos-front.git

# Entre na pasta do projeto
cd portal-paranhos-front

# Instale as dependências
npm install
```

### Configuração de Variáveis de Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Edite o arquivo .env.local e configure a URL da API
# NEXT_PUBLIC_API_BASE_URL="https://api.paranhospr.com.br"
```

**Importante:** 
- Para desenvolvimento local com backend rodando localmente, use: `http://localhost:3001`
- Para produção, use: `https://api.paranhospr.com.br`
- Se a API não estiver disponível, o sistema usará dados mock automaticamente

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

### Build para Produção

```bash
# Gere o build de produção
npm run build

# Inicie o servidor de produção
npm start
```

### Verificar Build

```bash
# Teste o build localmente
npm run build
```

## 🔗 Integração com API

### Arquitetura

O projeto está preparado para consumir dados de uma API REST. A estrutura foi organizada da seguinte forma:

#### 1. **Configuração (`app/config/api.ts`)**
- Define a URL base da API
- Centraliza endpoints
- Configurações de timeout e cache

#### 2. **Cliente HTTP (`app/lib/api-client.ts`)**
- Funções auxiliares para requisições HTTP
- Tratamento de erros
- Timeout automático
- Tipagem TypeScript

#### 3. **Serviços (`app/services/municipios.ts`)**
- Funções de alto nível para consumir dados
- Inclui dados mock para desenvolvimento
- Fácil alternância entre mock e API real
- Funções auxiliares (formatação, cores, etc.)

#### 4. **Tipos (`app/types/municipio.ts`)**
- Interfaces TypeScript completas
- Baseadas na estrutura do banco de dados
- Garantem type-safety em toda a aplicação

### Modo Mock vs API Real

O serviço de municípios possui uma flag `USE_MOCK` que controla se os dados vêm de mock ou da API:

```typescript
// Em app/services/municipios.ts
const USE_MOCK = true; // Altere para false quando a API estiver disponível
```

**Modo Mock (USE_MOCK = true):**
- Usa dados de exemplo hardcoded
- Ideal para desenvolvimento sem backend
- 8 municípios de exemplo com dados completos

**Modo API (USE_MOCK = false):**
- Consome dados da API configurada em `NEXT_PUBLIC_API_BASE_URL`
- Tratamento de erros automático
- Cache do Next.js configurado

### Endpoints Esperados da API

A API deve fornecer os seguintes endpoints:

```
GET /municipios
  - Lista todos os municípios
  - Query params: nome, territorioId, classificacao, page, perPage
  - Response: { municipios: Municipio[], total: number, page: number, perPage: number }

GET /municipios/:id
  - Busca município por ID
  - Response: MunicipioCompleto

GET /stats/gerais
  - Estatísticas gerais do portal
  - Response: { totalMunicipios, prefeitosComWhatsApp, vicesComWhatsApp, vereadoresComWhatsApp }

GET /territorios
  - Lista territórios turísticos
  - Response: TerritorioTuristico[]

GET /vereadores/municipio/:municipioId
  - Lista vereadores de um município
  - Response: Vereador[]
```

### Estrutura de Dados Esperada

Conforme documentação em `docs/municipios-checklist.md`, a API deve retornar:

**Município:**
```typescript
{
  id: number;
  nome: string;
  ibgeCode: string;
  territorioId: number;
  territorio: {
    id: number;
    nome: string;
  };
  detalhe: {
    classification: 'OURO' | 'PRATA' | 'BRONZE' | 'SEM_CLASSIFICACAO';
    allocatedValue: number;
    prefeito: {
      nome: string;
      partido: string;
      votacao: number;
      whatsapp: string;
      email: string;
    };
    vice: {
      nome: string;
      partido: string;
      whatsapp: string;
    };
  };
  stats: {
    ibge: string;
    year: number;
    population: number;
    electors: number;
  };
}
```

## 🚀 Deploy

### Vercel (Recomendado)

O projeto está configurado para deploy automático no Vercel:

1. **Push para GitHub**: Qualquer push na branch `master` dispara deploy automático
2. **Domínios configurados**:
   - Produção: `https://portal.paranhospr.com.br`
   - Vercel: `https://portal-paranhos-front.vercel.app`

### Configurar Variáveis de Ambiente no Vercel

1. Acesse o painel do projeto no Vercel
2. Vá em **Settings** → **Environment Variables**
3. Adicione a variável:
   - **Name**: `NEXT_PUBLIC_API_BASE_URL`
   - **Value**: `https://api.paranhospr.com.br`
   - **Environment**: Production, Preview, Development

### Outros Domínios (NÃO ALTERAR)

⚠️ **Importante**: Os seguintes domínios são de outros sistemas e **não devem ser alterados**:
- `www.paranhospr.com.br` → SGI antigo (frontend antigo, Render)
- `app.paranhospr.com.br` → App SGI
- `api.paranhospr.com.br` → API em Render (NestJS/Node)

## 📝 Conteúdo

Todo o conteúdo é gerenciado via arquivos Markdown na pasta `/content`:
- ✅ Não há textos "hardcoded" inventados
- ✅ Todo conteúdo vem exclusivamente dos arquivos .md fornecidos
- ✅ Biografia e Sobre usam 100% do conteúdo oficial

## 🔢 Números Estáticos vs Dinâmicos

### Home Page
Os números da Home são **estáticos** (não vêm de API ainda):
- Municípios: **399**
- Prefeitos com WhatsApp: **507**
- Vice-prefeitos com WhatsApp: **522**
- Vereadores com WhatsApp: **2.006**

**Futuro**: Esses números podem ser substituídos por chamadas ao endpoint `/stats/gerais`

### Página de Municípios
Os dados são **dinâmicos** e vêm da API (ou mock):
- Lista completa de municípios
- Dados de gestores
- Estatísticas populacionais
- Classificações e territórios

## 📦 Próximos Passos

### Curto Prazo
1. ✅ **Conectar ao Backend** - CONCLUÍDO
   - ✅ Configuração de variáveis de ambiente
   - ✅ Serviços de API criados
   - ✅ Tipos TypeScript definidos
   - ⏳ Testar com API real quando disponível

2. **Implementar Filtros na Página de Municípios**
   - Busca por nome
   - Filtro por território turístico
   - Filtro por classificação
   - Paginação

3. **Página de Detalhes do Município**
   - Rota `/municipios/[id]`
   - Informações completas
   - Lista de vereadores
   - Gráficos e indicadores

### Médio Prazo
4. **Sistema de Notícias**
   - CRUD de notícias
   - Clipping automático
   - Integração com redes sociais

5. **Mapa Interativo**
   - Implementar mapa do Paraná
   - Cliques em municípios
   - Visualização por região

6. **Busca Global**
   - Busca por municípios, gestores, vereadores
   - Autocomplete
   - Resultados em tempo real

### Longo Prazo
7. **SEO e Performance**
   - Otimizar imagens
   - Implementar metadata dinâmica
   - Configurar sitemap
   - Implementar Open Graph tags

8. **Imagens e Assets**
   - Adicionar foto oficial do Leonaldo Paranhos
   - Criar logo do Portal Paranhos
   - Adicionar imagens dos municípios
   - Fotos dos gestores

9. **Analytics e Monitoramento**
   - Google Analytics
   - Sentry (monitoramento de erros)
   - Métricas de uso

## 🐛 Troubleshooting

### Erro ao conectar com a API

**Problema**: `ApiError: Request timeout` ou `Failed to fetch`

**Solução**:
1. Verifique se a variável `NEXT_PUBLIC_API_BASE_URL` está configurada corretamente
2. Teste se a API está acessível: `curl https://api.paranhospr.com.br/health`
3. Se a API não estiver disponível, ative o modo mock em `app/services/municipios.ts`:
   ```typescript
   const USE_MOCK = true;
   ```

### Build falha no Vercel

**Problema**: Build error durante deploy

**Solução**:
1. Verifique se todas as dependências estão no `package.json`
2. Teste o build localmente: `npm run build`
3. Verifique os logs de build no Vercel
4. Certifique-se de que as variáveis de ambiente estão configuradas

### Página de municípios não carrega

**Problema**: Página em branco ou erro 500

**Solução**:
1. Verifique o console do navegador para erros
2. Ative o modo mock temporariamente
3. Verifique se a API está retornando dados no formato esperado
4. Valide os tipos TypeScript

## 📄 Licença e Créditos

Portal Paranhos é um projeto pessoal de Leonaldo Paranhos, Secretário de Estado do Turismo do Paraná, e sua equipe.

© 2025 Portal Paranhos. Todos os direitos reservados.

---

## 📞 Contato

Para dúvidas técnicas ou sugestões:
- Email: contato@portalparanhos.pr.gov.br
- GitHub: https://github.com/luishspontes-dotcom/portal-paranhos-front

---

*"Vem pra cá, vem pro Paraná!"* 🌲
