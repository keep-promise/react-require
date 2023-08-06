import React, { Suspense } from "react";

const url = 'http://127.0.0.1:5500/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack/react-webpack/dist/count.js';

const LazyCom = React.lazy(() => {
  return new Promise(resolve => {
    requirejs([url], (mod) => {
      console.warn('LazyCom', mod)
      resolve(mod);
    })
  })
});

export default function LazyApp() {


  return (
    <Suspense fallback={() => <div>加载中</div>}>
      <LazyCom />
    </Suspense>
  )

}
