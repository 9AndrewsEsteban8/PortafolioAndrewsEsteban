// GitHubAPI.js
import axios from 'axios';

const githubUsername = 'tu_nombre_de_usuario';
const githubToken = 'tu_token_de_autenticacion'; // Genera un token en GitHub para autenticar las solicitudes

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${githubToken}`,
  },
});

export const getRepositories = async () => {
  try {
    const response = await api.get(`/users/${githubUsername}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los repositorios', error);
    throw error;
  }
};
