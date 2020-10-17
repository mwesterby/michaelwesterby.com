import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), '/content')

export async function getCV() {
  // Get file names under /posts
  const fileName = "cv.md"

  // Read markdown file as string
  const fullPath = path.join(contentDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
  .use(html)
  .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id
  const cvData = {
    contentHtml,
    ...matterResult.data
  }

  return cvData
}
