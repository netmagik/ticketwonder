import * as React from "react";
import { useActor } from "@xstate/react";
import { TicketActor } from "../ticketMachine";

export function Verification({ ticketActor }: { ticketActor: TicketActor }) {
  const [state, send] = useActor(ticketActor);

  const canContinue = state.can("NEXT");

  return (
    <>
      <h2>Verification</h2>
      <label htmlFor="phone">Enter Phone Number: </label>
      <input type="phone" id="phone" name="phone" />
      <button
        onClick={() => {
          send("NEXT");
        }}
      >
        Submit
      </button>
    </>
  );
}
