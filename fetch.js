// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(jsons =>   console.log(jsons))

 function display(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(jsons =>  replace(jsons))

 }
 

function displayshow(){
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data =>  console.log(data));

}

function displayshowuser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => console.log(data));
}

// called function
 function replace(datas){
     const ul= document.getElementById('users');
     for(const data of datas){
         console.log(data.name)
         const li= document.createElement('li');
         li.innerText=` name ${data.name} and    ${data.email}`;
         ul.append(li);
     }
 }