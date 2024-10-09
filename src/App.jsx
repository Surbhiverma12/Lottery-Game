import './App.css'
import './index.css'
import Lottery from './Lottery'
import Ticket from './Ticket'
import {sum} from './helper'


function App() {
  let winningCond = (ticket) => {
    return sum(ticket) == 15
  }
  return (
    <>
    <Lottery n={3} winningCond={winningCond}/>
    </>
  )
}

export default App
