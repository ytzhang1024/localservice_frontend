import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Navbar } from "./components/Navbar"
import AddService from './pages/provider/AddService'
import ServiceRequest from './pages/provider/ServiceRequest'
import ServiceList from './pages/provider/ServiceList'
import Profile from './pages/provider/Profile'
import ServiceDetail from './pages/provider/ServiceDetail'
import service from './provider_data/services.json'

function ProviderRoutes() {

  return (
    <>
      <Navbar />
      <Container className = "mb-4"> 
        <Routes>
          <Route path='ServiceList' element={<ServiceList />} />
          <Route path='AddService' element={<AddService />} />
          <Route path='ServiceRequest' element={<ServiceRequest />} />
          <Route path='Profile' element={<Profile />} />
          <Route path='ServiceList/ServiceDetail' element={<ServiceDetail />} />
      </Routes>
      
      </Container>
    </>
    
      

    
  )

  //   <MyLayoutProvider>
  //     <Routes>
  //     <Route path='Addservice' element={<AddService />} />
  //     <Route path='ServiceRequest' element={<ServiceRequest />} />
  //     <Route path='ServiceList' element={<ServiceList />} />
  //     {/* <Route path='dashboard' element={<Dashboard/>} /> */}
  //     </Routes>
  //   </MyLayoutProvider>
  // )
}

export default ProviderRoutes