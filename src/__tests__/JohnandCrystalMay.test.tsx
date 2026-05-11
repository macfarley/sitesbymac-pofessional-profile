import { redirect } from 'next/navigation'
import JohnAndCrystalMayPage from '../app/weddings/JohnandCrystalMay/page'

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}))

describe('JohnandCrystalMay Page', () => {
  const ORIGINAL_ENV = process.env

  beforeEach(() => {
    jest.clearAllMocks()
    process.env = { ...ORIGINAL_ENV }
  })

  afterAll(() => {
    process.env = ORIGINAL_ENV
  })

  it('appends ref param when NEXT_PUBLIC_WEDDING_SLUG is set', () => {
    process.env.NEXT_PUBLIC_WEDDING_SLUG = 'john-crystal-2026'
    JohnAndCrystalMayPage()
    expect(redirect).toHaveBeenCalledWith(
      'https://www.john-and-crystal-may.wedding/?ref=john-crystal-2026'
    )
  })

  it('falls back to bare URL when NEXT_PUBLIC_WEDDING_SLUG is unset', () => {
    delete process.env.NEXT_PUBLIC_WEDDING_SLUG
    JohnAndCrystalMayPage()
    expect(redirect).toHaveBeenCalledWith('https://www.john-and-crystal-may.wedding/')
  })

  it('calls redirect exactly once', () => {
    JohnAndCrystalMayPage()
    expect(redirect).toHaveBeenCalledTimes(1)
  })
})
