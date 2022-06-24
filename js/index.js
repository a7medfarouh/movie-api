

$(".close").click(function(){
  let widthBox=$('.side').css("left");
    // console.log(widthBox);
 

if(widthBox =="0px"){
  $(".close").removeClass("fa-times"); 
  $('.side').animate({"left":"-20%"},1000);
  
}
else{
  $(".close").addClass("fa-times");
  $('.side').animate({"left":"0%"},1000);
  
}
});

$(".side .nav-tab .nav-item ul li .nav-category").mouseover(function(e){
  $(e.target).css("color","red");
  $(e.target).parent().siblings().children().css("color","white");
})
$(".side .nav-tab .nav-item ul li .nav-category").mouseleave(function(e){
  $(e.target).css("color","white");

})
////////////////////////////////////////////////////////////////////////
let movies =[];
let rowItems= document.getElementById("rowData");

function displayItems(){
   let container=``;
   for(let i=0; i<movies.length;i++){
       container+=`<div class="col-md-4">
       <div class="movies">
         <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" class="w-100" alt="">
         <div class="content" >
            <div class ="inner">
              <h4>${movies[i].original_title}</h4>
              <p>${movies[i].overview}</p>
              <p>Rate: ${movies[i].vote_average}</p>
              <p>${movies[i].release_date}</p>
            </div>
            
         </div>
       </div>
     </div>`

   }
   rowItems.innerHTML=container;
}

async function getItems(input){
  let response;
  if(input == null || input == " "||input =="Trending" ){
    response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=8d6476c35be71f67c98027f358882b6b');
  }else if(input =="Now playing"){
    response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
  }
  else if(input =="Top Rated"){
    response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
  }
  else if(input =="Upcoming"){
    response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
  }
  else if(input =="Popular"){
    response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
  }
  else{
    response = await fetch("https://api.themoviedb.org/3/search/movie?query=" + input + "&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false");
  }

let finalResult =await (response.json());
movies =finalResult.results;
displayItems();
}

(async function(){
 await getItems();
})();
/////////////////////////////////////////////////////////////
let searchInput =document.getElementById("allMovies");
let search =document.getElementById("word");
// console.log(searchInput);
search.addEventListener("keyup", function(){

  getItems(search.value);

})
searchInput.addEventListener("keyup", function(){

  getItems(searchInput.value);

})
//////////////////////////////////////////////////////////////////
let categorylinks = document.querySelectorAll(".nav-category");
// console.log(categorylinks);
for(let i=0 ;i<categorylinks.length;i++){
    categorylinks[i].addEventListener("click",function(e){
      console.log(e.target.innerHTML);
      getItems(e.target.innerHTML);
    })  

}
//////////////////////////////////////////////////////////////////////////////////////
let userName = document.getElementById("name"),
    userEmail = document.getElementById("email"),
    userPhone = document.getElementById("phone"),
    userAge = document.getElementById("age"),
    userPassword = document.getElementById("password"),
    userRePassword = document.getElementById("rePassword"),
    userNameAlert = document.getElementById("namealert"),
    userEmailAlert = document.getElementById("emailalert"),
    userPhoneAlert = document.getElementById("phonealert"),
    userAgeAlert = document.getElementById("agealert"),
    userpasswordAlert = document.getElementById("passwordalert"),
    userRepasswordAlert = document.getElementById("repasswordalert");
  
function ValidationName(){
  let regex =/^[A-Z ]{1}[a-z]{0,10}$/;
  if(regex.test(userName.value)==true){
      return true;
  }
  else{
      return false;
  }
}

userName.addEventListener("keyup", function(){
  console.log(ValidationName());
  if( ValidationName() != true){
    userNameAlert.classList.replace('d-none','d-block');
    // console.log("aa");
  }
  else{
    userNameAlert.classList.replace('d-block','d-none');
    
  }
})

function ValidationPassword(){
  let regex =/^[a-zA-Z0-9-_]{6,16}$/;
  if(regex.test(userPassword.value)==true){
      return true;
  }
  else{
      return false;
  }
}
userPassword.addEventListener("keyup", function(){
 
  if( ValidationPassword() != true){
    userpasswordAlert.classList.replace('d-none','d-block');
  }
  else{
    userpasswordAlert.classList.replace('d-block','d-none');
    
  }
})
function ValidationRePassword(){
 
  if(userPassword.value ===userRePassword.value ){
      return true;
  }
  else{
      return false;
  }
}
userPassword.addEventListener("keyup", function(){
 
  if( ValidationRePassword() != true){
    userRepasswordAlert.classList.replace('d-none','d-block');
  }
  else{
    userRepasswordAlert.classList.replace('d-block','d-none');
    
  }
})
function ValidationEmail(){
  let regex =/[a-z0-9]+@gmail.com$/;
  if(regex.test(userEmail.value)==true){
      return true;
  }
  else{
      return false;
  }
}
userEmail.addEventListener("keyup", function(){
  if(ValidationEmail()==true){
    console.log("bb");
    userEmailAlert.classList.replace('d-block','d-none');
    
  }
  else{
    userEmailAlert.classList.replace('d-none','d-block');
    
  }
})
function ValidationPhone(){
  let regex =/^01[0125][0-9]{8}$/;
  if(regex.test(userPhone.value)==true){
      return true;
  }
  else{
      return false;
  }
}
userPhone.addEventListener("keyup", function(){
 
  if( ValidationPhone() != true){
    userPhoneAlert.classList.replace('d-none','d-block');
  }
  else{
    userPhoneAlert.classList.replace('d-block','d-none');
    
  }
})
function ValidationAge(){
  let regex =/^[2-9][0-9]$/;
  if(regex.test(userAge.value)==true){
      return true;
  }
  else{
      return false;
  }
}
userAge.addEventListener("keyup", function(){
 
  if( ValidationAge() != true){
    userAgeAlert.classList.replace('d-none','d-block');
  }
  else{
    userAgeAlert.classList.replace('d-block','d-none');
    
  }
})
