import  $ from "jquery";

var API ="https://json-data.herokuapp.com/darts/companies";

function requestCompanyInfo () {
  return $.ajax ({
    url: `${API}`
  });
};


export {    };
