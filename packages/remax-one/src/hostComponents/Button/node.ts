/* eslint-disable @typescript-eslint/camelcase */

const platformAlias: any = {
  alipay: {
    onTap: 'onTap',
    alipay_openType: 'open-type',
    alipay_scope: 'scope',
    alipay_appParameter: 'app-parameter',
    alipay_publicId: 'public-id',
  },
  weixin: {
    onTap: 'bindtap',
    weixin_openType: 'open-type',
    weixin_appParameter: 'app-parameter',
    weixin_lang: 'lang',
    weixin_sessionForm: 'session-from',
    weixin_sendMessageTitle: 'send-message-title',
    weixin_sendMessagePath: 'send-message-path',
    weixin_sendMessageImg: 'send-message-img',
    weixin_showMessageCard: 'show-message-card',
    weixin_bindgetuserinfo: 'bindgetuserinfo',
    weixin_bindcontact: 'bindcontact',
    weixin_bindgetphonenumber: 'bindgetphonenumber',
    weixin_binderror: 'binderror',
    weixin_bindopensetting: 'bindopensetting',
    weixin_bindlaunchapp: 'bindlaunchapp',
  },
};

const defaultAlias = {
  id: 'id',
  className: 'class',
  size: 'size',
  type: 'type',
  plain: 'plain',
  disabled: 'disabled',
  loading: 'loading',
  hoverClass: 'hover-class',
  hoverStartTime: 'hover-start-time',
  hoverStayTime: 'hover-stay-time',
  hoverStopPropagation: 'hover-stop-propagation',
  formType: 'form-type',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.RMEAX_PLATFORM!] };

export const props = Object.values(alias);
