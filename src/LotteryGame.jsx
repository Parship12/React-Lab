import { useState } from "react";
import "./LotteryGame.css"
import { generateTicket, sum } from "./helper";

export default function LotteryGame() {
    let [ticket, setTicket] = useState([0, 0, 0]);
    const [hasPlayed, setHasPlayed] = useState(false);

    let isWinning = sum(ticket) === 15;

    let buyTicket = () => {
        setTicket(generateTicket(3));
        setHasPlayed(true);
    }

    return (
        <div>
            <h1>Lottery Game!!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            {hasPlayed && (
                <h3>{isWinning ? "Congrats! You won!" : "Try Again!"}</h3>
            )}
        </div>
    );
}