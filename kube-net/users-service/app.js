const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
    // It's just a dummy service - we don't really care for the email
    const email = req.body.email;
    const password = req.body.password;

    if (
        !password ||
        password.trim().length === 0 ||
        !email ||
        email.trim().length === 0
    ) {
        return res
            .status(422)
            .json({ message: 'An email and password needs to be specified!' });
    }

    try {
        // const hashedPW = await axios.get('http://auth/hashed-password/' + password);
        const response = await axios.get(`${process.env.AUTH_ADDRESS}/hashed-password/` + password);
        // const hashedPW = 'dummy text';
        // since it's a dummy service, we don't really care for the hashed-pw either
        console.log(response.data?.hashedPassword, email);
        res.status(201).json({ message: 'User created!' });
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ message: 'Creating the user failed - please try again later.' });
    }
});

app.post('/login', async (req, res) => {
    // It's just a dummy service - we don't really care for the email
    const email = req.body.email;
    const password = req.body.password;

    if (
        !password ||
        password.trim().length === 0 ||
        !email ||
        email.trim().length === 0
    ) {
        return res
            .status(422)
            .json({ message: 'An email and password needs to be specified!' });
    }

    // normally, we'd find a user by email and grab his/ her ID and hashed password
    const hashedPassword = password + '_hash';
    // for docker-compose
    // const response = await axios.get(
    //     `http://auth/token/` + hashedPassword + '/' + password
    // );
    // for kubernetes
    const response = await axios.get(
        `${process.env.AUTH_ADDRESS}/token/` + hashedPassword + '/' + password
    );
    // const response = { status: 200, data: { token: 'abc' }};
    if (response.status === 200) {
        return res.status(200).json({ token: response.data.token });
    }
    return res.status(response.status).json({ message: 'Logging in failed!' });
});

const PORT = process.env.USERS_SERVICE_PORT;
app.listen(PORT, () => console.log(`Users Service started running on http://localhost:${PORT}`));