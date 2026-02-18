import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../src/pages/index'
import About from '../src/pages/about'
import Work from '../src/pages/work/index'
import { Header } from '../src/components/Header'
import { Footer } from '../src/components/Footer'
import '@testing-library/jest-dom'

// ─── Shared mocks ─────────────────────────────────────────────────────────────

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    pathname: '/',
    push: jest.fn(),
    back: jest.fn(),
  })),
}))

jest.mock('next-image-export-optimizer', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }) => <img src={typeof src === 'string' ? src : src?.src ?? ''} alt={alt ?? ''} />,
}))

jest.mock('../src/lib/generateRssFeed', () => ({
  generateRssFeed: jest.fn(),
}))

// SVG logo imports — return a simple string path so ExportedImage can render them
jest.mock('../src/images/logos/logoCpaToDev.svg', () => '/images/logos/logoCpaToDev.svg')
jest.mock('../src/images/logos/core-foodservice.svg', () => '/images/logos/core-foodservice.svg')
jest.mock('../src/images/logos/amazon.svg', () => '/images/logos/amazon.svg')
jest.mock('../src/images/logos/open-shuttle.svg', () => '/images/logos/open-shuttle.svg')

// Photo imports
jest.mock('../src/images/portrait.jpg', () => '/images/portrait.jpg')
jest.mock('../src/images/photos/me and aurther.jpeg', () => '/images/photos/me-arthur.jpeg')
jest.mock('../src/images/photos/me and charlotte 2.jpeg', () => '/images/photos/charlotte-2.jpeg')
jest.mock('../src/images/photos/family photo.jpeg', () => '/images/photos/family.jpeg')
jest.mock('../src/images/photos/aubree.jpeg', () => '/images/photos/aubree.jpeg')
jest.mock('../src/images/photos/me 2.jpeg', () => '/images/photos/me-2.jpeg')
jest.mock('../src/images/photos/me 3.jpeg', () => '/images/photos/me-3.jpeg')
jest.mock('../src/images/photos/me 4.jpeg', () => '/images/photos/me-4.jpeg')
jest.mock('../src/images/photos/charlotte on swing.jpeg', () => '/images/photos/charlotte-swing.jpeg')

// ─── Sample fixtures ───────────────────────────────────────────────────────────

const sampleArticles = [
  {
    slug: 'test-article-1',
    title: 'Test Article One',
    description: 'First article description',
    date: '2024-01-15',
  },
  {
    slug: 'test-article-2',
    title: 'Test Article Two',
    description: 'Second article description',
    date: '2024-02-20',
  },
]

const sampleProjects = [
  {
    slug: 'connect-platform',
    title: 'Connect Platform',
    description: 'Enterprise workflow platform',
    platform: 'Connect',
  },
  {
    slug: 'mad-batter',
    title: 'Mad Batter',
    description: 'E-commerce site for bakery',
    platform: 'Personal',
  },
  {
    slug: 'docuphase-talk',
    title: 'Zero-G Expense Reports',
    description: 'Keynote at DocuPhase Infinity 2019',
    platform: 'Speaking',
  },
]

// ─── Home page ─────────────────────────────────────────────────────────────────

describe('Home page', () => {
  test('renders without crashing', () => {
    render(<Home articles={[]} />)
    expect(document.body).toBeTruthy()
  })

  test('renders hero heading', () => {
    render(<Home articles={[]} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Lifelong learner, builder, and achiever.'
    )
  })

  test('renders GitHub social link', () => {
    render(<Home articles={[]} />)
    expect(screen.getByRole('link', { name: /follow on github/i })).toHaveAttribute(
      'href',
      'https://github.com/daniel-butler'
    )
  })

  test('renders LinkedIn social link', () => {
    render(<Home articles={[]} />)
    expect(screen.getByRole('link', { name: /follow on linkedin/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/dbutlercpa/'
    )
  })

  test('renders articles when provided', () => {
    render(<Home articles={sampleArticles} />)
    expect(screen.getByText('Test Article One')).toBeInTheDocument()
    expect(screen.getByText('Test Article Two')).toBeInTheDocument()
  })

  test('article titles are links to article pages', () => {
    render(<Home articles={sampleArticles} />)
    const link = screen.getByRole('link', { name: 'Test Article One' })
    expect(link).toHaveAttribute('href', '/articles/test-article-1')
  })

  test('renders article descriptions', () => {
    render(<Home articles={sampleArticles} />)
    expect(screen.getByText('First article description')).toBeInTheDocument()
  })

  test('renders no articles when empty array passed', () => {
    render(<Home articles={[]} />)
    // Hero heading should still render
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    // No article links (only social links present)
    const links = screen.getAllByRole('link')
    const articleLinks = links.filter((l) => l.getAttribute('href')?.startsWith('/articles/'))
    expect(articleLinks).toHaveLength(0)
  })
})

// ─── About page ────────────────────────────────────────────────────────────────

describe('About page', () => {
  test('renders without crashing', () => {
    render(<About />)
    expect(document.body).toBeTruthy()
  })

  test('renders h1 heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  test('renders GitHub link', () => {
    render(<About />)
    expect(
      screen.getByRole('link', { name: /follow on github/i })
    ).toHaveAttribute('href', 'https://github.com/daniel-butler')
  })

  test('renders CV download link', () => {
    render(<About />)
    const cvLink = screen.getByRole('link', { name: /download cv/i })
    expect(cvLink).toBeInTheDocument()
    expect(cvLink).toHaveAttribute('href', '/media/Daniel_Butler_-_CV_202104.pdf')
  })

  test('renders email contact link', () => {
    render(<About />)
    expect(
      screen.getByRole('link', { name: /hi@daniel-butler.com/i })
    ).toHaveAttribute('href', 'mailto:hi@daniel-butler.com')
  })

  // Resume widget
  test('renders Resume section with Work heading', () => {
    render(<About />)
    expect(screen.getByText('Work')).toBeInTheDocument()
  })

  test('renders Amazon in resume', () => {
    render(<About />)
    const amazonEntries = screen.getAllByText('Amazon')
    expect(amazonEntries.length).toBeGreaterThanOrEqual(1)
  })

  test('renders SDE2 role in resume', () => {
    render(<About />)
    expect(screen.getByText('Software Development Engineer II')).toBeInTheDocument()
  })

  test('renders CPA to DEV in resume', () => {
    render(<About />)
    expect(screen.getByText('CPA to DEV')).toBeInTheDocument()
  })

  test('resume shows Present for current roles', () => {
    render(<About />)
    const presentLabels = screen.getAllByText('Present')
    expect(presentLabels.length).toBeGreaterThanOrEqual(1)
  })
})

// ─── Work page ─────────────────────────────────────────────────────────────────

describe('Work page', () => {
  test('renders without crashing', () => {
    render(<Work projects={[]} />)
    expect(document.body).toBeTruthy()
  })

  test('renders page heading', () => {
    render(<Work projects={[]} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Things I've built.")
  })

  test('renders all projects by default', () => {
    render(<Work projects={sampleProjects} />)
    expect(screen.getByText('Connect Platform')).toBeInTheDocument()
    expect(screen.getByText('Mad Batter')).toBeInTheDocument()
    expect(screen.getByText('Zero-G Expense Reports')).toBeInTheDocument()
  })

  test('renders "All" tag filter button', () => {
    render(<Work projects={sampleProjects} />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
  })

  test('renders platform-specific tag buttons', () => {
    render(<Work projects={sampleProjects} />)
    expect(screen.getByRole('button', { name: 'Connect' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Personal' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Speaking' })).toBeInTheDocument()
  })

  test('filters to Connect projects when Connect tag clicked', () => {
    render(<Work projects={sampleProjects} />)
    fireEvent.click(screen.getByRole('button', { name: 'Connect' }))
    expect(screen.getByText('Connect Platform')).toBeInTheDocument()
    expect(screen.queryByText('Mad Batter')).not.toBeInTheDocument()
    expect(screen.queryByText('Zero-G Expense Reports')).not.toBeInTheDocument()
  })

  test('filters to Speaking projects when Speaking tag clicked', () => {
    render(<Work projects={sampleProjects} />)
    fireEvent.click(screen.getByRole('button', { name: 'Speaking' }))
    expect(screen.getByText('Zero-G Expense Reports')).toBeInTheDocument()
    expect(screen.queryByText('Connect Platform')).not.toBeInTheDocument()
    expect(screen.queryByText('Mad Batter')).not.toBeInTheDocument()
  })

  test('clicking All restores all projects after filtering', () => {
    render(<Work projects={sampleProjects} />)
    fireEvent.click(screen.getByRole('button', { name: 'Connect' }))
    expect(screen.queryByText('Mad Batter')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getByText('Mad Batter')).toBeInTheDocument()
    expect(screen.getByText('Connect Platform')).toBeInTheDocument()
  })

  test('project titles link to /work/:slug', () => {
    render(<Work projects={sampleProjects} />)
    const link = screen.getByRole('link', { name: 'Connect Platform' })
    expect(link).toHaveAttribute('href', '/work/connect-platform')
  })

  test('renders project descriptions', () => {
    render(<Work projects={sampleProjects} />)
    expect(screen.getByText('Enterprise workflow platform')).toBeInTheDocument()
  })

  test('renders empty state without crashing', () => {
    render(<Work projects={[]} />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
  })
})

// ─── Header component ──────────────────────────────────────────────────────────

describe('Header component', () => {
  const { useRouter } = require('next/router')

  beforeEach(() => {
    useRouter.mockReturnValue({ pathname: '/', push: jest.fn(), back: jest.fn() })
  })

  test('renders site name link', () => {
    render(<Header />)
    const siteLink = screen.getByRole('link', { name: 'Daniel Butler' })
    expect(siteLink).toHaveAttribute('href', '/')
  })

  test('renders About nav link', () => {
    render(<Header />)
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    expect(aboutLinks[0]).toHaveAttribute('href', '/about')
  })

  test('renders Blog nav link', () => {
    render(<Header />)
    const blogLinks = screen.getAllByRole('link', { name: 'Blog' })
    expect(blogLinks[0]).toHaveAttribute('href', '/articles')
  })

  test('renders Work nav link', () => {
    render(<Header />)
    const workLinks = screen.getAllByRole('link', { name: 'Work' })
    expect(workLinks[0]).toHaveAttribute('href', '/work')
  })

  test('renders dark mode toggle button', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /toggle dark mode/i })).toBeInTheDocument()
  })

  test('active nav link for /about path', () => {
    useRouter.mockReturnValue({ pathname: '/about', push: jest.fn(), back: jest.fn() })
    render(<Header />)
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    // Active link should have teal text class
    expect(aboutLinks[0].className).toMatch(/teal/)
  })

  test('active nav link for /work path', () => {
    useRouter.mockReturnValue({ pathname: '/work', push: jest.fn(), back: jest.fn() })
    render(<Header />)
    const workLinks = screen.getAllByRole('link', { name: 'Work' })
    expect(workLinks[0].className).toMatch(/teal/)
  })
})

// ─── Footer component ──────────────────────────────────────────────────────────

describe('Footer component', () => {
  test('renders without crashing', () => {
    render(<Footer />)
    expect(document.body).toBeTruthy()
  })

  test('renders About link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
  })

  test('renders Blog link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/articles')
  })

  test('renders Work link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/work')
  })

  test('renders copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/Daniel Butler\. All rights reserved\./)).toBeInTheDocument()
  })

  test('copyright includes current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
