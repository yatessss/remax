import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface ButtonProps extends React.AriaAttributes {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  size?: 'default' | 'mini';
  type?: 'primary' | 'default' | 'warn';
  plain?: boolean;
  disabled?: boolean;
  loading?: boolean;
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
  formType?: 'submit' | 'reset';
  onTap?: (e: any) => void;
  onClick?: (e: any) => void;

  // 支付宝
  alipay_appParameter?: string;
  alipay_publicId?: string;
  alipay_scope?: 'phoneNumber' | 'userInfo';
  alipay_openType?: 'share' | 'getAuthorize' | 'contactShare' | 'lifestyle';

  // 微信
  weixin_openType?: 'contact' | 'share' | 'getPhoneNumber' | 'getUserInfo' | 'launchApp' | 'openSetting' | 'feedback';
  weixin_lang?: 'en' | 'zh_CN' | 'zh_TW';
  weixin_sessionForm?: string;
  weixin_sendMessageTitle?: string;
  weixin_sendMessagePath?: string;
  weixin_sendMessageImg?: string;
  weixin_showMessageCard?: string;
  weixin_bindgetuserinfo?: (e: any) => void;
  weixin_bindcontact?: (e: any) => void;
  weixin_bindgetphonenumber?: (e: any) => void;
  weixin_binderror?: (e: any) => void;
  weixin_bindopensetting?: (e: any) => void;
  weixin_bindlaunchapp?: (e: any) => void;
}

const Button = createHostComponent<ButtonProps>('button');

export default Button;
