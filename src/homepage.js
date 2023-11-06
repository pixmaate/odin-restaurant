export {createHomePage};


function createHomePage() {

    function drawPage() {
        addHeader();
    };

    function addHeader() {
        const mainContentArea = document.querySelector('#content');
        const headerArea = document.createElement('div');

        headerArea.classList.add('headerArea');

        //title Text
        const titleText = document.createElement('h1');
        titleText.textContent = 'Shrimp Bar';
        headerArea.appendChild(titleText);



        //append header to Content
        mainContentArea.appendChild(headerArea);


    };



    return {drawPage}
}