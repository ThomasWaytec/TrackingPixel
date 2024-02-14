const express = require("express");
const path = require("path")

const PORT = 443
const app = express();

app.get("/image.jpg", (req, res) => {

    // log client information
    console.log(JSON.stringify(req.headers))
    console.log(req.ip)
    console.log(req.socket.remoteAddress)
    
    const currentTime = new Date().toLocaleString('en-US', { timeZone: 'GMT' });

    console.log("GMT Time:", currentTime)

    res.sendFile(path.join(__dirname, "assets/image.jpg"))
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is listening on port ${PORT}...`)
});