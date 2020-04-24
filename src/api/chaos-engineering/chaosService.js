import fetch from 'node-fetch';

const URL = 'http://localhost:9090/data-service/vanillaOfferings';

function checkStatus(res) {
  if (res.ok) {
    // res.status >= 200 && res.status < 300
    return res;
  }
  // todo Should throw exception here
  return res.statusText;
}

export const fetchOfferings = () => {
  // let rawdata = fs.readFileSync(pathToJsonFile);
  // let books = JSON.parse(rawdata);
  // return "{books: \'ABC\'}";
  console.log('FetchOfferings');
  fetch(URL)
    .then(checkStatus)
    .then(res => res.text())
    .then(res => {
      console.log('Fetched ...', JSON.parse(res.toString()));
      return JSON.parse(res.toString());
    })
    .catch(err => console.error(err));
};
