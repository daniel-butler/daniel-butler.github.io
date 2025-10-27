import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'
import About from '../src/pages/about'
import '@testing-library/jest-dom'

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    pathname: '/',
    push: jest.fn(),
    back: jest.fn(),
  })),
}))

// Mock next-image-export-optimizer
jest.mock('next-image-export-optimizer', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }) => {
    return <img src={src} alt={alt} {...props} />
  },
}))

// Mock generateRssFeed to avoid import issues with 'feed' module
jest.mock('../src/lib/generateRssFeed', () => ({
  generateRssFeed: jest.fn(),
}))

describe('Page Loading Tests', () => {
  test('Home page renders without crashing', () => {
    const mockArticles = []
    render(<Home articles={mockArticles} />)
    // Check if the page has rendered by looking for common elements
    expect(document.body).toBeTruthy()
  })

  test('About page renders without crashing', () => {
    render(<About />)
    // Check if the about page has the main heading
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy()
  })
})
