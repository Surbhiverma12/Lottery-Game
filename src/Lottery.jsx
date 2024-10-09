import { useState } from "react";
import { genticket, sum } from "./helper";
import Ticket from './Ticket'
import Button from "./Button";

export default function Lottery({n, winningCond}) {
    let [ticket, setTicket] = useState(genticket(n))
    let isWinning = winningCond(ticket);

    let buyTicket =() => {
        setTicket(genticket(n))
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <Button action={buyTicket} />
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    )
}