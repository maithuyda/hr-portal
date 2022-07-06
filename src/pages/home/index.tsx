import * as React from 'react';
import './index.scss';
import {Button} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '@store/index';
import {add, subtract} from '../../store/slices/counter';

export interface IHomePageProps {}

export default function HomePage() {
  const {counter} = useSelector((store: RootState) => store.counterReducer);
  const dispatch = useDispatch();

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
