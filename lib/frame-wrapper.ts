import { BASE_VARIABLES, OCEAN_BREEZE_THEME } from "./themes";

export function getHTMLWrapper(
  html: string,
  title = "Untitled",
  theme_style?: string,
  frameId?: string
) {
  const finalTheme = theme_style || OCEAN_BREEZE_THEME;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${title}</title>

  <!-- Google Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&amp;display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&amp;display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">

  <!-- Tailwind + Iconify -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js"></script>


  <style type="text/tailwindcss">
    :root {${BASE_VARIABLES}${finalTheme}}
    *, *::before, *::after {margin:0;padding:0;box-sizing:border-box;}
    html, body {width:100%;min-height:100%;}
    body {font-family:var(--font-sans);background:var(--background);color:var(--foreground);-webkit-font-smoothing:antialiased;}
    #root {width:100%;min-height:100vh;}
    * {scrollbar-width:none;-ms-overflow-style:none;}
    *::-webkit-scrollbar {display:none;}
  </style>
</head>
<body>
  <div id="root">
  <div class="relative">
    ${html}
  </div>
  <script>
    (()=>{
      const fid='${frameId}';
      const send=()=>{
        const r=document.getElementById('root')?.firstElementChild;
        const h=r?.className.match(/h-(screen|full)|min-h-screen/)?Math.max(800,innerHeight):Math.max(r?.scrollHeight||0,document.body.scrollHeight,800);
        parent.postMessage({type:'FRAME_HEIGHT',frameId:fid,height:h},'*');
      };
      setTimeout(send,100);
      setTimeout(send,500);
    })();
  </script>


</body>
</html>`;
}
