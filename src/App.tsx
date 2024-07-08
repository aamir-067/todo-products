import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='min-h-screen px-4'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
