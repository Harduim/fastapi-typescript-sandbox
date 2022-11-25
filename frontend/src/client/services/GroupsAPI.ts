/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Group } from '../models/Group';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GroupsAPI {

  /**
   * Get Groups
   * @returns Group Successful Response
   * @throws ApiError
   */
  public static getgroups(): CancelablePromise<Array<Group>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/groups/',
    });
  }

}
