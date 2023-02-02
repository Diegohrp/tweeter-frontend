import Cookies from 'js-cookie';

const headersJson = {
  headers: {
    accept: '*/*',
    'Content-Type': 'application/json',
    'api-key': process.env.API_KEY,
    Authorization: `Bearer ${Cookies.get('token')}`,
  },
};

const headersMulti = {
  headers: {
    ...headersJson.headers,
    'Content-Type': 'multipart/form-data',
  },
};

export {headersJson, headersMulti};
