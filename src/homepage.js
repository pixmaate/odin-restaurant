export {createHomePage};
import homeImage from './shrimpnoodles.jpg';
import bulletIcon from './shrimp.png';



function createHomePage(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor) {
    const mainContentArea = document.querySelector('#content');
    mainContentArea.style.cssText = `display: flex;flex-direction: column;justify-content: center;align-items:center;min-height: 100vh;background-color:${secondaryColorShade}`;

    const testElement = document.createElement('p');
    testElement.textContent = 'TEST'


    function drawPage() {
        const isHeader = document.querySelector('#header');
        const isFooter = document.querySelector('#footer');
        if (isHeader) {

        }
        else {
            const headerElement = createHeader(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor).addHeader(mainContentArea);

        };
        const headerElement = document.querySelector('#header');
        
        const mainContentElement = createMainContent(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor).addContent(headerElement);
        const infoContentElement = createInfoArea(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor).addInfo(mainContentElement);
        if (isFooter) {

        }
        else {
            const footerElement = createFooter(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor).makeFooter(mainContentArea);

        };
        
    };

    function clearMainContent() {
        const mainContentElement = document.querySelector('#mainContent');
        if (mainContentElement) {
            mainContentElement.innerHTML = '';
            mainContentElement.style.cssText = '';
            mainContentElement.remove();
        };
        

        const infoContentElement = document.querySelector('#infoContent');
        if (infoContentElement) {
            infoContentElement.innerHTML = '';
            infoContentElement.style.cssText = '';
            infoContentElement.remove();
        };
       
    };


    



    return {drawPage, clearMainContent}
};

function createHeader(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor) {

    function addHeader(element) {
        const headerArea = document.createElement('div');
        headerArea.id = 'header';
        headerArea.classList.add('headerArea');
        headerArea.style.cssText = `display: flex;flex-direction:row;justify-content:space-between;align-items:center;
                                    width:100%;background-color:${mainColor};box-shadow: 0 4px 2px -2px grey;padding:0px 20px 0px 20px;
                                    box-sizing:border-box;`

        //title Text
        const titleText = document.createElement('h1');
        titleText.textContent = 'Shrimp Bar';
        titleText.style.cssText = `color:darkblue;`;
        headerArea.appendChild(titleText);

        //headermenu
        const buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add('buttonWrapper');
        const homeButton = document.createElement('button');
        homeButton.id = 'home';
        homeButton.textContent = 'Home';
        homeButton.style.cssText = `background-color:#ffffff00;border-style:none;border-right:solid;border-color:${secondaryColorBright};
                                    font-size: 16px;color:darkblue;padding: 10px;
                                    `;
        homeButton.addEventListener('mouseenter', (event) => {
            event.target.style.cssText = `background-color:#ffffff80;border-style:none;border-right:solid;border-color:${secondaryColorBright};
            font-size: 16px;color:darkblue;padding: 10px;
            `;
        });

        homeButton.addEventListener('mouseleave', (event) => {
            event.target.style.cssText = `background-color:#ffffff00;border-style:none;border-right:solid;border-color:${secondaryColorBright};
            font-size: 16px;color:darkblue;padding: 10px;
            `;
        });

        const foodsButton = document.createElement('button');
        foodsButton.id = 'menu';
        foodsButton.textContent = 'Our Menu';
        foodsButton.style.cssText = `background-color:#ffffff00;border-style:none;border-right:solid;border-left:solid;border-color:${secondaryColorBright};
                                    font-size: 16px;color:darkblue;padding: 10px;
                                    `;
        foodsButton.addEventListener('mouseenter', (event) =>{
            event.target.style.cssText = `background-color:#ffffff80;border-style:none;border-right:solid;border-left:solid;border-color:${secondaryColorBright};
            font-size: 16px;color:darkblue;padding: 10px;
            `;
        });

        foodsButton.addEventListener('mouseleave', (event) =>{
            event.target.style.cssText = `background-color:#ffffff00;border-style:none;border-right:solid;border-left:solid;border-color:${secondaryColorBright};
            font-size: 16px;color:darkblue;padding: 10px;
            `;
        });



        const aboutButton = document.createElement('button');
        aboutButton.id = 'about';
        aboutButton.textContent = 'About Us';
        aboutButton.style.cssText = `background-color:#ffffff00;border-style:none;border-left:solid;border-color:${secondaryColorBright};
                                    font-size: 16px;color:darkblue;padding: 10px;
                                    `;

        aboutButton.addEventListener('mouseenter', (event) =>{
            event.target.style.cssText = `background-color:#ffffff80;border-style:none;border-left:solid;border-color:${secondaryColorBright};
            font-size: 16px;color:darkblue;padding: 10px;
            `;
        });
        aboutButton.addEventListener('mouseleave', (event) =>{
            event.target.style.cssText = `background-color:#ffffff00;border-style:none;border-left:solid;border-color:${secondaryColorBright};
            font-size: 16px;color:darkblue;padding: 10px;
            `;
        });

        buttonWrapper.appendChild(homeButton);
        buttonWrapper.appendChild(foodsButton);
        buttonWrapper.appendChild(aboutButton);

        headerArea.appendChild(buttonWrapper);



        //append header to Content
        element.appendChild(headerArea);
        return(buttonWrapper);


    };

    return {addHeader}

};

//// MAIN CONTENT /////////////

function createMainContent(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor) {

    function addContent(element) {
        const mainContentWrapper = document.createElement('div');
        mainContentWrapper.id = 'mainContent';
        mainContentWrapper.style.cssText = `display:grid;grid-template:1fr / 1fr 1fr;
                                            width:80%;gap:5%;background-color:${secondaryColor};
                                            border-style:double;border-color:${accentColor};border-radius: 10px;box-shadow: 5px 5px 5px grey;
                                            margin: 15px;padding:5%;`;

        // left content area ////////////////////
        const mainContentBoxLeft = document.createElement('div');
        mainContentBoxLeft.style.cssText = `background-color:${mainColorShade}CC;padding: 10px; display:flex;flex-direction:column;
                                            justify-content: center; align-items: center;border-radius: 5%;gap: 25px;
                                            `
        const mainContentImageDiv = document.createElement('div');
        const mainContentImage = document.createElement('img');
        mainContentImage.src = homeImage;
        mainContentImage.style.cssText = `width:250px;heigth:250px;border-radius: 50%;`
        mainContentImageDiv.appendChild(mainContentImage);
        mainContentImageDiv.classList.add('mainImage');
        mainContentBoxLeft.appendChild(mainContentImageDiv);

        const mainContentTextDiv = document.createElement('div');
        const mainContentText = document.createElement('p');
        mainContentText.textContent = 'Welcome to Shrimp Bar. The Definitive Shrimp Restaurant of Krumpotia.';
        mainContentText.style.cssText = `color: darkblue; text-align:center; font-weight:700;font-size:18px;
                                        `
        mainContentTextDiv.appendChild(mainContentText);
        mainContentTextDiv.classList.add('mainText');
        mainContentBoxLeft.appendChild(mainContentTextDiv);


        
        mainContentWrapper.appendChild(mainContentBoxLeft);

        // right content area ///////////////6
        const mainContentBoxRight = document.createElement('div');
        mainContentBoxRight.style.cssText = `background-color:${mainColorShade}CC;padding: 10px; display:flex;flex-direction:column;
                                            justify-content: center; align-items: center;border-radius: 5%;gap: 25px;
                                            `;


        const mainAboutTextDiv = document.createElement('div');
        mainAboutTextDiv.style.cssText = `color:darkblue;font-size:18px;padding:10px`
        const mainAboutText = document.createElement('p');
        mainAboutText.textContent = 'What sets us apart?';
        mainAboutText.style.cssText = `font-weight:700`;
        mainAboutTextDiv.appendChild(mainAboutText);
        

        const mainAboutTextList = document.createElement('ul');
        const listElements = ['Always Fresh Shrimp', 'World Class Chefs', 'Super High Quality Ingredients', 'Love, Passion, and Care', 'A Distinctive Menu', 'Awarded: Krumpotia\'s Best Seafood Restaurant'];
        for (let i=0;i<listElements.length;i++) {
            const listElement = document.createElement('li');
            listElement.textContent = listElements[i];
            listElement.style.cssText = `margin-top: 20px;list-style: url(${bulletIcon});`;
            mainAboutTextList.appendChild(listElement);
        };
        mainAboutTextDiv.appendChild(mainAboutTextList);

        mainContentBoxRight.appendChild(mainAboutTextDiv);
        mainContentWrapper.appendChild(mainContentBoxRight);




        element.after(mainContentWrapper);
        return(mainContentWrapper);


    };


    return {addContent}
};


//// INFO AREA FACTORY ///////////////////////////

function createInfoArea(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor) {

    function addInfo(element) {
        const mainInfoArea = document.createElement('div');
        mainInfoArea.id = 'infoContent';
        mainInfoArea.style.cssText = `display:grid;grid-template: 1fr / 1fr 1fr 1fr;width: 100%;gap: 20px;
                                    background-color:${secondaryColor};box-sizing:border-box;padding: 10px 10% 10px 10%;
                                    border-top: double;border-color:${accentColor};gap: 20px;color:darkblue;font-size:16px;
                                    `



        /// left info div ////////////
        const leftInfoDiv = document.createElement('div');
        leftInfoDiv.style.cssText = `display: flex;flex-direction:column;justify-content: center;align-items:center`;
        const leftInfoAddressHeader = document.createElement('p');
        leftInfoAddressHeader.textContent = 'You can find us at: ';
        leftInfoDiv.appendChild(leftInfoAddressHeader);
        const leftInfoAddress = document.createElement('p');
        leftInfoAddress.textContent = '124th Main Cikrotia Ave, Grand City of Krumpotia, The Republic of Krumpotia';
        leftInfoDiv.appendChild(leftInfoAddress);

        mainInfoArea.appendChild(leftInfoDiv);
        


        /// MID Info DIV ///////////////
        const midInfoDiv = document.createElement('div');
        const openingTimeText = document.createElement('p');
        openingTimeText.textContent = 'Hours: '
        midInfoDiv.appendChild(openingTimeText);

        const openingTimeList = document.createElement('ul');
        let openingHours = {Monday:[9,22], Tuesday:[9,22], Wednesday:[9,22], Thursday:[12,24], Friday:[12,'02'], Saturday:[12,'02'], Sunday:['Closed', 'Closed']};
        for (let key in openingHours) {
            const openingTimeContent = document.createElement('li');
            openingTimeContent.textContent = `${key}: ${openingHours[key][0]} - ${openingHours[key][1]}`;
            openingTimeList.appendChild(openingTimeContent);
        };
        midInfoDiv.appendChild(openingTimeList);


        mainInfoArea.appendChild(midInfoDiv);


        /// Right info div ///////////////
        const rightInfoDiv = document.createElement('div');
        rightInfoDiv.style.cssText = `display: flex;flex-direction:column;justify-content: center;align-items:center;`;
        const rightInfoContent = document.createElement('p');
        rightInfoContent.textContent = 'We are happy to announce that from 1st of July till the end of September our outdoor seating area is open, with excellent views of the Grand City of Krumpotia';
        const rightInfoContentTwo = document.createElement('p');
        rightInfoContentTwo.textContent = 'Every 2nd Friday we are hosting a themed Salmon and Friends even, which puts Salmon and Salmon based meals in focus.'
        rightInfoDiv.appendChild(rightInfoContent);
        rightInfoDiv.appendChild(rightInfoContentTwo);




        mainInfoArea.appendChild(rightInfoDiv);



        element.after(mainInfoArea);
        return(mainInfoArea);

    };


    return{addInfo}
};


///// FOOTER

function createFooter(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor) {

    function makeFooter(element) {
        const mainFooterArea = document.createElement('div');
        mainFooterArea.id = 'footer';
        mainFooterArea.style.cssText = `margin-top:auto;background-color:${mainColor};width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center`
        const mainFooterText = document.createElement('p');
        const currentYear = new Date().getFullYear();
        mainFooterText.textContent = `Copyright @${currentYear} Shrimp Bar -|- Shrimp icons created by Aficons studio - Flaticon`;
        mainFooterArea.appendChild(mainFooterText);

        element.appendChild(mainFooterArea);
        return(mainFooterArea);
    };


    return {makeFooter}
};