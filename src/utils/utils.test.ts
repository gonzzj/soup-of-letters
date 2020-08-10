import { searchMatrixWord, letterExists } from './utils';

describe('>>> Utils', () => {
    const matrix: Array<Array<string>> = [
        ['A', 'L', 'O'],
        ['L', 'X', 'L'],
        ['O', 'L', 'A']
    ];

    test('+++ Should search the word ALO on the matrix', () => {
        const wordToFind: string = "ALO";
    
        expect(searchMatrixWord(matrix, wordToFind)).toBe(4);
    });
    
    test('+++ Should validate if one letter exists on a position', () => {
        const x: number = -1;
        const y: number = -1;
    
        expect(letterExists(matrix, x, y)).toBeFalsy();
    });
});
