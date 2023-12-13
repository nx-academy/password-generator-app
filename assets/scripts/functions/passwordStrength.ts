export const passwordStrength = (strength: number): void => {
    const messageStrength = document.querySelector(
        ".message-strength",
    ) as HTMLElement;

    const strengthShape = document.querySelector(".wrapper") as HTMLElement;

    strengthShape.classList.remove("weak");
    strengthShape.classList.remove("medium");
    strengthShape.classList.remove("strong");
    strengthShape.classList.remove("tooweak");

    switch (strength) {
        case 0:
        case 1:
            messageStrength.innerText = "TOO WEAK!";
            strengthShape.classList.add("tooweak");
            break;
        case 2:
            messageStrength.innerText = "WEAK";
            strengthShape.classList.add("weak");
            break;
        case 3:
            messageStrength.innerText = "MEDIUM";
            strengthShape.classList.add("medium");
            break;
        case 4:
            messageStrength.innerText = "STRONG";
            strengthShape.classList.add("strong");
            break;
        default:
            messageStrength.innerText = "";
    }
};
