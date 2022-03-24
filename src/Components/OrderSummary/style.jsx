import styled from 'styled-components';
import BgDesktop from "../../images/bgDesktop.png";
import BgMobile from "../../images/bgMobile.png";

export const BgSection = styled.section`
    height: 100vh;
    background-image: url(${BgDesktop});
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        background-image: url(${BgMobile});
    }
`;

export const BoxContainerDiv = styled.div`
    width: 24.1em;
    height: 36em;
    background-color: white;
    border-radius: 15px;

    @media screen and (max-width: 395px){
        width: 19.5em;
        height: 33rem;
    }
`;

export const ImageContainerHeaderBoxDiv = styled.div`
    position: relative;
`;

export const BgHeaderBoxDiv = styled.img`
    width: 100%;
    border-radius: 15px 15px 0 0;
`;

export const TextContainerDiv = styled.div`
    margin-top: 25px;
    text-align: center;
`;

export const TitleH1 = styled.h1`
    font-size: 24px;
    font-weight: 900;
`;

export const ParagraphContainerDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const ParagraphP = styled.p`
    max-width: 80%;
    font-size: 16px;
    margin-top: 15px;
    color: hsl(224, 23%, 55%);
`;

export const PlansContainerDiv = styled.div`
    background: hsl(225, 100%, 98%);
    margin: 1em 3em 2em 3em;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;

    @media screen and (max-width: 395px){
        margin: 1em 2em 1em 2em;
    }
`;

export const PlansLeftDiv = styled.div`
    display: flex;
    align-items: center;

    svg {
        fill: white;
    }
`;

export const PlansDetailsDiv = styled.div`
    display: block;
    margin-left: 10px;
`;

export const AnnualPlanH5 = styled.h5`
    font-weight: 900;
`;

export const PricePlanP = styled.p`
    font-size: 12px;
    margin-top: 5px;
    color: hsl(224, 23%, 55%);
`;

export const PlansRightDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const ChangePlanLinkA = styled.a`
    color: hsl(245, 75%, 52%);
    font-weight: 700;
    transition: 0.3s ease-in-out;
    font-size: 13px;

    &:hover{
        color: hsl(245, 75%, 62%);
        text-decoration: none;
    }
`;

export const ButtonDiv = styled.div`
    display: grid;
    justify-content: center;
`;

export const PaymentButton = styled.button`
    padding: 12px 80px;
    color: hsl(225, 100%, 98%);
    font-family: 'Red Hat Display', sans-serif;
    background-color: hsl(245, 75%, 52%);
    border-radius: 10px;
    font-weight: 700;
    border: none;
    box-shadow: 0 0.5em 3em -1em hsl(245deg 75% 52%);
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: hsl(245, 75%, 62%);
    }

    @media screen and (max-width: 395px){
        padding: 0.8rem 3rem;
    }
`;

export const CancelButton = styled.div`
    margin: 20px 80px 10px 80px;
    text-align: center;
    color: hsl(224, 23%, 55%);
    background-color: transparent;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 700;
    font-size: 14px;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        color: black;
    }
`;