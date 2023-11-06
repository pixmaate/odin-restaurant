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


        // left content area
        const mainContentBoxLeft = document.createElement('div');
        const mainContentImageDiv = document.createElement('img');
        const mainContentImage = document.createElement('img');
        mainContentImageDiv.appendChild(mainContentImage);


        
        mainContentWrapper.appendChild(mainContentBoxLeft);

        // right content area
        const mainContentBoxRight = document.createElement('div');


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