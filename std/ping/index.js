/*global process, require*/
const { spawn } = require("child_process");

var proc = spawn("dotnet", ["run", "-p", "../pong"]);

proc.stdout.on("data", function(data) {
    process.stdout.write(data);
});

proc.stderr.on("data", function(data) {
    process.stderr.write(data);
});

proc.on("close", function(code, signal) {
    console.log("closed", code, signal);
});

proc.stdin.setEncoding("utf-8");
var i = 0;
setInterval(() => {
    proc.stdin.write(`${i++}\n`);
}, 1000);
// proc.stdin.end();
