import htmlparser from 'htmlparser2';
import prettier from 'prettier';
import ReactHandler from './ReactHandler';

interface Options {
  prettier?: boolean;
}

export function transform(xml: string, options: Options = {}): Promise<string> {
  return new Promise((resolve, reject) => {
    const parser = new htmlparser.Parser(
      new ReactHandler((error, code) => {
        if (error) {
          reject(error);
        } else {
          if (options.prettier) {
            code = prettier.format(code, {
              singleQuote: true,
              parser: 'babel',
            });
          }
          resolve(code);
        }
      }) as any,
      { xmlMode: true }
    );
    parser.write(xml);
    parser.end();
  });
}
