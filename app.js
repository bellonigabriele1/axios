const options = {
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'get',
    headers: {'X-Custom-Header': 'foobar'}
}

const axios = require('axios');

// // get request
// const getRequest = async () => {

//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//         console.log(response.data);
//         console.log(response.status + ' ' + response.statusText);
    
// };

// getRequest();

// post request
const postRequest = async () => {
    const newTodo = { 
        userId: 1,  
        title: 'Wash my hands',
        completed: false
    }

    try {
        const resp = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
        console.log(resp.data);
        console.log(resp.status + ' ' + resp.statusText);
    } catch (err) {
        console.error(err);
    }
}

postRequest();
