import { signin } from '../../store/slices/counter';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';
import './index.scss';
import signInImage from '../../assets/images/sign-in-img.svg';
import Registration from '../../components/registration';

export default function SignIn() {
  const [userName, setUserName] = useState('');

  const [password, setPassword] = useState('');

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleInputUserName = (event: React.FormEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };
  const handleInputPassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const handleSubmitForm = () => {
    dispatch(signin(userName || password));
    navigate('/', { replace: true });
  };
  return (
    <div className="sign-in">
      <div className="sign-in__left">
        <div className="sign-in__left--container">
          <div className="title">
            <h3>Welcome !</h3>
            <h2>Sign in to</h2>
          </div>
          <div className="input">
            <label>
              Username <Input onChange={handleInputUserName} placeholder="Input username" />
            </label>
            <label>
              Password <Input.Password onChange={handleInputPassword} placeholder="Input password" />
            </label>
            <Button onClick={handleSubmitForm} type="primary" block>
              Login
            </Button>
          </div>
          <div className="register">
            <h3>
              Don’t have an Account ?<span onClick={showModal}>Register</span>
            </h3>
            <Registration isShowed={visible} setVisible={setVisible} />
          </div>
        </div>
      </div>
      <div className="sign-in__right">
        <img src={signInImage} alt="sign in image" />
      </div>
    </div>
  );
}
