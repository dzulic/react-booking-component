"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleApiFetchPOST = exports.handleApiFetchPATCH = exports.handleApiFetchGET = exports.handleApiFetchDELETE = exports.handleApiFetch = void 0;
var myHeaders = new Headers();
myHeaders.append("content-type", "application/json");
myHeaders.append("accept", "application/json");

var handleApiFetchGET = function handleApiFetchGET(restEndpoint, bearerToken) {
  return handleApiFetch(restEndpoint, null, bearerToken, 'GET');
};

exports.handleApiFetchGET = handleApiFetchGET;

var handleApiFetchPATCH = function handleApiFetchPATCH(restEndpoint, body, bearerToken) {
  return handleApiFetch(restEndpoint, JSON.stringify(body), bearerToken, 'PATCH');
};

exports.handleApiFetchPATCH = handleApiFetchPATCH;

var handleApiFetchPOST = function handleApiFetchPOST(restEndpoint, body, bearerToken) {
  return handleApiFetch(restEndpoint, JSON.stringify(body), bearerToken, 'POST');
};

exports.handleApiFetchPOST = handleApiFetchPOST;

var handleApiFetchDELETE = function handleApiFetchDELETE(restEndpoint, bearerToken) {
  return handleApiFetch(restEndpoint, null, bearerToken, 'DELETE');
};

exports.handleApiFetchDELETE = handleApiFetchDELETE;

var handleApiFetch = function handleApiFetch(restEndpoint, body, bearerToken, method) {
  if (!myHeaders.has("Authorization")) {
    myHeaders.append("Authorization", "Bearer ".concat(bearerToken));
  }

  return fetch(restEndpoint, {
    method: method,
    // *GET, POST, PUT, DELETE, etc.
    headers: myHeaders,
    body: body
  }).then(function (response) {
    var contentType = response.headers.get("content-type");

    if (contentType && contentType.indexOf("application/json") !== -1) {
      return response.json();
    } else {
      return response.text();
    }
  }).catch(function (error) {
    return console.log('error', error);
  });
};

exports.handleApiFetch = handleApiFetch;