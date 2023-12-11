export const passwordStrength = (password: string): void => {
    const messageStrength = document.querySelector(
        ".message-strength",
    ) as HTMLElement;

    const strengthShape = document.querySelector(".wrapper") as HTMLElement;

    let strength = 0;
    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[#?!@$.*[?%^&*-\]]+/)) strength += 1;

    switch (strength) {
        case 0:
        case 1:
            messageStrength.innerText = "TOO WEAK!";
            strengthShape.classList.remove("weak");
            strengthShape.classList.remove("medium");
            strengthShape.classList.remove("strong");
            strengthShape.classList.add("tooweak");
            break;
        case 2:
            messageStrength.innerText = "WEAK";
            strengthShape.classList.remove("tooweak");
            strengthShape.classList.remove("medium");
            strengthShape.classList.remove("strong");
            strengthShape.classList.add("weak");
            break;
        case 3:
            messageStrength.innerText = "MEDIUM";
            strengthShape.classList.remove("weak");
            strengthShape.classList.remove("tooweak");
            strengthShape.classList.remove("strong");
            strengthShape.classList.add("medium");
            break;
        case 4:
            messageStrength.innerText = "STRONG";
            strengthShape.classList.remove("weak");
            strengthShape.classList.remove("medium");
            strengthShape.classList.remove("tooweak");
            strengthShape.classList.add("strong");
            break;
        default:
            messageStrength.innerText = "";
    }
};
