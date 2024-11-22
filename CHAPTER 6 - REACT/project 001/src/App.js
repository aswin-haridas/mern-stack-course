

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mypage from './component/Mypage'
import Home from './component/html/Home'
import About from './component/html/About'
import UserProfile from './component/html/userProfile'
import { Overview } from './component/dashboard/overview'
import { Settings } from './component/dashboard/settings'
import { Dashboard } from './component/dashboard/Dashboard'
import Contact from './component/html/Contact'

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route path="/" exact element={<Mypage/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/user/:id' element={<UserProfile/>}/>

          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='overview'element={<Overview/>}/>
            <Route path='settings'element={<Settings/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;