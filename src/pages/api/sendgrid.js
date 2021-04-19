// eslint-disable-next-line @typescript-eslint/no-var-requires
const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { email, message, firstName, lastName, companyName, phone } = req.body;

    const content = {
        to: `team@greenera.info`,
        from: `noreply@greenera.info`,
        subject: `[GreenEra] - Contact form`,
        text: message,
        html: `<span>
        <p>Contact form submitted by:</p>
        <p>First name: ${firstName}</p>
        <p>Last name: ${lastName}</p>
        <p>Email address: ${email}</p>
        <p>Company name: ${companyName}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
        </span>`
    };

    try {
        await sgMail.send(content);
        res.status(200).send('Повідомлення успішно відправлено.');
    } catch (error) {
        console.log('ПОМИЛКА', error);
        res.status(400).send('Повідомлення не надіслано.');
    }
}
