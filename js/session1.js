/*
let , const ,  var 
let const haven't been hoisted 

let,const is a block scope 
var is a function scope

let i = 10; 


for(let i = 0 ; i <5 ;i++)
    {
        console.log(i);
    }

console.log(i);

{
    let x = 10;
    const y = 15;
    var z= 20;
}


console.log(x);
let x = 10;

//////////////////////////////////////////////////////////////

template literals

function salary( userName , salary )
{
   // console.log('welcome '+userName+' Your Salary is '+salary+' EGP')
   console.log(`welcome ${userName} your Salary is ${salary} EGP`)
}

//////////////////////////////////////////////////////////////
arrow function

//ES5
var welcome = function ( userName )
{
    return `welcome ${userName}`;
}

//ES6 
let welcome = userName => `welcome ${userName}`;

console.log(  welcome("ali") );


var person = 
{
    name:'ahmed',
    birthDate:1993,
    salary:4000,
    calcAge:function()
    {
        return 2019-this.birthDate;
    },
    calcSalary:function()
    {
        let calcTaxes = () => { 
            
            return (this.salary*14)/100;

        }
        return this.salary - calcTaxes();
    }
}

var x = person.calcSalary();

//////////////////////////////////////////////////////////////

default parameters 

function salary( userName , salary  = 3000)
{
   // console.log('welcome '+userName+' Your Salary is '+salary+' EGP')
   console.log(`welcome ${userName} your Salary is ${salary} EGP`)
}

salary("sayed" , 1000 )

salary( undefined , 1000 )
//////////////////////////////////////////////////////////////


set
let friends = new Set();

friends.add("ahmed");
friends.add("ali");
friends.add("sayed");
friends.add("mai");
friends.add("taha");
friends.add("ahmed");

friends.delete("mai");
friends.clear();


console.log(friends.has("ali"));
console.log(friends.size);
console.log(friends);

let arr = [1,2,3,4,5,6,4,3];

let s  = new Set(arr);

var x = Array.from(s )

//////////////////////////////////////////////////////////////

Map
var person = new Map();

person.set("name","ahmed");
person.set("gender","male");
person.set("age",26)

console.log(person.get("age"));
person.delete("gender")
person.has("name")
console.log(person.size)



var person = new Map();

person.set("name","ahmed");
person.set("gender","male");
person.set("salary","4000");
person.set("title","softwareEngineer");
person.set("age",26)


for(let [key , value] of person)
    {
        console.log(`person ${key} is ${value}`)
    }

//////////////////////////////////////////////////////////////

getNews()
{

        let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d34d49ce3a794aca80d1ae821239b0eb';

        let req = new XMLHttpRequest();

        req.open("GET", url , true);

        req.onload = function()
        {
        if(req.status == 200)
            {
                console.log(req.response);
            }
        else
            {
                console.log("connection error");
            }
        }

        req.send();

}


let getNews = new Promise( function(resolved , rejected){
            let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d34d49ce3a794aca80d1ae821239b0eb';
    
            let req = new XMLHttpRequest();
    
            req.open("GET", url , true);
    
            req.onload = function()
            {
            if(req.status == 200)
                {
                    resolved(req.response);
                }
            else
                {
                    rejected("connection error");
                }
            }

            req.onerror = function()
            {
                rejected("connection error");
                
            }
    
            req.send();
    
});


getNews.then(function(r){
    console.log(r)
} , function(er){
    console.log(er)
})



function getNews()
{
    return new Promise(function(resolved , rejected){
        let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d34d49ce3a794aca80d1ae821239b0eb';
    
        let req = new XMLHttpRequest();
    
        req.open("GET", url , true);
    
        req.onload = function()
        {
        if(req.status == 200)
            {
                resolved(req.response);
            }
        else
            {
                rejected("connection error");
            }
        }
    
        req.onerror = function()
        {
            rejected("connection error");
            
        }
    
        req.send();
    
    });
}




getNews().then()


*/



/*

200: "OK"
403: "Forbidden"
404: "Page not found"



Holds the status of the XMLHttpRequest. 
0: request not initialized 
1: server connection established
2: request received 
3: processing request 
4: request finished and response is ready
*/


