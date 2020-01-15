/* eslint-disable @typescript-eslint/camelcase */

const platformAlias: any = {
  alipay: {
    onTap: 'onTap',
    onTouchStart: 'onTouchStart',
    onTouchMove: 'onTouchMove',
    onTouchEnd: 'onTouchEnd',
    onTouchCancel: 'onTouchCancel',
    onLongTap: 'onLongTap',
    onTransitionEnd: 'onTransitionEnd',
    onAnimationIteration: 'onAnimationIteration',
    onAnimationStart: 'onAnimationStart',
    onAnimationEnd: 'onAnimationEnd',
    alipay_onAppear: 'onAppear',
    alipay_onDisappear: 'onDisappear',
    alipay_onFirstAppear: 'onFirstAppear',
  },
  weixin: {
    role: 'aria-role',
    onTap: 'bindtap',
    onTouchStart: 'bindtouchstart',
    onTouchMove: 'bindtouchmove',
    onTouchEnd: 'bindtouchend',
    onTouchCancel: 'bindtouchcancel',
    onLongTap: 'bindlongtap',
    onTransitionEnd: 'bindtransitionend',
    onAnimationIteration: 'bindanimationiteration',
    onAnimationStart: 'bindanimationstart',
    onAnimationEnd: 'bindanimationend',
  },
};

const defaultAlias = {
  id: 'id',
  role: 'role',
  disableScroll: 'disable-scroll',
  hoverClass: 'hover-class',
  hoverStartTime: 'hover-start-time',
  hoverStayTime: 'hover-stay-time',
  hidden: 'hidden',
  className: 'class',
  style: 'style',
  animation: 'animation',
  hoverStopPropagation: 'hover-stop-propagation',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
