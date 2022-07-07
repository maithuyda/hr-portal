import React, { useEffect } from 'react';
import './index.scss';
import { Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store/index';
import { add, subtract } from '../../store/slices/counter';
import api from 'api';

export interface IHomePageProps {}

export default function HomePage() {
  const { counter } = useSelector((store: RootState) => store.counterReducer);
  const dispatch = useDispatch();

  const getTvPopular = async () => {
    try {
      const response = await api.getPopular({ page: 1 });
      console.log('response', response);
    } catch (error: any) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    getTvPopular();
  }, []);

  const onAdd = () => {
    dispatch(add(1));
  };

  const onSubtract = () => {
    dispatch(subtract(1));
  };

  return (
    <div className="home-page">
      <p className="home-page__title">HomePage</p>
      <div className="home-page__content">
        <Button type="primary" onClick={onAdd}>
          +
        </Button>
        <span className="value">{counter}</span>
        <Button type="primary" onClick={onSubtract}>
          -
        </Button>
      </div>
    </div>
  );
}
