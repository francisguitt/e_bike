// import { useState } from 'react';
// import * as C from './style';
// import { VerticalMenu } from '../vertical_menu';

// export const Header = () => {

//     const [isOpen, setIsOpen] = useState(false);
//     const handleOpenMenu = () => {
//         if (!isOpen) {
//             // alert("o menu abriu")
//             setIsOpen(true)
//         } else {
//             // alert("o menu fechou")
//             setIsOpen(false);
//         }
//     }
//     return (

//         <>
//             <C.HeaderTop>
//                 <C.HeaderTopArea>
//                     {isOpen ? <C.MenuClose onClick={handleOpenMenu} /> : <C.MenuHamburgerIcon onClick={handleOpenMenu} />}
//                     <C.HeaderTopTitle>ebike-global</C.HeaderTopTitle>
//                 </C.HeaderTopArea>
//             </C.HeaderTop>
//             {isOpen ? (<VerticalMenu />) : (null)}
//         </>
//     )
// }
import { useState, useEffect } from 'react';
import * as C from './style';
import { VerticalMenu } from '../vertical_menu';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768); // Defina a largura do desktop conforme necessário
        };

        handleResize(); // Chamada inicial
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <C.HeaderTop>
                <C.HeaderTopArea>
                    {isDesktop ? (''
                        // <C.HeaderTopTitle>ebike-global</C.HeaderTopTitle>
                    ) : (
                        <>
                            {isOpen ? (
                                <C.MenuClose onClick={handleOpenMenu} />
                            ) : (
                                <C.MenuHamburgerIcon onClick={handleOpenMenu} />
                            )}
                        </>
                    )}
                    <C.HeaderTopTitle>ebike-global</C.HeaderTopTitle>
                </C.HeaderTopArea>
            </C.HeaderTop>
            {isDesktop || isOpen ? <VerticalMenu /> : null}
        </>
    );
};
