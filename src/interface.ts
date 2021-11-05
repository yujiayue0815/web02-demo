/**
 * @description User-Service parameters
 */

export interface IGetUserResponse {
  success: boolean;
  message: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  data: object;
}
