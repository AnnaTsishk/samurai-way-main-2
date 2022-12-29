import axios from "axios";


const instance= axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    // headers: {
    //     'API_KEY': 'e98717fd-b02e-4b95-8454-a0e6349f4de0'
    // }
});
export const usersAPI= {
    getUsers: (currenPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currenPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId:number) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId: number) {
        return instance.delete(`unfollow/${userId}`)
    },
    getProfile(userId: number) {
        return instance.get(`profile/` + userId);
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
