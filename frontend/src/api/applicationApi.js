import { alignProperty } from '@mui/material/styles/cssUtils';
import axios from 'axios';
const apiEndpoint = '//localhost:8000';

export const getApplications = () => new Promise((resolve, reject) => {
    return axios.get(`${apiEndpoint}/applications`)
    .then(x => resolve(x.data))
    .catch(x => {
        alert(x);
        reject(x);
    });
});

export const addApplication = (app)=> new Promise((resolve, reject)=>{
    axios.post(`${apiEndpoint}/applications`)
    .then(x=>resolve(x.data))
    .catch(x=>{
        alert(x);
        reject(x);
    })
})