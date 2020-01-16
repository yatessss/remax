/* eslint-disable @typescript-eslint/camelcase */

const platformAlias: any = {
  alipay: {
    onChange: 'onChange',
  },
  weixin: {
    onChange: 'bindchange',
  },
};

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
  name: 'name',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.RMEAX_PLATFORM!] };

export const props = Object.values(alias);
