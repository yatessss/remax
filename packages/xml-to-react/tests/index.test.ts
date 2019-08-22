import path from 'path';
import fs from 'fs';
import { transform } from '../src';

describe('xml-to-react', () => {
  const fixturesDir = path.resolve(__dirname, './fixtures');
  fs.readdirSync(fixturesDir).forEach(caseName => {
    const fixtureDir = path.join(fixturesDir, caseName);
    const xmlPath = path.join(fixtureDir, 'input.xml');
    const blockTitle = caseName.split('-').join(' ');

    it(blockTitle, async () => {
      const input = fs.readFileSync(xmlPath).toString();
      const actual = await transform(input, { prettier: true });
      const outputPath = path.join(fixtureDir, 'output.js');
      const output = fs.readFileSync(outputPath, 'utf8');
      expect(actual.trim()).toBe(output.trim());
    });
  });
});
