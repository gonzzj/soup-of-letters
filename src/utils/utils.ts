
/**
 * Search a word on a matrix (soup of letter) and return the amount of time the word repeat in there.
 * 
 * @param matrix - Array<Array<string>>
 * @param wordToFound - string
 */
export const searchMatrixWord = (matrix: Array<Array<string>>, wordToFound: string): number => {
    let cantWords: number = 0;
    const positions = {
		x: [-1, -1, -1, 0, 1, 1, 1, 0],
		y: [-1, 0, 1, 1, 1, 0, -1, -1]
	};
    
    matrix.forEach((row, indexRow) => {
        row.forEach((letter, indexColumn) => {
            if (wordToFound.charAt(0) === letter) {
                for (let i = 0; i < 8; i++) {
                    let wordSearched: string = letter;
                    let letterPositionX: number = indexRow + positions.x[i];
                    let letterPositionY: number = indexColumn + positions.y[i];
                    let letterActualPosition: string;

                    if (letterExists(matrix, letterPositionX, letterPositionY) && wordToFound.includes(matrix[letterPositionX][letterPositionY])) {
                        letterActualPosition = matrix[letterPositionX][letterPositionY];
                    } else {
                        continue;
                    }
                        
                    for (let e = 1; e < wordToFound.length; e++) {
                        if (letterActualPosition === wordToFound.charAt(e)) {
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
                    
                    if (wordSearched === wordToFound) {
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
 */
const letterExists = (matrix: Array<Array<string>>, x: number, y: number) => {
    return typeof matrix[x] !== 'undefined' && typeof matrix[x][y] !== 'undefined';
};