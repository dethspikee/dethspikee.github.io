const app = document.getElementById("app");
const typewriter = new Typewriter(app, {loop: true, delay: 125});


typewriter
	.typeString('Welcome stranger...')
	.pauseFor(2000)
	.deleteAll()
	.typeString('type ')
	.typeString('<strong>help</strong>')
	.typeString(' for list of commands')
	.pauseFor(3000)
	.start()


$(function() {
   $('#terminal').terminal({
      open: function(value) {
         
      },
      sub: {
         get: function(arg) {
         }
      },
      close: function(arg1, arg2) {
      },
   },
   {
	   greetings: ""
   });
});
