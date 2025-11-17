# 📊 ANÁLISE: Campos de Municípios - Usados vs Faltando

**Data:** 17 de Novembro de 2025  
**Projeto:** Portal Paranhos Frontend

---

## 📋 CAMPOS DISPONÍVEIS NO BACKEND (conforme municipios-checklist.md)

### Tabela: `municipio`
- ✅ id
- ✅ nome
- ✅ ibge_code
- ✅ territorio_id (FK → territorio_turistico.id)

### Tabela: `municipio_detalhe`
- ✅ municipio_id (FK → municipio.id)
- ✅ classification (OURO / PRATA / BRONZE / SEM_CLASSIFICACAO)
- ✅ allocatedValue (valor destinado)
- ✅ prefeitoNome
- ✅ prefeitoPartido
- ✅ prefeitoVotacao
- ✅ prefeitoWhatsApp ⭐ **JÁ PREENCHIDO**
- ✅ prefeitoEmail
- ✅ viceNome
- ✅ vicePartido
- ✅ viceWhatsApp ⭐ **JÁ PREENCHIDO**
- ✅ presidenteCamaraNome
- ✅ presidenteCamaraPartido

### Tabela: `vereador`
- ✅ id
- ✅ municipioId (FK → municipio.id)
- ✅ nome
- ✅ partido
- ✅ votacao
- ✅ whatsapp ⭐ **JÁ PREENCHIDO (2.006 registros)**
- ✅ email
- ✅ instagram
- ✅ facebook

### Tabela: `MunicipioStats`
- ✅ ibge
- ✅ year
- ✅ population (IBGE)
- ✅ electors (TSE)

---

## ✅ CAMPOS JÁ USADOS NA UI ATUAL

### Home Page (`app/page.tsx`)
**Estatísticas Gerais (valores estáticos):**
- ✅ Total de municípios (399)
- ✅ Quantidade de prefeitos com WhatsApp (507)
- ✅ Quantidade de vices com WhatsApp (522)
- ✅ Quantidade de vereadores com WhatsApp (2.006)

**Referências visuais:**
- ✅ Classificação municipal (Ouro/Prata/Bronze/Sem) - apenas legendas visuais
- ✅ Territórios turísticos - mencionados conceitualmente

### Página de Municípios (`app/municipios/page.tsx`)
**Cards Mock (5 municípios de exemplo):**
- ✅ nome (do município)
- ✅ territorio (nome do território turístico)
- ✅ classificacao (OURO/PRATA/BRONZE)
- ✅ temPrefeito (indicador booleano)
- ✅ temVice (indicador booleano)
- ✅ temVereadores (indicador booleano)
- ✅ quantidadeVereadores (número de vereadores)

---

## ❌ CAMPOS DISPONÍVEIS NO BACKEND MAS **AINDA NÃO USADOS** NA UI

### Dados Básicos de Municípios
- ❌ `ibge_code` - Código IBGE do município
- ❌ `territorio_id` - ID do território turístico (apenas nome é usado no mock)

### Dados de Prefeitos
- ❌ `prefeitoNome` - Nome completo do prefeito
- ❌ `prefeitoPartido` - Partido político do prefeito
- ❌ `prefeitoVotacao` - Número de votos recebidos
- ❌ `prefeitoWhatsApp` - WhatsApp do prefeito (disponível mas não exibido)
- ❌ `prefeitoEmail` - Email do prefeito

### Dados de Vice-Prefeitos
- ❌ `viceNome` - Nome completo do vice-prefeito
- ❌ `vicePartido` - Partido político do vice
- ❌ `viceWhatsApp` - WhatsApp do vice (disponível mas não exibido)

### Dados da Câmara Municipal
- ❌ `presidenteCamaraNome` - Nome do presidente da Câmara
- ❌ `presidenteCamaraPartido` - Partido do presidente da Câmara

### Dados Detalhados de Vereadores
- ❌ `vereador.nome` - Nome completo dos vereadores
- ❌ `vereador.partido` - Partido político do vereador
- ❌ `vereador.votacao` - Votos recebidos pelo vereador
- ❌ `vereador.whatsapp` - WhatsApp do vereador (disponível mas não exibido)
- ❌ `vereador.email` - Email do vereador
- ❌ `vereador.instagram` - Instagram do vereador
- ❌ `vereador.facebook` - Facebook do vereador

### Valores e Classificação
- ❌ `allocatedValue` - Valor destinado ao município

### Estatísticas IBGE e TSE
- ❌ `MunicipioStats.population` - População do município (IBGE)
- ❌ `MunicipioStats.electors` - Número de eleitores (TSE)
- ❌ `MunicipioStats.year` - Ano dos dados

---

## 🎯 RESUMO DA ANÁLISE

### Total de Campos Disponíveis no Backend
**~28 campos principais** distribuídos em 4 tabelas

### Total de Campos Usados na UI
**7 campos** (na versão mock):
1. nome
2. territorio (nome)
3. classificacao
4. temPrefeito (booleano derivado)
5. temVice (booleano derivado)
6. temVereadores (booleano derivado)
7. quantidadeVereadores

### Total de Campos NÃO Usados
**~21 campos** aguardando implementação na UI

### Percentual de Utilização
- ✅ **Usados:** ~25% dos campos disponíveis
- ⏳ **Faltando:** ~75% dos campos disponíveis

---

## 📝 CAMPOS POR CATEGORIA DE IMPLEMENTAÇÃO

### ⭐ PRIORITÁRIOS (Dados já preenchidos no banco)
Estes campos JÁ TÊM DADOS e devem ser os primeiros a serem exibidos:

1. **WhatsApp de Prefeitos** (507 cadastrados)
   - `prefeitoWhatsApp`
   
2. **WhatsApp de Vices** (522 cadastrados)
   - `viceWhatsApp`
   
3. **WhatsApp de Vereadores** (2.006 cadastrados)
   - `vereador.whatsapp`

### 🟡 SECUNDÁRIOS (Aguardando preenchimento no backend)
Estes campos EXISTEM mas ainda não foram alimentados:

4. **Dados Políticos Completos**
   - `prefeitoNome`, `prefeitoPartido`, `prefeitoVotacao`
   - `viceNome`, `vicePartido`
   - `presidenteCamaraNome`, `presidenteCamaraPartido`
   - `vereador.nome`, `vereador.partido`, `vereador.votacao`

5. **Classificação e Valores**
   - `classification` (Ouro/Prata/Bronze/Sem)
   - `allocatedValue` (valores destinados)

6. **Estatísticas Demográficas**
   - `population` (IBGE)
   - `electors` (TSE)

7. **Contatos Adicionais**
   - `prefeitoEmail`
   - `vereador.email`, `vereador.instagram`, `vereador.facebook`

---

## ✅ CONCLUSÃO

### Status Atual
- ✅ Interface mockada criada e responsiva
- ✅ Design system aplicado consistentemente
- ✅ Estrutura preparada para receber dados reais
- ⏳ 75% dos campos disponíveis ainda não são exibidos na UI

### Próximo Passo Crítico
**Conectar frontend ao backend** para começar a exibir os dados reais, especialmente:
1. Lista completa dos 399 municípios
2. WhatsApps de prefeitos, vices e vereadores (dados já disponíveis)
3. Territórios turísticos
4. Classificação municipal

### Benefício Imediato
Assim que a API for conectada, o portal poderá exibir:
- **399 municípios** com informações básicas
- **507 contatos** de prefeitos via WhatsApp
- **522 contatos** de vices via WhatsApp
- **2.006 contatos** de vereadores via WhatsApp

**Total: 3.028 contatos diretos disponíveis imediatamente!**

---

**Relatório gerado em:** 17 de Novembro de 2025  
**Autor:** Análise Técnica do Portal Paranhos
