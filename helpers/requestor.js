import axios from 'axios';

export default async function externalRequest(url, method, opts) {
  try {
    const authToken = process.env.AUTHTOKEN;
    const requestOpts = { method, url: url };
    if (opts && method === 'get') { requestOpts.params = opts; }
    if (opts && method === 'post') { requestOpts.data = opts; }
    if (opts && method === 'delete') { requestOpts.data = opts; }
    if (authToken) { 
      requestOpts.headers = { Authorization: `Basic ${authToken}` };
    }
    const response = await axios(requestOpts);
    return response
  } catch (error) {
    const { response } = error;
    throw response;
  }
}
