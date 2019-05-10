const path = require('path')
const fs = require('fs');
const fm = require('front-matter')

// https://stackoverflow.com/a/25462405
const findFiles = () => {
  const foundFiles = [];

  const search = (start, filter) => {
    if (!fs.existsSync(start)){
      console.log('The directory specified does not exist');
      return;
    }
  
    const files = fs.readdirSync(start);
    for(let i=0;i<files.length;i++){
      const filename = path.join(start, files[i]);
      const stat = fs.lstatSync(filename);
      if (stat.isDirectory()){
        search(filename, filter);
      } else if (filename.indexOf(filter) >= 0) {
        console.log(`Found a file at: ${filename}`);
        foundFiles.push(filename)
      };
    }
  }

  search(path.join(__dirname, 'posts'), '.mdx');

  return foundFiles;
};

const data = findFiles()
  .map((location) => {
    const split = location.split(path.sep);
    const file = fs.readFileSync(location, { encoding: 'utf-8' })
    const parsed = fm(file);

    return {
      type: split[split.length - 3],
      name: split[split.length - 2],
      permalink: `/posts/${split[split.length - 3]}/${split[split.length - 2]}/`,
      mdx: `/posts/${split[split.length - 3]}/${split[split.length - 2]}/index.mdx`,
      date: parsed.attributes.date,
      by: parsed.attributes.by,
      title: parsed.attributes.title,
      description: parsed.attributes.description
    }
  })

fs.writeFileSync('all.json', JSON.stringify(data, null, 2))
fs.writeFileSync('index.json', JSON.stringify(data.splice(0, 20), null, 2))
