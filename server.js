const express = require('express')
const app = express()
const port = 80

app.set('view engine', 'ejs');

app.use(express.static('assets'));

app.get('/:page?', (req, res) => {
    const page = req.params.page || 'index'
    res.render('template', {
        page: page
    })
})

app.listen(port, () => {
    if (port === 80) {
        console.log(`Portfolio running @ http://localhost`)
    } else {
        console.log(`Portfolio running @ http://localhost:${port}`)
    }
})
