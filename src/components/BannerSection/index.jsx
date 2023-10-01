import { username } from "../../data/user.js"
import { DefaultButton } from "../../fragments/buttons/DefaultButton/index.jsx"
import { Label } from "../../fragments/text/Label/index.jsx"
import { Paragraph } from "../../fragments/text/Paragraph/index.jsx"
import { Title1 } from "../../fragments/text/Title1/index.jsx"
import banner from'../../../src/assets/banner-img.png'
import './styles.css'

export const BannerSection = ({useEnglish}) => {
    return (
        <section id="banner-section">
            <div id="banner__text-container">
                <Label>{username}</Label>
                <Title1>{useEnglish? "Welcome to my Portfolio":"Bem vindo ao meu portfólio"}</Title1>
                <Paragraph>"Creativity is the fuel that transforms dreams into extraordinary realities."</Paragraph>
                <DefaultButton><a href="https://www.linkedin.com/in/samuel-oliveira-4643351a1/" target="_blank">{useEnglish ? "Know More":"Saiba Mais"}</a></DefaultButton>
            </div>
            <img src={banner} alt="Imagem de telas desenvolvendo códigos no VS code" />
        </section>
    )
}