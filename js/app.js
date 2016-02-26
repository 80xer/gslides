+function(){
    var d = document;
    var links = d.querySelectorAll('article.selfLink ul li a');
    
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            window.slidedeck.loadSlide(this.getAttribute('href').slice(-1));
            e.preventDefault();
        });
    }
}();