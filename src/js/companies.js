import  $ from "jquery";

var API ="https://json-data.herokuapp.com/darts/companies";

// var requestCompany_Info = requestCompanyInfo();
//
// function requestCompanyInfo() {
//   return $.ajax ({
//     url: `${API}`
//   });
// };

//
// var companyPIX = requestCompanyInfo. map(function(pix) {
//   console.log(pix);
// //     var title = info.product.title;
// //     var desc = info.product.description;
// //       return `
// //               <div class="">
// //                   <h6>${title}</h6>
// //                   <p>${desc}</p>
// //               </div>
// //               `;
// });



var getCompanyInfo= $.ajax ({
                    url: `${API}`
                      });


getCompanyInfo.then(companyPIX);

// .then(function(data))

// console.log(getCompanyInfo);

// console.log(companyPIX);

function companyPIX (data) {
    data.results.map(function(pic){
        // console.log(pic);
        var url =pic.image_url;
        var picHTML = `<img src="${url}"/>`;
        $(".box6").append(picHTML);
    })
}



// });


export {    };
