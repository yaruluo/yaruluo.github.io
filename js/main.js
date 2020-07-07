
// ================= TYPEWRITING EFFECT =================

var TxtType = function( el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function(){
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[ i];

    if( this.isDeleting){
        this.txt = fullTxt.substring( 0, this.txt.length - 1);
    } else{
        this.txt = fullTxt.substring( 0, this.txt.length + 1);
    }
    
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if ( this.isDeleting){
	delta /= 2;
    }
    if ( !this.isDeleting && this.txt === fullTxt){
        delta = this.period;
        this.isDeleting = true;
    } else if( this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout( function(){
        that.tick();
    }, delta);
};

window.onload = function(){
    var elements = document.getElementsByClassName( 'typewrite');
    for( var i=0; i < elements.length; i++) {
        var toRotate = elements[ i].getAttribute( 'data-type');
        var period = elements[ i].getAttribute( 'data-period');
        if ( toRotate){
            new TxtType( elements[ i], JSON.parse( toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement( "style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #333333}";
    document.body.appendChild( css);
};

// ================= end of typewriting effect =================

// ================= COLLAPSING SIDEBAR ========================

// var x = window.matchMedia( "min-width: 900px)")

function openNav() {
    console.log( 'open');
    document.getElementById( "mySidebar").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    // document.getElementById("navbtn").innerHTML = "×";
}

function closeNav() {
    console.log( 'close');
    document.getElementById( "mySidebar").style.width = "0";
    document.getElementById( "main").style.marginLeft= "0";
}

document.body.addEventListener( "click", closeNav,false);

function scrollTriggered() {
    console.log( 'hi');
}

document.getElementById( 'openbtn').addEventListener( 'click', function(e) {
    e.stopPropagation();
    console.log( 'clicked');
}, true);


// ================= end of collapsing sidebar =================
