/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Docstring para saber como vai aparecer no Swagger
 */
export type User = {
  /**
   * Descrição para saber como vai aparecer no Swagger
   */
  id: number;
  name: string;
  email: string;
  password_hash: string;
  is_admin: boolean;
  group_id?: number;
};

