
// import Comp from './components/Comp1'
import { useRoutes, Link } from 'react-router-dom'
import router from './router'

function App() {
  const outlet =  useRoutes(router)
  return (
    <div className='App'>
      {outlet}
    </div>
  )
}

export default App
