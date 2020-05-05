export const sortArray = (array, order) => order === 'desc'
    ? [...array].sort((a, b) => Number(b) - Number(a))
    : [...array].sort((a, b) => Number(a) - Number(b));
