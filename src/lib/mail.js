import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendAdminNotification({ subject, text, html }) {
    const adminEmail = process.env.ADMIN_EMAIL || 'kontaktaone@gmail.com';

    const mailOptions = {
        from: `"Aone Website" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        subject: `[Aone Form] ${subject}`,
        text,
        html: html || `<div style="font-family: sans-serif; padding: 20px;">${text.replace(/\n/g, '<br>')}</div>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('Email notification error:', error);
        return { success: false, error };
    }
}

export async function sendClientEmail({ to, subject, html }) {
    const mailOptions = {
        from: `"Aone Team" <${process.env.SMTP_USER}>`,
        to,
        subject: `[Aone] ${subject}`,
        html: html,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('Client email error:', error);
        return { success: false, error };
    }
}
