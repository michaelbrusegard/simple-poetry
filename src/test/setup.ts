import * as matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'
import { poemsDickinson, poemsShakespeare } from './mocks'

expect.extend(matchers)

export const restHandlers = [
  http.get(
    'https://poetrydb.org/author,poemcount/Emily Dickinson;12/author,title,linecount',
    () => {
      return HttpResponse.json(poemsDickinson)
    },
  ),
  http.get(
    'https://poetrydb.org/author,poemcount/William Shakespeare;12/author,title,linecount',
    () => {
      return HttpResponse.json(poemsShakespeare)
    },
  ),
]

const server = setupServer(...restHandlers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
