const name = document.getElementById('name1');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const button = document.getElementById('button1')

// button.addEventListener('click', async() => {
    
//         // let obj = {
//         //     name: name.value,
//         //     email: email.value,
//         //     password: password.value
//         // };
//         // console.log(obj);
    
//         try {
//             let response = await fetch('http://localhost:3005/users', {
//                 method: 'post',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/x-www-form-urlencoded'
//                 },
//                 mode: "no-cors",
//                 body: JSON.stringify({
//                     name: name.value,
//                     email: email.value,
//                     password: password.value
//                 }),
//                 // json: true
//             })
//             console.log(await response.json())
//             // .then(res=>res.json())
//             // .then(res=> console.log(res))
//             // let data = await JSON.parse(response)
    
//             console.log(data)
            
//         } catch(e) {
//             // console.log(e)
//         }
    
// })
// headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },

// 'Accept': 'application/json',
// 'Content-Type' : 'application/json'