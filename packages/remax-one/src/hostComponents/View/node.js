"use strict";
/* eslint-disable @typescript-eslint/camelcase */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var platformAlias = {
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
var defaultAlias = {
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
exports.alias = __assign(__assign({}, defaultAlias), platformAlias[process.env.REMAX_PLATFORM]);
exports.props = Object.values(exports.alias);
