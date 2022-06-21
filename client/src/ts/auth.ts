export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: number;
  message: string;
  body?: {
    token: string;
  };
}
