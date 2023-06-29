import { Navigate, Route, Routes } from "react-router-dom"

import Layout from "./components/layout"
import NavBar from "./components/navbar"
import Footer from "./components/footer"

import Inicio from "./components/page/inicio";
import Galeria from "./components/page/galeria";
import Lista from "./components/page/lista";
import Login from "./components/page/login";
import Contacto from "./components/page/contacto";

function App() {
    return (
    <>
      <div className="bg-slate-500 h-screen">
        <NavBar />
       <Layout>
       
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/galeria' element={<Galeria></Galeria>}></Route>
        <Route path='/lista' element={<Lista></Lista>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/contacto' element={<Contacto></Contacto>}></Route>

        <Route path='*' element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
       
       </Layout>  
      <Footer />    
      </div>      
    </>
  )
}

export default App
