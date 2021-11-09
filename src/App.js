import Login from './component/Login';
import Mypage from './component/Mypage'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Signup from './component/Signup';


function App() {
  return (
    
  <BrowserRouter>

    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
    </Routes>

    </BrowserRouter>

  )
  
    
  
}

export default App;
