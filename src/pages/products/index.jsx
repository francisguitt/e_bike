import * as C from './index';
import { useParams } from 'react-router-dom';
import { WhatsAppButton } from '../../services/whatsappButton';

export const Product = () => {

    const {slug} = useParams();


    return (
        <div>
            <WhatsAppButton itemName={slug}/>
        </div>
    );
}

