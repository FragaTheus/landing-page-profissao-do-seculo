import "dotenv/config";


const SITE_URL = "https://profissaodoseculo.com.br/";
const API_KEY = process.env.PAGESPEED_API_KEY;

const ENDPOINT =
  "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

export async function fetchPageSpeed(strategy) {
  const url = new URL(ENDPOINT);
  url.searchParams.set("url", SITE_URL);
  url.searchParams.set("strategy", strategy);
  url.searchParams.set("key", API_KEY);

  url.searchParams.append("category", "performance");
  url.searchParams.append("category", "accessibility");
  url.searchParams.append("category", "best-practices");
  url.searchParams.append("category", "seo");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erro PageSpeed (${strategy}): ${response.status}`);
  }

  const data = await response.json();

  return data;
}


export function formatScore(data) {
  const categories = data.lighthouseResult.categories;

  const toPercent = (value) => {
    if(value != null){
      return Math.round(value * 100)
    }else{
      return "N/A"
    }
  }

  return {
    performance: toPercent(categories.performance?.score),
    accessibility: toPercent(categories.accessibility?.score),
    bestPractices: toPercent(categories['best-practices']?.score),
    seo: toPercent(categories.seo?.score)
  };
}
