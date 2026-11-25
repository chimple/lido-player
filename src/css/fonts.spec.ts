import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const fontsCssPath = resolve(__dirname, 'fonts.css');
const tamilFontDirectory = resolve(__dirname, '../assets/offline-assets/fonts/Noto-Sans-Tamil');

describe('offline font assets', () => {
  const fontsCss = readFileSync(fontsCssPath, 'utf8');

  it('keeps Baloo Bhai 2 and registers Faroe’s Tamil family name', () => {
    expect(fontsCss).toContain("font-family: 'Baloo Bhai 2';");
    expect(fontsCss).toContain("font-family: 'Noto Sans Tamil';");
    expect(fontsCss).toContain('NotoSansTamil-Variable.ttf');
    expect(fontsCss).toContain("format('truetype')");
  });

  it('ships the upstream Tamil font and its OFL notices', () => {
    expect(existsSync(resolve(tamilFontDirectory, 'NotoSansTamil-Variable.ttf'))).toBe(true);
    expect(readFileSync(resolve(tamilFontDirectory, 'OFL.txt'), 'utf8')).toContain(
      'SIL Open Font License, Version 1.1',
    );
    expect(readFileSync(resolve(tamilFontDirectory, 'AUTHORS.txt'), 'utf8')).toContain(
      'official list of project authors',
    );
    expect(fontsCss).toContain('Copyright 2022 The Noto Project Authors');
  });
});
