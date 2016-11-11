import  $ from "jquery";

var API = "https://json-data.herokuapp.com/darts/testimonials";

function requestTestimonials () {
  return $.ajax ({
    url: `${API}`
  });
};



function testimonialInfo (data) {
    data.results.map(function(input){
        // console.log(input);
        var name= input.name;
        var review= input.review;
        var testimonialHTML = `
            <div class="userDetail">
              <div class="name">${name}</div>
              <div class="review">${review}</div>
            </div>
           `;
        $(".testimonials").append(testimonialHTML);
    })
}

export { testimonialInfo, requestTestimonials  };


















// var testimonials = requestTestimonials()

//
// var comanyPIX = requestCompanyInfo.map(function(pix) {
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
