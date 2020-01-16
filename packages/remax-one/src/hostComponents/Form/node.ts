/* eslint-disable @typescript-eslint/camelcase */

const platformAlias: any = {
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

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.RMEAX_PLATFORM!] };

export const props = Object.values(alias);
