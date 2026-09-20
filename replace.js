const fs = require('fs');

const files = {
  'src/app/contact/page.js': 'CONTACT US',
  'src/app/careers/page.js': 'JOIN OUR TEAM',
  'src/app/team/page.js': 'OUR TEAM',
  'src/app/marketing/page.js': 'DIGITAL MARKETING',
  'src/app/software/page.js': 'OUR SOFTWARE CATALOG',
  'src/app/website/page.js': 'OUR SERVICES',
};

for (const [file, title] of Object.entries(files)) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace section
  content = content.replace(
    /<section className="bg-\[#1a1a1a\] py-16 text-center text-white">[\s\S]*?<\/section>/,
    `<PageHeader title="${title}" />`
  );
  
  // Add import if not exists
  if (!content.includes('import PageHeader')) {
    const lines = content.split('\n');
    const importIndex = lines.findIndex(l => l.startsWith('import ') || l.startsWith('export '));
    if (importIndex !== -1) {
      lines.splice(importIndex, 0, 'import PageHeader from "@/components/PageHeader";');
      content = lines.join('\n');
    }
  }
  
  fs.writeFileSync(file, content);
}
console.log("Done");
