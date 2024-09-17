import { screen, render } from '@testing-library/react'
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
})