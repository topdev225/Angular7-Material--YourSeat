export interface BasePayload<T = any> {
  success: boolean;
  error?: string;
  data?: T
}