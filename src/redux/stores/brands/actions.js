import {GET_PAGINATION, CREATE_BRAND} from './constants';

export const getPagination = (payload, cb) => ({
  type: GET_PAGINATION,
  payload,
  cb,
});

export const createBrand = (payload, cb) => ({
  type: CREATE_BRAND,
  payload,
  cb,
});
