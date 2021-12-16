
const BASE_URL= "https://edgemony-backend.herokuapp.com";

const http=(resorce) => fetch(BASE_URL + resorce)
    .then((response) => response.json());

export{http}; 