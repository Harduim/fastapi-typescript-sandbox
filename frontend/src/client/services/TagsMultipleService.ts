/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserOut } from '../models/UserOut';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagsMultipleService {

  /**
   * Get Users
   * @returns UserOut Successful Response
   * @throws ApiError
   */
  public static getMultipleTags(): CancelablePromise<Array<UserOut>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/multi-tags/',
    });
  }

}
