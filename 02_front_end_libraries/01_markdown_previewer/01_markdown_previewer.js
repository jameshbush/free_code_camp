const $editor = document.getElementById("editor");
const $preview = document.getElementById("preview");

marked.setOptions({ breaks: true });
const updatePreview = () => ($preview.innerHTML = marked($editor.value));

$editor.addEventListener("input", updatePreview);

const initialMarkdown =
  "# Hello, World!\n\
## Hello, Markdown!\n\
[GitHub](https://github.com/jameshbush/free_code_camp)\n\
```\n\
console.log(JavaScript); \n\
```\n\
- `foo`\n\
- `bar`\n\
- `baz`\n\
\n\
>Markdown _is_ __Awesome__\n\
\n\
![james](https://avatars1.githubusercontent.com/u/17484767?s=460&u=3d23cfa088a3658c13a6b737ec059ed58d78eb46&v=4)\n\
";

$editor.value = initialMarkdown;
updatePreview();
