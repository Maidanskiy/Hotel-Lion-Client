import { Injectable } from '@nestjs/common'

@Injectable()
export class EnvService {

  private readonly envConfig: { [prop: string]: string } = {
    NAME: String(process.env.NAME),
    NODE_ENV: String(process.env.NODE_ENV),
    MONGODB_URI: String(process.env.MONGODB_URI)
  }

  public get(key: string): string {
    return this.envConfig[key]
  }

}
