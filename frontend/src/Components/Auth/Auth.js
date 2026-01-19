import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';

function Auth() {
    const { login, register, error, setError } = useGlobalContext();
    const [isLogin, setIsLogin] = useState(true);
    const [inputState, setInputState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value });
        if (error) setError(null);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (isLogin) {
            login({ email, password });
        } else {
            register({ username, email, password });
        }
    };

    return (
        <AuthStyled>
            <div className="auth-container">
                <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="input-control">
                            <input
                                type="text"
                                value={username}
                                name={'username'}
                                placeholder="Username"
                                onChange={handleInput('username')}
                            />
                        </div>
                    )}
                    <div className="input-control">
                        <input
                            type="email"
                            value={email}
                            name={'email'}
                            placeholder="Email Address"
                            onChange={handleInput('email')}
                        />
                    </div>
                    <div className="input-control">
                        <input
                            type="password"
                            value={password}
                            name={'password'}
                            placeholder="Password"
                            onChange={handleInput('password')}
                        />
                    </div>
                    <div className="submit-btn">
                        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
                    </div>
                </form>
                <p className="toggle">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Register' : 'Login'}
                    </span>
                </p>
            </div>
        </AuthStyled>
    );
}

const AuthStyled = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .auth-container {
        background: var(--background-color);
        border: 3px solid var(--border-color);
        backdrop-filter: blur(4.5px);
        padding: 3rem;
        border-radius: 32px;
        width: 450px;
        box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        transition: all .4s ease-in-out;
        h1 {
            color: var(--primary-color);
            text-align: center;
            margin-bottom: 2rem;
        }
        .error {
            color: red;
            text-align: center;
            margin-bottom: 1rem;
            font-size: 0.9rem;
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            .input-control {
                input {
                    width: 100%;
                    padding: 0.8rem 1.5rem;
                    border-radius: 10px;
                    border: 2px solid var(--border-color);
                    background: transparent;
                    box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
                    color: var(--primary-color);
                    outline: none;
                    &::placeholder {
                        color: var(--primary-color3);
                    }
                }
            }
            .submit-btn {
                button {
                    width: 100%;
                    padding: 0.8rem;
                    border-radius: 10px;
                    border: none;
                    background: var(--primary-color);
                    color: var(--white-color);
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.4s ease-in-out;
                    &:hover {
                        background: var(--color-accent);
                    }
                }
            }
        }
        .toggle {
            text-align: center;
            margin-top: 1.5rem;
            color: var(--primary-color2);
            span {
                color: var(--primary-color);
                font-weight: 600;
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`;

export default Auth;
