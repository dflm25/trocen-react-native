/**
 * This source code is the confidential, proprietary information of
 * Companyon, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Companyon.
 *
 * Companyon
 * All Rights Reserved.
 */

import {GET_ALL} from './constants';

/**
 * @file actions.js
 * @author Daniel Felipe Lucumi Marin
 * @description auth actions.
 */

export const getAll = (payload, cb) => ({
  type: GET_ALL,
  payload,
  cb,
});
