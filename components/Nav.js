import Link from 'next/link';
import ActiveLink from './ActiveLink';
import styled from 'styled-components';
const Nav = () => {
    return (
        <GnbBlock>
            <ul>
                <li>
                    <ActiveLink href="/" activeClassName="active">
                        <a>Home</a>
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/contact" activeClassName="active">
                        <a>Contact</a>
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/posts" activeClassName="active">
                        <a>Posts</a>
                    </ActiveLink>
                </li>
            </ul>
        </GnbBlock>
    );
};

export default Nav;

const GnbBlock = styled.nav`
    flex-grow: 1;
    ul {
        display: flex;
        align-items: center;
        li {
            margin-right: 1.4em;
            & .active {
                color: #1a73eb;
            }
        }
    }
`;
