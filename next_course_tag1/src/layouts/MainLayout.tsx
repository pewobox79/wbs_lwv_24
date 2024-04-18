import Footer from "@/components/Footer"
import Header from "@/components/Header"

type LayoutType = {
    children: React.ReactNode
}

const MainLayout = ({ children }: LayoutType) => {
    return <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
}

export default MainLayout