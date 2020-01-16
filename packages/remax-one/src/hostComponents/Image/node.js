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
        onLoad: 'onLoad',
        onError: 'onError',
        onTap: 'onTap',
        alipay_defaultSource: 'default-source',
    },
    weixin: {
        onLoad: 'bindload',
        onError: 'binaderror',
        onTap: 'bindtap',
        weixin_webp: 'webp',
    },
};
exports.defaultAlias = {
    id: 'id',
    src: 'src',
    mode: 'mode',
    className: 'class',
    style: 'style',
    lazyLoad: 'lazy-load',
};
exports.alias = __assign(__assign({}, exports.defaultAlias), platformAlias[process.env.RMEAX_PLATFORM]);
exports.props = Object.values(exports.alias);
