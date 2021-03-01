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
        this.echo('ls\t\t\t\tList all projects:'); 
        this.echo('whoami\t\t\tContact me'); 
      },
      sub: {
         get: function(arg) {
         }
      },
      ls: function() {
		  this.echo('Listing all projects...\n');
	  },
      close: function(arg1, arg2) {
      },
   },
   {
	   prompt: 'root@<xxx.xxx.xxx.xxx> ',
	   greetings: false,
   });
});
