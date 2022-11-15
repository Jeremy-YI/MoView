import http from '../utils/http';

class TagService {
  static getAll = () => http.get('/tags');

  static getById = (tagId) => http.get(`/tags/${tagId}`);

  static getByUserId = (userId) => http.get(`/tags/user/${userId}`);

  static create = (newTag) => http.post('/tags/createTags', newTag);

  static update = (tagId, updateTag) => http.put(`/tags/${tagId}`, updateTag);

  static delete = (tagId) => http.delete(`/tags/${tagId}`);
}

export default TagService;
