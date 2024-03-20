
import GlobalStyle from "./globalStyle"
import { Routes, Route, } from 'react-router-dom';
import { Home } from "./pages/home"
import { Infos } from '../src/pages/infos';
import { VideoDemo } from "./videos";
import { Product } from "./pages/products";
import { About } from "./pages/about";
import { Footer } from "./components/footer";
import { Contacts } from "./pages/contacts";
import { PixelInitializer } from "./components/Pixel"

export const MainRoutes = () => {
    return (
        <>
            <Routes>
                {/* <PixelInitializer /> */}
                <Route element={<PixelInitializer />} />
                <Route path="/" element={<Home />} />
                <Route path="/infos" element={<Infos />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/videos" element={<VideoDemo />} />
                <Route path="/products/:slug" element={<Product />} />
            </Routes>
            <Footer />
            <GlobalStyle />
        </>
    )
}