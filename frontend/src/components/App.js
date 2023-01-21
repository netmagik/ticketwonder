import "../styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { createMachine, assign, interpret } from "xstate";
import { useInterpret, useMachine, useSelector } from "@xstate/react";
import { ticketMachine } from "../ticketMachine";
import { Login } from "./Login";
import { Verification } from "./Verification";
import { Queue } from "./Queue";
import { CheckQueue } from "./CheckQueue";
import { Confirmation } from "./Confirmation";
import { TicketsGone } from "./TicketGone";
import { Pay } from "./Pay";
import { QueueWait } from "./QueueWait";
import { GetText } from "./GetText";
import { inspect } from "@xstate/inspect";

inspect({
  iframe: false,
  url: "https://stately.ai/viz?inspect"
});

// export default function App() {
//   const actor = useInterpret(ticketMachine, {
//     devTools: true
//   });

export default function App() {
  const actor = useInterpret(ticketMachine, { devTools: true });
  const state = useSelector(actor, (state) => state);

  return (
    <div className="App">
      <h1>Welcome to Ticket Wonder</h1>
      {state.matches("Login") && <Login ticketActor={actor} />}
      {state.matches("Verification") && <Verification ticketActor={actor} />}
      {state.matches("CheckQueue") && <CheckQueue ticketActor={actor} />}
      {state.matches("Queue") && <Queue ticketActor={actor} />}
      {state.matches("QueueWait") && <QueueWait ticketActor={actor} />}
      {state.matches("GetText") && <GetText ticketActor={actor} />}
      {state.matches("Pay") && <Pay ticketActor={actor} />}
      {state.matches("TicketsGone") && <TicketsGone ticketActor={actor} />}
      {state.matches("Confirmation") && <Confirmation ticketActor={actor} />}
    </div>
  );
}
