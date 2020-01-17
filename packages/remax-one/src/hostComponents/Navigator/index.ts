import createHostComponent from '../../createHostComponent';

export interface NavigatorProps {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
  url: string;

  // 支付宝
  alipay_openType?: 'navigate' | 'redirect' | 'switchTab' | 'navigateBack' | 'reLaunch';

  // 微信
  weixin_openType?: 'navigate' | 'redirect' | 'switchTab' | 'reLaunch' | 'navigateBack' | 'exit';
  weixin_target?: 'self' | 'miniProgram';
  weixin_delta?: number;
  weixin_appId?: string;
  weixin_path?: string;
  weixin_extraData?: object;
  weixin_version?: 'develop' | 'trial' | 'release';
  weixin_bindsuccess?: (event: any) => any;
  weixin_bindfail?: (event: any) => any;
  weixin_bindcomplete?: (event: any) => any;
}

export default createHostComponent<NavigatorProps>('navigator');
