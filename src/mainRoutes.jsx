
import GlobalStyle from "./globalStyle"
import { Routes, Route, } from 'react-router-dom';
import { Home } from "./pages/home"
import { Infos } from '../src/pages/infos';
import { Product } from "./pages/products";
import { Footer } from "./components/footer";
export const MainRoutes = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Infos" element={<Infos />} />
                <Route path="/products/:slug" element={<Product />} />
            </Routes>
            <Footer />
            <GlobalStyle />
        </>
    )
}