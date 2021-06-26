var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Action to be performed when the document is read;
       const JSONdata=xhttp.responseText;
       const response =JSON.parse(JSONdata);
       console.log(response.results); 
       for(var i=0; i <response.results.length;i++){
        var h1= document.createElement("h1")
        h1.textContent= response.results[i].name
        document.body.appendChild(h1)     


       }}};
xhttp.open("GET","https://pokeapi.co/api/v2/pokemon", true),
xhttp.send();
