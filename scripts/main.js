import generateMarkdown from "./generateMarkdown.js"
import {fetchPageSpeed, formatScore} from "./fetchPageSpeed.js"
import updateReadme from "./updateReadme.js"

async function run() {
  try {
    console.log("Consultando API para desktop...")
    const desktopData = await fetchPageSpeed("desktop");

    console.log("Consultando API para mobile...")
    const mobileData = await fetchPageSpeed("mobile");

    console.log("formatando score desktop...")
    const desktopScores = formatScore(desktopData);
    
    console.log("formatando score mobile...")
    const mobileScores = formatScore(mobileData);

    console.log("Gerando MK...")
    const sectionMk = generateMarkdown(desktopScores, mobileScores);

    console.log("Atualizando README...")
    await updateReadme(sectionMk);
    console.log("✅ README.md atualizado com sucesso!");

  } catch (error) {
    console.error("Erro ao executar PageSpeed:", error.message);
  }
}

run();

