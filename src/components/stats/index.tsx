import React from 'react';

interface IStats {
    cantWords: number,
    wordToFound: string
};

const Stats = (props: IStats) => {
    const { cantWords, wordToFound } = props;
    
    return (
        <div className={"box has-text-centered"}>
            <p>En esta sopa de letra aparece repetida la palabra</p>
            <strong className={"is-size-4 mt-4"}>"{wordToFound}" = {cantWords}</strong>
        </div>   
    )
}

export default Stats;