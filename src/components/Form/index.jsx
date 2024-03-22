

import { useState } from 'react';
import * as C from "./style";
import { Email } from "../../utils/emails";
import emailjs from '@emailjs/browser';
import { smtpProvider } from '../../utils/smtp';
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
        const validProviders = ["gmail.com", "gmail.com.br",
            "yahoo.com", "outlook.com",
            "uol.com", "uol.com.br",
            "hotmail.com",
            "hotmail.com.br",
            "icloud.com",
            "me.com",
            "mac.com",
            "aol.com",
            "aol.com.br"
        ];
        const emailParts = lowercaseEmail.split("@");
        const isValidProvider = validProviders.includes(emailParts[1]);
        return isValidFormat && isValidProvider;
    };

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
            setPhone('');
        }

        // const personalEmail = Email.personal_email;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);

        const templateParams = {
            from_name: name,
            from_email: email,
            from_number: phone
        }

        emailjs.send(`${smtpProvider.services_id}`,
            `${smtpProvider.template_id}`,
            templateParams,
            `${smtpProvider.public_key}`)
            .then((response) => {
                alert("Email enviado com sucesso!");
                console.log("email sucessfull !", response.status, response.text);
                setName('');
                setEmail('');
                setPhone('');
            }, (error) => {
                alert("Error ao enviar o email. tente novamente mais tarde");
                console.log("Error:", error);
            })
    }
    return (
        <C.FormContainer>
            <C.Titlearea>
                <C.TitleAreaText>Cadastre-se e receba seu desconto</C.TitleAreaText>
            </C.Titlearea>
            <C.FormArea onSubmit={handleSubmit}>
                <C.FormGroup>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && <span>{nameError}</span>}
                </C.FormGroup>
                <C.FormGroup>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <span>{emailError}</span>}
                </C.FormGroup>
                <C.FormGroup>
                    <label htmlFor="phone">Whatsapp</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {phoneError && <span>{phoneError}</span>}
                </C.FormGroup>
                <C.SubmitButton type="submit"><C.TextButtonForm>Quero meu cupom  de 10%</C.TextButtonForm></C.SubmitButton>
            </C.FormArea>
        </C.FormContainer>
    );
}
