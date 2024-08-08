import React from "react";
import Confetti from "react-confetti";

const Success = ({ handleReset }) => {
    // useEffect
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <div style={{ position: "fixed", width: "100vw", height: "100vh" }}>
                <Confetti width={500} height={1000} />
            </div>
            <div>
                <h2
                    style={{
                        color: "greenyellow",
                        fontSize: "25px",
                        padding: "20px",
                    }}
                >
                    A very happy birthday to the most beautiful girl in the
                    world!!
                </h2>
                <h1
                    style={{
                        color: "red",
                        fontSize: "55px",
                        padding: "20px",
                    }}
                >
                    Happy Birthday &#127801;
                </h1>
                <h2
                    style={{
                        color: "goldenrod",
                        fontSize: "20px",
                        padding: "20px",
                    }}
                >
                    It was the best day of my life when I met you for the first
                    time &#9829;. It's today and you are becoming more of me.
                    Always be with me my love. Happy Birthday!!
                </h2>
            </div>

            <button onClick={handleReset}>Mujhe fir se dikhao</button>
        </div>
    );
};

export default Success;
