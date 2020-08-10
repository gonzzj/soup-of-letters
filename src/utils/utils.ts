/**
 * Search a word on a matrix (soup of letter) and return the amount of time the word repeat in there.
 * 
 * @param matrix - Array<Array<string>>
 * @param wordToFind - string
 * 
 * @returns number
 */
export const searchMatrixWord = (matrix: Array<Array<string>>, wordToFind: string): number => {
    let cantWords: number = 0;
    const positions = {
		x: [-1, -1, -1, 0, 1, 1, 1, 0],
		y: [-1, 0, 1, 1, 1, 0, -1, -1]
	};
    
    matrix.forEach((row, indexRow) => {
        row.forEach((letter, indexColumn) => {
            if (wordToFind.charAt(0) === letter) {
                for (let i = 0; i < 8; i++) {
                    let wordSearched: string = letter;
                    let letterPositionX: number = indexRow + positions.x[i];
                    let letterPositionY: number = indexColumn + positions.y[i];
                    let letterActualPosition: string;

                    if (letterExists(matrix, letterPositionX, letterPositionY) && wordToFind.includes(matrix[letterPositionX][letterPositionY])) {
                        letterActualPosition = matrix[letterPositionX][letterPositionY];
                    } else {
                        continue;
                    }
                        
                    for (let e = 1; e < wordToFind.length; e++) {
                        if (letterActualPosition === wordToFind.charAt(e)) {
                            wordSearched += letterActualPosition;
                            letterPositionX = letterPositionX + positions.x[i];
                            letterPositionY = letterPositionY + positions.y[i];

                            if (letterExists(matrix, letterPositionX, letterPositionY)) {
                                letterActualPosition = matrix[letterPositionX][letterPositionY];
                            }
                        } else {
                            break;
                        }
                    }
                    
                    if (wordSearched === wordToFind) {
                        cantWords++;
                    }
                }
            }
        });
    });

    return cantWords;
}

/**
 * Validate if the letter position exists in the matrix
 * 
 * @param matrix - Array<Array<string>>
 * @param x - number
 * @param y - number
 * 
 * @returns boolean
 */
export const letterExists = (matrix: Array<Array<string>>, x: number, y: number): boolean => {
    return typeof matrix[x] !== 'undefined' && typeof matrix[x][y] !== 'undefined';
};