'use strict'

const client = require('.')

// Wien Westbahnhof to Salzburg Hbf
client.journeys('1291501', '8100002', {results: 1})
// client.departures('8100002', {duration: 1})
// client.locations('Salzburg', {results: 2})
// client.nearby(47.812851, 13.045604, {distance: 60})
// client.radar(47.827203, 13.001261, 47.773278, 13.07562, {results: 10})

.then((data) => {
	console.log(require('util').inspect(data, {depth: null}))
})
.catch(console.error)
