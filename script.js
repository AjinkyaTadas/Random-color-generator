
//16777215

buttonId = document.getElementById("button");
colorId = document.getElementById("color");

const updateColor = () => {
    let randomNumber = Math.floor(Math.random() * 16777215);

    let randomCode = "#" + randomNumber.toString(16);

    document.body.style.backgroundColor = randomCode;

    colorId.innerText = randomCode;

    buttonId.style.backgroundColor = randomCode;

    navigator.clipboard.writeText(randomCode);

     console.log(randomNumber, randomCode);
};

buttonId.addEventListener('click', () => {
    updateColor();
});
