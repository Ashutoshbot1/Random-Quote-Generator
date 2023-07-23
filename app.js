let quote=document.getElementById("quote");
let author=document.getElementById("author")
let btn=document.getElementById("btn");

const url="https://api.quotable.io/random";

async function getQuote(){
    const response=await fetch(url);
    const data=await response.json();
    // console.log(data);
    displayQuote(data);

}

function displayQuote(data){
    quote.innerHTML=data.content;
    // console.log(data.content);
    author.innerHTML=`- ${data.author}`;
}

btn.addEventListener("click",getQuote);

getQuote();