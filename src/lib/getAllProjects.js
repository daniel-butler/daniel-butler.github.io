import glob from 'fast-glob'
import * as path from 'path'

async function importProject(projectFilename) {
  let { meta, default: component } = await import(
    `../pages/work/${projectFilename}`
  )
  return {
    slug: projectFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllProjects() {
  let projectFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/work'),
  })

  let projects = await Promise.all(projectFilenames.map(importProject))

  return projects.sort((a, z) => new Date(z.date) - new Date(a.date))
}
