const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send(`API running on port ${port}`)
})

app.get('/users', async (req,res) => {
  const users =  await prisma.users.findMany();
  res.send(users)
})

app.listen(port, () => {
  console.log(`API running on port ${port}`)
})
