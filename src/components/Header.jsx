import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { Container } from '@/components/Container'

function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  )
}

function NavItem({ href, children, currentPath }) {
  const isActive = currentPath === href
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 text-sm transition',
          isActive
            ? 'text-teal-500 dark:text-teal-400'
            : 'text-zinc-600 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  )
}

export function Header() {
  const { pathname: currentPath } = useRouter()

  return (
    <header className="border-b border-zinc-100 dark:border-zinc-800">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Site name */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-mono text-base font-semibold text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400 transition"
            >
              Daniel Butler
            </Link>
          </div>

          {/* Nav links */}
          <nav className="hidden sm:block">
            <ul className="flex items-center">
              <NavItem href="/" currentPath={currentPath}>Home</NavItem>
              <NavItem href="/about" currentPath={currentPath}>About</NavItem>
              <NavItem href="/articles" currentPath={currentPath}>Blog</NavItem>
              <NavItem href="/work" currentPath={currentPath}>Work</NavItem>
            </ul>
          </nav>

          {/* Mobile nav (simple links) + dark mode toggle */}
          <div className="flex items-center gap-4">
            <nav className="sm:hidden">
              <ul className="flex items-center">
                <NavItem href="/" currentPath={currentPath}>Home</NavItem>
                <NavItem href="/articles" currentPath={currentPath}>Blog</NavItem>
              </ul>
            </nav>
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}
