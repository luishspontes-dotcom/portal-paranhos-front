# Checklist de Campos por Município

## Tabelas principais no Supabase

### 1. municipio
- id
- nome
- ibge_code
- territorio_id (FK → territorio_turistico.id)

### 2. municipio_detalhe
- municipio_id (FK → municipio.id) **[UNIQUE]**
- classification (enum: OURO / PRATA / BRONZE / SEM_CLASSIFICACAO)
- allocatedValue (valor destinado ao município)
- prefeitoNome
- prefeitoPartido
- prefeitoVotacao
- prefeitoWhatsapp **(JÁ PREENCHIDO)**
- prefeitoEmail
- viceNome
- vicePartido
- viceWhatsapp **(JÁ PREENCHIDO)**
- presidenteCamaraNome
- presidenteCamaraPartido
- created_at
- updated_at

### 3. vereador
- id
- municipioId (FK → municipio.id)
- nome
- partido
- votacao
- whatsapp **(JÁ PREENCHIDO EM 2.006 REGISTROS)**
- email
- instagram
- facebook
- createdAt
- updatedAt

### 4. MunicipioStats
- ibge
- year
- population (IBGE)
- electors (TSE)
- updatedAt

## O que já temos OK

- Estrutura de tabelas criada no Supabase via Prisma
- WhatsApp de prefeitos, vices e vereadores preenchidos
- Relatórios técnicos da Fase WhatsApp

## O que falta alimentar

1. Dados políticos completos
   - prefeitoNome, prefeitoPartido, prefeitoVotacao, prefeitoPorcentagem
   - viceNome, vicePartido
   - presidenteCamaraNome, presidenteCamaraPartido

2. Classificação e valores
   - classification (Ouro / Prata / Bronze / Sem classificação)
   - allocatedValue (valor destinado ao município)

3. Estatísticas
   - MunicipioStats para IBGE e TSE (população e eleitores por ano)
