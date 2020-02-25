$.ajax({  
    'type': 'GET',  
    'url': '/server',  
    'dataType': 'json',  
    'success': function(data) {    
        console.log(data.name); 
        console.log(data.height); 
        console.log(data.mass);    
        console.log(data.birth_year);  
    } 
});