/*
 * Display into text to the user
 */
const playIntro = () => {
	const app = document.getElementById("app");
	let typewriter = new Typewriter(app, {cursor: ' '});

	setTimeout(() => {
		typewriter = new Typewriter(app, {loop: false, delay: 50});
		typewriter
			.typeString('...A12"£!A:$....adw!"£"!£...')
			.pauseFor(1500)
			.deleteAll()
			.typeString('Restoring connection...')
			.pauseFor(1000)
			.deleteAll()
			.typeString('Connection established.')
			.deleteAll()
			.typeString('hell st@"£ger... try ')
			.typeString('<strong>help</strong>')
			.typeString(' to see available comm....')
			.pauseFor(5000)
			.deleteAll()
			.typeString('Connection lost...')
			.start();

	}, 1000);
};


document.addEventListener('DOMContentLoaded', event => {
	playIntro();
});


$(function() {
   $('#terminal').terminal({
      help: function() {
        this.echo('\n'); 
        this.echo('\tWelcome to the DEV terminal'); 
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
