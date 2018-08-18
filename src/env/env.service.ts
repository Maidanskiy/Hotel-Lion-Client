import { Injectable } from '@nestjs/common'

@Injectable()
export class EnvService {

  private readonly envConfig: { [prop: string]: string | number } = {
    NAME: String(process.env.NAME),
    NODE_ENV: String(process.env.NODE_ENV),
    MONGODB_URI: String(process.env.MONGODB_URI),
    PORT: Number(process.env.PORT) || 3000
  }

  public get(key: string): string | number {
    return this.envConfig[key]
  }

  public isTest(): boolean {
    return this.envConfig.NODE_ENV === 'test'
  }

  public isDevelopment(): boolean {
    return this.envConfig.NODE_ENV === 'development'
  }

  public isProduction(): boolean {
    return this.envConfig.NODE_ENV === 'production'
  }

}
