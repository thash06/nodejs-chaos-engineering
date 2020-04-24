import roi from 'roi';
import circuitBreakerOpossum  from 'opossum';

const circuitOptions = {
  maxFailures: 5,
  timeout: 1000,
  resetTimeout: 10000
};
const circuitBreaker = new circuitBreakerOpossum(roi.get, circuitOptions);

circuitBreaker.on('halfOpen', () => console.log('Circuit breaker is halfOpen'));
circuitBreaker.on('open', () => console.log('Circuit breaker is open'));
circuitBreaker.on('close', () => console.log('Circuit breaker is closed'));

export default circuitBreaker;
