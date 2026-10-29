(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/template.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Template
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function Template({ children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Template.useEffect": ()=>{
            const root = document.documentElement;
            if (!root.classList.contains('pt-cover')) return;
            root.classList.remove('pt-cover');
            root.classList.add('pt-reveal');
            window.setTimeout({
                "Template.useEffect": ()=>root.classList.remove('pt-reveal')
            }["Template.useEffect"], 800); // intentionally not cleared on cleanup (StrictMode)
        }
    }["Template.useEffect"], []);
    return children;
}
_s(Template, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Template;
var _c;
__turbopack_context__.k.register(_c, "Template");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_template_tsx_12-dhor__knd2._.js.map