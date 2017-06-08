# reactive-client
A client app for reactive-demo


## Usage
### Docker
`docker run -it runnable/reactive-client`

### Node.js
1. `git clone git@github.com:Runnable/reactive-client.git`
2. `cd reactive-client`
3. `npm install`
4. `npm start`

## Editing
The function exported in `index.js` runs when our system receives a comment.
Do anything you want with it!

If you want to keep the same queue across restarts set the `APP_NAME` environment variable to something unique. All servers with `APP_NAME` will share the same queue.

NOTE: The function must return a promise.

## Files
* `index.js`: contains function ran when system receives comment
* `server.js`: entry point of this service. Creates and run worker server.
