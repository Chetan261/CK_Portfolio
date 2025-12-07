AOS.init();

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Front-End Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web Developer')
    .pauseFor(2500)
    .deleteChars(7)
    .start();


    $("#formValidation  ").validate({
        rules:{
           name:{
               minlength: 2,
           },
              
           email:{
             minlength:5
           },
       },

       messages: {
           required: "please enter your name ",
           minlength: "Number at least 2 characters"
         },  
          
         email:{
           required: true
         },
         
         email:{
               minlength:"enter valid email",
               required:"enter valid email"
         },

       submitHandler: function(form) {
         form.submit();
       }
      });