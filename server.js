const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(__dirname + '/dist/angular-portfolio'))
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'dist/angular-portfolio/index.html'))
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('server rodando na porta: ' + port)
});