let output=``
axios.get("http://api.bryanuniversity.edu/Jasmine/list").then((result)=>{
   result.data.forEach((item)=>{
       output+=`<li ${item.isComplete?`class="strike"`:``}>Task name: ${item.name}. Task description: ${item.description}</li>`
   })
   document.getElementById("todos").innerHTML+=output
})