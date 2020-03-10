import { getApiV1Hospitals } from './service/Hospitals';
import { getApiV1Countries, getApiV1CountriesCountryId } from './service/Countries';
import { getApiV1DoctorsDoctorId } from './service/Doctors';
// export function getApiV1Hospitals(options?: GetApiV1HospitalsOptions): Promise<api.Response<api.HospitalsViewModel>> {
//

const fetch = require('node-fetch');
// getApiV1Hospitals().then(d => console.log(d));
// fetch('').then(d => console.log(d))

// const hospitals = getApiV1Hospitals;

// const host = require('./swagger/modules/Hospitals');

getApiV1Countries().then(d => console.log(d.data.items.map(i => i.medias)));

// getApiV1DoctorsDoctorId('').then(res => res.data.firstName)
