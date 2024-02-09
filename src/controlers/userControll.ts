import { Request, Response } from 'express';
import EmailService from '../services/emailService';

const users = [
    {name: 'Emmet', email: '985833374fb@gmail.com'},
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'Emmet',
                email: '985833374fb@gmail.com'
            },
            message: {
                subject: 'Bem-vindo ao sistema',
                body: 'Seja bem vindo ao sistema'
            }
        });

        return res.send();
    }
};