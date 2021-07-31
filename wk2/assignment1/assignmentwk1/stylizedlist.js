var Bib = `{ "name": "Bib Fortuna","180": "","unknown": "75", "hair_color": "n/a","skin_color": "pale","eye_color": "blue","birth_year": "unknown","gender": "male"}`

    
   
   
  
   
 var list =JSON.parse(Bib)

 document.getElementById("root").innerHTML=list.name
console.log (list.name)
