# Profissão do Século — Landing Page

Landing page desenvolvida com foco em **performance, SEO, acessibilidade e mensuração de dados**, criada para substituir uma solução anterior baseada em Canva, que limitava análises técnicas e otimizações reais.

🔗 **Deploy:** https://profissaodoseculo.com.br/

---

## 🖼️ Impacto Visual & Performance

### 📊 PageSpeed Insights

<!-- PAGESPEED_START -->

# 📊 PageSpeed Insights

## 🖥️ Desktop

🚀 Performance : 100
♿ Acessibilidade : 98
🛠️ Boas Práticas : 96
🔍 SEO : 100

## 📱 Mobile

🚀 Performance : 74
♿ Acessibilidade : 98
🛠️ Boas Práticas : 96
🔍 SEO : 100

**Gerado automaticamente via Google PageSpeed Insights API.**
**Consultado em 04/01/2026, 14:59:04**

<!-- PAGESPEED_END -->

### 🖼️ Antes x Depois

#### Versão anterior (Canva)

![Versão Canva](./docs/canva.png)

#### Versão atual (Next.js)

![Versão Next.js](./docs/next.png)

> Comparação visual demonstrando a evolução técnica, visual e de performance do projeto.

---

## 🎯 Objetivo e Problema Resolvido

### Objetivo do Projeto

Disponibilizar uma landing page profissional, rápida e mensurável para conversão de usuários, substituindo a versão anterior limitada do Canva.

### Problema Resolvido

- ❌ Impossibilidade de analisar performance real
- ❌ Falta de controle sobre SEO técnico
- ❌ Pouca flexibilidade para otimizações
- ❌ Dependência total da plataforma

**Solução:** Reconstrução do projeto do zero utilizando **Tecnologia Web**, garantindo controle total sobre código, métricas, otimizações e evolução contínua baseada em dados.

---

## 🛠️ Tecnologias, Estrutura e Monitoramento

### Tecnologias Utilizadas

- **Next.js**
- **TypeScript**
- **Tailwind CSS**

#### Algumas das funcionalidades

- 📱 **Responsividade:** Layout adaptável para diferentes tamanhos de tela (desktop, tablet e mobile)
- 🌗 **Modo claro e escuro:** Implementação nativa de tema, alternável pelo usuário
- 🎨 **Design próprio:** Layout e identidade visual totalmente criados por mim, priorizando experiência do usuário e clareza visual

### Estrutura do Projeto

#### Principal (`src/`)

- `app/` — Roteamento e estrutura base (layout.tsx, page.tsx, estilos globais e por seção)
- `assets/` — Imagens e SVGs
- `components/` — Componentes reutilizáveis
- `content/` — Conteúdo textual em JSON, separado do código
- `section/` — Seções da landing page como componentes, facilitando organização e escalabilidade

#### Estrutura adicional

- `scripts/` — Scripts de automação e geração de métricas:

  - **fetchPageSpeed.js** — Consome a API do Google PageSpeed Insights e formata scores.
  - **generateMarkdown.js** — Gera Markdown dos resultados.
  - **updateReadme.js** — Atualiza a seção marcada do README com os últimos resultados.
  - **pagespeed.js** (main) — Orquestra o processo e pode ser executado manualmente ou via GitHub Actions.

### Monitoramento e Analytics

- **Google Tag Manager (GTM)** — Gerenciamento centralizado de tags e eventos: acesso à página, profundidade de scroll, cliques em links e CTAs.
- **Google Analytics 4 (GA4)** — Monitora comportamento de navegação, interação e conversões, consumindo eventos do GTM.

---

## 🚀 Como rodar o projeto localmente

### Clone do repositorio

```bash
git clone https://github.com/FragaTheus/landing-page-profissao-do-seculo.git
cd landing-page-profissao-do-seculo
```

### Instalar dependencias

```bash
# Usando npm
npm install
```

```bash
# Usando yarn
yarn install

```

```bash
# Usando pnpm
pnpm install

```

### Rodar projeto localmente

```bash
# Usando npm
npm run dev
```

```bash
# Usando yarn
yarn dev
```

```bash
# Usando pnpm
pnpm dev
```

---

## 👨‍💻 Sobre o Autor

Projeto desenvolvido por **Matheus Augusto Fraga Correa**, Desenvolvedor FullStack.

---

## 🔒 Licença & Uso

Este repositório é de propriedade do projeto **Profissão do Século**, com todos os direitos reservados.

- O código pode ser **clonado e utilizado localmente** para testes, experimentos, estudos ou avaliação técnica.
- **Redistribuição, uso comercial ou publicação em outros meios** não é permitido sem autorização do autor.

---

## 📌 Próximos Passos

- [ ] Acompanhamento contínuo do desempenho do site em conjunto com o proprietário da landing page
- [ ] Análise periódica de métricas de acesso, comportamento e conversão
- [ ] Iterações de melhoria baseadas em dados reais e feedback do negócio
- [ ] Evolução progressiva de performance e acessibilidade
- [ ] Refinamento contínuo de SEO técnico

---
