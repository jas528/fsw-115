var starwars = '{ "name": "C-3PO","height": "167","mass": "75", "hair_color": "n/a","skin_color": "gold","eye_color": "yellow","birth_year": "112BBY"}'

JSON.parse(starwars)

document.getElementById("root").innerHTML=starwars