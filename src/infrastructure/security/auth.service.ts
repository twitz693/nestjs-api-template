import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly tokenService: JwtService) {}

  async validateUser(token: string): Promise<boolean> {
    return false;
  }
}
