import cookie from 'react-cookies';

/**
 * general function for API calls
 * @param {string} url 
 * @param {string} method 
 * @param {object} body 
 * @param {string} token 
 * @param {function} handler 
 * @param {function} errorHandler 
 */
const callAPI = (url, method = "get", body, token, handler, errorHandler) => {
  
  return fetch(url, {
    method: method,
    mode: "cors",
    cache: "no-cache",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token},
    body: body ? JSON.stringify(body) : undefined
  })
    .then(response => response.json())
    .then(data => (typeof handler === "function" ? handler(data) : data))
    .catch(e =>
      typeof errorHandler === "function" ? errorHandler(e) : console.error(e)
    );
};

/**
 * function to hit API on signin
 * @param {string} url 
 * @param {string} auth 
 * @param {function} handler 
 * @param {function} errorHandler 
 */
const callAPIBasic = (url, auth, handler, errorHandler) => {

  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Authorization": `Basic ${auth}`,
    },
    body: undefined,
  })
  .then(response => response.text())
  .then(data => {
    if(data === '{"error":"Invalid User ID/Password"}'){
      return {loggedIn: false, data: null, loginStatus: false};
    } 
    else {
      cookie.save('auth', data);
      return {loggedIn: true, data: data, loginStatus: true};
    }
  })
    .catch(e =>
      typeof errorHandler === "function" ? errorHandler(e) : console.error(e)
    );
};

/**
 * function to hit API for signup
 * @param {string} url 
 * @param {object} body 
 * @param {function} errorHandler 
 */
const callAPISignUp = (url, body, errorHandler) => {
  return fetch(url, {
    method: 'POST',
    mode: "cors",
    cache: "no-cache",
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined
  })
    .then(response => {
      console.log(response.status);
      if(response.status === 500){
        return 'username taken';
      }else {
        return response.text() 
      }
    })
    .catch(e =>
      typeof errorHandler === "function" ? errorHandler(e) : console.error(e)
    );
};

export { callAPI, callAPIBasic, callAPISignUp };

