import  $ from "jquery";

var API = "https://json-data.herokuapp.com/darts/info"; // added the variable to link to make it cleaner to read

var extractProduct_Info = requestProduct_Info();


function requestProduct_Info() {
          return $.ajax ({
                url: `${API}`
                  });
    };
// console.log(extractProduct_Info);

//this fucntion details the information that is being pulled via ajax

function extractProductInfo(productData) {
  // console.log(productData);
    var title = productData.data.product.title;
    // console.log(title);
    var desc = productData.data.product.description;
      //I went head and added a variable name to the template, eventhough I would have simply done a return on it, but doing it this way, I added the append at the end of the function. Saved a step... but the otehr way will work as well.
      var infoHTML= `
              <div class="">
                  <h6 title="Lawn Darts will Change your life">${title}</h6>
                  <p>${desc}</p>
              </div>
              `;
              // console.log("HTML string", infoHTML);
              $(".box3").append(infoHTML); //add this information to the page
}

//we want to send the functions to the main.js so that everything gets linked together -- looked cleaner on the main.js file as well
export { extractProduct_Info, extractProductInfo };


//error was to try to use map on this, little did I realize that this particular one was not in
// extractProductInfo.map(function(info) {
//     var title = info.product.title;
//     var desc = info.product.description;
//       return `
//               <div class="">
//                   <h6>${title}</h6>
//                   <p>${desc}</p>
//               </div>
//               `;
// });




// getProduct_Data.then(extractInfo);




// console.log(getProduct_Data);



// function getProduct_Data () {
//               return $.ajax ({
//                       url: `${API}`,
//                       dataType: 'json',
//                       success: function(data2) {
//                         console.log(data2);
//                       }
//               });
// };
//
// function requestProduct_Info () {
//     var getProduct_Data = $.ajax ({
//                           url: `${API}`
//           })
//           getProduct_Data.then(Data);
//
// }
// function Data(results) {
//
//
// }




// function productInfo (item) {
//   var title =item.results
// };

// var productInfo = getData.map(function (product) {
//     var title = product.data.product.title;
//     var description = product.data.product.description;
//       return ``
// //             <div class="title">
//               etc...
//             </div>
//       `;
// });

//
// function extractInfo(desc) {
//
// }
//
//
// function requestInfo() {
//     return $.ajax ({
//     url: "https://json-data.herokuapp.com/darts/info"
//   });
