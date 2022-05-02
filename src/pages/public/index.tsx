import React from "react";
import styled from "styled-components";
import imgSchedule from "../../assets/imgs//schedule.svg";
import LoginOrRegister from "./login";
const Container = styled.div`
  display: flex;
  `;
const LeftBar = styled.div`
width: 36.5vw;
height: 100vh;
background-color: #1F1F1F;
`;
const ScheduleImg = styled.img`
width: 90%;
min-width: 20rem;
height: 59.8rem;
`;

const RightBar = styled.div`
width: 63.5vw;
height: 100vh;
display: flex;
align-items: flex-end;
justify-content: center;
background-color: #4A4B4B;
background-repeat: no-repeat;
background-size: cover;
`;

const TemplateLogin: any = (props: any): any => {
    return (
        <Container>
            <LeftBar>
                <LoginOrRegister />
            </LeftBar>
            <RightBar>
                <ScheduleImg src={imgSchedule} />
            </RightBar>
        </Container>
    )
}
export default TemplateLogin;