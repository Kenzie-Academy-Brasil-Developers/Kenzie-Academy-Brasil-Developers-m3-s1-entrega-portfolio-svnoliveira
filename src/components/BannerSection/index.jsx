import { username } from "../../data/user.js"
import { DefaultButton } from "../../fragments/buttons/DefaultButton/index.jsx"
import { Label } from "../../fragments/text/Label/index.jsx"
import { Paragraph } from "../../fragments/text/Paragraph/index.jsx"
import { Title1 } from "../../fragments/text/Title1/index.jsx"
import banner from'../../../src/assets/banner-img.png'
import './styles.css'
export const BannerSection = () => {
    return (
        <section id="banner-section">
            <div id="banner__text-container">
                <Label>{username}</Label>
                <Title1>Bem vindo ao meu portfólio</Title1>
                <Paragraph>Uma frase interessante sobre mim</Paragraph>
                <DefaultButton>Saiba Mais</DefaultButton>
            </div>
            <img src={banner} alt="Imagem de telas desenvolvendo códigos no VS code" />
        </section>
    )
}