import * as React from "react";
import { useActor } from "@xstate/react";
import { TicketActor } from "../ticketMachine";

export function QueueWait({ ticketActor }: { ticketActor: TicketActor }) {
  const [state, send] = useActor(ticketActor);

  const canContinue = state.can("NEXT");

  return (
    <>
      <h2>Waiting ..... Queue</h2>
      <button
        onClick={() => {
          send("NEXT");
        }}
      >
        Your turn is up! Yey!
      </button>
      <button
        onClick={() => {
          send("VERIFY");
        }}
      >
        VERIFY AGAIN
      </button>
    </>
  );
}
