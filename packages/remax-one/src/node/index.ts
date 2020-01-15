import { RemaxNodePlugin } from 'remax-types';
import hostComponents from '../hostComponents/node';

const plugin = (): RemaxNodePlugin => {
  return {
    hostComponents,
  };
};

export default plugin;
