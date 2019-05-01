import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers : {
        Authorization: 'Client-ID 44000064ef768e873218911e41c2437891e186bf75f8c25d8cd77cc57dae8b80'
    }
})
