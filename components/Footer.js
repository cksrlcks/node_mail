import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterBlock>
            <div className="inner">copyright</div>
        </FooterBlock>
    );
};

export default Footer;

const FooterBlock = styled.footer`
    text-align: center;
    .inner {
        max-width: 960px;
        margin: 0 auto;
        border-top: 1px solid #eee;
        padding: 40px 0;
    }
`;
