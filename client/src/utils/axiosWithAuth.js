import axios from 'axios'

const axiosWithAuth = () => {

    const token = JSON.parse(localStorage.getItem('token'));

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL:'https://bw-node.herokuapp.com' 
    })
};

export default axiosWithAuth;