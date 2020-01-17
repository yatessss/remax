import createHostComponent from '../../createHostComponent';

export interface LabelProps extends React.AriaAttributes {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  for?: string;
}

export default createHostComponent<LabelProps>('label');
