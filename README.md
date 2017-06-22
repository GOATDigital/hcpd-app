# Data-Filter

This repo contains the front end ui for the [Health Care Provider Directory API](https://github.com/HealthAP/hcpd).

## To run it locally
1. `$ npm install`
2. `$ NODE_PROJECT=XXX npm run start` where XXX is an app_id
3. visit `http://localhost:7777`

For now there are 2 app_ids available: `naaf87561` or `nea64356`.

### Seperate

## Testing
1. For command line tests, `npm run test`

## Linting
1. To run the linter, `npm run lint`

## Building for production
1. Build uses gulp to run webpack. Webpack configs are in /configs folder
2. Run first `NODE_PROJECT=XXX NODE_ENV=production gulp build`
3. then run `NODE_PROJECT=naaf87561 gulp rename`
 