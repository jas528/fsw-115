//Promise Chaning
// url:https//swapi.dev/api/people/1
// console.log (axios)
// const getData =() =>{
// axios.get("https//swapi.dev/api/people/1")
// .then(res=>{
// const homeworlUrl = res.datahomeworld
// console.log(homeworlUrl)
// return axios.get(homeworlUrl)
// })
// .then(response=> axios.get(response.data.films[0]))
// .then(res=>console.log(res.data))
// .catch(err=>console.log(err))}
// getData()
async function getData(){
    try {
        var people1 =await axios.get("https://swapi.dev/api/people/1/")
     var people =await axios.get(people1.data.films[1])
    console.log(people.data)
    senddata(people.data)
    }
catch (error)
{console.log(error)}
}
function senddata(people){
var h1=document.createElement("h1")
h1.textContent=people.title
document.body.appendChild(h1)
}

getData()