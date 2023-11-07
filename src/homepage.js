export {createHomePage};


function createHomePage() {
    const mainContentArea = document.querySelector('#content');
    mainContentArea.style.cssText = 'display: flex;flex-direction: column;justify-content: center;align-items:center;min-height: 100vh';

    const testElement = document.createElement('p');
    testElement.textContent = 'TEST'


    function drawPage() {
        const headerElement = createHeader().addHeader(mainContentArea);
        const mainContentElement = createMainContent().addContent(mainContentArea);
        const infoContentElement = createInfoArea().addInfo(mainContentArea);
        const footerElement = createFooter().makeFooter(mainContentArea);
        
    };

    function clearMainContent() {
        const mainContentElement = document.querySelector('#mainContent');
        mainContentElement.innerHTML = '';
    };


    



    return {drawPage, clearMainContent}
};

function createHeader() {

    function addHeader(element) {
        const headerArea = document.createElement('div');

        headerArea.classList.add('headerArea');
        headerArea.style.cssText = 'display: flex;flex-direction:row;justify-content:space-between;align-items:center;width:80%;'

        //title Text
        const titleText = document.createElement('h1');
        titleText.textContent = 'Shrimp Bar';
        headerArea.appendChild(titleText);

        //headermenu
        const buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add('buttonWrapper');
        const homeButton = document.createElement('button');
        homeButton.id = 'home';
        homeButton.textContent = 'Home'
        const foodsButton = document.createElement('button');
        foodsButton.id = 'menu';
        foodsButton.textContent = 'Our Menu'
        const aboutButton = document.createElement('button');
        aboutButton.id = 'about';
        aboutButton.textContent = 'About Us'

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

function createMainContent() {

    function addContent(element) {
        const mainContentWrapper = document.createElement('div');
        mainContentWrapper.id = 'mainContent';
        mainContentWrapper.style.cssText = 'display:grid;grid-template:1fr / 1fr 1fr;width:80%;gap:5%;'

        // left content area ////////////////////
        const mainContentBoxLeft = document.createElement('div');

        const mainContentImageDiv = document.createElement('div');
        const mainContentImage = document.createElement('img');
        mainContentImageDiv.appendChild(mainContentImage);
        mainContentImageDiv.classList.add('mainImage');
        mainContentBoxLeft.appendChild(mainContentImageDiv);

        const mainContentTextDiv = document.createElement('div');
        const mainContentText = document.createElement('p');
        mainContentText.textContent = 'Welcome to Shrimp Bar. The Definitive Shrimp Restaurant of Krumpotia.';
        mainContentTextDiv.appendChild(mainContentText);
        mainContentTextDiv.classList.add('mainText');
        mainContentBoxLeft.appendChild(mainContentTextDiv);


        
        mainContentWrapper.appendChild(mainContentBoxLeft);

        // right content area ///////////////6
        const mainContentBoxRight = document.createElement('div');

        const mainAboutTextDiv = document.createElement('div');
        const mainAboutText = document.createElement('p');
        mainAboutText.textContent = 'What sets us apart?';
        mainAboutTextDiv.appendChild(mainAboutText);
        

        const mainAboutTextList = document.createElement('ul');
        const listElements = ['Always Fresh Shrimp', 'World Class Chefs', 'Super High Quality Ingredients', 'Love, Passion, and Care', 'A Distinctive Menu', 'Awarded: Krumpotia\'s Best Seafood Restaurant'];
        for (let i=0;i<listElements.length;i++) {
            const listElement = document.createElement('li');
            listElement.textContent = listElements[i];
            mainAboutTextList.appendChild(listElement);
        };
        mainAboutTextDiv.appendChild(mainAboutTextList);

        mainContentBoxRight.appendChild(mainAboutTextDiv);
        mainContentWrapper.appendChild(mainContentBoxRight);




        element.appendChild(mainContentWrapper);
        return(mainContentWrapper);


    };


    return {addContent}
};


//// INFO AREA FACTORY ///////////////////////////

function createInfoArea() {

    function addInfo(element) {
        const mainInfoArea = document.createElement('div');
        mainInfoArea.style.cssText = 'display:grid;grid-template: 1fr / 1fr 1fr 1fr;width: 80%;gap: 20px;'


        /// left info div ////////////
        const leftInfoDiv = document.createElement('div');
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
        const rightInfoContent = document.createElement('p');
        rightInfoContent.textContent = 'We are happy to announce that from 1st of July till the end of September our outdoor seating area is open, with excellent views of the Grand City of Krumpotia';
        const rightInfoContentTwo = document.createElement('p');
        rightInfoContentTwo.textContent = 'Every 2nd Friday we are hosting a themed Salmon and Friends even, which puts Salmon and Salmon based meals in focus.'
        rightInfoDiv.appendChild(rightInfoContent);
        rightInfoDiv.appendChild(rightInfoContentTwo);




        mainInfoArea.appendChild(rightInfoDiv);



        element.appendChild(mainInfoArea);
        return(mainInfoArea);

    };


    return{addInfo}
};


///// FOOTER

function createFooter() {

    function makeFooter(element) {
        const mainFooterArea = document.createElement('div');
        mainFooterArea.style.cssText = 'margin-top:auto;'
        const mainFooterText = document.createElement('p');
        const currentYear = new Date().getFullYear();
        mainFooterText.textContent = `Copyright @${currentYear} Shrimp Bar`;
        mainFooterArea.appendChild(mainFooterText);

        element.appendChild(mainFooterArea);
        return(mainFooterArea);
    };


    return {makeFooter}
};