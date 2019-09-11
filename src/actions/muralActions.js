import axios from 'axios';

export const getMural = () =>
  // below line is commented until we have the actual service
  // axios.get('/image');
  // mocking the original endpoint
  axios.get('./data/mural.json');

export const getTags = () =>
  // below line is commented until we have the actual service
  // axios.get('/tag');
  // mocking the original endpoint
  axios.get('./data/tags.json');

export const tagMural = (muralId, tagId) => {
  // below line is commented until we have the actual service
  // axios.patch(`/mural/${muralId}/${tagId}`);
  // mocking the original endpoint
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('this should be response from the service');
    }, 200);
  });
};

export const untagMural = (muralId, tagId) => {
  // below line is commented until we have the actual service
  // axios.delete(`/mural/${muralId}/${tagId}`);
  // mocking the promise of calling to the original endpoint
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('response');
    }, 200);
  });
};
