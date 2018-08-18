import { Injectable } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import * as nodemailer from 'nodemailer'

@Injectable()
export class EmailService {

  private readonly transporter: nodemailer.Transporter
  private readonly email_options: nodemailer.SendMailOptions

  constructor(private readonly _EnvService: EnvService) {

    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: `${this._EnvService.get('EMAIL_SENDER')}`,
        clientId: `${this._EnvService.get('CLIENT_ID')}`,
        clientSecret: `${this._EnvService.get('CLIENT_SECRET')}`,
        refreshToken: `${this._EnvService.get('REFRESH_TOKEN')}`,
        accessToken: `${this._EnvService.get('ACCESS_TOKEN')}`
      }
    })

    this.email_options = {
      from: `Hotel Lion <${this._EnvService.get('EMAIL_SENDER')}>`,
      subject: 'Welcome to Hotel Lion service',
      text: 'Please, verify your email address - click this'
    }

  }

  /**
   * Sends Email
   * @param to string Receiver email address
   * @return void
   */
  public async sendEmail(to: string): Promise<void> {

    // todo handle error here
    try {

      await this.transporter.sendMail(
        Object.assign({}, this.email_options, { to })
      )

    } catch (err) {

      console.log('\n\n--- START ---')
      console.log(err)
      console.log('--- END ---\n\n')

      throw err

    }

  }

}
