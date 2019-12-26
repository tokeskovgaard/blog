const fs = require('fs')
const parseMarkdown = require('front-matter-markdown')

/**
 * getFiles - Get list of files in directory
 * @param {string} dir
 * @returns {Array} Array of objects
 */
export function getPostFiles(): [] {
  const dir = "content/blog"
  const files = fs.readdirSync(dir)

  const fileArray = files.map(file => {
    const markdownFile = fs.readFileSync(`${dir}/${file}`, 'utf-8')
    const fileContents = parseMarkdown(markdownFile)
    const date = fileContents.date
    const slug = file
      .split('.')
      .slice(0, -1)
      .join('.')

    return { date, slug }
  })
  fileArray.sort((a, b) => b.date.getTime() - a.date.getTime())
  return fileArray
}

