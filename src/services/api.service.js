import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phoneNumber) => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phoneNumber
    }

    return axios.post(URL_BACKEND, data)

}

const updateUserAPI = () => {

}

const deleteUserAPI = () => {

}


export {
    createUserAPI, updateUserAPI, deleteUserAPI
}