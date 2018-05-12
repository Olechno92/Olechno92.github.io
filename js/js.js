var searchResult =[
  {
    header:{
      title:'Властелин колец: Возвращение короля',
      url:'film_page1.html'
    },
    details:{
      poster:'images/img1.jpg',
      actors:'Элайджа Вуд, Вигго Мортенсе, Шон Эстин, Иэн МакКеллен, Орландо Блум, Доминик Монахэн, Билли Бойд, Энди Серкис, Миранда Отто, Бернард Хилл.',
      description:'Братство распалось, но Кольцо Всевластия должно быть уничтожено. Фродо и Сэм вынуждены доверить свои жизни Голуму, который взялся провести их к вратам Мордора. Громадная Армия Сарумана приближается: члены братства и их союзники готовы принять бой.'
    },
    footer:{
      country:'США',
      imbd: 8.90,
      year: 2003
    }
  }
];



function createArticle(film){
  var article= document.createElement('article');
  article.appendChild(createHeader(film.header));
  article.appendChild(createMovieDescription(film.details));
  article.appendChild(createFooter(film.footer));

  return article;
}

for(var i=0 ;i < searchResult.length;i++){
  console.log(searchResult[i]);
  main.appendChild(createArticle(searchResult[i]));
}
