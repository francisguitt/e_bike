
import * as C from './style';
import { FloatingWhatsApp } from '../../components/whatsapFloating';
import { Link } from 'react-router-dom';
export const Footer = () => {
    const linkAuthor = "https://www.instagram.com/guittzoom";
    const linkFacebook = "https://www.facebook.com/";
    const linkInstagram = "https://www.instagram.com/";
    const LinkTwiter = "https://www.twitter.com/";
    return (

        <>
            <C.FooterContainer>
                <FloatingWhatsApp />
                <C.FooterContent>
                    <C.FooterContentInfos>
                        <C.FooterIcons>
                            <Link to={linkFacebook}><C.FacebookIcons /></Link>
                            <Link to={linkInstagram}><C.InstagramIcons /></Link>
                            <Link to={LinkTwiter}><C.TwitterIcons /></Link >
                        </C.FooterIcons>
                    </C.FooterContentInfos>
                    <C.FooterRightReserved>
                        <C.FooterRightReservedText>
                            E-bike global &copy; 2024 all rights reserved
                        </C.FooterRightReservedText>
                    </C.FooterRightReserved>
                  {/*  <C.FooterAuthor>
                      <C.FooterAuthorText
                            href={linkAuthor}>
                            Desenvolvido com
                            <C.IconHeart>  &#10084;  </C.IconHeart>
                            por guittzoom</C.FooterAuthorText>
                    </C.FooterAuthor>*/}
                </C.FooterContent>
            </C.FooterContainer>
        </>
    )
}