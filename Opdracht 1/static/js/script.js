
(function() {

    "use strict"

    var app = {
        init: function() {

            var figure = document.querySelectorAll('figure');
            var a = document.querySelectorAll('figure a');
            scroll.position(figure)
            scroll.current(figure)
            nav.hamburger()



        }
    }
    var scroll = {
        position: function(figure) {
            var winH = window.outerHeight*0.1-10;
            for (var i = 0; i < figure.length; i++) {
                figure[i].addEventListener('click', function() {
                    this.classList.toggle('active');
                    var figureTop = this.offsetTop - winH;
                    window.scrollTo(0, figureTop);
                })
            }
        },
        current: function(figure) {
            window.addEventListener('scroll', function() {
                var win = window.scrollY + window.innerHeight/2;
                var winH = window.offsetHeight;
                var winB = win + winH;
                for (var i = 0; i < figure.length; i++) {
                    var figureTop = figure[i].offsetTop;
                    var figureHeight = figure[i].offsetHeight
                    var figureBot = figureTop + figureHeight;
                    if ( figureTop < win && win < figureBot ) {
                        figure[i].classList.add('current');
                    }
                    else {
                        figure[i].classList.remove('current');
                    }
                }
            })
        }
    }
    var nav = {
        hamburger: function() { 
            var nav = document.getElementById('nav');
            nav.addEventListener("click", function() {
                nav.classList.toggle('showmenu');
            })
        }
    }


    app.init()

})()

