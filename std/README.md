# Standard Streams (stdin, stdout)

## How to run the demo

- Install any [Requirements](#Requirements)
- `cd` into the folder *ping*
- Execute `npm install`
- Execute `npm run start`

## How it works

When `npm run start` is executed, it will spawn a the process attached to the Pong C# project. The Pong project simply accepts *stdin* and it will *stdout* the same values.

By attaching an *stdout* hook to the Pong process, the Ping project will `console.log` these values.

## Requirements

- [.NET Core SDK (+3.0)](https://dotnet.microsoft.com/download)
- [Node (+12)](https://nodejs.org/en/download/)
