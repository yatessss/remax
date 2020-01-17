import * as React from 'react';

export interface EventTarget {
  dataset?: DOMStringMap;
  tagName?: string; // 支付宝
  id?: string; // 微信
  offsetLeft?: number; // 微信
  offsetTop?: number; // 微信
}

export interface InputEvent {
  currentTarget: EventTarget;
  timeStamp: number;
  target: EventTarget;
  detail: {
    value: string;
    keyCode?: number; // 微信
    cursor?: number; // 微信
  };
}

export interface InputProps {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  defaultValue?: string;
  value?: string;
  name?: string;
  type?: string;
  password?: boolean;
  placeholder?: string;
  placeholderStyle?: React.CSSProperties;
  placeholderClass?: string;
  disabled?: boolean;
  maxlength?: number;
  focus?: boolean;
  confirmType?: 'done' | 'go' | 'next' | 'search' | 'send';
  confirmHold?: boolean;
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  randomNumber?: boolean;
  onInput?: (e: InputEvent) => void;
  onConfirm?: (e: InputEvent) => void;
  onFocus?: (e: InputEvent) => void;
  onBlur?: (e: InputEvent) => void;

  // 微信
  weixin_adjustPosition?: boolean;
  weixin_holdKeyboard?: boolean;
  weixin_bindkeyboardheightchange?: (e: any) => void;
}

export interface InputState {
  value?: string;
  controlled: boolean;
}

export default class Input extends React.Component<InputProps, InputState> {
  state: InputState = {
    value: '',
    // 支付宝
    controlled: false,
  };

  constructor(props: InputProps) {
    super(props);

    const controlled = props.value !== undefined;
    const value = controlled ? props.value : props.defaultValue;

    this.state = {
      value,
      controlled,
    };
  }

  componentDidUpdate() {
    if (this.props.value !== undefined && this.props.value !== this.state.value) {
      this.setState({ value: this.props.value });
    }
  }

  handleInput = (e: InputEvent) => {
    const { controlled } = this.state;
    if (!controlled) {
      this.setState({ value: e.detail.value });
    }
    if (this.props.onInput) {
      return this.props.onInput(e);
    }
    // 微信
    return {
      ...e.detail,
      value: controlled ? this.props.value : e.detail.value,
    };
  };

  render() {
    return React.createElement('input', {
      ...this.props,
      ...this.state,
      onInput: this.handleInput,
    });
  }
}
