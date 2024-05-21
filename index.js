import 'dotenv/config'
import express from 'express'
import postRoute from './post/post.route.js'

const app = express()

// Recordar tener versión mínima de node.js 20.11
const __dirname = import.meta.dirname

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/home.html")
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/public/about.html")
})

app.use('/posts', postRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})