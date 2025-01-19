// src/core/use-cases/CreateUser.ts
import { User } from "../entities/User";
import { UserRepository } from "../ports/UserRepository";

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string): Promise<User> {
    const user = new User(Date.now().toString(), name, email);
    await this.userRepository.save(user);
    return user;
  }
}
