import {} from './src/service/Affiliations'

const generator = require('@proerd/swagger-ts-template')


const fetch = require('node-fetch');
async function run(){
    const apiDef = await fetch('https://api-int.icloudhospital.com/swagger/v1/swagger.json').then(r => r.json())
    await generator.genPaths(apiDef, {output: './src/swagger'})
    console.log('okay')
}

run()