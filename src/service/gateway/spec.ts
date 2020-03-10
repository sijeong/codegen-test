/// <reference path="../types.ts"/>
// Auto-generated, edits will be overwritten
const spec: api.OpenApiSpec = {
  'host': 'api-int.icloudhospital.com',
  'schemes': [
    'https'
  ],
  'basePath': '',
  'contentTypes': [],
  'accepts': [
    'application/json'
  ],
  'securityDefinitions': {
    'oauth2': {
      'type': 'oauth2',
      'flow': 'implicit',
      'authorizationUrl': 'https://identity-int.icloudhospital.com/connect/authorize',
      'scopes': {
        'CloudHospital_api': 'CloudHospital_api',
        'IdentityServerApi': 'IdentityServerApi'
      }
    }
  }
}
export default spec
