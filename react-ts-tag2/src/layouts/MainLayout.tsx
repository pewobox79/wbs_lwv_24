import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { UserContext, ThemeContext } from '../store/contextData'
import { useState } from 'react'

type LayoutType = {
    children?: React.ReactElement[] | React.ReactElement
}
// UNION TYPE "|" ist der OR operator

const MainLayout = ({ children }: LayoutType) => {

    const [user, setUser] = useState(false);
    const [theme, setTheme] = useState("dark")
    return <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <ThemeContext.Provider value={theme}>
            <Outlet />
            {children}
        </ThemeContext.Provider>
        <Footer />
    </UserContext.Provider>
}

export default MainLayout
