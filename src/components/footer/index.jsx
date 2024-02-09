
import * as C from './style';
import {FloatingWhatsApp} from '../../components/whatsapFloating';
export const Footer = () => {
    const linkUrl = "https://www.instagram.com/guittzoom/";
    return (

        <>
            <C.FooterContainer>
                <FloatingWhatsApp/>
                <C.FooterContent>
                    <C.FooterContentInfos>
                        <C.FooterIcons>
                            <C.FacebookIcons />
                        </C.FooterIcons>
                        <C.InstagramIcons />
                        <C.TwitterIcons />
                    </C.FooterContentInfos>
                    <C.FooterRightReserved>
                        <C.FooterRightReservedText>
                            E-bike global &copy; 2024 all rights reserved
                        </C.FooterRightReservedText>
                    </C.FooterRightReserved>
                    <C.FooterAuthor>
                        <C.FooterAuthorText
                            href={linkUrl}>
                            Desenvolvido com
                            <C.IconHeart>  &#10084;  </C.IconHeart>
                            por guittzoom</C.FooterAuthorText>
                    </C.FooterAuthor>
                </C.FooterContent>
            </C.FooterContainer>
        </>
    )
}