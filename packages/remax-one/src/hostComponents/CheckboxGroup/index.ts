import createHostComponent from '../../createHostComponent';

export interface CheckboxGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  onChange?: (e: any) => void;
}

export default createHostComponent<CheckboxGroupProps>('checkbox-group');
