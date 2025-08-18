const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send(`API running on port ${port}`)
})

app.get('/users', (req, res) => {
    const sql = `SELECT user_id,name,username,number,telegram_id,profile_picture,created_at,updated_at FROM users` 
    db.query(sql, (err, fields) => {

      if (err) {
        return response(res, {
          success: false,
          message: 'Gagal mengambil data users'
        })
      }
  
      return response(res, {
        success: true,
        message: 'Sukses mengambil data Users',
        data: fields
      })

    })
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT user_id,name,username,number,telegram_id,profile_picture,created_at,updated_at FROM users WHERE user_id=${id}`
    db.query(sql, (err, fields) => {

      if (!fields || fields.length === 0) {
      return response(res, { success: false, message: `User ID ${id} tidak ditemukan`, code: 404 })
    }
  
      return response(res, {
        success: true,
        message: `Sukses mengambil data User ID ${id}`,
        data: fields
      })

    })
})

app.listen(port, () => {
  console.log(`API running on port ${port}`)
})
