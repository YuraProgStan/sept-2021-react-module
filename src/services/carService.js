import axiosService from './axiosService';
import {urls} from '../configs/urls';

export  const carService = {
    create:(car) => axiosService.post(urls.cars).then(value => value.data),
    getAll:() => axiosService.get(urls.cars).then(value => value.data),
    getByID:(id) => axiosService.get(`${urls.cars}/${id}`).then(value => value.data),
    updateByID:(id) => axiosService.patch(`${urls.cars}/${id}`).then(value => value.data),
    deleteByID:(id) => axiosService.delete(`${urls.cars}/${id}`)
}

// Create
// Read
// Update
// Delete
//
// CRUD