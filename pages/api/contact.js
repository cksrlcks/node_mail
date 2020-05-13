import mailer from '../../mailer';
export default (req, res) => {
    const { email = '', name = '', content = '' } = req.body;
    mailer({ email, name, text: content })
        .then(() => {
            res.send('success');
        })
        .catch((error) => {
            console.log('failed', error);
            res.send('bad');
        });
};
