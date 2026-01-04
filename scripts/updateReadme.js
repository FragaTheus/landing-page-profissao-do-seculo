import { writeFile, readFile } from "fs/promises";

const START = "<!-- PAGESPEED_START -->"
const END = "<!-- PAGESPEED_END -->"

export default async function updateReadme(sectionMk){
    const path = "README.md"
    const readme = await readFile(path, "utf-8")

    const blockRegex = new RegExp(
        `${START}[\\s\\S]*?${END}`,"g"
    )

    const replacement = `${START}\n${sectionMk}\n${END}`

    const updateMk = readme.match(blockRegex) ? readme.replace(blockRegex, replacement) : `${readme}\n\n${replacement}`

    await writeFile(path, updateMk, "utf-8")
}