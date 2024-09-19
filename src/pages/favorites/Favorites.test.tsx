import { screen, act } from '@testing-library/react'
import { render } from '../../test/utils'
import FavoritesPage from './index'

describe('FavoritesPage tests', () => {
  it('should render the h1 element with the correct text', () => {
    render(<FavoritesPage />)
    expect(screen.getByText('Favorites')).toBeInTheDocument()
  })

  it('should render the link component correctly', () => {
    render(<FavoritesPage />)
    expect(screen.getByText('Home')).toHaveAttribute('href', '/project1/')
  })

  it('should match the snapshot', async () => {
    let fragment
    await act(async () => {
      const { asFragment } = render(<FavoritesPage />)
      fragment = asFragment()
    })
    expect(fragment).toMatchSnapshot()
  })
})
