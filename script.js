/*
 * Display into text to the user
 */
const playIntro = () => {
    const app = document.getElementById("app");
    let typewriter = new Typewriter(app, {cursor: ' '});

    setTimeout(() => {
        typewriter = new Typewriter(app, {loop: false, delay: 50});
        typewriter
            .typeString('...367c3..636bb9c6...37e9b2e...')
            .pauseFor(1500)
            .deleteAll()
            .typeString('Restoring connection...')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Connection established...')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Unknown user detected...')
            .deleteAll()
            .typeString('Welcome guest!')
            .start();

    }, 1000);

    setTimeout(() => {
        const terminalWrapper = document.querySelector('.terminal-wrapper');
        terminalWrapper.style.display = 'block';
    }, 400);
};


document.addEventListener('DOMContentLoaded', event => {
    playIntro();
});


$(function() {
    let intervalID = 0;
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
        whoami: function() {
            showMyInfo(this);
        },
        close: function(arg1, arg2) {
        },
    },
    {
        prompt: '[guest@unknown ~] ',
        greetings: false,
    });
});

const showMyInfo = (term) => {
    term.echo("Junior Backend Developer\n");
    term.echo("Solving problems and building stuff (mainly with Python and Django)");
    term.echo("Interested in systems programming\n");
    term.echo("Find me on:");
    term.echo("tab.damian93@gmail.com");
    term.echo("https://github.com/dethspikee");
};
