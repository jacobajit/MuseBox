//$("#clench").removeClass("color");
$( function() {
    lowLag.init();
    lowLag.load("js/snare.mp3");
    lowLag.load("js/cymbal.mp3");
    lowLag.load("js/clench.mp3");
    lowLag.load("js/bell.mp3");

    var n = 40
        

    var state=true;
    var clenchState=true //not clenched
    var shakeState=true


    function chart(domain, interpolation, tick) {








        var socket = io.connect( "http://localhost:3000" );
        socket.on( "news", function(value) {
            if ((value.args && value.address == "/muse/eeg"))
            {






               blink=value.args[3]
               if(blink<720 && state==true){
                    console.log("playing sound")


                    lowLag.play("js/snare.mp3");

                     // $("#blink").removeClass("color");
                     // setTimeout(function() {
                     //     $("#blink").addClass("color");
                     // }, 10);

                    $("#blink").fadeIn(100).fadeOut(100).fadeIn(100);





                    state=false
               }
               if(blink>720){
                    state=true
               }
               





            }

            else if (value.args && value.address == "/muse/acc"){
               shake=value.args[0]
               if(shake>400 && shakeState==true){
                    console.log("playing shake sound")
                    lowLag.play("js/cymbal.mp3");
                    // $("#shake").removeClass("color");
                    //  setTimeout(function() {
                    //      $("#shake").addClass("color");
                    //  }, 10);
                    $("#shake").fadeIn(100).fadeOut(100).fadeIn(100);
 
                    shakeState=false
               }
               if(shake<400){
                    shakeState=true
               }
               


            }
            else if (value.args && value.address == "/muse/elements/jaw_clench"){

               clench=value.args[0]
               if(clench==1 && clenchState==true){
                    console.log("playing clench sound")
                    lowLag.play("js/bell.mp3");

                    // $("#clench").removeClass("color");
                    //  setTimeout(function() {
                    //      $("#clench").addClass("color");
                    //  }, 10);

                     $("#clench").fadeIn(100).fadeOut(100).fadeIn(100);

                    clenchState=false
               }
               if(clench==0){
                    clenchState=true
               }
               


            }
            else
                return;
        } );
    }

    chart( [1, n - 2], "basis", function tick(path, line, data, x) {} );

} );

