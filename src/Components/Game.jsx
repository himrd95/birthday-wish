import React, { useState } from "react";
import Select from "./SelectBox/SelectBox";
import { OPTIONS, RESPONSES, RESPONSES_CORE } from "../constants";
import { generateRandomNumber } from "../helpers";
import Success from "./Success/Success";

const GuessingGame = () => {
    const [selected, setSelected] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [won, setWon] = useState(false);

    const randomNumber1 = generateRandomNumber(11);
    const randomNumber2 = generateRandomNumber(7);

    const handleGuess = () => {
        if (selected === 3) {
            setWon(true);
        } else {
            setSubmitted(true);
            setMessage(
                RESPONSES_CORE[randomNumber1] + RESPONSES[randomNumber2]
            );
        }
    };

    const handleReset = () => {
        setSubmitted(false);
        setWon(false);
        setSelected("");
    };

    return !submitted ? (
        won ? (
            <Success handleReset={handleReset} />
        ) : (
            <div>
                <h1>
                    Now, Guess what was the one beautiful thing happen today?
                </h1>

                <Select
                    label={"Select here"}
                    data={OPTIONS}
                    selected={selected}
                    setSelected={setSelected}
                />

                <button onClick={handleGuess}>Submit Guess</button>
            </div>
        )
    ) : (
        <>
            <h1 style={{ fontSize: "40px", color: "red" }}>Oops!</h1>
            <h2 style={{ color: "yellow" }}>{message}</h2>
            <button onClick={handleReset}>Mai fir se try karungi</button>
        </>
    );
};

export default GuessingGame;
