# oebb-hafas

**Client for the Austrian Railways (ÖBB) HAFAS API.** It acts as a consistent and straightforward interface on top of a verbose API.

This project is actually a thin wrapper around [`hafas-client`](https://github.com/derhuerst/hafas-client#hafas-client). [Its docs](https://github.com/derhuerst/hafas-client/tree/master/docs) document the API in general.

[![npm version](https://img.shields.io/npm/v/boilerplate.svg)](https://www.npmjs.com/package/boilerplate)
[![dependency status](https://img.shields.io/david/juliuste/boilerplate.svg)](https://david-dm.org/juliuste/boilerplate)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/boilerplate.svg)](https://david-dm.org/juliuste/boilerplate#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/boilerplate.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installing

```shell
npm install oebb-hafas
```

## API

Check [the docs for `hafas-client`](https://github.com/derhuerst/hafas-client/tree/master/docs) as well as [the ÖBB-specific customisations](https://github.com/derhuerst/hafas-client/blob/master/p/oebb/readme.md).


## Getting Started

```javascript
const hafas = require('oebb-hafas')
```

As an example, we will search for a route from *Wien Westbahnhof* to *Salzburg Hbf*. To get the station ids, use [`locations(query, [opt])`](https://github.com/derhuerst/hafas-client/blob/master/docs/locations.md).

```javascript
client.journeys('1291501', '8100002')
.then((journeys) => console.log(journeys[0]))
.catch(console.error)
```

The output will be a [`journey` object in the *Friendly Public Transport Format* `1.0.1` format](https://github.com/public-transport/friendly-public-transport-format/tree/1.0.1/spec#journey):

```javascript
[ {
    legs: [
        {
            origin: {
                type: "station",
                id: "8100003",
                name: "Wien Westbahnhof",
                location: {
                    type: "location",
                    latitude: 48.196366,
                    longitude: 16.337328
                },
                products: {
                    nationalExp: false,
                    national: false,
                    interregional: true,
                    regional: true,
                    suburban: true,
                    bus: false,
                    ferry: false,
                    subway: false,
                    tram: false,
                    unknown: false,
                    onCall: false
                }
            },
            destination: {
                type: "station",
                id: "8100002",
                name: "Salzburg Hbf",
                location: {
                    type: "location",
                    latitude: 47.812851,
                    longitude: 13.045604
                },
                products: {
                    nationalExp: true,
                    national: true,
                    interregional: true,
                    regional: true,
                    suburban: true,
                    bus: false,
                    ferry: false,
                    subway: false,
                    tram: false,
                    unknown: false,
                    onCall: false
                }
            },
            departure: "2018-01-07T17:43:00.000+01:00", // ISO 8601 string
            arrival: "2018-01-07T20:08:00.000+01:00", // ISO 8601 string
            id: "1|349663|11|181|7012018",
            line: {
                type: "line",
                id: "924",
                name: "WB 924",
                public: true,
                class: 4096,
                productCode: 12,
                operator: {
                    type: "operator",
                    id: "westbahn-management-gmbh",
                    name: "WESTbahn Management GmbH"
                },
                product: "interregional",
                mode: "train"
            },
            direction: "Salzburg Hbf",
            departurePlatform: "6",
            arrivalPlatform: "2A-C"
        }
    ],
    origin: {
        type: "station",
        id: "8100003",
        name: "Wien Westbahnhof",
        location: {
            type: "location",
            latitude: 48.196366,
            longitude: 16.337328
        },
        products: {
            nationalExp: false,
            national: false,
            interregional: true,
            regional: true,
            suburban: true,
            bus: false,
            ferry: false,
            subway: false,
            tram: false,
            unknown: false,
            onCall: false
        }
    },
    destination: {
        type: "station",
        id: "8100002",
        name: "Salzburg Hbf",
        location: {
            type: "location",
            latitude: 47.812851,
            longitude: 13.045604
        },
        products: {
            nationalExp: true,
            national: true,
            interregional: true,
            regional: true,
            suburban: true,
            bus: false,
            ferry: false,
            subway: false,
            tram: false,
            unknown: false,
            onCall: false
        }
    },
    departure: "2018-01-07T17:43:00.000+01:00", // ISO 8601 string
    arrival: "2018-01-07T20:08:00.000+01:00" // ISO 8601 string
} ]
```


## Similar Projects

- [oebb](https://github.com/juliuste/oebb) – Find ticket prices for ÖBB journeys.
- [db-hafas](https://github.com/derhuerst/db-hafas) – Client for the German Railways (DB).
- [vbb-hafas](https://github.com/derhuerst/vbb-hafas) – Client for the Berlin & Brandenburg public transport service (VBB).


## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/oebb-hafas/issues).
