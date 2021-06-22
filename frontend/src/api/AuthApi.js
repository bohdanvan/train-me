class AuthApi {

    signInAsync(email, password) {
        return Promise.resolve()
            .then(() => {
                console.log(`Send API request: singIn(${JSON.stringify({ email, password })})`)
                return { token: `TOKEN-${email}` }
            })
    }

    signOutAsync(token) {
        return Promise.resolve()
            .then(() => {
                console.log(`Send API request: sigOut(${token})`)
            })
    }
}

const authApi = new AuthApi()

export default authApi
