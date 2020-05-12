import Nav from './Nav';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderBox>
            <h1 className="logo">Company</h1>
            <Nav />
            <ul className="snb">
                <li>Sign in</li>
                <li>Sign Up</li>
            </ul>
        </HeaderBox>
    );
};

export default Header;

const HeaderBox = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 80px;
    background: #fff;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    padding: 0 40px;
    .logo {
        flex-grow: 0;
        margin-right: 30px;
    }
    .snb {
        flex-grow: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        li {
            margin-left: 1em;
        }
    }
`;
