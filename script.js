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
      help: function() {
        this.echo('\n'); 
        this.echo('\tDisplay projects'); 
        this.echo('\n'); 
        this.echo('Options:'); 
        this.echo(''); 
        this.echo('--list\tDisplay all projects:'); 
        this.echo('--list\tDisplay all projects:'); 
      },
      sub: {
         get: function(arg) {
         }
      },
      list: function(value) {
		  this.echo(value);
	  },
      close: function(arg1, arg2) {
      },
   },
   {
	   prompt: '> ',
	   greetings: false
   });
});
