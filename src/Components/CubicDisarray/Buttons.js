import React from 'react';
import cbStore from './store';

const IncrementLineWidth = () => (
  <button type="button" onClick={() => cbStore.incrementLineWidth()}>Linewidth +1</button>
)

export  {IncrementLineWidth};