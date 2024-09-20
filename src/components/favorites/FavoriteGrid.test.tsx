import { screen, act } from '@testing-library/react'
import { render } from '../../test/utils'
import { FavoriteGrid } from './FavoriteGrid'

describe('FavoriteGrid', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('should render the favorites from localStorage', () => {
    const favorites = [
      {
        title: 'The Chimney Sweeper',
        author: 'William Blake',
        linecount: '12',
      },
      {
        title: 'A Wind that rose',
        author: 'Emily Dickinson',
        linecount: '9',
      },
    ]
    localStorage.setItem('favorites', JSON.stringify(favorites))

    render(<FavoriteGrid />)

    expect(screen.getByText('The Chimney Sweeper')).toBeInTheDocument()
    expect(screen.getByText('William Blake')).toBeInTheDocument()
    expect(screen.getByText('12 lines')).toBeInTheDocument()
    expect(screen.getByText('A Wind that rose')).toBeInTheDocument()
    expect(screen.getByText('Emily Dickinson')).toBeInTheDocument()
    expect(screen.getByText('9 lines')).toBeInTheDocument()
  })

  it('should render a message if there are no favorites', () => {
    render(<FavoriteGrid />)

    expect(
      screen.getByText("You don't have any favorites."),
    ).toBeInTheDocument()
  })

  it('should match the snapshot', async () => {
    let fragment
    await act(async () => {
      const { asFragment } = render(<FavoriteGrid />)
      fragment = asFragment()
    })
    expect(fragment).toMatchSnapshot()
  })
})
