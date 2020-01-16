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
var defaultAlias = {
    id: 'id',
    style: 'style',
    className: 'class',
    width: 'width',
    height: 'height',
    disableScroll: 'disable-scroll',
};
exports.alias = __assign(__assign({}, defaultAlias), platformAlias[process.env.RMEAX_PLATFORM]);
exports.props = Object.values(exports.alias);
