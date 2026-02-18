import ExportedImage from "next-image-export-optimizer";
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {
    CPAtoDevIcon,
    GitHubIcon,
    LinkedInIcon,
    StackOverflowIcon,
} from '@/components/SocialIcons'
import arthurAndI from '@/images/photos/me and aurther.jpeg'
import charlotteAndI2 from '@/images/photos/me and charlotte 2.jpeg'
import family1 from '@/images/photos/family photo.jpeg'
import aubree1 from '@/images/photos/aubree.jpeg'
import me2 from '@/images/photos/me 2.jpeg'
import me3 from '@/images/photos/me 3.jpeg'
import me4 from '@/images/photos/me 4.jpeg'
import charlotteSwing from '@/images/photos/charlotte on swing.jpeg'
import {generateRssFeed} from '@/lib/generateRssFeed'
import {getAllArticles} from '@/lib/getAllArticles'
import {formatDate} from '@/lib/formatDate'

function MailIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function Article({article}) {
    return (
        <article>
            <time
                className="block text-xs font-mono text-zinc-400 dark:text-zinc-500"
                dateTime={article.date}
            >
                {formatDate(article.date)}
            </time>
            <h2 className="mt-1 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Link
                    href={`/articles/${article.slug}`}
                    className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                    {article.title}
                </Link>
            </h2>
            <p className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">
                {article.description}
            </p>
        </article>
    )
}

function SocialLink({icon: Icon, ...props}) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
        </Link>
    )
}

function Photos() {
    const photos = [
        arthurAndI, charlotteAndI2, family1, aubree1, me2, charlotteSwing, me3, me4,
    ]
    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex snap-x snap-mandatory scrollbar-hidden gap-5 overflow-x-auto py-4 sm:gap-8">
                {photos.map((image, imageIndex) => (
                    <div
                        key={image.src}
                        className={clsx(
                            'relative snap-center aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                            imageIndex % 2 === 0 ? 'rotate-2' : '-rotate-2'
                        )}
                    >
                        <ExportedImage
                            src={image}
                            alt=""
                            layout="fill"
                            sizes="(min-width: 640px) 18rem, 11rem"
                            className="inset-0 h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Home({articles}) {
    return (
        <>
            <Head>
                <title>
                    Daniel Butler - Lifelong learner, builder, and achiever
                </title>
                <meta
                    name="description"
                    content="I’m Daniel, a software developer with a focus on delivering value. "
                />
            </Head>
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-black tracking-tighter text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Lifelong learner, builder, and achiever.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I’m Daniel, a Software Developer and entrepreneur based in Tampa, Florida.
                        A Software Development Engineer at Amazon, Dad during the days and nights, and sometimes
                        write tutorials for technology focused Accountants and CPAs at <a href="https://cpato.dev" className="text-teal-500 hover:text-teal-400 transition-colors">CPA to Dev</a>.
                    </p>
                    <div className="mt-6 flex gap-6">
                        <SocialLink
                            href="https://github.com/daniel-butler"
                            aria-label="Follow on GitHub"
                            icon={GitHubIcon}
                        />
                        <SocialLink
                            href="https://www.linkedin.com/in/dbutlercpa/"
                            aria-label="Follow on LinkedIn"
                            icon={LinkedInIcon}
                        />
                        <SocialLink
                            href="https://stackoverflow.com/users/7838574/daniel-butler"
                            aria-label="Follow on StackOverflow"
                            icon={StackOverflowIcon}
                        />
                        <SocialLink
                            href="https://cpato.dev"
                            aria-label="Follow on CPA to Dev"
                            icon={CPAtoDevIcon}
                        />
                    </div>
                </div>
            </Container>
            <Photos/>
            <Container className="mt-24 md:mt-28">
                <div className="mx-auto max-w-xl">
                    <div className="flex flex-col gap-8">
                        {articles.map((article) => (
                            <Article key={article.slug} article={article}/>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    if (process.env.NODE_ENV === 'production') {
        await generateRssFeed()
    }

    return {
        props: {
            articles: (await getAllArticles())
                .slice(0, 4)
                .map(({component, ...meta}) => meta),
        },
    }
}
