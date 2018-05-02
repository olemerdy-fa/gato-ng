// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  apiEndpoint: 'https://gato-api.herokuapp.com/',
  loginUrl: 'https://olemerdy-fa.eu.auth0.com/authorize' +
  '?audience=https://gato-api.herokuapp.com/' +
  '&scope=profile' +
  '&response_type=token' +
  '&client_id=pzwuSOVtcMkwW6vom2uKiLmxxk6d1hdx' +
  '&redirect_uri=http://localhost:4200/auth/callback',
  production: false
};
