"use strict";

import aja from 'aja';
import Q from 'Q';

const API_BASE_URL = 'http://localhost:3000/api';

export function getAllScrumPokers()  {
    return getRequest(API_BASE_URL + '/scrumpoker')
		.then(response => {
			return response;
		});
}

export function createScrumPoker(id) {
	console.log('To implement');
}


function getRequest(url) {

  let succeeded = false;
  const deferredResult = Q.defer();

  aja()
    .url(url)
    .cache(false)
    .on('success', data => {
      succeeded = true;
      deferredResult.resolve(data);
    })
    .on('error', err => {
      deferredResult.reject(err);
    })
    .on('end', () => {
      if (!succeeded) {
        deferredResult.reject(new Error('Could not fetch ' + url));
      }
    })
    .go();

  return deferredResult.promise;
}