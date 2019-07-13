
let isAuthenticated = false;

export default {
  setAuthenticated(isAuth) {
    isAuthenticated = isAuth;
  },
  getAuthenticated() {
    return isAuthenticated;
  }
};
