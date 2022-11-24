/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { UserOut } from '../models/UserOut';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

  /**
   * Get Users
   * @returns UserOut Successful Response
   * @throws ApiError
   */
  public static getUser(): CancelablePromise<Array<UserOut>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/',
    });
  }

  /**
   * Update User
   * @param requestBody
   * @returns UserOut Successful Response
   * @throws ApiError
   */
  public static updateUser(
    requestBody: User,
  ): CancelablePromise<UserOut> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/users/',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Create User
   * @param requestBody
   * @returns UserOut Successful Response
   * @throws ApiError
   */
  public static createUser(
    requestBody: User,
  ): CancelablePromise<UserOut> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/users/',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get User
   * @param id
   * @returns UserOut Successful Response
   * @throws ApiError
   */
  public static getUser1(
    id: number,
  ): CancelablePromise<UserOut> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}',
      path: {
        'id': id,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Delete User
   * @param id
   * @returns number Successful Response
   * @throws ApiError
   */
  public static deleteUser(
    id: number,
  ): CancelablePromise<number> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/users/{id}',
      path: {
        'id': id,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

}
