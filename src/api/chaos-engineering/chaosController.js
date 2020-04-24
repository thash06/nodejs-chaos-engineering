import fetch from 'node-fetch';
import { circuitBreaker , retry } from '../../middlewares';


const URL = 'http://localhost:9090/data-service/vanillaOfferings';
export const getOfferings = (req, res, next) => {
  try {
    // let offerings = "{data : 'Dummy Offerings'}";
    // offerings = fetchOfferings();
    // console.log('Response offerings: ', offerings);
    // res.jsend.success(offerings);
    // todo This call should move to service
    console.log('Protected by RateLimiter ...');
    fetch(URL)
      .then(response => response.text())
      .then(response => {
        console.log('Fetched offerings ...', JSON.parse(response.toString()).data[0]);
        res.type('application/json').jsend.success(JSON.parse(response.toString()).data[0]);
      })
      .catch(err => console.error(err));
  } catch (error) {
    console.log(' Error occurred ', error);
    next(error);
  }
};
const nextService = 'chaos-engineering';
function fallback() {
  return [`The ${nextService} service is currently unavailable.`];
}

export const getOfferingsWithCircuitBreaker = (req, res, next) => {
  try {
    // todo This call should move to service
    console.log('Protected by RateLimiter and CircuitBreaker ...');
    circuitBreaker
      .fire({ endpoint: URL })
      .then(response => {
        res.set('Access-Control-Allow-Origin', '*');
        console.log('Data , ', JSON.parse(response.body).data[0]);
        res.type('application/json').send(JSON.parse(response.body).data[0]);
      })
      .catch(e => {
        console.error('Error message to send ', e);
        console.error('CircuitBreaker Status : ', circuitBreaker.status);
        if (circuitBreaker.halfOpen === true) {
          res.send(`Circuit breaker is HALF_OPEN: Fallback response - ${  fallback()}`);
        } else if (circuitBreaker.opened === true) {
          res.send(`Circuit breaker is OPENED: Fallback response - ${  fallback()}`);
        } else {
          res.send(e);
        }
      });
  } catch (error) {
    console.log(' Error occurred ', error);
    next(error);
  }
};

export const getOfferingsWithRetry = (req, res, next) => {
  try {
    // todo This call should move to service
    console.log('Protected by RateLimiter and Retry ...');
    retry
      .get('/vanillaOfferings') // The first request fails and the second returns 'ok'
      .then(response => {
        console.log('Data , ', response.data.data[0]);
        res.type('application/json').send(response.data.data[0]);
      })
      .catch(error => {
        // The first request fails
        console.log('Retry Error , ', error);
        error !== undefined;
        console.log('error !== undefined , ', error !== undefined);
        // next(error);
      });
  } catch (error) {
    console.log(' Error occurred ', error);
    next(error);
  }
};
