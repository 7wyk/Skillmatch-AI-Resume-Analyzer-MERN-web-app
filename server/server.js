import express from 'express'
import cors from 'cors'
import mockApiRoutes from './routes/mockApi.js'

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api', mockApiRoutes)

// Health check
app.get('/', (req, res) => {
    res.json({ message: 'AI Resume Analyzer API Server' })
})

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
})
