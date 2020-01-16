/* eslint-disable @typescript-eslint/camelcase */

const platformAlias: any = {
  alipay: {
    cursor: 'cursor',
    onInput: 'onInput',
    onConfirm: 'onConfirm',
    onFocus: 'onFocus',
    onBlur: 'onBlur',
  },
  weixin: {
    cursor: 'cursor-spacing',
    onInput: 'bindinput',
    onConfirm: 'bindconfirm',
    onFocus: 'bindfocus',
    onBlur: 'bindblur',
  },
};

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
  value: 'value',
  name: 'name',
  type: 'type',
  password: 'password',
  placeholder: 'placeholder',
  placeholderStyle: 'placeholder-style',
  placeholderClass: 'placeholder-class',
  disabled: 'disabled',
  maxlength: 'maxlength',
  focus: 'focus',
  confirmType: 'confirm-type',
  confirmHold: 'confirm-hold',
  selectionStart: 'selection-start',
  selectionEnd: 'selection-end',
  randomNumber: 'randomNumber',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.RMEAX_PLATFORM!] };

export const props = Object.values(alias);
