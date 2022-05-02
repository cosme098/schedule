import React from "react";
import styled from "styled-components";
import "../../../assets/stylesGlobal/index.css"
const ContainerContent = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const ContainerLogin = styled.div`
display: flex;
width: 70%;
height: 70%;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Title = styled.h1`
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 72px;
color: #FF0038;
`;
const Subtitle = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 54px;
color: #B9B9B9;
`;
const Fields = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 10rem;
gap: 1rem;
`;

const LoginOrRegister: any = (props: any): any => {
    const [isLogin, setIsLogin] = React.useState(true);
    const [email, setEmail] = React.useState<any>();
    const [password, setPassword] = React.useState<string>();

    const Login = () => {
        return (<ContainerLogin>
            <Title>Agenda Easy</Title>
            <Subtitle>Bem vindo</Subtitle>
            <input
                type="text"
                autoComplete="false"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            {email && <span>{email}</span>}
            {/* <Fields>
                <input type="text" autoComplete="false" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" autoComplete="false" className="input" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
            </Fields> */}
        </ContainerLogin>);
    }


    const Cadastre = () => {
        return (<>

        </>);
    }

    return (
        <ContainerContent>
            {isLogin ? <Login /> : <Cadastre />}
        </ContainerContent>
    )
}

export default LoginOrRegister;