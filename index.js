const submitData = function (userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(resp => resp.json())
    .then(userData => document.body.append(userData.id))
    .catch(error => document.body.append(error.message))
}
