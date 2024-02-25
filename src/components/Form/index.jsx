

import { useState } from 'react';
import * as C from "./style";
import { phoneNumbers } from "../../utils/numbers";
import { FormContainer, FormGroup, SubmitButton } from './style';

export const FormInput = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');


    const emailRegex = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const validateEmail = (email) => {
        const lowercaseEmail = email.toLowerCase();

        const isValidFormat = emailRegex.test(lowercaseEmail);

        // Verifica se o provedor de e-mail é válido (ex: gmail.com)
        const validProviders = ["gmail.com", "yahoo.com", "outlook.com"];
        const emailParts = lowercaseEmail.split("@");
        const isValidProvider = validProviders.includes(emailParts[1]);

        return isValidFormat && isValidProvider;
    };

    const phoneNumber = phoneNumbers.num;
    const validatePhone = (phone) => {
        const re = /^[0-9]{11}$/;
        return re.test(phone);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '') {
            setNameError('Por favor, insira seu nome.');
            return;
        } else {
            setNameError('');

        }

        if (email.trim() === '' || !validateEmail(email)) {
            setEmailError('Por favor, insira um e-mail válido.');
            return;
        } else {
            setEmailError('');
        }

        if (!validatePhone(phone)) {
            setPhoneError('Por favor, insira um número de celular válido.');
            return;
        } else {
            setPhoneError('');
            setName('');
            setEmail('');
            setPhone('')
            alert("Obrigado por se inscrever ")
        }
        const message = `Nome:  ${name}%0AEmail: ${email}%0ATelefone: ${phone}`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        window.open(whatsappURL, '_blank');
    }

    return (
        <C.FormContainer>
            <C.Titlearea>
                <C.TitleAreaText>Cadastre-se para receber nossa newslatter </C.TitleAreaText>
            </C.Titlearea>
            <C.FormArea onSubmit={handleSubmit}>
                <C.FormGroup>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && <span>{nameError}</span>}
                </C.FormGroup>
                <C.FormGroup>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <span>{emailError}</span>}
                </C.FormGroup>
                <FormGroup>
                    <label htmlFor="phone">Número de Celular:</label>
                    <input
                        type="number"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {phoneError && <span>{phoneError}</span>}
                    <SubmitButton type="submit">Enviar</SubmitButton>
                </FormGroup>
            </C.FormArea>
        </C.FormContainer>
    );
}


