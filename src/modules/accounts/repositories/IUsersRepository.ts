import UserDTO from '../domain/UserDTO';

interface IUsersRepository {
  create(user: UserDTO): Promise<void>;
  findByEmail(email: string): Promise<UserDTO>;
}

export default IUsersRepository;
