# Expenses service

This application has two end points

1. GET `/` - This API will comprise of all the expenses of the trip.
2. POST `/add` - Adds user expenses into the existing `expenses` array.

## Run locally

This application uses `nodemon` tool for automatically restarting the server whenever a change has been made to files. To run it locally, please use below commands.

First, install node packages

```sh
npm install
```

Second, run the local server

```sh
npm run dev
```
