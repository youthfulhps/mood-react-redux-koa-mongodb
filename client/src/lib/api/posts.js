import qs from 'qs';
import client from './client';

export const writePost = ({ imageList, emotion, title, content, tags }) =>
  client.post('/api/posts', { imageList, emotion, title, content, tags });

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  console.log(queryString);
  return client.get(`/api/posts?${queryString}`);
};

export const updatePost = ({ id, imageList, emotion, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, {
    imageList,
    emotion,
    title,
    body,
    tags,
  });

export const removePost = (id) => client.delete(`/api/posts/${id}`);
