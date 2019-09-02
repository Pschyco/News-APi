
function create_new_XML_object(){
    if(typeof(XMLHttpRequest) != "undefined"){
        return new XMLHttpRequest ;
    }
    else{
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
};

var badWord = [/(f|F)(u|U)(c|C)(k|K)/,/(p|P)(o|O)(r|R)(n|N)/,/(s|S)(e|E)(x|X)/,/(m|M)(i|I)(l|L)(f|F)/,/(B|b)(B|b)(W|w)/,/(a|A)(n|N)(a|A)(l|L)/,/(b|B)(u|U)(t|T)(t|T)/,/(b|B)(o|O)(o|O)(t|T)(y|Y)()/,/(p|P)(e|E)(n|N)(n|N)(i|I)(s|S)/];
var links = document.getElementsByClassName("nav-link");
var countries = document.getElementsByClassName("country");
var category = 'general';
var country ='eg';
var news =[];
 
// for searching by words 
var searchWord ='';
var inputform = document.getElementById("Search-Inp-Form");
var searchButton = document.getElementById("Search-Inp-Button");


// first call for news when browser opens 
GET_NEWS();

// clicking on category
for(var i = 0  ; i < links.length ; i++){

    links[i].addEventListener("click",function(e){
        category = e.target.innerHTML;
        console.log(category);
        GET_NEWS();

    }) 
};

//clicking on any country 
for(var i = 0  ; i < countries.length ; i++){

    countries[i].addEventListener("click",function(e){
        country = e.target.innerHTML;
        console.log(country);
        GET_NEWS();

    }) 
};

//function done for searching by words
searchButton.addEventListener("click",function(){
   console.log(inputform.value);
   searchWord = inputform.value ;
   var count =0;
   for(var i = 0; i<badWord.length ; i++){
      if(badWord[i].test(searchWord)==true){
          count++;
      }
   }

   if(count == 0){
    Global_Search();
   }
   else {
       alert('Sayyidina Abdullah Ibn Mas'+'ud (RA) reported that Allah'+'s Messenger (may peace be upon him)'+
             'said to us: 0 young men, those among you who can support a wife should marry, for it restrains'+
             'eyes (from casting evil glances) and preserves one from immorality; but he who cannot afford It'+
              'should observe fast for it is a means of controlling the sexual desire. [Muslim].');
   }

})




function GET_NEWS(){
var req = create_new_XML_object();
var URL = `https://newsapi.org/v2/top-headlines?country=`+country+`&category=`+category+`&apiKey=d34d49ce3a794aca80d1ae821239b0eb`;
req.open("GET",URL);
req.send();
req.onreadystatechange =function(){  
    if(req.readyState == 4 && req.status == 200){
        news = JSON.parse(req.response).articles;
        Display_News();
    }   
};

}





function Display_News(){
    var temp='';
    for(var i =0 ; i < news.length ; i++){
        temp +='<div class="col-md-4">'+
                '<div class="item">'+
                '<img class="rounded img-fluid img-item " src="'+news[i].urlToImage+'"/>'+
                '<h2>'+news[i].title+'</h2>'+
                '<p>'+news[i].description+'</p>'+
                '<h5>'+news[i].author+'</h5>'+
                '<h6>'+news[i].publishedAt+'</h6>'+
                '</div>'+
                '</div>';
 
    }
    document.getElementById("newsRow").innerHTML = temp ;
};





function Global_Search(){
    var req = create_new_XML_object();
    var URL = 'https://newsapi.org/v2/everything?q='+searchWord+'&from=2019-08-01&sortBy=publishedAt&apiKey=e2c2ad6ae14d4dd88b70416704e1e1c9';
    req.open("GET",URL);
    req.send();
    req.onreadystatechange =function(){  
    if(req.readyState == 4 && req.status == 200){
        news = JSON.parse(req.response).articles;
        Display_News();
    }   
};
}