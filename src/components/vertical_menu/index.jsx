import * as C from './style';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const VerticalMenu = () => {
    const [selectedLink, setSelectedLink] = useState(false);


    const scrollToHomePreview = () => {
        const homePreviewElement = document.getElementById('homepreview');
        if (homePreviewElement) {
            homePreviewElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <C.VerticalMenuArea>
                <C.MenuVerticalNavLink>
                    <C.VerticalMenuLink 
                     to="/contacts"
                     selected={selectedLink ? false:true}
                     onClick={()=>setSelectedLink ? false:true}
                    >Contatos</C.VerticalMenuLink>
                    <C.VerticalMenuLink to="/about">Sobre</C.VerticalMenuLink>
                </C.MenuVerticalNavLink>
            </C.VerticalMenuArea>
        </>
    )

}
