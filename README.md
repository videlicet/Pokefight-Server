# Pokéfight-Server

A server for a small SPA for Pokébouts.

## Performance

The server is hosted on render. It can take up to one minute until it respondes if it has been idling.

## Acknowledgements

Built with:
* Node.js, Express.js, mongoose
* MongoDB

## How to Run

If you host locally, first, add your MongoDB URL to `./db_URL(example).js` and rename the file to `db_URL.js`. Then make sure to replace the fetch URLs to your local port and import the `db_URL` variable from `db_URL.js`.