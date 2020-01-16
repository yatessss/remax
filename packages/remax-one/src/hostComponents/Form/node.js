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
        onSubmit: 'onSubmit',
        onReset: 'onReset',
        alipay_reportSubmit: 'report-submit',
    },
    weixin: {
        onSubmit: 'bindsubmit',
        onReset: 'bindreset',
        weixin_reportSubmit: 'report-submit',
        weixin_reportSubmitTimeout: 'report-submit-timeout',
    },
};
var defaultAlias = {
    id: 'id',
    className: 'class',
    style: 'style',
};
exports.alias = __assign(__assign({}, defaultAlias), platformAlias[process.env.RMEAX_PLATFORM]);
exports.props = Object.values(exports.alias);
