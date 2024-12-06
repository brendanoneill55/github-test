import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private readonly users = new Map<string, any>();

  async validateUser(profile: any): Promise<any> {
    const userId = profile.id;
    this.users.set(userId, profile);
    return profile;
  }

  async getUser(userId: string): Promise<any> {
    return this.users.get(userId);
  }
}