/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Group } from '../models/Group';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GroupsService {

  /**
   * Get Groups
   * @returns Group Successful Response
   * @throws ApiError
   */
  public static getGroups(): CancelablePromise<Array<Group>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/groups/',
    });
  }

}
