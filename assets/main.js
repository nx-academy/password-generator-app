const generatePassword = (length) => {
    const LETTERS = "abcdefghijklmnopqrstuvwxyz";
    const charactersLength = LETTERS.length;
    let result = " ";

    for (let i = 0; i < length; i++) {
        result += LETTERS.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }

    //console.log(result);
    return result;
};

const handleGenerate = () => {
    const form = document.querySelector(".form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        //console.log("test submit");

        generatePassword(3);
    });
};

handleGenerate();
