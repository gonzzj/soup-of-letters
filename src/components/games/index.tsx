import React from 'react';

interface IGames {
    soups: Array<Array<Array<string>>>,
    setGame: Function,
    game: number
};

const Games = (props: IGames) => {
    const { soups, setGame, game } = props;
    
    return (
        <div className={"columns"}>
            {soups.map((soup, index) => (
                <div className={"column"} key={index} >
                    <button className={`button is-large is-fullwidth ${game === index ? 'is-primary' : ''}`} onClick={() => setGame(index)}>{soup[0].length + " x " + soup.length}</button>
                </div>
            ))}
        </div>
    )
}

export default Games;