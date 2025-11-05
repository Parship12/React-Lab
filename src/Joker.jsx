import { useEffect, useState } from "react";

export default function Joker() {
    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline, id: jsonResponse.id, type: jsonResponse.type});
    }

    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline, id: jsonResponse.id, type: jsonResponse.type});
        }
        getFirstJoke();
    }, []);

    return (
        <div>
            <h2>Joke:</h2> <p style={{color: "Red"}}>{joke.setup}</p>
            <h2>Punchline: </h2> <p style={{color: "Red"}}>{joke.punchline}</p>
            <p><b>ID:</b> {joke.id}</p>
            <p><b>Type:</b> {joke.type}</p>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}