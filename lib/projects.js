import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const projectsDirectory = path.join(process.cwd(), 'projects')

export async function getSortedProjectsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory)

  let allProjectsData = [];

  for (const fileName of fileNames) {
    const id = fileName.replace(/\.md$/, '')
  
      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
  
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)
  
      // Use remark to convert markdown into HTML string
      const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
      const contentHtml = processedContent.toString()

      // Combine the data with the id
      allProjectsData.push({
        id,
        contentHtml,
        ...matterResult.data
      })
  }

  // Sort posts by date
  return allProjectsData.sort((a, b) => {
    if (a.startDate < b.startDate) {
      return 1
    } else {
      return -1
    }
  })
}
