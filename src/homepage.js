export {createHomePage};


function createHomePage() {
    const mainContentArea = document.querySelector('#content');


    function drawPage() {
        const headerElement = createHeader().addHeader(mainContentArea);
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



        //append header to Content
        element.appendChild(headerArea);


    };

    return {addHeader}

};