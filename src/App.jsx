
import './App.css'
import {Navigate, Route, Routes } from 'react-router-dom'
// import { SignIn } from './Components/SignIn.jsx'
import {LoginPage} from './Pages/LoginPage.jsx'
import Home from './Pages/Home.jsx'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />


      <Route path= '/login' element = {<LoginPage/>}/>
      <Route path = '/home' element = {<Home/>}/>
      <Route path = '/*' element = {<h1>404 error. Chief you are lost</h1>}/>
    </Routes>
     

    </>
  )
}

export default App
