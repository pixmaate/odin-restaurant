import { createHomePage } from "./homepage";

const mainColor = '#4DDAFF';
const mainColorShade = '#21E8F1';
const secondaryColor = '#45F2D6';
const secondaryColorShade = '#81F9B1';
const secondaryColorBright = '#BCFB8C';
const accentColor = '#F9F871';


const homePage = createHomePage(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor);


homePage.drawPage();

