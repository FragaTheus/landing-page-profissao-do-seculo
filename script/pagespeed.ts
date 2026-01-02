import { writeFile } from "fs/promises";

const SITE_URL = "https://profissaodoseculo.com.br/";

const PAGESPEED_ENDPOINT = "https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed";

async function fetchPageSpeed() {
  const url = `${PAGESPEED_ENDPOINT}?url=${encodeURIComponent(
    SITE_URL
  )}&strategy=desktop`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erro ao buscar PageSpeed: ${response.status}`);
  }

  return response.json();
}

function generateMarkdown(data: any): string {
  const lighthouse = data.lighthouseResult;
  const categories = lighthouse.categories;

  const performance = Math.round(categories.performance.score * 100);
  const accessibility = Math.round(categories.accessibility.score * 100);
  const bestPractices = Math.round(categories["best-practices"].score * 100);
  const seo = Math.round(categories.seo.score * 100);

  return `
# 📊 PageSpeed Insights Report

**URL analisada:** ${SITE_URL}

## 🚀 Pontuações (Desktop)

| Categoria        | Score |
|------------------|-------|
| Performance      | ${performance} |
| Accessibility    | ${accessibility} |
| Best Practices   | ${bestPractices} |
| SEO              | ${seo} |

## 🛠️ Gerado automaticamente
Este relatório foi gerado via **Google PageSpeed Insights API**.
`;
}

async function run() {
  try {
    console.log("Buscando dados do PageSpeed...");
    const data = await fetchPageSpeed();

    console.log("Gerando markdown...");
    const markdown = generateMarkdown(data);

    console.log("Salvando arquivo...");
    await writeFile("PAGESPEED.md", markdown, "utf-8");

    console.log("✅ PAGESPEED.md gerado com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao gerar relatório:", error);
  }
}

run();
