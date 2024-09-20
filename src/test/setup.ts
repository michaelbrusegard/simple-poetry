import * as matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'
import {
  poemsBlake,
  poemsDickinson,
  poemSpringAndWinterIi,
  poemsShakespeare,
  poemsShakespeareLove,
} from './mocks'

expect.extend(matchers)

export const restHandlers = [
  http.get(
    'https://poetrydb.org/author,poemcount/Emily%20Dickinson;12/author,title,linecount',
    () => {
      return HttpResponse.json(poemsDickinson)
    },
  ),
  http.get(
    'https://poetrydb.org/author,poemcount/William%20Shakespeare;12/author,title,linecount',
    () => {
      return HttpResponse.json(poemsShakespeare)
    },
  ),
  http.get(
    'https://poetrydb.org/author,title/William%20Blake;/author,title,linecount',
    () => {
      return HttpResponse.json(poemsBlake)
    },
  ),
  http.get(
    'https://poetrydb.org/author,title/William%20Shakespeare;Spring%20and%20Winter%20ii/lines,author,linecount',
    () => {
      return HttpResponse.json(poemSpringAndWinterIi)
    },
  ),
  http.get(
    'https://poetrydb.org/author,title/William%20Shakespeare;Love/author,title,linecount',
    () => {
      return HttpResponse.json(poemsShakespeareLove)
    },
  ),
]

const server = setupServer(...restHandlers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
