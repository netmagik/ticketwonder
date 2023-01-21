# Ticketwonder

## Overview
    This app allows for periodic human verification in the process of
    buying limited supply tickets/products.
    Helping prevent scalpers and bots is our goal!
## API Calls
### Backend Wait
Sent by backend to poll if there is any need for a verification code.

URL:localhost/backendwait
#### Request:
```json
    {
        "status":"waiting"
    }
```
#### Responses:
default:
```json
{
    "status":"waiting",
    "email":"null"
}
```
success:
```json
{
    "status":"ready",
    "email":"<email to verify>"
}
```