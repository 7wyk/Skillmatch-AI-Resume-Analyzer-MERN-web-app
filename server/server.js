import express from 'express'
import cors from 'cors'
import mockApiRoutes from './routes/mockApi.js'

const app = express()
const PORT = process.env.PORT || 5000

// CORS configuration for production
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200
}

// Middleware
app.use(cors(corsOptions))
app.use(express.json())

// Routes
app.use('/api', mockApiRoutes)

// Health check
app.get('/', (req, res) => {
    res.json({ 
        message: 'AI Resume Analyzer API Server',
        status: 'running',
        timestamp: new Date().toISOString()
    })
})

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' })
})

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Something went wrong!' })
})

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
})
