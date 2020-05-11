import React, { useState, useEffect } from "react";
import "isomorphic-fetch";
import styled from "styled-components";

const useInput = defaultValue => {
    const [value, setValue] = useState(defaultValue);
    const onChange = e => {
        const targetValue = e.target.value;
        setValue(targetValue);
    };
    const reset = () => {
        setValue(defaultValue);
    };

    return [value, onChange, reset];
};

export default function Home() {
    const [data, setData] = useState("");
    const [name, setName, resetName] = useInput("");
    const [email, setEmail, resetEmail] = useInput("");
    const [contect, setContect, resetContect] = useInput("enter content");

    const submitEmail = content => {
        fetch("/api/contact", {
            method: "post",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => {
            res.status === 200 ? console.log("ok success") : "";
        });
    };
    const handleForm = e => {
        e.preventDefault();
        submitEmail(data);
        resetName();
        resetEmail();
        resetContect();
    };

    const sendBtn = () => {
        setData({ name, email, contect });
    };

    useEffect(() => {}, [name, email, contect]);

    return (
        <>
            <MailWrapper>
                <form onSubmit={handleForm}>
                    <div className="input_box">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={setName} value={name} required />
                    </div>
                    <div className="input_box">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={setEmail} value={email} required />
                    </div>
                    <textarea id="contect" name="contect" onChange={setContect} value={contect}></textarea>
                    <button className="send-btn" type="submit" onClick={sendBtn}>
                        send
                    </button>
                </form>
            </MailWrapper>
        </>
    );
}

const MailWrapper = styled.div``;
