// src/adapters/database/InMemoryUserRepository.ts
import { UserRepository } from "../../core/ports/UserRepository";
import { User } from "../../core/entities/User";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }
  async findAll() {
    return this.users || null;
  }
}
