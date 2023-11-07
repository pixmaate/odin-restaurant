export {createHomePage};


function createHomePage() {
    const mainContentArea = document.querySelector('#content');

    const testElement = document.createElement('p');
    testElement.textContent = 'TEST'


    function drawPage() {
        const headerElement = createHeader().addHeader(mainContentArea);
        const mainContentElement = createMainContent().addContent(headerElement);
        
    };

    



    return {drawPage}
};

function createHeader() {

    function addHeader(element) {
        const headerArea = document.createElement('div');

        headerArea.classList.add('headerArea');

        //title Text
        const titleText = document.createElement('h1');
        titleText.textContent = 'Shrimp Bar';
        headerArea.appendChild(titleText);

        //headermenu
        const buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add('buttonWrapper');
        const homeButton = document.createElement('button');
        homeButton.textContent = 'Home'
        const foodsButton = document.createElement('button');
        foodsButton.textContent = 'Our Menu'
        const aboutButton = document.createElement('button');
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

function createMainContent() {

    function addContent(element) {
        const mainContentWrapper = document.createElement('div');


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




        element.after(mainContentWrapper);


    }


    return {addContent}
};

function createInfoArea() {

    function addInfo(element) {

    };


    return{addInfo}
};

function createFooter() {

    function makeFooter(element) {

    };


    return {makeFooter}
};