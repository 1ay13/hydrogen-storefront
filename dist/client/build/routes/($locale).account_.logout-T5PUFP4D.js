import {
  createHotContext
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-UC5RL4X5.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-P5MQTD6C.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-SVHZQSAC.js";

// app/routes/($locale).account_.logout.jsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/($locale).account_.logout.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/($locale).account_.logout.jsx"
  );
  import.meta.hot.lastModified = "1702491049670.6013";
}
var meta = () => {
  return [{
    title: "Logout"
  }];
};
function Logout() {
  return null;
}
_c = Logout;
var _c;
$RefreshReg$(_c, "Logout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Logout as default,
  meta
};
//# sourceMappingURL=http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/routes/($locale).account_.logout-T5PUFP4D.js.map
