import { screen, fireEvent, act, waitFor } from '@testing-library/react'
import { PoemsCarousel } from './PoemsCarousel'
import { render } from '../../test/utils'

describe('PoemsCarousel', () => {
  it('should render the poems and navigate between them', async () => {
    render(
      <PoemsCarousel searchTerm='Love' selectedAuthor='William Shakespeare' />,
    )

    await waitFor(() => {
      expect(screen.getByText("A Lover's Complaint")).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Next'))

    await waitFor(() => {
      expect(
        screen.getByText(
          "Sonnet 10: For shame! deny that thou bear'st love to any",
        ),
      ).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Prev'))

    await waitFor(() => {
      expect(screen.getByText("A Lover's Complaint")).toBeInTheDocument()
    })
  })

  it('should match the snapshot', async () => {
    let fragment
    await act(async () => {
      const { asFragment } = render(
        <PoemsCarousel
          searchTerm='Love'
          selectedAuthor='William Shakespeare'
        />,
      )
      fragment = asFragment()
    })
    expect(fragment).toMatchSnapshot()
  })
})
