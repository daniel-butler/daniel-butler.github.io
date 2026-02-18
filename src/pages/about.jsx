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
import logoCpaToDev from '@/images/logos/logoCpaToDev.svg'
import logoCoreFS from '@/images/logos/core-foodservice.svg'
import logoAmazon from '@/images/logos/amazon.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'

function BriefcaseIcon(props) {
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
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Amazon',
      title: 'Software Development Engineer II',
      logo: logoAmazon,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Amazon',
      title: 'Software Development Engineer I',
      logo: logoAmazon,
      start: '2021',
      end: '2022',
    },
    {
      company: 'CPA to DEV',
      title: 'Founder',
      logo: logoCpaToDev,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Order Post App LLC',
      title: 'Founder',
      logo: logoOpenShuttle,
      start: '2022',
      end: '2023',
    },
    {
      company: 'The CORE Group',
      title: 'Accounting System Developer',
      logo: logoCoreFS,
      start: '2018',
      end: '2021',
    },
    {
      company: 'The CORE Group',
      title: 'Assistant Controller',
      logo: logoCoreFS,
      start: '2015',
      end: '2018',
    },
    {
      company: 'The CORE Group - HOPCO Foodservice',
      title: 'Staff Accountant',
      logo: logoCoreFS,
      start: '2013',
      end: '2015',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <ExportedImage src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end}`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>
                {' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function DownloadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4.75 14.75v1.5a3 3 0 0 0 3 3h8.5a3 3 0 0 0 3-3v-1.5M12 4.75v9.5M8.75 11l3.25 3.25L15.25 11" />
    </svg>
  )
}

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
            <h1 className="text-4xl font-black tracking-tighter text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hey, you!
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                These are hardly ever read, so I’ll keep it short and sweet.
              </p>
              <p>
                I went to school and started my career as an Accountant.
                Because my boss and mentor at the time believed in my ability to learn and technical aptitude he gave me the space to explore and thrive as a software developer.
                The first true development project was fixing a <a className={"text-sm font-medium text-teal-500"} href={"/work/receipt-capture"}>webpage</a> a consulting company developed for us at The CORE Group.
                After that, I was hooked.
                During my tenure at The CORE Group, we automated and digitized the entire Accounting process, to the point that when COVID hit none of the Accounting department needed to go to the office, even increasing efficiency and accuracy.
                To a large extend we used the Business Process Management software <a className={"text-sm font-medium text-teal-500"} href={"https://www.docuphase.com/"}>DocuPhase</a>.
                We were doing things with DocuPhase that impressed them enough to invited me to <a className={"text-sm font-medium text-teal-500"} href={"/work/zero-g-expense-reports"}>speak as a keynote at their conference</a>.
              </p>

              <p>
                After a few years of building various websites and honing the processes of the <a className={"text-sm font-medium text-teal-500"} href={"/work"}>Connect Platform</a>, the company I worked for was acquired.
                After the acquisition, my job at the new company moved away from software development which lead me to work at Amazon.
                At Amazon, I’m apart of the Fulfillment Technology organization.
                My work centers around Authentication, User Lifecycle Management, Fulfillment Center Menus, and Labor Activity Tracking.
                Each one of those has at least one Tier one service associated with it.
                Meaning that they are business critical and cannot go down.
                The team at Amazon is great and is teaching me a lot about what it means to be in a high performing team and how to think and take criticism, with minimal ego.
              </p>
              <p>
                Also, on the side I write tutorials, tips, and tricks for technology focused accountants at <a className={"text-sm font-medium text-teal-500"} href={"https://cpato.dev"}>CPA to Dev</a>.
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
              <SocialLink
                href="/media/Daniel_Butler_-_CV_202104.pdf"
                icon={DownloadIcon}
                className="mt-4"
              >
                Download CV
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="mt-16">
        <div className="max-w-xl lg:max-w-2xl">
          <Resume />
        </div>
      </Container>
    </>
  )
}
