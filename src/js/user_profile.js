import  $ from "jquery";

var API = "https://randomuser.me/api/"

function getProfile () {
  return $.ajax ({
    url: `${API}`
  });
};



getProfile().then(userPic);
getProfile().then(userPic);
getProfile().then(userPic);

function userPic (pic) {
  console.log(pic);
    pic.results.map(function(data){
        console.log(data);
        var pic= data.picture.large;
        var picHTML = `
          <img src="${pic}">
           `;
        $(".photo").append(picHTML);
    })
}


    export { getProfile };
