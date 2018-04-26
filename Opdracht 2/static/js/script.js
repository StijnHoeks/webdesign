
(function() {

    "use strict"

    var app = {
        init: function() {
            var winH = window.innerHeight;
            var winP = winH * 0.1;

            nav.activate();
            
            figure.list();
            figure.grid();
            figure.main(winP);
            figure.detail()
        }
    }
    var nav = {
        activate: function() {
            var nav = document.querySelector('body>nav');
            var menu = document.getElementById('menu');
            menu.addEventListener('click', function() {
                var elem = nav;
                elem.classList.toggle('active')
            })
        }
    }
    var figure = {
        list: function() {
            var list = document.getElementById('list')
            var figure = document.querySelector('#work')
            list.addEventListener('click', function(event) {
                event.preventDefault()
                figure.classList.add('list')
                figure.classList.remove('grid')
            })
        },
        grid: function() {
            var list = document.getElementById('grid')
            var figure = document.querySelector('#work')
            list.addEventListener('click', function(event) {
                event.preventDefault()
                figure.classList.add('grid')
                figure.classList.remove('list')
            })
        },
        main: function(winP) {
            var figure = document.querySelectorAll('#work>figure img');
            for (var i = figure.length - 1; i >= 0; i--) {
                figure[i].addEventListener('click', function(event) {
                    event.preventDefault()
                    var elem = this.parentNode;
                    elem.classList.toggle('active')
                    window.scrollTo(0, elem.offsetTop-winP)
                })
            }
        },
        detail: function() {
            var a = document.querySelectorAll('#work figcaption');
            for (var i = a.length - 1; i >= 0; i--) {
                a[i].addEventListener('click', function(event) {
                    event.preventDefault()
                    this.classList.toggle('active')
                })
            }
        }
    }


    app.init()

})()

