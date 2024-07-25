import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout'
import EventList from './pages/eventList'
import RingsList from './pages/ringsList'
import AddEvent from './pages/addevent'


const App = () =>{
  return <BrowserRouter>
  <Routes>
    <Route path = '/' element ={<Layout/>}>
      <Route index element={<EventList/>}/>
      <Route path ="rings" element={<RingsList/>}/>
      <Route path ="addevent" element={<AddEvent/>}/>
    </Route>
  </Routes>
  </BrowserRouter>

}
export default App
