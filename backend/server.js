import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 4001

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.get('/api/items', (req, res) => {
  res.json({ items: [], total: 0 })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
