import { createMachine, ActorRefFrom } from "xstate";

export const ticketMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QBUCWBjA1mALgAgHUB7AOwjACcA6AGSKlRIGIA5AUQA1kBtABgF1EoAA5FYqHKlJCQAD0QBGAMwBWKgoCcvZSoDsvDQA4FegGwAaEAE9Fh01S29TT3QBZXGzbt0BfH5bQsXEJScmoANUpUADMMAENJUlZOHgEZUXFEkhl5BCVdDXUVFV5eAt0FBVKNSxsEACZeeqp6pV5XUxUNDwVTfL8AjGx8YjJKKkiKGPispgBJEgA3OIAbVAg+QSQQDIkpbO3c+pUlKkNurqVDdw0VQ3rDWsUlQpMNeveXU1clJQGQQLDEJjagAYQAFmAsABFACuYHhyS4m3SYj20kOiFMD3Umk8ZQqhn0KieCBMrioHic30MtIeJV8-gBQ2CozCVAhUMwcIRYCYAHEAPLsFHbXZZHJYnGVDT47wKIm8EnWRCNQxUb4nW7FBT0zr-QGs0LjHnwghxCRI1JbERoiWYhDvU6lB68K6GJyudqkhSudVaLSmOyaDyag0skbG6imsDmy3hNgAJTmADEAJqi22ZfaShDY9UyuWE4mk4yUwwqUzy1z1crGcNBSMgqgABTiVitmZ2dpzDsqBiobl02NKbm0TR9focBicwe6GjD-xIRHI8G2hqbYVR2YxoFyAFoLCqEIeqKVSpV6q4SrWTozBo3gey6AwDln0W+5Igaz6iZTSs4VY3JohgNkCbLjJM0zoAkvbvvae6qlcLTDlUJgGCUhhKD63Qan6dgLh6+QMmBRrNpyMLwvC24frmfrNFeBi6Pk+gFEoriko0zTMe0nTzr0+T1KRm7jBusD8qQYA0QhX4IG4pwvL8RJKAq5wGJxZRnEY3zYko9T6fcwlPiaVGxhaODSXBsm6Hog5lH03w2e8xiToUXqBnOobXkZEHUG2dTwVZuRVPU9i8LSw6EW6vyuf+HmmCGC6uD5UYcqQsQUAAtrBu7djun7BfUupnL8dx3Mx+gPJOBa6ZobTtC87R+H4QA */
createMachine({
  id: "Ticket Wonder",
  initial: "Login",
  states: {
    Login: {
      on: {
        NEXT: {
          target: "Verification"
        }
      }
    },
    Verification: {
      on: {
        NEXT: {
          target: "CheckQueue"
        },
        Invalid: {}
      }
    },
    CheckQueue: {
      on: {
        NEXT: {
          target: "QueueWait"
        },
        GONE: {
          target: "TicketsGone"
        }
      }
    },
    TicketsGone: {
      type: "final"
    },
    QueueWait: {
      on: {
        NEXT: {
          target: "Pay"
        },
        VERIFY: {
          target: "Verification"
        }
      }
    },
    Pay: {
      on: {
        NEXT: {
          target: "Confirmation"
        }
      }
    },
    Confirmation: {
      type: "final"
    }
  },
  context: {},

  predictableActionArguments: true,
  preserveActionOrder: true
});
