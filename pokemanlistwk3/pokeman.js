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
xhr.open("GET","https://swapi.dev/api/people/1/",true),
xhr.send()

xhr.onreadystatechange = function(){
if(xhr.readyState === 4 && xhr.status === 200){
console.log(xhr.responseText)

let data =JSON.parse(xhr.responseText)
showData(data)

console.log(data)

}else if (xhr.readyState == 4 && xhr.status !== 200){
    console.log(xhr.responseText)
}
 function showData(data){
     console.log(data)
     const character =document.createElement('h1')
 character.textContent = data.name
 document.body.appendChild(character)
    }


