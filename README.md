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

## Building Docker Images manually

1. Login to your docker account
    ```
    docker login
    ```
1. Build the image
    ```
    docker build -t friedow/monitoring-backend:latest .
    ```
1. Test the image
    ```
    docker run -p 3000:3000 friedow/monitoring-backend:latest
    ```
1. Push the image
    ```
    docker push friedow/monitoring-backend:latest
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.


## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
