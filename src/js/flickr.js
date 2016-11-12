import $ from "jquery";

import { flickrKey } from "./api_keys";
var API = `https://api.flickr.com/services/rest/`


//send request to flickr's api
function getImgs (img) {
    var flickr = $.ajax({
                url: `${API}`,
    data: {
      method: "flickr.photos.search",
      api_key: flickrKey,//make sure to import key into this page.
      format: "json",
      nojsoncallback: 1 ,
      sort:'relevance',
      text: 'playing on the lawn',
      per_page: 4
   }
  });
  flickr.then(imgTemplate);
};


//generates html for restaurant photos and puts them on the page
function imgTemplate(pic) {
  console.log(pic);
  // var picCarrusel = pic.sizes.size[3].source;
  //console.log(picCarrusel);
  var picHTML = `
  
  <img src="${picCarrusel}">
  `;
  console.log(picHTML);
    $(".smallpix").append(pic);
  // $(".smallpix").append(picHTML);
};

export { getImgs };
