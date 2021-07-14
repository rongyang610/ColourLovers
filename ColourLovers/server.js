const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const proxyConfig = {
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api'
  },
  target: 'http://localhost:8080'
}

app
  .prepare()
  .then(() => {
    const server = express()
    server.use('/api', createProxyMiddleware(proxyConfig))

    server.all('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.log('Error:::::', err)
  })
