const fs = require('fs');
let svg = fs.readFileSync('src/components/worldMap.svg', 'utf8');

// Strip XML and DOCTYPE and comments
svg = svg.replace(/<\?xml.*?\?>/g, '');
svg = svg.replace(/<!--[\s\S]*?-->/g, '');

// Strip inkscape, sodipodi namespaces and attributes
svg = svg.replace(/[a-z0-9-]+:[a-z0-9-]+=".*?"/gi, '');
svg = svg.replace(/xmlns:[a-z0-9-]+=".*?"/gi, '');
svg = svg.replace(/id=".*?"/gi, '');

// Convert common SVG attributes to React CamelCase
svg = svg.replace(/class=/g, 'className=');
svg = svg.replace(/stroke-width/g, 'strokeWidth');
svg = svg.replace(/fill-opacity/g, 'fillOpacity');
svg = svg.replace(/fill-rule/g, 'fillRule');
svg = svg.replace(/clip-rule/g, 'clipRule');

// Handle viewBox
svg = svg.replace(/viewBox/g, 'viewBox');

// Set fill to currentColor and stroke to currentColor if they exist, or just rely on CSS
svg = svg.replace(/fill="[^"]*"/g, 'fill="currentColor"');

const jsx = `
export default function WorldMapIcon(props) {
  return (
    ${svg.trim().replace('<svg', '<svg {...props} ')}
  );
}
`;

fs.writeFileSync('src/components/WorldMapIcon.jsx', jsx);
