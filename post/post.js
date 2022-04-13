  function display(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPost(data));
  }

function displayPost(posts){
 const parentPost= document.getElementById('for-post');

    for(const post of posts){

        const li= document.createElement('li');
        li.classList.add('col');
        li.innerHTML=  `
         <h1>PKKKKKK</h1>
        ${post.title}
        <p>new des</p>`;
        //li.innerText= `${post.title}`
        parentPost.appendChild(li);
    

    }
     
}