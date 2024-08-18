import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import Banner from '../components/Home/Banner'
import Products from '../pages/Home/Products'
const Main = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Banner/>
        <Products/>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
