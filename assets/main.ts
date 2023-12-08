import { generatePassword } from './functions/generatePassword.js'

const handleGenerate = () => {
    const form = document.querySelector(".form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            //console.log("test submit");
    
            generatePassword(3);
        });
    }
};

handleGenerate();
