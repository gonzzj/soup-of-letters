import { searchMatrixWord, letterExists } from '../../src/utils/utils';

describe('>>> Utils', () => {
    const matrix = [
        ['A', 'L', 'O'],
        ['L', 'X', 'L'],
        ['O', 'L', 'A']
    ];

    test('+++ Should search the word ALO on the matrix', () => {
        const wordToFind = "ALO";

        expect(searchMatrixWord(matrix, wordToFind)).toBe(4);
    });

    test('+++ Should validate if one letter exists on a position', () => {
        const x = -1;
        const y = -1;

        expect(letterExists(matrix, x, y)).toBeFalsy();
    });
});