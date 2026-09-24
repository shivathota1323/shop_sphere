import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 5000
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())
app.use(morgan('dev'))

const demoProducts = [
  { id: 'desk-set', name: 'Moss & Mineral Desk Set', store: 'Northline Studio', price: 48, category: 'Workspace', stock: 18 },
  { id: 'overshirt', name: 'Linen Weekend Overshirt', store: 'Sonder Apparel', price: 86, category: 'Wear', stock: 11 },
  { id: 'bowls', name: 'Hand-thrown Breakfast Bowls', store: 'Kiln & Kind', price: 64, category: 'Home', stock: 24 },
]
app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'shopsphere-api', timestamp: new Date().toISOString() }))
app.get('/api/products', (_req, res) => res.json({ data: demoProducts, pagination: { page: 1, limit: 20, total: demoProducts.length } }))
app.get('/api/products/:id', (req, res) => { const product = demoProducts.find((item) => item.id === req.params.id); return product ? res.json({ data: product }) : res.status(404).json({ error: 'Product not found' }) })
app.use((_req, res) => res.status(404).json({ error: 'Route not found' }))
app.use((error, _req, res, _next) => { console.error(error); res.status(500).json({ error: 'Unexpected server error' }) })

if (process.env.MONGO_URI) mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected')).catch((error) => console.error('MongoDB unavailable:', error.message))
app.listen(port, () => console.log(`ShopSphere API listening on port ${port}`))
