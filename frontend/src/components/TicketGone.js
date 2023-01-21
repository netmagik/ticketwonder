import * as React from "react";
import { useActor } from "@xstate/react";
import { TicketActor } from "../ticketMachine";

export function TicketsGone({ ticketActor }: { ticketActor: TicketActor }) {
  const [state, send] = useActor(ticketActor);

  const canContinue = state.can("NEXT");

  return (
    <>
      <h2>All Tickets Gone</h2>
    </>
  );
}
