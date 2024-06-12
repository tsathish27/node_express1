const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//     })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/users', require('./routes/api/Users'))

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
    }) 