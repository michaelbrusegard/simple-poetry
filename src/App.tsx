import './App.css'
import { Button } from './components/ui/Button'
import { Select, SelectOption } from './components/ui/Select'

function App() {
  return (
    <>
      <h1>Find Poetry</h1>
      <div className='card'>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <Button>Hello</Button>
      <Select value='1' onChange={() => {}}>
        <SelectOption value='1'>One</SelectOption>
        <SelectOption value='2'>Two</SelectOption>
        <SelectOption value='3'>Three</SelectOption>
      </Select>
    </>
  )
}

export default App
