import React, { useState } from 'react';
import './scss/style.scss';
import Board from './components/board';
import Stats from './components/stats';
import Games from './components/games';
import soups from './mocks/soups.json';
import { searchMatrixWord } from './utils/utils';

const App = () => {
	const SEARCH_WORD: string = "OIE";
	const [game, setGame] = useState(0);

    return (
		<div className={"container mt-5"}>
			<div className={"columns"}>
				<div className={"column"}>
					<Games soups={soups.resources} setGame={setGame} game={game} />
				</div>
			</div>
			<div className={"columns"}>
            	<div className={"column is-8"}>
					<Board soup={soups.resources[game]}/>
				</div>
				<div className={"column is-4"}>
					<Stats cantWords={searchMatrixWord(soups.resources[game], SEARCH_WORD)} wordToFound={SEARCH_WORD} />
				</div>
			</div>
		</div>
    );
}

export default App;
