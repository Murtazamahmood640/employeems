const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'src', 'routes');
let routesList = [];

function processFile(filePath) {
  if (filePath.includes('__root.tsx') || filePath.includes('sitemap[.]xml.ts')) return;

  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Clean up lovable imports
  content = content.replace(/import\s+\{.*?\}\s+from\s+['"]\.\.\/lib\/lovable-error-reporting['"];?/g, '');
  content = content.replace(/import\s+\{.*?\}\s+from\s+['"]\.\.\/lib\/error-capture['"];?/g, '');

  const routeMatch = content.match(/createFileRoute\(['"]([^'"]+)['"]\)\([\s\S]*?component:\s*([A-Za-z0-9_]+)/);
  if (routeMatch) {
    let routePath = routeMatch[1];
    const compName = routeMatch[2];
    const relativePath = path.relative(path.join(__dirname, 'src'), filePath).replace(/\\/g, '/').replace(/\.tsx?$/, '');
    
    // convert tanstack param paths like /modules/$slug to /modules/:slug
    routePath = routePath.replace(/\$/g, ':');

    routesList.push({
      path: routePath,
      component: compName,
      importPath: `./${relativePath}`
    });

    content = content.replace(/export\s+const\s+Route\s*=\s*createFileRoute[\s\S]*?\}\);/g, '');
    
    const funcRegex = new RegExp(`function\\s+${compName}\\s*\\(`);
    if (funcRegex.test(content) && !content.includes(`export default function ${compName}`)) {
       content = content.replace(funcRegex, `export default function ${compName}(`);
    } else {
       const constRegex = new RegExp(`const\\s+${compName}\\s*=`);
       if (constRegex.test(content) && !content.includes(`export default ${compName}`)) {
         content += `\nexport default ${compName};\n`;
       }
    }
  } else {
     // fallback if it doesn't match the regex (e.g. maybe inline component or different syntax)
     console.log('Could not find route definition in', filePath);
  }

  content = content.replace(/from\s+['"]@tanstack\/react-router['"]/g, 'from "react-router-dom"');
  content = content.replace(/useRouter\(\)/g, 'useNavigate()');

  fs.writeFileSync(filePath, content);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      processFile(filePath);
    }
  }
}

walkDir(routesDir);

let appContent = `import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/site/Header";
import { Footer } from "./components/site/Footer";

// Imports
${routesList.map(r => `import ${r.component} from "${r.importPath}";`).join('\n')}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            ${routesList.map(r => `<Route path="${r.path}" element={<${r.component} />} />`).join('\n            ')}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'src', 'App.tsx'), appContent);
console.log('App.tsx generated.');
