
import GlobalStyle from "./globalStyle"
import { Routes, Route, } from 'react-router-dom';
import { Home } from "./pages/home"
import { Infos } from '../src/pages/infos';
export const MainRoutes = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Infos" element={<Infos />} />
            </Routes>

            <GlobalStyle />
        </>
    )
}