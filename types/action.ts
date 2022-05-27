type Action = {
  type: string;
  payload?: Payload;
};

type Payload = {
  id?: number;
  params?: any;
  callback?: (data?: any) => any;
  response?: any;
  pagination?: any;
  callbackFail?: (data?: any) => any;
  data?: any;
  status?: string;
  limit?: number;
  hasMore?: boolean;
  formData?: boolean;
  onDeleteSuccess?: (data?: any) => any;
};

type ResponseGenerator = {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
};

export type { Action, Payload, ResponseGenerator };
