import * as React from "react";
import { useActor } from "@xstate/react";
import { TicketActor } from "../ticketMachine";

export function Pay({ ticketActor }: { ticketActor: TicketActor }) {
  const [state, send] = useActor(ticketActor);

  const canContinue = state.can("NEXT");
  return (
    <>
      <h2>Payment Screen</h2>
      <button
        onClick={() => {
          send("NEXT");
        }}
      >
        Continue to Confirmation
      </button>
    </>
  );
}
