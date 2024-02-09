import * as C from './index';
import { useParams } from 'react-router-dom';
import { WhatsAppButton } from '../../services/whatsappButton';

export const Product = () => {

    const {slug} = useParams();


    return (
        <div>
            {/* <h2>{name}</h2>
            <p>{description}</p> */}

            <WhatsAppButton itemName={slug}/>
        </div>
    );
}

