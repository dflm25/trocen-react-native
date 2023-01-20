import request from '../utilities/request';

export const getAllBrands = async ({page, store_id}) => {
  const url = `api/brands?page=${page}&limit=10&store_id=${store_id}`;
  const requestOptions = {method: 'GET'};

  return await request(url, requestOptions);
};
