# Data-Filter

This repo contains the front end ui for the [Health Care Provider Directory API](https://github.com/HealthAP/hcpd).

## To run it locally
1. `$ npm install`
2. `$ NODE_PROJECT=XXX npm run start` where XXX is an app_id
3. visit `http://localhost:8080`

For now there are 2 app_ids available: `naaf87561` or `nea64356`.

editor app url - https://hcpd-backend.herokuapp.com/api/listing?input=new&isTakingPatients=true&distance=10

### Seperate

## Testing
1. For command line tests, `npm run test`

## Linting
1. To run the linter, `npm run lint`

## Building
1. Build uses `webpack.prod.config`
2. To build, `NODE_PROJECT=XXX npm run build`

## Reference
1. [Webpack](https://webpack.github.io/docs)
2. [React](https://facebook.github.io/react/docs/getting-started.html)
3. [Redux](http://redux.js.org/index.html)
4. [SASS](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
5. [Mocha](http://mochajs.org/)
6. [ES6](https://github.com/lukehoban/es6features)