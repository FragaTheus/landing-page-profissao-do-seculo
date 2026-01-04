export default function generateMarkdown(desktop, mobile) {
  const consultedAt = new Date().toLocaleString("pt-BR")

  return `
## 🖥️ Desktop

| Categoria | Score |
|----------|-------|
| 🚀 Performance | ${desktop.performance} |
| ♿ Acessibilidade | ${desktop.accessibility} |
| 🛠️ Boas Práticas | ${desktop.bestPractices} |
| 🔍 SEO | ${desktop.seo} |

## 📱 Mobile

| Categoria | Score |
|----------|-------|
| 🚀 Performance | ${mobile.performance} |
| ♿ Acessibilidade | ${mobile.accessibility} |
| 🛠️ Boas Práticas | ${mobile.bestPractices} |
| 🔍 SEO | ${mobile.seo} |

---

**Gerado automaticamente via Google PageSpeed Insights API.**  
**Consultado em ${consultedAt}**
`
}
