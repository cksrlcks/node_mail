import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <BodyBlock>
                <div className="inner">{children}</div>
            </BodyBlock>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;

const BodyBlock = styled.div`
    padding: 200px 0 50px;
    min-height: 60vh;
    .inner {
        max-width: 960px;
        margin: 0 auto;
        padding: 0 16px;
    }
`;
