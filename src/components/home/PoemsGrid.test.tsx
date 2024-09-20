import { screen, waitFor } from '@testing-library/react'
import { PoemsGrid } from './PoemsGrid'
import { render } from '../../test/utils'

describe('PoemsGrid', () => {
  it('renders poems when there are poems', async () => {
    render(<PoemsGrid searchTerm='Love' selectedAuthor='William Shakespeare' />)

    await waitFor(() => {
      expect(
        screen.getByText(
          "Sonnet 10: For shame! deny that thou bear'st love to any",
        ),
      ).toBeInTheDocument()
      expect(
        screen.getByText('Sonnet 26: Lord of my love, to whom in vassalage'),
      ).toBeInTheDocument()
      expect(
        screen.getByText('Sonnet 4: Unthrifty loveliness, why dost thou spend'),
      ).toBeInTheDocument()
      expect(
        screen.getByText(
          'Sonnet 13: O! that you were your self; but, love you are',
        ),
      ).toBeInTheDocument()
      expect(
        screen.getByText('Sonnet 51: Thus can my love excuse the slow offence'),
      ).toBeInTheDocument()
    })
  })

  it('renders not found text when nothing is found', async () => {
    render(
      <PoemsGrid searchTerm='Ice Cream' selectedAuthor='William Shakespeare' />,
    )
    await waitFor(() => {
      expect(screen.getByText('No poems found...')).toBeInTheDocument()
    })
  })

  it('renders error message', async () => {
    render(
      <PoemsGrid searchTerm='Error' selectedAuthor='William Shakespeare' />,
    )
    await waitFor(() => {
      expect(screen.getByText('No poems found...')).toBeInTheDocument()
    })
  })
})
