import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>BuilT For Developers</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              label='UI kit'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              label='Styleguide'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              label='Page Builder'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              label='Changelog'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              label='Documentation'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
