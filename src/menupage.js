export {createMenuPage};
import shrimpCocktail from './shrimp_cocktail.jpg';
import shrimpPasta from './shrimp_pasta.jpg';
import shrimpSalmon from './shrimp_salmon.jpg';
import friedShrimp from './fried_shrimp.jpg';


function createMenuPage(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor) {

    function drawPage() {
        const headerElement = document.querySelector('#header');

        const foodWrapper = createFoodWrapper(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor).addFoodWrapper(headerElement);


        const friedShrimpElement = createFoodBox(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor).addFoodBox(foodWrapper,friedShrimp,'Fried Shrimp','Our staple meal. The one that made this restaurant one of the best in the whole of Krumpotia. Enjoy our excellent fried shrimp that comes with our very own home-made garlic dipping sauce. Yummy!','150');
        const shrimpPastaElement = createFoodBox(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor).addFoodBox(foodWrapper,shrimpPasta,'Shrimp Pasta','Did you say Spaghetti? Those who love a good shrimp spaghetti will absolutely fall in love with our Shrimp Pasta!','120');
        const shrimpSalmonElement = createFoodBox(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor).addFoodBox(foodWrapper,shrimpSalmon,'Shrimp Salmon','Shrimp + Salmon. Simple as that. It\s like Surf and Turf but we\'we got salmon instead of beef. Surf and Fish maybe? Regardless, you\'ll love the taste.','250');
        const shrimpCocktailElement = createFoodBox(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor).addFoodBox(foodWrapper,shrimpCocktail,'Shrimp Cocktail','Enjoy a laid-back Shrimp Cocktail along with your diner. Made with high-quality gin.','15');
    }

    function clearMenuContent() {
        const foodWrapper = document.querySelector('#foodWrapper');

        if (foodWrapper) {
            foodWrapper.innerHTML = '';
            foodWrapper.remove();
        };

    }


    return{drawPage,clearMenuContent}
};

function createFoodWrapper(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor){
    
    function addFoodWrapper(element) {
        const foodWrapper = document.createElement('div');
        foodWrapper.id = 'foodWrapper';
        foodWrapper.style.cssText = `display: flex;flex-direction:column;gap:20px;justify-content:center;align-items:center;
        ;border-style:double;border-radius: 25px;padding: 20px;
        box-shadow:5px 5px 5px grey;margin: 5%;width: 80%;background-color:${secondaryColor};border-color:${accentColor}`

        element.after(foodWrapper);
        return(foodWrapper);
    };

    return {addFoodWrapper};
};

function createFoodBox(mainColor,mainColorShade,secondaryColor,secondaryColorShade,secondaryColorBright,accentColor) {

    function addFoodBox(element, imgsrc, title, description, price) {
        const foodBox = document.createElement('div');
        foodBox.style.cssText = `background-color:${mainColorShade};border-radius: 10px; border-style: dashed;border-color:${accentColor};
        display: grid;grid-template:0.5fr 1fr 0.5fr /1fr 1fr;padding: 10px;gap:10px;color:darkblue;align-items:center;width:85%;
        `;

        const foodBoxImage = document.createElement('img');
        foodBoxImage.style.cssText = `grid-column:1/2;grid-row:1/4;width:300px;height:300px;border-radius: 15%;box-shadow:5px 5px 5px grey;justify-self:center;`;
        foodBoxImage.src = imgsrc;
        foodBox.appendChild(foodBoxImage);


        const foodBoxTitle = document.createElement('p');
        foodBoxTitle.textContent = title;
        foodBoxTitle.style.cssText = `grid-column:2/3;grid-row:1/2;font-size:24px;font-weight:600`;
        foodBox.appendChild(foodBoxTitle);

        const foodBoxDescription = document.createElement('p');
        foodBoxDescription.textContent = description;
        foodBoxDescription.style.cssText = `grid-column:2/3;grid-row:2/3`;
        foodBox.appendChild(foodBoxDescription);
            
        const foodBoxPrice = document.createElement('p');
        foodBoxPrice.textContent = `${price} Krumpotia Korunas`;
        foodBoxPrice.style.cssText = `grid-column:2/3;grid-row:3/4`;
        foodBox.appendChild(foodBoxPrice);

        

        element.appendChild(foodBox);
        return(foodBox);

    }

    return{addFoodBox};

};