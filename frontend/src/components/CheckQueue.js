import * as React from "react";
import { useActor } from "@xstate/react";
import { TicketActor } from "../ticketMachine";

export function CheckQueue({ ticketActor }: { ticketActor: TicketActor }) {
  const [state, send] = useActor(ticketActor);

  const canContinue = state.can("NEXT");

  return (
    <>
      <h2>Check Queue</h2>
      <button
        onClick={() => {
          send("NEXT");
        }}
      >
        Continue to Queue Wait
      </button>

      <button
        onClick={() => {
          send("GONE");
        }}
      >
        Oops! Not enough tickets!
      </button>
    </>
  );
}
