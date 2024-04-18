import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import BlogPage from "../pages/BlogPage";
import SingleArticle from "../components/BlogSection/SingleArticle";
import ProtectedRoute from "../layouts/ProtectedRoute";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Homepage />} />
            <Route path="login" element={<LoginPage/>} />

            <Route path="blog" element={<ProtectedRoute/>}>
                <Route index element={<BlogPage/>}/>
                <Route path=":id" element={<SingleArticle/>}/>
            </Route>
        </Route>
    )
)