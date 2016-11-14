import  $ from "jquery";


function getProfileBoy () {
  return $.ajax ({
    url: `https://randomuser.me/api/?gender=male`
  });
};

function getProfileGirl () {
  return $.ajax ({
    url: `https://randomuser.me/api/?gender=female`
  });
};





function UserPic (pic) {
  // console.log(pic);
    pic.results.map(function(data){
        // console.log(data);
          var pic= data.picture.large;
          // console.log(pic);
          var picHTML = `
            <img src="${pic}">
             `;
          $(".photo").append(picHTML);

    })
}



    export { getProfileGirl, getProfileBoy, UserPic };
