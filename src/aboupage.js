export {createAboutPage};

function createAboutPage(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor) {

    function drawPage() {
        const headerElement = document.querySelector('#header');

        const aboutPageElement = aboutPage(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor).fillPage(headerElement)

    };

    function clearPage() {
        const aboutPageElement = document.querySelector('#aboutPage');
        if (aboutPageElement) {
            aboutPageElement.innerHTML = '';
            aboutPageElement.remove();
        };
    }

    return {drawPage,clearPage}
};


function aboutPage(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor) {

    function fillPage(element) {
        const aboutPageWrapper = document.createElement('div');
        aboutPageWrapper.id = 'aboutPage';
        aboutPageWrapper.style.cssText = `background-color:${secondaryColorBright};margin: 5%;border-style:double;border-color:${accentColor};
        padding: 5%;display:flex;flex-direction:column;gap:20px;justify-content:center;align-items:center;color:darkblue;width:80%;border-radius: 20px`;

        const pageTitle = document.createElement('p');
        pageTitle.textContent = 'About Us';
        aboutPageWrapper.appendChild(pageTitle);
        pageTitle.style.cssText = 'font-size: 24px;font-weight:600'


        const pageParaOne = document.createElement('p');
        pageParaOne.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu iaculis ipsum. Curabitur erat lacus, placerat sed tortor in, semper iaculis ipsum. Aliquam consectetur gravida porttitor. Cras finibus gravida pharetra. Nam facilisis ipsum vel urna molestie, suscipit volutpat sem consectetur. Suspendisse quis iaculis est. Vivamus congue faucibus posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer justo mauris, bibendum non mi id, rutrum auctor purus. Donec tristique tincidunt risus a rhoncus. Praesent enim libero, vestibulum eget ultricies ut, mollis in mi. Fusce odio lorem, venenatis ac ultricies sit amet, maximus sit amet felis. Donec ut erat felis. Curabitur nec scelerisque sem. Nam luctus est vitae quam tristique pulvinar ut sit amet leo.        `
        aboutPageWrapper.appendChild(pageParaOne);
        const pageParaTwo = document.createElement('p');
        pageParaTwo.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu iaculis ipsum. Curabitur erat lacus, placerat sed tortor in, semper iaculis ipsum. Aliquam consectetur gravida porttitor. Cras finibus gravida pharetra. Nam facilisis ipsum vel urna molestie, suscipit volutpat sem consectetur. Suspendisse quis iaculis est. Vivamus congue faucibus posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer justo mauris, bibendum non mi id, rutrum auctor purus. Donec tristique tincidunt risus a rhoncus. Praesent enim libero, vestibulum eget ultricies ut, mollis in mi. Fusce odio lorem, venenatis ac ultricies sit amet, maximus sit amet felis. Donec ut erat felis. Curabitur nec scelerisque sem. Nam luctus est vitae quam tristique pulvinar ut sit amet leo.        `
        aboutPageWrapper.appendChild(pageParaTwo);


        



        element.after(aboutPageWrapper);
        return(aboutPageWrapper);
    }


    return{fillPage}
};