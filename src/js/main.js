import $ from "jquery";

import { mapHTML } from "./map";
import { extractProduct_Info, extractProductInfo } from "./product_info";
import { testimonialInfo, requestTestimonials } from "./testimonials";
import { getProfile, boyUserPic, girlUserPic } from "./user_profile";
import { companyPIX, getCompanyInfo } from "./companies";
import { getImgs } from "./flickr";

/////////////////////////////////////
////////////////map//////////////////
/////////////////////////////////////
 var map=$(".box7");  //holds box where map is located on the page
 map.append(mapHTML);     //puts map html on the page

 /////////////////////////////////////
 //////////product Info///////////////
 /////////////////////////////////////

extractProduct_Info.then(extractProductInfo);  //these hold the ajax request and the function to order the information .. then used template literals to add the html to the page



/////////////////////////////////////
//////////testimonials///////////////
/////////////////////////////////////


requestTestimonials().then(testimonialInfo);

//photos
getProfile().then(girlUserPic);
getProfile().then(girlUserPic);
getProfile().then(boyUserPic);

 /////////////////////////////////////
 //////////Companies///////////////
 /////////////////////////////////////

 getCompanyInfo.then(companyPIX);


 function changeTabs(event) {
  //  console.log(event);

   if (event.target.id==="miniImg1") {
     console.log("Hey1");
     $("#slide1").removeClass("switch");
     $("#slide2").addClass("switch");
     $("#slide3").addClass("switch");
     $("#slide4").addClass("switch");
     $("#slide5").toggleClass("switch");
     }
   if (event.target.id==="miniImg2") {
     console.log("Hey2");
     $("#slide1").addClass("switch");
     $("#slide2").removeClass("switch");
     $("#slide3").addClass("switch");
     $("#slide4").addClass("switch");
    $("#slide5").toggleClass("switch");
   }
   if (event.target.id==="miniImg3") {
     console.log("Hey3");
     $("#slide1").addClass("switch");
     $("#slide2").addClass("switch");
     $("#slide3").removeClass("switch");
     $("#slide4").addClass("switch");
    $("#slide5").toggleClass("switch");
   }
   if (event.target.id==="miniImg4") {
     console.log("Hey4");
     $("#slide1").addClass("switch");
     $("#slide2").addClass("switch");
     $("#slide3").addClass("switch");
     $("#slide4").removeClass("switch");
    $("#slide5").toggleClass("switch");
   }
 }
 // Shows all div content
 // closePara(event);
 // document.getElementById("para1").addEventListener("click")
 $(".mini").click(changeTabs);

 // function modal(event) {
 //   console.log(event);
 //      x = document.querySelector("modal");
 //      el.style.visibility = (el.sytle.visibility =="visible")? "hidden" : "visible";
 //      console.log("hi");
 // }
 // $(".modal").click(modal);

var modal = document.getElementById('dModal');
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  console.log("hello")
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}
