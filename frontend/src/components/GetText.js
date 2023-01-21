import * as React from "react";
import { useActor } from "@xstate/react";
import { TicketActor } from "../ticketMachine";

export function GetText({ ticketActor }: { ticketActor: TicketActor }) {
  const [state, send] = useActor(ticketActor);

  const canContinue = state.can("NEXT");

  return (
    <>
      <h2>GET TEXT</h2>
      <button
        onClick={() => {
          send("NEXT");
        }}
      >
        Check your Text
      </button>
    </>
  );
}
