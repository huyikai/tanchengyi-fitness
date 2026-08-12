import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredFiles = [
  'README.md',
  'LICENSE',
  'docs/collecting.md',
  'templates/raw-entry.md',
  'templates/curated-entry.md',
  'research/coarse/taxonomy.md',
  'research/coarse/source-map.md',
  'research/coarse/anchors.md',
  'research/coarse/blocked.md',
  'content/plans/README.md',
  'content/technique/README.md',
  'content/nutrition/README.md',
];

const missing = requiredFiles.filter((f) => !fs.existsSync(path.join(root, f)));
if (missing.length) {
  console.error('Missing files:\n' + missing.map((m) => ` - ${m}`).join('\n'));
  process.exit(1);
}

const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
for (const needle of ['不是谭成义本人', '无任何官方关联', 'MIT']) {
  if (!readme.includes(needle)) {
    console.error(`README.md missing required phrase: ${needle}`);
    process.exit(1);
  }
}

const taxonomy = fs.readFileSync(path.join(root, 'research/coarse/taxonomy.md'), 'utf8');
if (!/status:\s*draft/.test(taxonomy) && !/version:\s*taxonomy-v0/.test(taxonomy)) {
  console.error('taxonomy.md must have status: draft or version: taxonomy-v0');
  process.exit(1);
}

console.log('scaffold check OK');
