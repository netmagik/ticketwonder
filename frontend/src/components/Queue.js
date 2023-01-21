import * as React from "react";
import { useActor } from "@xstate/react";
import { TicketActor } from "../ticketMachine";

export function Queue({ ticketActor }: { ticketActor: TicketActor }) {
  const [state, send] = useActor(ticketActor);

  const canContinue = state.can("NEXT");
  return (
    <>
      <h2>Queue</h2>
      <button
        onClick={() => {
          send("NEXT");
        }}
      >
        Continue to
      </button>
    </>
  );
}
