import { screen, fireEvent } from '@testing-library/react'
import { render } from '../../test/utils'
import HomePage from './index'

describe('Home tests', () => {
  it('should render the title', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Find Poetry')
  })

  beforeEach(() => {
    sessionStorage.clear()
  })

  it('should render the select components with the correct initial value', () => {
    render(<HomePage />)
    expect(screen.getByDisplayValue('Shakespeare')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Grid')).toBeInTheDocument()
  })

  it('should render the input component with the correct initial value', () => {
    render(<HomePage />)
    expect(screen.getByPlaceholderText('Search for a poem...')).toHaveValue('')
  })

  it('should render the link component correctly', () => {
    render(<HomePage />)
    expect(screen.getByText('Favorites')).toHaveAttribute(
      'href',
      '/project1/favorites',
    )
  })

  it('should update sessionStorage when state changes', () => {
    render(<HomePage />)
    fireEvent.change(screen.getByDisplayValue('Shakespeare'), {
      target: { value: 'blake' },
    })
    expect(sessionStorage.getItem('selectedAuthor')).toBe('blake')
  })
})
