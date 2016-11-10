import  $ from "jquery";

var API = "https://randomuser.me/api/";
// 
// function getProfile () {
//   return $.ajax ({
//     url: `${API}`,
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
// };



$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});


    //  ?format=json
export {    };
