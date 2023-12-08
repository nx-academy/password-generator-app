export const generatePassword = (
    length: number,
    hasUpperCase: boolean,
    hasNumber: boolean
): string => {
    const LETTERS_LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    const LETTERS_UPPERCASE = LETTERS_LOWERCASE.toUpperCase();
    const NUMBERS = "123456789"

    let letters = LETTERS_LOWERCASE;

    if (hasUpperCase) {
        letters += LETTERS_UPPERCASE;
    }

    const charactersLength = letters.length;

    let result = "";

    for (let i = 0; i < length; i++) {
        result += letters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};
