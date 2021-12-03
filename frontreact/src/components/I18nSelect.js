import React from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = ({setLanguage}) => {
  return(
    <div className='i18n-selector'>
      <p onClick={setLanguage(LOCALES.SPANISH)}>Español</p>
      <p onClick={setLanguage(LOCALES.ENGLISH)}>English</p>
    </div>
  );
};
