

import { useState } from 'react';
import * as C from "./style";
import { Email } from "../../utils/emails";

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
        const validProviders = ["gmail.com", "yahoo.com", "outlook.com"];
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
        // Construa o objeto FormData para enviar os dados do formulário
        const personalEmail = Email.personal_email;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);

        // Faça a requisição POST para o serviço FormSubmit
        fetch(`https://formsubmit.co/${personalEmail}`, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    // Se a resposta for bem-sucedida, limpe os campos do formulário
                    setName('');
                    setEmail('');
                    setPhone('');
                    alert("Seu e-mail foi enviado com sucesso!");
                } else {
                    // Se houver um erro na resposta, exiba uma mensagem de erro
                    alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
                }
            })
            .catch(error => {
                console.error('Erro ao enviar formulário:', error);
                alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
            });
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
                <C.SubmitButton type="submit"><C.TextButtonForm>Quero meu cupon  de 10%</C.TextButtonForm></C.SubmitButton>
            </C.FormArea>
        </C.FormContainer>
    );
}
