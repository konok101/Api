const SearchFood=()=>{
    const searchField= document.getElementById("search-field");
    searchText= searchField.value;
  
    searchField.value='';

    if(searchText ==0){

    }
 
else{
  const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=> displaySearchREsult(data.meals))
}

 
  
}


const displaySearchREsult = (meals)=>{
///    console.log(meals);
//search result for append parent child
    const searchResult = document.getElementById("search-result" );
    searchResult.innerHTML= '';

   
 
    
    //for Each for per meal
   
    meals.forEach(meal=>{
      ////   console.log(meal);
 
         const div= document.createElement('div');
         div.classList.add('col');
       //  div a inner html set for dynamic way
         div.innerHTML=`
         <div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${meal.strMeal}</h5>
           <p class="card-text"> ${meal.strInstructions.slice(0,222)}</p>
         </div>
       </div>
         `;
        // append 
         searchResult.appendChild(div);
     })
   
    }


const loadMealDetails= mealId=>{

   const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

   fetch(url)
   .then(res => res.json())
   .then(data => dssplayMealDEtails(data.meals[0]));

}

const dssplayMealDEtails = meal =>{
  console.log(meal);

  const mealDetails= document.getElementById('meal-details');
  mealDetails.innerHTML='';
  const div= document.createElement('div');
  div.classList.add('card');
  div.innerHTML=`
  <img  src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text"> ${meal.strInstructions.slice(0,222)}</p>
    <a  href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  mealDetails.appendChild(div);

}