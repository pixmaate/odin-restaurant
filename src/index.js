import { createHomePage } from "./homepage";
import { createMenuPage } from "./menupage";
import { createAboutPage } from "./aboupage";


const mainColor = '#4DDAFF';
const mainColorShade = '#21E8F1';
const secondaryColor = '#45F2D6';
const secondaryColorShade = '#81F9B1';
const secondaryColorBright = '#BCFB8C';
const accentColor = '#F9F871';


const homePage = createHomePage(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor);
const menuPage = createMenuPage(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor);
const aboutPage = createAboutPage(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor)

function buttonSelector() {
    const homeBTN = document.querySelector('#home');
    const menuBTN = document.querySelector('#menu');
    const aboutBTN = document.querySelector('#about');

    homeBTN.addEventListener('click', (event)=>{
        homePage.clearMainContent();
        menuPage.clearMenuContent();
        aboutPage.clearPage();
        homePage.drawPage();
    });

    menuBTN.addEventListener('click', (event) =>{
        homePage.clearMainContent();
        menuPage.clearMenuContent();
        aboutPage.clearPage();
        menuPage.drawPage();
    });

    aboutBTN.addEventListener('click', (event) =>{
        homePage.clearMainContent();
        menuPage.clearMenuContent();
        aboutPage.clearPage();
        aboutPage.drawPage();
    });

};


homePage.drawPage();
buttonSelector();



