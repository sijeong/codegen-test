const openapi = require('openapi-client')

openapi.genCode({
    src: 'https://api-int.icloudhospital.com/swagger/v1/swagger.json',
    outDir: './src/service',
    language: 'ts',
    redux: true
}).then(complete, error)

function complete(spec){
    console.info('Service generation complete')
}

function error(e){
    console.error(e.toString())
}