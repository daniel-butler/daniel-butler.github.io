import ExportedImage from "next-image-export-optimizer";
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  StackOverflowIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Daniel Butler</title>
        <meta
          name="description"
          content="I’m Daniel Butler. I live in Tampa Florida, where I flourish."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <ExportedImage
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hey, you!
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                These are hardly ever read, so I’ll keep it short and sweet.
              </p>
              <p>
                I went to school and started my career as an Accountant.
                Because my boss and mentor at the time believed in my ability to learn and technical aptitude he gave me the space to explore and thrive as a software developer.
                The first true development project was fixing a <a className={"text-sm font-medium text-teal-500"} href={"./projects/receipt-capture"}>webpage</a> a consulting company developed for us at The CORE Group.
                After that, I was hooked.
                During my tenure at The CORE Group, we automated and digitized the entire Accounting process, to the point that when COVID hit none of the Accounting department needed to go to the office, even increasing efficiency and accuracy.
                To a large extend we used the Business Process Management software <a className={"text-sm font-medium text-teal-500"} href={"https://www.docuphase.com/"}>DocuPhase</a>.
                We were doing things with DocuPhase that impressed them enough to invited me to <a className={"text-sm font-medium text-teal-500"} href={"./speaking"}>speak as a keynote at their conference</a>.
              </p>

              <p>
                After a few years of building various websites and honing the processes <a className={"text-sm font-medium text-teal-500"} href={"./platforms"}>Connect Platform</a>, the company I worked for was acquired.
                After the acquisition, my job at the new company moved away from software development which lead me to work at Amazon.
                At Amazon, I’m apart of the Fulfillment Technology organization.
                My work centers around Authentication, User Lifecycle Management, Fulfillment Center Menus, and Labor Activity Tracking.
                Each one of those has at least one Tier one service associated with it.
                Meaning that they are business critical and cannot go down.
                The team at Amazon is great and is teaching me a lot about what it means to be a hire performing team and how to think and take criticism, with minimal ego.
              </p>
              <p>
                Also, on the side I run a Real Estate Post Rental website service <a className={"text-sm font-medium text-teal-500"} href={"https://orderpost.app"}>Order Post App</a>.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://github.com/daniel-butler" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/dbutlercpa/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href="https://stackoverflow.com/users/7838574/daniel-butler" icon={StackOverflowIcon} className="mt-4">
                Follow on StackOverflow
              </SocialLink>
              <SocialLink
                href="mailto:hi@daniel-butler.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hi@daniel-butler.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
