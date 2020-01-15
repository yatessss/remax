/* eslint-disable @typescript-eslint/camelcase */

const platformAlias: any = {
  alipay: {
    alipay_onChange: 'onChange',
  },
};

const defaultAlias = {
  className: 'class',
  style: 'style',
  id: 'id',
  value: 'value',
  checked: 'checked',
  disabled: 'disabled',
  color: 'color',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.RMEAX_PLATFORM!] };

export const props = Object.values(alias);
