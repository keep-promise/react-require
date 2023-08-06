// import React, { useEffect, useState } from 'react';

const url = 'http://127.0.0.1:5500/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack/react-webpack/dist/index.js';

// export default function RemoteApp() {
//   const [App, setApp] = useState(null);
//   useEffect(() => {
//     requirejs([url], (mod) => {
//       // console.log('default', mod.default)
//       // setApp(mod.default);
//     })
//   }, []);
//   return <div>{111
//     // App && App()
//   }</div>
// }


import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const RemoteBaseComponent = (props) => {

  const { type } = props;

  const [Comp, setComponent] = useState<React.FC | null>(null);

  const importComponent = useCallback(() => {
    return axios.get(url).then(res => res.data);
  }, [type])

  const loadComp = useCallback(async () => {
    // new Function(`${await importComponent()}`)();
    // const MyComponent = window.eval(`${await importComponent()}`);
    // console.log('MyComponent', MyComponent);
    // const { default: component } = window.MyComponent;
    // setComponent(() => component); // 这里需要注意，不能用setComponent(component)，因为compoennt是一个函数，而setComponent接受两种形式的参数，一种是字面量，一种是函数，函数会被执行
  }, [importComponent, setComponent])

  useEffect(() => {
    loadComp();
  }, [loadComp]);

  if (Comp) {
    return <Comp {...props}/>
  }

  return <div>22</div>;
}

export default RemoteBaseComponent;