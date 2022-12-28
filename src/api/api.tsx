import axios from "axios";


const instance= axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    // headers: {
    //     'API_KEY': '05db3c44-fd34-4fff-9842-5515e51c0f83'
    // }
});
export const usersAPI={
    getUsers:(currenPage=1, pageSize=10)=>{
        return instance.get(`users?page=${currenPage}&count=${pageSize}`)
            .then(response=> {
                return response.data
            });
    }
}


