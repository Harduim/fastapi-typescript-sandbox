/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { UserOut } from '../models/UserOut';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserAPI {

  /**
   * Get All
   * @returns UserOut Successful Response
   * @throws ApiError
   */
  public static getall(): CancelablePromise<Array<UserOut>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/',
    });
  }

  /**
   * Update
   * @returns UserOut Successful Response
   * @throws ApiError
   */
  public static update({
    requestBody,
  }: {
    requestBody: User,
  }): CancelablePromise<UserOut> {
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
   * Create
   * @returns UserOut Successful Response
   * @throws ApiError
   */
  public static create({
    requestBody,
  }: {
    requestBody: User,
  }): CancelablePromise<UserOut> {
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
   * Get
   * @returns UserOut Successful Response
   * @throws ApiError
   */
  public static get({
    id,
  }: {
    id: number,
  }): CancelablePromise<UserOut> {
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
   * Delete
   * @returns number Successful Response
   * @throws ApiError
   */
  public static delete({
    id,
  }: {
    id: number,
  }): CancelablePromise<number> {
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
