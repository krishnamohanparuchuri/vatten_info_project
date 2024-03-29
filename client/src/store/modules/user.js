import Vue from 'vue'
export default {
    state: {
        statusMessage: "",
        errorMessage: '',
        users: [],
        userIsloggedIn: false,
        showLoginModel: false,
        showUserDropDown: false,
        showSearchDropDown: false,
        searchText: '',
        user: {
            email: '',
            _id: ''
        },
        userInfo: {}
    },
    getters: {

    },
    actions: {
        async createNewUser({ commit }, regInfo) {
            console.log(regInfo);

            // const token = localStorage.getItem('token')
            const response = await fetch('http://localhost:4000/api/user/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(regInfo)
            })
            const data = await response.json();
            console.log(data)
            if (response.status === 200) {

                commit('UPDATE_SUCCESS_MESSAGE', { message: data.message, name: data.name }, { module: 'user' })
            } else {
                commit('UPDATE_ERROR_MESSAGE', { message: data.message }, { module: 'user' })
            }
        },
        async getUsers({ commit }) {
            console.log('move to dispatch')
            const token = localStorage.getItem('token')
            const response = await fetch('http://localhost:4000/api/admin/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            })

            const data = await response.json()
            console.log(data.users)
            commit('UPDATE_USERS', data.users, { module: 'user' })

        },
        async deleteUser({ commit }, id) {
            console.log('move to dispatch')
            const token = localStorage.getItem('token')
            const response = await fetch(`http://localhost:4000/api/user/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            })

            const data = await response.json()
            console.log(data)
            commit('DELETE_USER', data.user._id, { module: 'user' })

        },
        async loginUser({ commit }, payload) {
            console.log(payload)

            const response = await fetch(`http://localhost:4000/api/user/login`, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()
            console.log(data)
            localStorage.setItem('userToken', data.Token)
            localStorage.setItem('USER_ASSIGN_ID', data._id)


            if (response.status === 200) {

                commit('UPDATE_SUCCESS_MESSAGE', { message: data.message, name: data.name }, { module: 'user' })
                commit('UPDATE_USER_EMAIL', data.email, { module: 'user' })
                commit('UPDATE_USER_ID', data._id, { module: 'user' })
                commit('UPDATE_USER_ISLOGGEDIN', data.userLoggedin, { module: 'user' })
                commit('UPDATE_CLOSE_WINDOW', false, { module: 'user' })
                commit('USER_DROP_DOWN_CHANGE', false, { module: 'user' })
            } else {
                commit('UPDATE_ERROR_MESSAGE', { message: data.message }, { module: 'user' })
            }


        },
        async validateUser({ commit }) {
            const token = localStorage.getItem('userToken')
            const response = await fetch(`http://localhost:4000/api/user/validatetoken`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                }
            })

            const data = await response.json()
            console.log(data)
            // localStorage.setItem('userToken', data.Token)
            // localStorage.setItem('userLoggedIn', data.userLoggedin)

            commit('UPDATE_USER_EMAIL', data.email, { module: 'user' })
            commit('UPDATE_USER_ID', data.id, { module: 'user' })
            commit('UPDATE_USER_ISLOGGEDIN', data.userLoggedin, { module: 'user' })
            commit('UPDATE_CLOSE_WINDOW', false, { module: 'user' })
            commit('USER_DROP_DOWN_CHANGE', false, { module: 'user' })

        },
        async getUserInfo({ commit }, payload) {
            console.log('get user info')
            const token = localStorage.getItem('userToken')
            const response = await fetch(`http://localhost:4000/api/user/getUserInfo`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token,
                    body: JSON.stringify(payload)
                }
            })

            const data = await response.json()
            console.log(data)
            // localStorage.setItem('userToken', data.Token)
            // localStorage.setItem('userLoggedIn', data.userLoggedin)

            // commit('UPDATE_USER_EMAIL', data.email, { module: 'user' })
            // commit('UPDATE_USER_ID', data.id, { module: 'user' })
            // commit('UPDATE_USER_ISLOGGEDIN', data.userLoggedin, { module: 'user' })
            // commit('UPDATE_CLOSE_WINDOW', false, { module: 'user' })
            commit('USER_INFO', data.user, { module: 'user' })
        }

    },
    mutations: {
        UPDATE_SUCCESS_MESSAGE(state, value) {
            state.statusMessage = value.message
            Vue.$vToastify.success(`New account is created ${value.name} `)
            setTimeout(() => {
                state.statusMessage = ""
            }, 4000)
        },
        UPDATE_ERROR_MESSAGE(state, value) {
            state.errorMessage = value.message
            Vue.$vToastify.error('Account creation', `${value}`)
        },
        UPDATE_USERS(state, value) {
            state.users = value
        },
        DELETE_USER(state, _id) {
            const remainingUsers = state.users.filter(user => user._id !== _id)
            // console.log(remainingUsers)
            state.users = remainingUsers
        },
        UPDATE_USER_EMAIL(state, email) {
            state.user.email = email
        },
        UPDATE_USER_ID(state, id) {
            state.user._id = id
        },
        UPDATE_USER_ISLOGGEDIN(state, value) {
            state.userIsloggedIn = value
        },
        UPDATE_USER_STATUS(state, value) {
            state.userIsloggedIn = value
        },
        OPEN_LOGIN_COMP(state) {
            state.showLoginModel = true;
        },
        CLOSE_WINDOW(state) {
            state.showLoginModel = false;

        },
        UPDATE_CLOSE_WINDOW(state, value) {
            state.showLoginModel = value;
        },
        USER_DROP_MENU(state) {
            console.log('user drop down mutations')
            state.showUserDropDown = !state.showUserDropDown
        },
        USER_DROP_DOWN_CHANGE(state, value) {
            state.showUserDropDown = value
        },
        USER_LOGOUT(state) {
            state.userIsloggedIn = false
            state.showUserDropDown = false
            state.showLoginModel = false
        },
        SEARCH_DROP_DOWN_VISIBLE(state) {
            state.showSearchDropDown = true
        },
        SEARCH_DROP_DOWN_CLOSE(state) {
            state.showSearchDropDown = false
        },
        SEND_UPDATED_VALUE(state, value) {
            state.searchText = value
            console.log(state.searchText)
        },
        USER_INFO(state, value) {
            state.userInfo = { ...value }
            console.log(state.userInfo)
        },
    },
    namespaced: true
}