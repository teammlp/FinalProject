export function serializeUser(user) {
    sessionStorage.setItem("user", JSON.stringify(user))
}

export function deserializeUser() {
    const user = sessionStorage.getItem("user");
    return user && JSON.parse(user);
}

export function logoutUser() {
    sessionStorage.removeItem("user");
}