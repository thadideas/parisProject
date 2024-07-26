import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout'
import EventList from './pages/eventList'
import RingsList from './pages/ringsList'
import AddEvent from './pages/addevent'
import Landing from './pages/landing'
import Login from './pages/login'
import Signup from './pages/signup'


const App = () =>{
  return <BrowserRouter>
  <Routes>
    <Route path = '/' element ={<Layout/>}>
      <Route index element={<EventList/>}/>
      <Route path ="rings" element={<RingsList/>}/>
      <Route path ="addevent" element={<AddEvent/>}/>
      <Route path ="landing" element={<Landing/>}/>
      <Route path ="login" element={<Login/>}/>
      <Route path ="signup" element={<Signup/>}/>
    </Route>
  </Routes>
  </BrowserRouter>

}
export default App
