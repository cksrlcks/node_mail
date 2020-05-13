import fetch from 'isomorphic-fetch';
export default (req, res) => {
    const fetchData = async () => {
        const response = await fetch('https://batdog.kr/wp-json/wp/v2/posts/');

        const data = await response.json();
        res.send(data);
    };

    fetchData();
};
