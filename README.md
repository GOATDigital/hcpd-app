# HCPD frontend

## To run it locally
1. `$ npm install`
2. `$ NODE_PROJECT=XXX npm run start` where XXX is an app_id
3. visit `http://localhost:7777`

For now there are 2 target (app_ids) available: `naaf87561` or `nea64356`.

## Testing
1. For command line tests, `npm run test`

## Linting
1. To run the linter, `npm run lint`

## Building for production

1. Build uses gulp to run webpack. Webpack configs are in /configs folder
2. Run first `NODE_PROJECT=XXX NODE_ENV=production gulp build` - it creates `main.js` and `vendor.js` in `build/custom` folder
3. then run `NODE_PROJECT=naaf87561 gulp rename` - this renames `main.js` to specific target(app_ids) name.

### App loading schema on production

 - Files from `/build/js` are loaded to AWS S3
 - File `/build/js/main.js` is referenced in 3rd party embeded setup
 - Later when config details passed to `/main.js`, the `TCPD_APP_ID` is required for the app to start
 - All `/main.js`, does is read the config and load correct .js file that was build for this specific target app_id

**Windows users**
Be aware to set a correct `NODE_PROJECT` when calling from CL, can use like so `NODE_PROJECT=naaf87561&&`

 