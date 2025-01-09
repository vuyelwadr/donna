const parsedUrl = new URL(window.location.href);
const { protocol, hostname } = parsedUrl;
var baseUrl = `${protocol}//${hostname}`;
if (hostname == "localhost"){
  var port = '3000';
  baseUrl = `${baseUrl}:${port}`;
}

export const API_URL = `${baseUrl}/api`
