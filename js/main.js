var photoviewer,photoviewer_img;
onLoad = function() {
photoviewer = document.getElementById('photoviewer');
photoviewer_img = document.getElementById('photoviewer-img');
  // window.onscroll = function() {
  //     if (document.body.scrollTop == 0) {
  //         document.getElementById('navbar').className="navbar";
  //     }        else{
  //         document.getElementById('navbar').className="navbar scrolling";
  //
  //     }
  // };


  var img_tgls = document.getElementsByClassName("img-tgl");


  var navbar_links = document.getElementsByClassName("navbar_link");
  for (var i = 0; i < navbar_links.length; i++)
      navbar_links[i].addEventListener('click', scroll_link, false);


for (var i = 0; i < img_tgls.length; i++)
    img_tgls[i].addEventListener('click', open_image, false);

    photoviewer.addEventListener('click',function(){
      photoviewer.className="";
    },false);
    photoviewer_img.addEventListener('click',function(e){
    e.stopPropagation();
    },false);


}

var trackOutboundLink = function(url,redirect) {
   ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){if(redirect)document.location = url;}
   });
}

var scroll_link = function(){
  scrollTo(document.getElementById(this.getAttribute('href').replace('#','')),800)
}

var open_image = function() {
  var src = this.getAttribute("src").replace('_tiny','').replace('w300/','');
    photoviewer_img.setAttribute("src",src);
    photoviewer.className="active";
    if(ga){
      ga('open_image', 'event', 'Image', 'open', src);
    }

};


window.addEventListener('load', onLoad, false);

function fadeOut(el){
  el.style.display = "none";
}
// c = element to scroll to or top position in pixels
// e = duration of the scroll in ms, time scrolling
// d = (optative) ease function. Default easeOutCuaic
function scrollTo(c,e,d){d||(d=easeOutCuaic);var a=document.documentElement;if(0===a.scrollTop){var b=a.scrollTop;++a.scrollTop;a=b+1===a.scrollTop--?a:document.body}b=a.scrollTop;0>=e||("object"===typeof b&&(b=b.offsetTop),"object"===typeof c&&(c=c.offsetTop),function(a,b,c,f,d,e,h){function g(){0>f||1<f||0>=d?a.scrollTop=c:(a.scrollTop=b-(b-c)*h(f),f+=d*e,setTimeout(g,e))}g()}(a,b,c,0,1/e,20,d))};
function easeOutCuaic(t){
    t--;
    return t*t*t+1;
}
