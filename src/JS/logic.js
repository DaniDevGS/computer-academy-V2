// Get the token from storage
const token = localStorage.getItem('authToken'); 

fetch('YOUR_BACKEND_URL/api/products/', {
    method: 'GET',
    headers: {
        'Authorization': `Token ${token}`, // <-- The essential part
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));