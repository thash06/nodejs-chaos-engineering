
Start using: 

    npm run dev
    npm run debug -> Does not work in Intellij. Try using VSCode


Modules included

    nodemon -> dynamic restart
    express -> web application framework
    morgan -> request logger
    bodyparser -> Parse incoming request bodies in a middleware before your handlers
    node-fetch -> Http Calls
    
    roi -> for circuitbreaker
    opossum -> for circuitbreaker
    express-rate-limit -> rate limiting
    axios -> Retry
    axios-retry -> Retry
    
URL's
    
    http://localhost:8080/offerings/circuit-breaker -> Circuit breaker and Fallback 
    http://localhost:8080/offerings/ -> RateLimiter
    http://localhost:8080/offerings/retry -> Retry with exponential backoff

Pre-requisite
    
    Make sure you have chaos-engineering spring boot application running locally.
    URL = 'http://localhost:9090/data-service'
