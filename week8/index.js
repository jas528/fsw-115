async function getData(){
    try {
        var people1 =await axios.get("https://swapi.dev/api/people/1/")
     var people =await axios.get(people1.data.films[1])
    console.log(people.data)
    senddata(people.data)
    }
catch (error)
{console.log(error)}
var people1 =await axios.get("https://swapi.dev/api/people/2/")
     var people =await axios.get(people1.data.films[2])
    console.log(people.data)
    senddata(people.data)

}
function senddata(people){
var h1=document.createElement("h1")
h1.textContent=people.title
document.body.appendChild(h1)
}

getData()