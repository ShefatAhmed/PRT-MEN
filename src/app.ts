import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import { UserRoute } from './module/user/user.routes'
// parsers
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/users', UserRoute)

const getAController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the server',
  })
}

app.get('/', getAController)

export default app