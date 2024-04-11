import { BrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import Signup from './Components/Signup/Signup'


function App() {

  return (
    <>
      <div className="App">
      <LandingPage/>
      <Signup/>
      {/* <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Router> */}
      </div>
      
    </>
  )
}

export default App
