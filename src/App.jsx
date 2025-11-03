import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import LotteryGame from './LotteryGame'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import {sum} from "./helper"
import Form from "./Form"
import CommentsForm from './CommentsForm'

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
    // return ticket[0] === 0;
    // return ticket.every((num) => num === ticket[0]);
  };

  return (
    <>
      {/* <LotteryGame n={3} winCondition={winCondition}/> */}
      {/* <Form/> */}
      <CommentsForm/>
    </>
  )
}

export default App
