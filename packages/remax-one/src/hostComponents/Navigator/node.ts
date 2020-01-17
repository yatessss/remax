/* eslint-disable @typescript-eslint/camelcase */

const platformAlias: any = {
  alipay: {
    alipay_openType: 'open-type',
  },
  weixin: {
    weixin_target: 'target',
    weixin_delta: 'delta',
    weixin_appId: 'appId',
    weixin_path: 'path',
    weixin_extraData: 'extra-data',
    weixin_version: 'version',
    weixin_bindsuccess: 'bindsuccess',
    weixin_bindfail: 'bindfail',
    weixin_bindcomplete: 'bindcomplete',
  },
};

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
  hoverClassName: 'hover-class',
  hoverStartTime: 'hover-start-time',
  hoverStayTime: 'hover-stay-time',
  hoverStopPropagation: 'hover-stop-propagation',
  url: 'url',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.RMEAX_PLATFORM!] };

export const props = Object.values(alias);
