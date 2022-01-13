import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer  from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
	private transport: Mail;
	constructor(){
		this.transport = nodemailer.createTransport({
			host: "smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: "c29f893977c501",
				pass: "f0a8e5462e753f"
			}
		});
	}
	async sendMail(message: IMessage): Promise<void> {
		await this.transport.sendMail({
			to: {
				name: message.to.name,
				address: message.to.email,
			},
			from: {
				name: message.from.name,
				address: message.from.email,
			},
			subject: message.subject,
			body: message.body
		});
	}

}