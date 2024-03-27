import * as fs from 'fs';
import { writeFileSync } from 'fs';

const openSvg = (svgFileName: string) => {
  return fs.readFileSync(svgFileName, 'utf8');
};
const migrate = (svgFileName: string) => {
  const lines = openSvg(svgFileName).split('\n');
  const defined = lines
    .map((l) => {
      if (l.startsWith('<svg')) {
        l = l.replace(/<svg /, '<svg {...props} ');
      }
      return replaceStyle(replaceFillNone(replacePath(replaceRect(dashToCamelCase(l)))));
    })
    .join('\n');
  const iconName = svgFileName.split('/').pop()?.split('.')[0];
  if (!iconName || !iconName.startsWith('ic')) return;
  const componentName = iconName
    .replaceAll(/([a-z]+)/gi, (g) => g[0].toUpperCase() + g.slice(1))
    .replaceAll(/_([a-z])/gi, (g) => g[1].toUpperCase())
    .replaceAll(/-([a-z])/gi, (g) => g[1].toUpperCase())
    .replace(/^ic/i, 'Icon');

  if (!componentName) return;

  const svgFc = toFC(componentName!, defined);
  if (!fs.existsSync('src/components/icons')) {
    fs.mkdirSync('src/components/icons');
  }
  writeFileSync('src/components/icons/' + componentName + '.tsx', svgFc, {
    encoding: 'utf8',
  });
};

export const toFC = (componentName: string, svg: string) =>
  `import type { FC, HTMLAttributes } from "react";

export type ${componentName}Props = {} & HTMLAttributes<HTMLOrSVGElement>;

export const ${componentName}: FC<${componentName}Props> = (props) => {
  return (${svg});
}`;

export const dashToCamelCase = (str: string) => {
  return str.replaceAll(/-([a-z])/g, (g) => g[1].toUpperCase());
};

export const replaceRect = (str: string) => {
  return str.replace(/rect width="(\d+)" height="(\d+)" (fill="#*\w{4,6}")\/>/gi, 'rect width="$1" height="$2"/>');
};

export const replacePath = (str: string) => {
  return str.replace(/path (.*) (fill="#*\w{4,6}")\/>/gi, 'path $1/>');
};

export const replaceFillNone = (str: string) => {
  return str.replace(/ fill="\w{4,6}" /, ' ');
};

export const replaceStyle = (str: string) => {
  if (!str.includes('style="')) return str;
  return str
    .split(' ')
    .map((s) => {
      if (!s.startsWith('style="')) return s;
      const style = s.split('style="')[1].split('"')[0];
      const styles = style.split(';').map((s) => {
        const [key, value] = s.split(':');
        return `${key}:"${value}"`;
      });
      return 'style={{' + styles.join(',') + '}}';
    })
    .join(' ');
};

const migrateDir = (dirName: string) => {
  const files = fs.readdirSync(dirName);
  files.forEach((f) => {
    if (f.endsWith('.svg')) {
      migrate(dirName + '/' + f);
    }
  });
};

if (typeof module !== 'undefined' && !module.parent) {
  migrateDir(process.argv[2]);
}
