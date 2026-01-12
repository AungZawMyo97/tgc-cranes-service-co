import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.PROD_URL || '*'
}));
app.use(express.json());

app.use(express.static(join(__dirname, 'dist')));

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const data = await resend.emails.send({
            from: 'TGC Website <onboarding@resend.dev>',
            to: [process.env.COMPANY_EMAIL || 'aungzawmyo.azm1997@gmail.com'],
            subject: `New Message from TGC Website`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
        });

        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.get(/.*/, (req, res) => {
    res.sendFile('index.html', { root: join(__dirname, 'dist') });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
