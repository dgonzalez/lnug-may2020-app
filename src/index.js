// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

let problem = ' :D '
fastify.get('/destroy-me', async (request, reply) => {
  setInterval(() => {
    for(let i = 0; i < 500; i++) {
      problem += ' :D '
    }
    fastify.log.info('Increasing memory usage')
  }, 50)
  reply.send('hold my beer')
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
