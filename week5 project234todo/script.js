let output=``
axios.get("http://api.bryanuniversity.edu/Jasmine/list").then((result)=>{
    console.log(result)
   result.data.forEach((item)=>{
       output+=`<li ${item.isComplete?`class="strike"`:``}>Task name: ${item.name}. Take price: ${item.price} Task description: ${item.description}</li>`
   })
   document.getElementById("todos").innerHTML+=output
})

// let obj = {
//     title: 'star wars 1'
// }


// console.log(obj.title)
function submitHandler(event){
    event.preventDefault()
    let title = document.forms['myForm']['title'].value;
    let price = document.forms['myForm']['price'].value;

    let description = document.forms['myForm']['description'].value;
    // alert(title +  ' '  + price +  ' ' + description)
    axios.post("http://api.bryanuniversity.edu/Jasmine/list",
     {
       name: title, price, description
    }).then((response)=>{
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
    alert(`${title} ${price} ${description}`)
}