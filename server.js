const fastify = require('fastify')({ logger: true })
const path = require('path');

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'dist'),
  preCompressed: true,
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
