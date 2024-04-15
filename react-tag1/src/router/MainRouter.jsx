import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import AboutUs from '../pages/AboutUs'
import MainLayout from '../layouts/MainLayout'
import UsersPage from '../pages/UsersPage'
import SingleUser from '../components/Users/components/SingleUser'


// localhost:5173/users/3
const mainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="aboutus" element={<AboutUs />} />

            <Route path="users" >
                <Route index element={<UsersPage />} />
                <Route path=":id" element={<SingleUser />} />
            </Route>


        </Route>
    )
)

export { mainRouter }