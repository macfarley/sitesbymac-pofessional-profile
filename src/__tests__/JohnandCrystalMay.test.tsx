import { redirect } from 'next/navigation'
import JohnAndCrystalMayPage from '../app/weddings/JohnandCrystalMay/page'

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}))

describe('JohnandCrystalMay Page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('calls redirect to the live wedding site', () => {
    JohnAndCrystalMayPage()
    expect(redirect).toHaveBeenCalledWith('https://www.john-and-crystal-may.wedding/')
  })

  it('calls redirect exactly once', () => {
    JohnAndCrystalMayPage()
    expect(redirect).toHaveBeenCalledTimes(1)
  })
})
