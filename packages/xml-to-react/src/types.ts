export interface Node {
  name: string;
  attributes: { [name: string]: string };
  directives: Array<string[]>;
  children: Node[];
}
