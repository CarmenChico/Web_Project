import  $ from "jquery";

var API = "https://json-data.herokuapp.com/darts/testimonials";

function requestTestimonials () {
  return $.ajax ({
    url: `${API}`
  });
};


// var testimonials = requestTestimonials()


export {    };
