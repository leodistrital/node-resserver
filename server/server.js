require('./config/config');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.json('Get usuarios')
})


app.post('/usuario', function(req, res) {
    let body = req.body
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre no llego',
            err: '1'

        })
    }
    res.json({
        persona: body
    })
})


app.put('/usuario/:id', function(req, res) {
    let codigo = req.params.id


    res.json({
        codigo
    })
})


app.delete('/usuario', function(req, res) {
    res.json('delete usuarios')
})



app.listen(process.env.PORT, () => {
    console.log('escuchado el ' + process.env.PORT);

})