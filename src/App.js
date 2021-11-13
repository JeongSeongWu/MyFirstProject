import Signup from './component/Signup';
import Home from './component/Home';
import Mypage from './component/Mypage'
import Signup2 from './component/Signup2'
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
        <Route path='/signup' element={<Signup2/>} />
      </Routes>

    </BrowserRouter>

  )
  
    
  
}

export default App;
