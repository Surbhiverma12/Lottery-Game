import { useState } from "react";
import { genticket, sum } from "./helper";
import Ticket from './Ticket'

export default function Lottery({n, winningSum}) {
    let [ticket, setTicket] = useState(genticket(n))
    let isWinning = sum(ticket) === winningSum;

    let buyTicket =() => {
        setTicket(genticket(n))
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy Ticket</button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    )
}