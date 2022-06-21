export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse {
  status: number;
  message: string;
  body: User;
}

export interface UpdateUserDto {
  firstName: string;
  lastName: string;
}
