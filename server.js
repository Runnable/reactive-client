const Ponos = require('ponos')
const joi = require('joi')
const commentReceivedHandler = require('./index.js')

// Schema
const commentReceivedSchema = joi.object({
  version: 'v1',
  comment: joi.string().required(),
  from: joi.string().required()
}).unknown().required()

// Worker and publisher
const ponos = new Ponos.Server({
  name: process.env.APP_NAME || Math.random() + '',
  rabbitmq: {
    hostname: process.env.RABBITMQ_HOSTNAME || 'reactive.runnable.com'
  },
  events: {
    'comment.received': {
      task: commentReceivedHandler,
      joiSchema: commentReceivedSchema
    }
  }
})

// Start app
ponos.start()
  .then(() => {
    console.log('server started')
  })
  .catch((err) => {
    console.log('Error starting service', err)
    process.exit(1)
  })
