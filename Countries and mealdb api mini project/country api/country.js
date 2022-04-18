 
const loadCountries= ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data =>display(data));
}

const display= countries =>{
    const mainDiv= document.getElementById("name");
   // console.log(countries);
  countries.forEach(Country =>{
  //  console.log(Country);
    const div= document.createElement('div');

     div.classList.add('country');
        
      const p= document.createElement('p');
     
      p.innerHTML=`
      <p> ${Country.name.common} </p>
      <h5> Capital: ${Country.capital} </h5>
      <button onclick="loadCountry('${Country.name.common}')"> show details</buto>
      `

/*    p.innerText= Country.name.common;
        div.appendChild(p);
        const h6= document.createElement('h6');
        h6.innerText= `Capital: ${Country.capital}`;
        */

        div.appendChild(p)
        mainDiv.appendChild(div);   
    }) 
}

const loadCountry= (name)=>{
const url=` https://restcountries.com/v3.1/name/${name}`;
fetch(url)
.then(res=>res.json())
.then(data => displayCountry(data[0]))


}       

const displayCountry= country=>{
    console.log(country);
    const countryDiv= document.getElementById("countryDetails");
    countryDiv.innerHTML=`
    <h1>Show Country Detalis</h1>
    <h5>${country.name.common}</h5>
    <h5>${country.population}</h5>
    <h5>${country.fifa}</h5>
    <img src="${country.flags.png}">
    
    `
console.log(country.name.common)
}

  

    
 