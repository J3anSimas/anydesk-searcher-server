import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())

app.post('/', async (request: Request, response: Response) => {
    const { anydeskid, username, computername } = request.body
    const prisma = new PrismaClient()
    const newComputer = await prisma.computer.create({
        data: {
            anydeskid,
            username,
            computername
        }   
    })
    response.status(201).json(newComputer)
})

app.get('/', async (request: Request, response: Response) => {
    const prisma = new PrismaClient()
    const users = await prisma.computer.findMany()
    response.json(users)
})

app.listen(3333)
''