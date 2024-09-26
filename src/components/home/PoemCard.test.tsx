import { screen } from '@testing-library/react'
import { render } from '../../test/utils'
import { PoemCard } from './PoemCard'

describe('PoemCard', () => {
  it('should render the poem title, author, and line count', () => {
    const poem = {
      title: 'A Wind that rose',
      author: 'Emily Dickinson',
      linecount: 9,
    }

    render(<PoemCard poem={poem} />)

    expect(screen.getByText('A Wind that rose')).toBeInTheDocument()
    expect(screen.getByText('Emily Dickinson')).toBeInTheDocument()
    expect(screen.getByText('9 lines')).toBeInTheDocument()
  })

  it('should link to the correct poem page', () => {
    const poem = {
      title: 'The Chimney Sweeper',
      author: 'William Blake',
      linecount: 12,
    }

    render(<PoemCard poem={poem} />)

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      '/poem/William Blake;The Chimney Sweeper',
    )
  })
})
