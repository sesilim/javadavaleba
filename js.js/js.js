var cinema={
    name: "კავეა(სითი მოლი)",
    language: ["ქართული", "ინგლისური", "რუსული"],
    movies: [
        {name:"ფილმი:Doctor Strange" ,imdb:7},
        {name:"ფილმი:Spider Man" ,imdb:7.5},
        {name:"ფილმი:Vikings",imdb:5.7},
        {name:"ფილმი:Ukrainian Days",imdb:6.5}
    ]
}
  //  document.write("ენები");
  //  for(var i=0; i<cinema.language.length; i++){
    //    document.write(cinema.language[i]);
  //  }
   //     document.write("მიმდინარე კვირის ფილმები რეიტინგი");
     //   for(var i=0; i<cinema.movies.length; i++){
     //       document.write(cinema.movies[i].name + cinema.movies[i].imdb);
    //    }
      //  document.write("რა ენაზე გადის ფილმები სხვადასხვა კინოთეატრებში");
      //  for(var i=0; i<cinema.name.length; i++)
      //  document.write(cinema.name[i] + cinema.language[i]);
document.getElementById("test1").innerHTML =(cinema.name + "</br>" + cinema.language + "</br>" +cinema.movies[0].name + "</br>" + cinema.movies[0].imdb);
document.getElementById("test2").innerHTML =(cinema.name + "</br>" + cinema.language + "</br>" +cinema.movies[1].name + "</br>" + cinema.movies[1].imdb);
document.getElementById("test3").innerHTML =(cinema.name + "</br>" + cinema.language + "</br>" +cinema.movies[2].name + "</br>" + cinema.movies[2].imdb);
document.getElementById("test4").innerHTML =(cinema.name + "</br>" + cinema.language + "</br>" +cinema.movies[3].name + "</br>" + cinema.movies[3].imdb);
