process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
            case '/nodever':
                process.stdout.write('Node.js version: ' + process.versions.node + '\n');
                break;
            case '/syslang':
                process.stdout.write('System Language: ' + process.env.lang + '\n');
                break;
            default:
                process.stderr.write('Fatal Error!\n');
        }
    }
});