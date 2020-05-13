import fetch from 'isomorphic-fetch';
const PostPage = (props) => {
    console.log(props);
    const { id, date, title } = props;
    return (
        <div>
            <p>{id}</p>
            <p>{date}</p>
            <p>{title.rendered}</p>
        </div>
    );
};
export default PostPage;

PostPage.getInitialProps = async ({ query }) => {
    const response = await fetch(`https://batdog.kr/wp-json/wp/v2/posts/${query.postId}`);
    return response.json();
};
