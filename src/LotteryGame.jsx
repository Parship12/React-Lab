import { useState } from "react";
import "./LotteryGame.css"
import { generateTicket } from "./helper";
import Ticket from "./Ticket"

export default function LotteryGame({n=3, winCondition}) {
    let [ticket, setTicket] = useState([0, 0, 0]);
    const [hasPlayed, setHasPlayed] = useState(false);

    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(generateTicket(n));
        setHasPlayed(true);
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <br/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            {hasPlayed && (
                <h3>{isWinning ? "Congrats! You won!" : "Try Again!"}</h3>
            )}
        </div>
    );
}