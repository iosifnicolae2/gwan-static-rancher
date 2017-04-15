var photoviewer,photoviewer_img;
onLoad = function() {

  var imgDefer = document.getElementsByTagName('img');
for (var i=0; i<imgDefer.length; i++) {
if(imgDefer[i].getAttribute('data-src')) {
imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
} }


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
document.getElementById("close_photo").addEventListener('click',close_photoviewer,false);

  var navbar_links = document.getElementsByClassName("navbar_link");
  for (var i = 0; i < navbar_links.length; i++)
      navbar_links[i].addEventListener('click', scroll_link, false);


for (var i = 0; i < img_tgls.length; i++)
    img_tgls[i].addEventListener('click', open_image, false);

    photoviewer.addEventListener('click',close_photoviewer,false);
    photoviewer_img.addEventListener('click',function(e){
    e.stopPropagation();
    },false);


}

function close_photoviewer(){
  photoviewer.className="";
}

var trackOutboundLink = function(url,redirect) {
  if(!ga){
    if(redirect)document.location = url;
  }
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
function easeOutCuaic(t){
    t--;
    return t*t*t+1;
}
