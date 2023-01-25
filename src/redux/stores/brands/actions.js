import {GET_PAGINATION, CREATE_BRAND, UPDATE_BRAND, REMOVE_BRAND} from './constants';

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

export const updateBrand = (payload, cb) => ({
  type: UPDATE_BRAND,
  payload,
  cb,
});

export const removeBrand = (payload, cb) => ({
  type: REMOVE_BRAND,
  payload,
  cb,
});
