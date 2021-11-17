
import Home from './component/Home';
import Mypage from './component/Mypage'
import Signup from './component/Signup'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';




function App() {
  return (
    
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>

    </BrowserRouter>

  )
  
    
  
}

export default App;
