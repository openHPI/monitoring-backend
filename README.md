# Monitoring Backend
![alt text](https://img.shields.io/travis/com/openHPI/monitoring-backend.svg "Travis Build") 

Backend service for the openHPI monitoring dashboard to process events from Kapacitor and power the frontend.

## Deployment

1. Please follow the deployment instructions under https://github.com/openHPI/monitoring-frontend#deployment.

1. Deploy the service using docker compose / stack: 
  ```docker-compose up``` or ```docker stack -c docker-compose.yml```.

## Development

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
1. Clone the repository
    ```
    git clone https://github.com/openHPI/monitoring-backend
    cd monitoring-backend
    ```
1. Install the dependencies
    ```
    npm install
    ```
1. Start the app
    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.


## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
