import axios from 'axios';

export const get = async () => {
    const res = await axios.get('https://localhost/login');
    return res.data;
};
