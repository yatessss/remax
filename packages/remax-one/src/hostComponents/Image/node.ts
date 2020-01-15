/* eslint-disable @typescript-eslint/camelcase */

const platformAlias: any = {
  alipay: {
    onLoad: 'onLoad',
    onError: 'onError',
    onTap: 'onTap',
    onClick: 'onTap',
    alipay_defaultSource: 'default-source',
  },
  weixin: {
    onLoad: 'bindload',
    onError: 'binaderror',
    onTap: 'bindtap',
    onClick: 'bindtap',
    weixin_webp: 'webp',
  },
};

export const defaultAlias = {
  id: 'id',
  src: 'src',
  mode: 'mode',
  className: 'class',
  style: 'style',
  lazyLoad: 'lazy-load',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.RMEAX_PLATFORM!] };

export const props = Object.values(alias);
