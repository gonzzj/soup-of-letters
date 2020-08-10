import React, { useState, useEffect } from 'react';
import './scss/style.scss';
import request from 'superagent';
import Board from './components/board';
import Stats from './components/stats';
import Games from './components/games';
import { searchMatrixWord } from './utils/utils';

const App = () => {
	const SEARCH_WORD: string = "OIE";
	const [game, setGame] = useState(0);
	const [games, setGames] = useState([]);

	useEffect(() => {
		request
			.get('/getGames')
			.then(res => setGames(res.body))
	}, []);

    return (
		<div className={"container mt-5"}>
			<div className={"columns"}>
				<div className={"column"}>
					<Games soups={games} setGame={setGame} game={game} />
				</div>
			</div>
			{games.length !== 0 && 
				<div className={"columns"}>
					<div className={"column is-8"}>
						<Board soup={games[game]}/>
					</div>
					<div className={"column is-4"}>
						<Stats cantWords={searchMatrixWord(games[game], SEARCH_WORD)} wordToFind={SEARCH_WORD} />
					</div>
				</div>
			}
		</div>
    );
}

export default App;
