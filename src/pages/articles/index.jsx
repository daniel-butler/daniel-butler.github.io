import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

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

function Article({ article }) {
  return (
    <article className="group py-5 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
      <Link href={`/articles/${article.slug}`} className="block hover:no-underline">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
          <time
            dateTime={article.date}
            className="flex-shrink-0 font-mono text-xs text-zinc-400 dark:text-zinc-500 sm:w-32"
          >
            {formatDate(article.date)}
          </time>
          <div className="mt-1 sm:mt-0">
            <h2 className="text-base font-semibold text-zinc-800 group-hover:text-teal-500 dark:text-zinc-200 dark:group-hover:text-teal-400 transition">
              {article.title}
            </h2>
            {article.description && (
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                {article.description}
              </p>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  const allTags = new Set()
  articles.forEach((article) => {
    if (article.tags) {
      article.tags.forEach((tag) => allTags.add(tag))
    }
  })
  const tags = ['All', ...Array.from(allTags).sort()]
  const [activeTag, setActiveTag] = useState('All')

  const filtered =
    activeTag === 'All'
      ? articles
      : articles.filter((a) => a.tags && a.tags.includes(activeTag))

  return (
    <>
      <Head>
        <title>Blog - Daniel Butler</title>
        <meta
          name="description"
          content="Long-form thoughts on programming, investing, business, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Writing on software design and investing."
        intro="Long-form thoughts on programming, investing, business, and more, collected in chronological order."
      >
        {tags.length > 1 && <TagFilter tags={tags} active={activeTag} onSelect={setActiveTag} />}
        <div className="max-w-3xl">
          {filtered.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
