import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllProjects } from '@/lib/getAllProjects'

function TagFilter({ tags, active, onSelect }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 mb-10 text-sm font-mono">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelect(tag)}
          className={
            tag === active
              ? 'text-teal-500 dark:text-teal-400'
              : 'text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors'
          }
        >
          {tag}
        </button>
      ))}
    </div>
  )
}

function ProjectRow({ project }) {
  return (
    <article className="py-4 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
          <Link
            href={`/work/${project.slug}`}
            className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            {project.title}
          </Link>
        </h2>
        {project.platform && (
          <span className="flex-shrink-0 text-xs font-mono text-zinc-400 dark:text-zinc-500">
            {project.platform}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
    </article>
  )
}

export default function Work({ projects }) {
  const tags = ['All', ...Array.from(new Set(projects.map((p) => p.platform ?? 'Personal')))]
  const [activeTag, setActiveTag] = useState('All')

  const filtered =
    activeTag === 'All'
      ? projects
      : projects.filter((p) => (p.platform ?? 'Personal') === activeTag)

  return (
    <>
      <Head>
        <title>Work - Daniel Butler</title>
        <meta name="description" content="Things I've built — platforms, integrations, and experiments." />
      </Head>
      <SimpleLayout
        title="Things I've built."
        intro="A mix of platforms, integrations, and experiments — at work, on weekends, and everywhere in between."
      >
        <TagFilter tags={tags} active={activeTag} onSelect={setActiveTag} />
        <div>
          {filtered.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: (await getAllProjects()).map(({ component, ...meta }) => meta),
    },
  }
}
