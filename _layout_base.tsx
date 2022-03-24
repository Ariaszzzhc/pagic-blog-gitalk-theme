import { React } from "https://deno.land/x/pagic@v1.5.1/mod.ts";

import type { PagicLayout } from "https://deno.land/x/pagic@v1.5.1/mod.ts";
import Head from "./_head.tsx";
import Aside from "./_aside.tsx";
import { classnames } from "./_utils.tsx";

const LayoutBase: PagicLayout<{ Main: PagicLayout }> = (props) => {
  const [isDark, setIsDark] = React.useState(
    // @ts-ignore
    window.Deno ? false : document.documentElement.classList.contains("is_dark")
  );
  return (
    <html className={classnames({ is_dark: isDark })}>
      <Head {...props} isDark={isDark} />
      <body>
        <Aside {...props} isDark={isDark} setIsDark={setIsDark} />
        <props.Main {...props} />
        {props.footer}
        {props.script}
      </body>
    </html>
  );
};

export default LayoutBase;
