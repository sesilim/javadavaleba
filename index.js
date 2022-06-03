var kavea = {
    languages:["ენები:ქართულად", "ინგლისურად", "რუსულად"]
}
movies: [
    {name:"ფილმი:Doctor Strange" ,imdb:7},
    {name:"ფილმი:Spider Man" ,imdb:7.5},
    {name:"ფილმი:Vikings",imdb:5.7},
    {name:"ფილმი:Ukrainian Days",imdb:6.5}
]
document.getElementById("description").innerHTML=(kavea.languages+ "</br>" + kavea.movies.name + "</br>" + kavea.movies.imdb)
