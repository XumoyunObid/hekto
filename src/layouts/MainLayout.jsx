import { Outlet } from "react-router"
import Footer from "./footer/Footer"
import Header from "./header/Header"

const MainLayout = () => {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default MainLayout