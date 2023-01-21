import * as React from "react";
import { useActor } from "@xstate/react";
import { TicketActor } from "../ticketMachine";

export function Login({ ticketActor }: { ticketActor: TicketActor }) {
  const [state, send] = useActor(ticketActor);

  const canContinue = state.can("NEXT");

  return (
    <>
      <h2>Login Here</h2>
      <button
        colorScheme="orange"
        onClick={() => {
          send("NEXT");
        }}
      >
        Continue to Phone Verification
      </button>
    </>
  );
}
