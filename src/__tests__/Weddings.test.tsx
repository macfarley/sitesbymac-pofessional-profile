import { render, screen } from '@testing-library/react'
import WeddingsPage from '../app/weddings/page'

describe('Weddings Page', () => {
  it('renders without crashing', () => {
    render(<WeddingsPage />)
    expect(screen.getByRole('heading', { name: /the digital heirloom/i })).toBeInTheDocument()
  })

  it('renders the quick-access card for the design mockup', () => {
    render(<WeddingsPage />)
    const link = screen.getByRole('link', { name: /browse the template/i })
    expect(link).toHaveAttribute('href', '/weddings/demotemplate')
  })

  it('renders the quick-access card for wedding planners', () => {
    render(<WeddingsPage />)
    const link = screen.getByRole('link', { name: /partner with sitesbymac/i })
    expect(link).toHaveAttribute('href', '/weddings/forplanners')
  })

  it('renders the Live Client Sites section heading', () => {
    render(<WeddingsPage />)
    expect(screen.getByRole('heading', { name: /live client sites/i })).toBeInTheDocument()
  })

  it('renders the John & Crystal May showcase card', () => {
    render(<WeddingsPage />)
    const link = screen.getByRole('link', { name: /john.*crystal may/i })
    expect(link).toHaveAttribute('href', '/weddings/JohnandCrystalMay')
  })

  it('renders the wedding screenshot with alt text', () => {
    render(<WeddingsPage />)
    const img = screen.getByAltText(/john.*crystal may.*wedding website/i)
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/images/screenshots/john-and-crystal-may-wedding.png')
  })

  it('shows the domain label in the showcase card', () => {
    render(<WeddingsPage />)
    expect(screen.getByText(/john-and-crystal-may\.wedding/i)).toBeInTheDocument()
  })

  it('displays the early adopter pricing callout', () => {
    render(<WeddingsPage />)
    expect(screen.getByText(/early adopter special/i)).toBeInTheDocument()
    // $100 appears in both the callout and the pricing table — just confirm multiple instances exist
    expect(screen.getAllByText('$100').length).toBeGreaterThan(0)
  })

  it('renders contact email link', () => {
    render(<WeddingsPage />)
    const emailLinks = screen.getAllByRole('link', { name: /mac@sitesbymac\.dev/i })
    expect(emailLinks.length).toBeGreaterThan(0)
    expect(emailLinks[0]).toHaveAttribute('href', expect.stringContaining('mailto:'))
  })
})
