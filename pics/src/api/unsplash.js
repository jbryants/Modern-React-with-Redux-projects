import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0GVuNzY9qhDlckOqAIInUGnJDmVkMeoTyexC1h3Zd24'
    }
})