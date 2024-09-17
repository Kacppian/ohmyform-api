import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class SubmissionTokenService {
  async hash(token: string): Promise<string> {
    return bcrypt.hash(token, 4)
  }

  async verify(token: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(token, hash)
  }
}
