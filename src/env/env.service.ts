import { Injectable } from '@nestjs/common'

@Injectable()
export class EnvService {

  private readonly envConfig: { [prop: string]: string }

  constructor() {

    this.envConfig = {
      NODE_ENV:      String(process.env.NODE_ENV || 'development'),
      MONGODB_URI:   String(process.env.MONGODB_URI),
      PORT:          String(process.env.PORT || 3000),
      EMAIL_SENDER:  String(process.env.EMAIL_SENDER),
      CLIENT_ID:     String(process.env.CLIENT_ID),
      CLIENT_SECRET: String(process.env.CLIENT_SECRET),
      REFRESH_TOKEN: String(process.env.REFRESH_TOKEN),
      ACCESS_TOKEN:  String(process.env.ACCESS_TOKEN)
    }

    this.validateVariables(this.envConfig)

  }

  public validateVariables(variables: { [prop: string]: string }): void {

    for (const key of Object.keys(variables)) {
      if (variables[key] === 'undefined') {

        console.error(
          '\nYou have to provide all environment variables. Check README.md\n'
        )
        process.exit(1)

      }
    }

  }

  public get(key: string): string {
    return this.envConfig[key]
  }

  public getPORT(): number {
    return Number(this.get('PORT'))
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
