/* eslint-disable @typescript-eslint/camelcase */

const platformAlias: any = {
  alipay: {
    onTap: 'onTap',
    onTouchStart: 'onTouchStart',
    onTouchMove: 'onTouchMove',
    onTouchEnd: 'onTouchEnd',
    onTouchCancel: 'onTouchCancel',
    onLongTap: 'onLongTap',
    onLongClick: 'onLongTap',
  },
  weixin: {
    onTap: 'bindtap',
    onTouchStart: 'bindtouchstart',
    onTouchMove: 'bindtouchmove',
    onTouchEnd: 'bindtouchend',
    onTouchCancel: 'bindtouchcancel',
    onLongTap: 'bindlongtap',
    weixin_type: 'type',
    weixin_binderror: 'binderror',
  },
};
const defaultAlias = {
  id: 'id',
  style: 'style',
  className: 'class',
  width: 'width',
  height: 'height',
  disableScroll: 'disable-scroll',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.RMEAX_PLATFORM!] };

export const props = Object.values(alias);
