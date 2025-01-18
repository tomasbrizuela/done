export default async function getUserInfo (token){
    // let url = "https://donebackk-948213617426.southamerica-east1.run.app/auth/userInfo";
    let url = "http://localhost:8080/auth/userInfo";
    let options = {
        'method': 'POST',
        'headers': {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    };
    let response = await fetch(url, options);
    let data = await response.json();
    return data.user.id;
}