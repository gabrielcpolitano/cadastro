import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())


app.post('/user', async (req, res) => {
  
  await prisma.user.create({

    data: {

      email: req.body.email,
      name: req.body.name,
      age: req.body.age

    }


  })

  res.status(201).send("hello")
})








app.get('/user', async (req, res) => {



  const user = await prisma.user.findMany()


  res.status(200).json(user)
})









app.put('/user/:id', async (req, res) => {

    const { id } = req.params
    const { email, name, age } = req.body
    
    const user = await prisma.user.update({
      where: { id: id },  // ensure the ID is passed as a string
      data: {
        email: email,
        name: name,
        age: age
      }
    })
    res.status(200).json(user)
})





app.delete('/user/:id', async (req, res) => {

  const { id } = req.params

  await prisma.user.delete({

    where: { id: id }
  })

  res.status(200).json({ message: 'Sucesso' })

})




app.listen(3000)


// gabrielcpolitano
// 4Lr5fHuknUv1b1yG