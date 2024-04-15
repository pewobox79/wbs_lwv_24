import Footer from "../components/Footer"
import Header from "../components/Header"
import {Outlet} from 'react-router-dom'


const MainLayout = ({ children }) => {

    // <Outlet/> => Ecosystem von React-Router-Dom
    // {children} => EcoSystem ReactJS
    // beide haben die aufgabe, Kindelemente zu rendern
    return <>
        <Header />
        <Outlet/> 
        {children}
        <Footer />
    </>
}

export default MainLayout
