export const passwordStrength = (password: string): void => {
    const messageStrength = document.querySelector(
        ".message-strength",
    ) as HTMLElement;

    const strengthShape = document.querySelector(".strength") as HTMLElement;

    let strength = 0;
    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[#?!@$.*[?%^&*-\]]+/)) strength += 1;

    switch (strength) {
        case 0:
        case 1:
            messageStrength.innerText = "TOO WEAK!";
            strengthShape.className = "strength tooweak";

            break;
        case 2:
            messageStrength.innerText = "WEAK";
            break;
        case 3:
            messageStrength.innerText = "MEDIUM";
            break;
        case 4:
            messageStrength.innerText = "STRONG";
            break;
        default:
            messageStrength.innerText = "";
    }
};
