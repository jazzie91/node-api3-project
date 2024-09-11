// require your server and launch it
const server = ('./api/server')

const PORT = 5000

server.listen(PORT, () => {
    console.log('listening on', PORT)
})