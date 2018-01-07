'use strict'

const createClient = require('hafas-client')
const oebbProfile = require('hafas-client/p/oebb')

const client = createClient(oebbProfile)

module.exports = client
