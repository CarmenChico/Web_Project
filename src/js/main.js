import $ from "jquery";

import { mapHTML } from "./map";
import { extractProduct_Info, extractProductInfo } from "./product_info";
import { testimonialInfo, requestTestimonials } from "./testimonials";
import { getProfile, boyUserPic, girlUserPic } from "./user_profile";
import { companyPIX, getCompanyInfo } from "./companies";
import { getImgs } from "./flickr";

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
