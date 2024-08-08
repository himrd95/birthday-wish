export function generateRandomNumber(number) {
    return Math.floor(Math.random() * number);
}

export const getEmoji = (code) => {
    return `&#${code};`;
};
