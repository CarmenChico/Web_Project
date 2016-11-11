import  $ from "jquery";

var API = "https://randomuser.me/api/"

function getProfile () {
  return $.ajax ({
    url: `${API}`
  });
};





function girlUserPic (pic) {
  // console.log(pic);
    pic.results.map(function(data){
        // console.log(data);
        if (data.gender==="female") {
          var pic= data.picture.large;
          // console.log(pic);
          var picHTML = `
            <img src="${pic}">
             `;
          $(".photo").append(picHTML);
        }
    })
}

function boyUserPic (pic) {
  // console.log(pic);
    pic.results.map(function(data){
        // console.log(data);
        if (data.gender==="male") {
          var pic= data.picture.large;
          // console.log(pic);
          var picHTML = `
            <img src="${pic}">
             `;
          $(".photo").append(picHTML);
        }
    })
}

    export { getProfile, boyUserPic, girlUserPic };
