import cookies from 'js-cookie';

const ACCESS_TOKEN_KEY = 'accessToken';

const accessTokenUtils = {
  getToken() {
    return cookies.get(ACCESS_TOKEN_KEY);
  },

  setToken(value) {
    return cookies.set(ACCESS_TOKEN_KEY, value);
  },

  removeToken() {
    return cookies.remove(ACCESS_TOKEN_KEY);
  },
};

export default accessTokenUtils;
