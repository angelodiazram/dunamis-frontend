import axios from 'axios';

// CONFIFURACIÓN DEL ESTADO GLOBAl DE AXIOS:

export const axiosDunamisBackend = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})