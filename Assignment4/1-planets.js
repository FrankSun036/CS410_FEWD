var starWarsPlanetsList = document.querySelector('ol');

for(var i = 0; i < 8; i++)
{
    var URLhost = 'https://swapi.co/api/planets/?page=' + i;
    fetch(URLhost) 
    .then(function(response) {   
    return response.json(); 
    })
    .then(function(json) {
    let planets = json.results; 

    for(p of planets) {
        let listItem = document.createElement('li'); 
        listItem.innerHTML = '<p>' + p.name + '</p>'; 
        starWarsPlanetsList.appendChild(listItem);  
        }
    });
}


