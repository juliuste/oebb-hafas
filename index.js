'use strict'

const createClient = require('hafas-client')
const oebbProfile = require('hafas-client/p/oebb')

const client = userAgent => createClient(oebbProfile, userAgent)

module.exports = client
