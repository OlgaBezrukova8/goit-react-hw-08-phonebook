export const getUser = state => state.auth.user;
export const getLoggedIn = state => state.auth.isLoggedIn;
export const getEmail = state => state.auth.user.email;
export const getToken = state => state.auth.token;
