import React from "react";
import GuessingGame from "./Game";
import { GAME_TYPES } from "../constants";
import { getEmoji } from "../helpers";

const Home = () => {
    const [startGame, setStartGame] = React.useState(false);
    const [gameType, setGameType] = React.useState(GAME_TYPES.YES);

    const setGameTypeClickAction = (type) => {
        setGameType(type);
        setStartGame(true);
    };

    const getGame = () => {
        if (gameType === GAME_TYPES.NO) {
            return (
                <>
                    <h3>
                        Haan haan pata hi tha ki yhi choose karegi &#128527;
                    </h3>
                    <h4>Ab chal game khel chupchap, Nautanki</h4>
                    <button
                        className="button-7"
                        onClick={() => setGameTypeClickAction(GAME_TYPES.YES)}
                    >
                        Theek hai khelte hai &#128524;
                    </button>
                </>
            );
        }
        return <GuessingGame gameType={gameType} />;
    };

    return (
        <div>
            {!startGame ? (
                <>
                    <h1
                        style={{
                            fontSize: "35px",
                            fontWeight: 900,
                            color: "aqua",
                        }}
                    >
                        So you are here, let's play a game
                    </h1>
                    <h2>Are you ready?</h2>
                    <button
                        className="button-7"
                        onClick={() => setGameTypeClickAction(GAME_TYPES.YES)}
                    >
                        Haan &#128526;
                    </button>
                    <button
                        className="button-7"
                        onClick={() => setGameTypeClickAction(GAME_TYPES.NO)}
                    >
                        Noi Noi &#128524;
                    </button>
                </>
            ) : (
                getGame()
            )}
        </div>
    );
};

export default Home;
