import * as C from './style';
import { Link } from 'react-router-dom';
export const VerticalMenu = () => {
    return (
        <>
            <C.VerticalMenuArea>
                <C.MenuVerticalNavLink>
                    <C.VerticalMenuLink>Contatos</C.VerticalMenuLink>
                    <C.VerticalMenuLink>Sobre</C.VerticalMenuLink>
                    <C.VerticalMenuLink>Lojas</C.VerticalMenuLink>
                    <C.VerticalMenuLink>Produtos</C.VerticalMenuLink>
                </C.MenuVerticalNavLink>
            </C.VerticalMenuArea>
        </>
    )
}
