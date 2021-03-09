export interface IUpdateUserDTO {
  userId: string;
  name: string;
  email: string;
  password?: string;
  avatar: string | null;
}
