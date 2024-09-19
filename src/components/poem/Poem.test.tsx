import { waitFor, fireEvent, act } from '@testing-library/react'
import { render } from '../../test/utils'
import { Poem } from './Poem'

describe('Poem', () => {
  it('renders without crashing', () => {
    render(
      <Poem
        poemTitle='Spring and Winter ii'
        poemAuthor='William Shakespeare'
      />,
    )
  })

  it('fetches and displays poem data', async () => {
    const { getByText } = render(
      <Poem
        poemTitle='Spring and Winter ii'
        poemAuthor='William Shakespeare'
      />,
    )

    await waitFor(() => {
      expect(getByText(/WHEN icicles hang by the wall/i)).toBeInTheDocument()
      expect(getByText(/When all aloud the wind doe blow/i)).toBeInTheDocument()
    })
  })

  it('handles favorite button click', async () => {
    const { getByText } = render(
      <Poem
        poemTitle='Spring and Winter ii'
        poemAuthor='William Shakespeare'
      />,
    )

    const favoriteButton = getByText(/Favorite/i)
    fireEvent.click(favoriteButton)

    await waitFor(() => {
      expect(getByText(/Remove Favorite/i)).toBeInTheDocument()
    })

    fireEvent.click(favoriteButton)

    await waitFor(() => {
      expect(getByText(/Favorite/i)).toBeInTheDocument()
    })
  })

  it('should match the snapshot', async () => {
    let fragment
    await act(async () => {
      const { asFragment } = render(
        <Poem
          poemTitle='Spring and Winter ii'
          poemAuthor='William Shakespeare'
        />,
      )
      fragment = asFragment()
    })
    expect(fragment).toMatchSnapshot()
  })
})
