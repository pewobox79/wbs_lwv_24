import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

type LayoutType={
    children?: React.ReactElement[] | React.ReactElement
}
// UNION TYPE "|" ist der OR operator

const MainLayout = ({children}:LayoutType) => {
    return <>
        <Header />
        <Outlet />
        {children}
        <Footer />
    </>
}

export default MainLayout
