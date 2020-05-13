import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import axios from 'axios';
const useInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    const onChange = (e) => {
        const targetValue = e.target.value;
        setValue(targetValue);
    };
    const reset = () => {
        setValue(defaultValue);
    };

    return [value, onChange, reset];
};

export default function Home() {
    const [isSending, setIsSending] = useState(false);
    const [resultMsg, setResultMsg] = useState();
    const [data, setData] = useState('');
    const [name, setName, resetName] = useInput('');
    const [email, setEmail, resetEmail] = useInput('');
    const [content, setContent, resetContent] = useInput('enter content');

    const submitEmail = (content) => {
        setResultMsg('sending...');
        setIsSending(true);
        fetch('/api/contact', {
            method: 'post',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res) => {
            setResultMsg('success');
            setTimeout(setIsSending(false), 5000);
            res.status === 200 ? console.log('success') : alert('error');
        });
    };
    const handleForm = (e) => {
        e.preventDefault();
        submitEmail(data);
        resetName();
        resetEmail();
        resetContent();
    };

    const sendBtn = () => {
        setData({ name, email, content });
    };

    return (
        <>
            <MailWrapper>
                {isSending && <div className="loading">{resultMsg}</div>}
                <form onSubmit={handleForm}>
                    <div className="input-box">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            onChange={setName}
                            value={name}
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            onChange={setEmail}
                            value={email}
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="content">Content</label>
                        <textarea
                            id="content"
                            name="content"
                            onChange={setContent}
                            value={content}
                        ></textarea>
                    </div>
                    <button className="send-btn" type="submit" onClick={sendBtn}>
                        Send
                    </button>
                </form>
            </MailWrapper>
        </>
    );
}

const MailWrapper = styled.div`
    max-width: 640px;
    margin: 0 auto;
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 16px;
        z-index: 999;
    }
    .input-box {
        margin-bottom: 20px;
        border: 1px solid #eee;
        border-radius: 4px;
        padding: 2em;

        label {
            display: block;
            margin-bottom: 2em;
            font-weight: 500;
        }

        input {
            appearance: none;
            width: 100%;
            border: none;
            border-bottom: 1px solid #eee;
            background: none;
            height: 50px;
            line-height: 50px;
            padding: 1em;
        }

        textarea {
            width: 100%;
            min-height: 100px;
            border: 1px solid #eee;
            border-radius: 4px;
            padding: 1.4em;
        }
    }
    .send-btn {
        width: 100%;
        background: #1a73eb;
        text-align: center;
        line-height: 48px;
        height: 48px;
        border-radius: 4px;
        border: none;
        color: #fff;
        cursor: pointer;
        font-weight: 500;
    }
`;
