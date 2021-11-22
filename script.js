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
            intervalID = showMyInfo(this);
        },
        close: function(arg1, arg2) {
        },
    },
    {
        prompt: 'guest@unknown ',
        greetings: false,
    });
});

const showMyInfo = (term) => {
    let id = setInterval(() => {
        term.clear();
        term.echo("Always learning, Some might change over time. Try again...\n");
        const django_length = Math.floor((Math.random() * 20) + 1);
        const lang_length = Math.floor((Math.random() * 20) + 1);
        const html_css_length = Math.floor((Math.random() * 10) + 1);
        for (let i = 0; i < 10; i++) {
            if (i == 2) {
                term.echo("|-" + "-".repeat(django_length));
                term.echo("| " + " ".repeat(django_length) + "|");
                term.echo("| " + " ".repeat(django_length) + "|" + "DJANGO");
                term.echo("| " + " ".repeat(django_length) + "|");
                term.echo("|-" + "-".repeat(django_length));
                continue;
            }
            if (i == 4) {
                term.echo("|-" + "-".repeat(lang_length));
                term.echo("| " + " ".repeat(lang_length) + "|");
                term.echo("| " + " ".repeat(lang_length) + "|" + "PYTHON - JS - C");
                term.echo("| " + " ".repeat(lang_length) + "|");
                term.echo("|-" + "-".repeat(lang_length));
                continue;
            }

            if (i == 6) {
                term.echo("|-" + "-".repeat(html_css_length));
                term.echo("| " + " ".repeat(html_css_length) + "|");
                term.echo("| " + " ".repeat(html_css_length) + "|" + "HTLM - CSS");
                term.echo("| " + " ".repeat(html_css_length) + "|");
                term.echo("|-" + "-".repeat(html_css_length));
                continue;
            }
            term.echo("|");
        }
        term.echo("0" + "-".repeat(30) + ">"); 
    }, 3000);
    return id;
};
