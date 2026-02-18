import Head from 'next/head'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

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
        <div className="max-w-3xl">
          {articles.map((article) => (
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
