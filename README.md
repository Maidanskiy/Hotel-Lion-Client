# Hotel Lion Client service

[![Build Status](https://travis-ci.org/Maidanskiy/hotel.svg?branch=master)](https://travis-ci.org/Maidanskiy/hotel)

## Description
This microservice represents client's functionality for Hotel Lion project

## Pre-install
Before start you have to have installed `Node.js >= 10.5.0` and `npm >= 6.3.0`

## Installation
1. Clone this repository
2. Open terminal in the project's root directory
3. Run next command `npm i`

## Pre-usage
Before run the app locally you have to prepare next environment variables:
 - `NODE_ENV` - might be test, development (default) or production
 - `MONGODB_URI` - database URL
 - `PORT` - port on which the app have to be running (default is 3000)
 - `EMAIL_SENDER` - email for sending emails (for example - `lion.hotel.service@gmail.com`)
 - `CLIENT_ID` - app's CLIENT_ID. Email service use it to send email
 - `CLIENT_SECRET` - app's CLIENT_SECRET. Email service use it to send email
 - `REFRESH_TOKEN` - app's REFRESH_TOKEN. Email service use it to send email
 - `ACCESS_TOKEN` - app's ACCESS_TOKEN. Email service use it to send email

>- Notice: App will be crashed without env variables

You might pass all this variables before `npm start` command (for
example - `NODE_ENV=productio PORT=3344 ... npm start`) or
just create `.env` file in root project's directory and describe all
env variables there (after that just run app in development mode
`npm run dev`. It will automatically read env variables from `.env` file.
If you prefer this approach then you might skip next chapter - `Usage`)
 
## Usage
1. Open terminal in project's root directory
2. Run `npm start` (provide env variables before the command)

The server will be running locally on `http://127.0.0.1:3000`

#### All available commands:
Command | Description
------------ | -------------
`npm start` | Runs the server in production mode
`npm run dev` | Runs the server in production mode
`npm test` | Runs available unit tests

## Contributing
> Notice: Check [conventional commits](https://conventionalcommits.org) before contributing

Service must meet the following requirements:

- Stateless
- Dockerized with appropriate commands
- Logs format is single line JSON 
- Use TypeScript only
- Has `tsconfig.json` and `tslint.json`

## Authors
1. Roman Maidanskiy

## License
:-)
