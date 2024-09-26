import { screen, fireEvent, waitFor } from '@testing-library/react'
import { render } from '../../test/utils'
import HomePage from './index'

describe('Home tests', () => {
  it('should render the title', async () => {
    await waitFor(async () => {
      render(<HomePage />)
    })
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Find Poetry')
  })

  beforeEach(() => {
    sessionStorage.clear()
  })

  it('should render the select components with the correct initial value', async () => {
    render(<HomePage />)
    expect(screen.getByDisplayValue('Shakespeare')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Grid')).toBeInTheDocument()
  })

  it('should render the input component with the correct initial value', async () => {
    render(<HomePage />)
    expect(screen.getByPlaceholderText('Search for a poem...')).toHaveValue('')
  })

  it('should render the link component correctly', async () => {
    render(<HomePage />)
    expect(screen.getByText('Favorites')).toHaveAttribute('href', '/favorites')
  })

  it('should update sessionStorage when state changes', async () => {
    render(<HomePage />)
    fireEvent.change(screen.getByDisplayValue('Shakespeare'), {
      target: { value: 'Emily Dickinson' },
    })
    expect(sessionStorage.getItem('selectedAuthor')).toBe('Emily Dickinson')
  })

  it('should match the snapshot', async () => {
    let fragment
    await waitFor(async () => {
      const { asFragment } = render(<HomePage />)
      fragment = asFragment()
    })
    expect(fragment).toMatchSnapshot()
  })
})
