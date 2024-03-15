let apiUrl = 'http://194.33.126.239:6677/api';

const env = process.env.NODE_ENV;

if (env !== 'production') {
  apiUrl = 'http://194.33.126.239:6677/api';
}

exports.API_URL = apiUrl;
exports.offsetTop = 96;
