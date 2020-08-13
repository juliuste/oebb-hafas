# oebb-hafas

**Client for the Austrian Railways (ÖBB) HAFAS API.** It acts as a consistent and straightforward interface on top of a verbose API.

This project is actually a thin wrapper around [`hafas-client`](https://github.com/derhuerst/hafas-client#hafas-client). [Its docs](https://github.com/derhuerst/hafas-client/tree/5.0.0/docs) document the API in general.

[![npm version](https://img.shields.io/npm/v/oebb-hafas.svg)](https://www.npmjs.com/package/oebb-hafas)
[![license](https://img.shields.io/github/license/juliuste/oebb-hafas.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installing

```shell
npm install oebb-hafas
```

## API

Check [the docs for `hafas-client`](https://github.com/derhuerst/hafas-client/tree/master/docs) as well as [the ÖBB-specific customisations](https://github.com/derhuerst/hafas-client/blob/master/p/oebb/readme.md).


## Getting Started

```javascript
const hafas = require('oebb-hafas')('your-user-agent')
```

As an example, we will search for a route from *Wien Westbahnhof* to *Salzburg Hbf*. To get the station ids, use [`locations(query, [opt])`](https://github.com/derhuerst/hafas-client/blob/master/docs/locations.md).

```javascript
client.journeys('1291501', '8100002')
.then((journeys) => console.log(journeys[0]))
.catch(console.error)
```

## Similar Projects

- - [*Friendly Public Transport Format*](https://github.com/public-transport/friendly-public-transport-format#friendly-public-transport-format-fptf) – A format for APIs, libraries and datasets containing and working with public transport data.
- [oebb](https://github.com/juliuste/oebb) – Find ticket prices for ÖBB journeys.
- [db-hafas](https://github.com/derhuerst/db-hafas) – Client for the German Railways (DB).
- [vbb-hafas](https://github.com/derhuerst/vbb-hafas) – Client for the Berlin & Brandenburg public transport service (VBB).


## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/juliuste/boilerplate/issues).
