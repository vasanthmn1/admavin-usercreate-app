
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import UserViewPage from './pages/UserViewPage'
import EditUser from './pages/EditUser'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserViewPage />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  )
}

export default App
