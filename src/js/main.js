import $ from "jquery";

import { mapHTML } from "./map";
import {  extractProduct_Info, extractProductInfo } from "./product_info";
import {  } from "./testimonials";
import { getProfile } from "./user_profile";
import {  } from "./companies";

/////////////////////////////////////
////////////////map/////////////////
/////////////////////////////////////
 var map=$(".box7");  //holds box where map is located on the page
 map.append(mapHTML);     //puts map html on the page

 /////////////////////////////////////
 //////////product Info///////////////
 /////////////////////////////////////

extractProduct_Info.then(extractProductInfo);  //these hold the ajax request and the function to order the information .. then used template literals to add the html to the page



/////////////////////////////////////
//////////profile picturs///////////////
/////////////////////////////////////

 getProfile().then(function(response_data) {
  // console.log(response_data) ;
 })
