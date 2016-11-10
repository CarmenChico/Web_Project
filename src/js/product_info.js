import  $ from "jquery";

// var API = "https://json-data.herokuapp.com/darts/info";

var extractProduct_Info = requestProduct_Info();




function requestProduct_Info() {
          return $.ajax ({
                url: "https://json-data.herokuapp.com/darts/info"
                  });
    };
// console.log(extractProduct_Info);

// var getProduct_Data = $.ajax ({ url: `${API}`});

function extractProductInfo(productData) {
  // console.log(productData);
    var title = productData.data.product.title;
    // console.log(title);
    var desc = productData.data.product.description;
      var infoHTML= `
              <div class="">
                  <h6>${title}</h6>
                  <p>${desc}</p>
              </div>
              `;
              // console.log("HTML string", infoHTML);
              $(".box3").append(infoHTML);
}


export { extractProduct_Info, extractProductInfo };

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
