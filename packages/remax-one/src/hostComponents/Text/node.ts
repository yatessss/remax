/* eslint-disable @typescript-eslint/camelcase */

const platformAlias: any = {
  alipay: {
    alipay_numberOfLines: 'number-of-lines',
  },
};

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
  selectable: 'selectable',
  space: 'space',
  decode: 'decode',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.RMEAX_PLATFORM!] };

export const props = Object.values(alias);
