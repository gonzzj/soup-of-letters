import React from 'react';

interface IBoard {
    soup: Array<Array<string>>
};

const Board = (props: IBoard) => {
    const { soup } = props;

    return (
        <>
            {soup.map((row, indexRow) => (
                <div className={"columns is-centered"} key={indexRow}>
                    {row.map((letter, indexLetter) => (
                        <div className={"column is-1 has-text-centered"} key={indexLetter}>
                            <div className={"box"}>{letter}</div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}

export default Board;