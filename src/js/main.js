import $ from "jquery";

import { mapHTML } from "./map";
import {  extractProduct_Info, extractProductInfo } from "./product_info";
import {  } from "./testimonials";
import {  } from "./user_profile";
import {  } from "./companies";

/////////////////////////////////////
////////////////map/////////////////
/////////////////////////////////////
 var map=$(".box7");  //holds box where map is located on the page
 map.append(mapHTML);     //puts map html on the page

 /////////////////////////////////////
 ////////////////product Info/////////////////
 /////////////////////////////////////
// $(".box3").append(data);

extractProduct_Info.then(extractProductInfo);
