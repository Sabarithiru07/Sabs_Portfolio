module.exports = [
(()=>{"use strict";return[
"[project]/src/app/icon.svg.mjs { IMAGE => \"[project]/src/app/icon.svg (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/icon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 32,
    height: 32
};
}),
"[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicePage,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/app-window.mjs [app-rsc] (ecmascript) <export default as AppWindow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-rsc] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-rsc] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fallback.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GlassCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/JsonLd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const ICONS = {
    globe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
    app: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__["AppWindow"]
};
const dynamicParams = false;
const generateStaticParams = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].map((s)=>({
            slug: s.slug
        }));
async function generateMetadata({ params }) {
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getService"])((await params).slug);
    if (!s) return {
        title: 'Service'
    };
    const full = `${s.summary} Freelance work by Sabari Thirunavukkarasu, Erode, India.`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageMeta"])({
        title: `${s.title} Services`,
        description: full.length <= 160 ? full : s.summary,
        path: `/services/${s.slug}/`
    });
}
async function ServicePage({ params }) {
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getService"])((await params).slug);
    if (!s) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const Icon = ICONS[s.icon] ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"];
    const related = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackProjects"].filter((p)=>s.related.includes(p.slug));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "py-16 page-enter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceJsonLd"])(s),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["breadcrumbJsonLd"])([
                        {
                            name: 'Home',
                            path: '/portfolio/'
                        },
                        {
                            name: 'Services',
                            path: '/portfolio/#services'
                        },
                        {
                            name: s.title,
                            path: `/services/${s.slug}/`
                        }
                    ])
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/portfolio/#services",
                className: "btn btn-glass btn-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 31,
                        columnNumber: 74
                    }, this),
                    " All services"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "doc-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "icon-chip",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 33,
                            columnNumber: 37
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "doc-title",
                        children: s.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sub",
                        style: {
                            maxWidth: 720,
                            fontSize: '1.15rem'
                        },
                        children: s.summary
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "btn-row",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/portfolio/#contact",
                            className: "btn btn-primary",
                            children: [
                                "Start a project ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 111
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 36,
                            columnNumber: 34
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GlassCard"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Overview"
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 39,
                            columnNumber: 26
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                maxWidth: 800
                            },
                            children: s.overview
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 39,
                            columnNumber: 43
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                    lineNumber: 39,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "doc-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "What you get"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 41,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid",
                        children: s.deliver.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: i * 0.05,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GlassCard"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "feature",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "icon-chip sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 134
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 42,
                                                columnNumber: 103
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: d
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 42,
                                                columnNumber: 160
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 78
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 42,
                                    columnNumber: 67
                                }, this)
                            }, d, false, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 42,
                                columnNumber: 34
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 41,
                        columnNumber: 55
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "doc-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "How we work together"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "steps",
                        children: s.process.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: i * 0.06,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "glass",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "step-no",
                                            children: i + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 46,
                                            columnNumber: 95
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 140
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: p.text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 158
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 46,
                                            columnNumber: 135
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 73
                                }, this)
                            }, p.title, false, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 46,
                                columnNumber: 34
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 63
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "doc-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Technology stack"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid",
                        children: s.stack.map((t, i)=>{
                            const [name, role] = t.split(' — ');
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: i * 0.04,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GlassCard"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: 0
                                            },
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 62
                                        }, this),
                                        role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "sub",
                                            style: {
                                                margin: '6px 0 0'
                                            },
                                            children: role
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 108
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 51
                                }, this)
                            }, t, false, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 52,
                                columnNumber: 18
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 59
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "doc-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Good fit for"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 56,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chips",
                        children: s.goodFor.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tag big",
                                children: g
                            }, g, false, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 56,
                                columnNumber: 98
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 56,
                        columnNumber: 55
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "doc-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Reference screenshots"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 58,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gallery",
                        children: s.shots.map((sh)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: "shot glass",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: sh.src,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": `Open full size: ${sh.caption}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: sh.src,
                                            alt: sh.alt,
                                            width: sh.w,
                                            height: sh.h,
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                        children: sh.caption
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, sh.src, true, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 58,
                        columnNumber: 64
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            related.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "doc-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Related projects"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 70,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid",
                        children: related.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: i * 0.06,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/projects/${p.slug}`,
                                    className: "glass related",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coverOf"])(p) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coverOf"])(p),
                                            alt: `${p.title} cover`,
                                            width: 1200,
                                            height: 800,
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                p.title,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 51
                                }, this)
                            }, p.slug, false, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 70,
                        columnNumber: 61
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "doc-cta glass",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: 0
                                },
                                children: "Have a project in mind?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 80,
                                columnNumber: 43
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sub",
                                style: {
                                    margin: '6px 0 0'
                                },
                                children: "Tell me what you need and I will get back to you."
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 80,
                                columnNumber: 97
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 80,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/portfolio/#contact",
                        className: "btn btn-primary",
                        children: [
                            "Start a project ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 81,
                                columnNumber: 86
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/[slug]/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/GlassCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlassCard",
    ()=>GlassCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const GlassCard = ({ children, className = '' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `glass pad ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/GlassCard.tsx",
        lineNumber: 3,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/components/Reveal.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal,
    "ease",
    ()=>ease
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Reveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Reveal() from the server but Reveal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Reveal.tsx", "Reveal");
const ease = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ease() from the server but ease is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Reveal.tsx", "ease");
}),
"[project]/src/components/Reveal.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/fallback.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coverOf",
    ()=>coverOf,
    "fallbackProjects",
    ()=>fallbackProjects,
    "projectCovers",
    ()=>projectCovers
]);
const projectCovers = {
    'medical-chatbot': '/projects/medical-chatbot.jpg',
    'railway-enquiry-chatbot': '/projects/railway-enquiry-chatbot.jpg',
    'accident-detection-system': '/projects/accident-detection-system.jpg',
    'smoking-detection-system': '/projects/smoking-detection-system.jpg',
    'ulcer-detection-tool': '/projects/ulcer-detection-tool.jpg',
    'ai-job-recommendation-resume-screening': '/projects/AI-Powered_Job_Matching_Banner.jpg'
};
const coverOf = (p)=>p.thumbnail || projectCovers[p.slug] || null;
const fallbackProjects = [
    {
        "slug": "medical-chatbot",
        "title": "Medical Chatbot",
        "summary": "AI health assistant for symptom checks and medical Q&A.",
        "description": "An AI health assistant that handles symptom checks and general medical questions in a simple chat interface. Prompts were designed to guide Claude toward context-aware, easy-to-follow conversational responses, with a Django backend and MySQL behind it.",
        "technologies": [
            "Python",
            "Django",
            "Claude",
            "MySQL"
        ],
        "featured": true,
        "case_study_content": {
            "Domain": "Healthcare",
            "Overview": "An AI health assistant that handles symptom checks and general medical questions in a simple chat interface. Prompts were designed to guide Claude toward context-aware, easy-to-follow conversational responses, with a Django backend and MySQL behind it.",
            "Problem": "People often want quick, understandable answers to basic health questions before they can reach a professional. A conversational assistant can explain common symptoms and point to sensible next steps.",
            "Key features": [
                "Answers everyday health queries in plain language",
                "Symptom checks through natural conversation",
                "Context-aware replies shaped by prompts designed for Claude",
                "Basic guidance and wellness tips",
                "Appointment support"
            ],
            "How it works": [
                "The user describes symptoms or asks a medical question in the chat.",
                "The Django backend sends the message to Claude together with prompts designed to keep answers context-aware.",
                "Claude's reply is returned and shown in the conversation.",
                "The conversation continues turn by turn."
            ],
            "Technology stack": [
                "Python — application logic and prompt handling",
                "Django — web backend and chat interface",
                "Claude (Anthropic) — conversational responses guided by designed prompts",
                "MySQL — database"
            ],
            "Note": "Provides general information only and does not replace professional medical advice."
        },
        "thumbnail": null,
        "github_url": "",
        "live_demo_url": "",
        "updated_at": ""
    },
    {
        "slug": "railway-enquiry-chatbot",
        "title": "Railway Enquiry Chatbot",
        "summary": "Intelligent chatbot for Indian Railway: PNR status, live schedules and booking help.",
        "description": "An intelligent chatbot for Indian Railway enquiries. Travellers ask about PNR status, live train schedules and booking help in natural language, powered by ChatGPT prompt flows on a Django backend.",
        "technologies": [
            "Python",
            "Django",
            "ChatGPT",
            "REST APIs"
        ],
        "featured": true,
        "case_study_content": {
            "Domain": "Transport",
            "Overview": "An intelligent chatbot for Indian Railway enquiries. Travellers ask about PNR status, live train schedules and booking help in natural language, powered by ChatGPT prompt flows on a Django backend.",
            "Problem": "Railway information is spread across screens and forms, while passengers simply want a quick answer, such as where their train is or whether a PNR is confirmed.",
            "Key features": [
                "PNR status checks",
                "Live train status and schedules",
                "Train timings and general enquiries",
                "Seat availability and booking help",
                "Natural-language questions handled by ChatGPT prompt flows"
            ],
            "How it works": [
                "The passenger types a question, for example a PNR status or a train schedule.",
                "ChatGPT prompt flows interpret the request and work out what information is needed.",
                "The Django backend uses REST APIs to fetch the railway information.",
                "The answer is composed and returned in the chat window."
            ],
            "Technology stack": [
                "Python — application logic",
                "Django — web backend and chat interface",
                "ChatGPT (OpenAI) — natural-language understanding through prompt flows",
                "REST APIs — connect the chatbot to railway information"
            ]
        },
        "thumbnail": null,
        "github_url": "",
        "live_demo_url": "",
        "updated_at": ""
    },
    {
        "slug": "accident-detection-system",
        "title": "Accident Detection System",
        "summary": "Real-time road accident detection that alerts authorities.",
        "description": "A real-time road accident detection system. AI/ML models analyse camera or sensor input and alert authorities when an accident is detected, while a Django backend automatically logs the incident data.",
        "technologies": [
            "Computer Vision",
            "Django"
        ],
        "featured": true,
        "case_study_content": {
            "Domain": "Public safety and transport",
            "Overview": "A real-time road accident detection system. AI/ML models analyse camera or sensor input and alert authorities when an accident is detected, while a Django backend automatically logs the incident data.",
            "Problem": "After a road accident every minute before help arrives matters, yet crashes are often noticed late. Automatic detection shortens the gap between an accident and an emergency response.",
            "Key features": [
                "Real-time accident detection with computer vision",
                "Instant alerts to authorities and emergency contacts",
                "Location details sent with each alert",
                "Automatic logging of incident data",
                "Incident records stored by the Django backend"
            ],
            "How it works": [
                "Video or sensor input is monitored continuously.",
                "Computer vision and ML models detect an accident in the feed.",
                "An alert with the incident details is sent to the authorities.",
                "The Django backend logs the incident automatically for later review."
            ],
            "Technology stack": [
                "Computer Vision — detects accidents from camera or sensor data",
                "AI / ML models — classification and alert triggering",
                "Django — backend, alert handling and incident logging",
                "Python — model integration and application logic"
            ]
        },
        "thumbnail": null,
        "github_url": "",
        "live_demo_url": "",
        "updated_at": ""
    },
    {
        "slug": "smoking-detection-system",
        "title": "Smoking Detection System",
        "summary": "Detects smoking in restricted zones and triggers instant alerts.",
        "description": "A computer-vision system that detects smoking in restricted zones and triggers instant alert notifications, helping keep offices, schools, hospitals and public spaces smoke-free.",
        "technologies": [
            "Computer Vision",
            "Django"
        ],
        "featured": false,
        "case_study_content": {
            "Domain": "Public safety",
            "Overview": "A computer-vision system that detects smoking in restricted zones and triggers instant alert notifications, helping keep offices, schools, hospitals and public spaces smoke-free.",
            "Problem": "Smoking rules in restricted areas are hard to enforce with manual patrols alone, and the fire and health risks are real.",
            "Key features": [
                "AI-powered detection of smoking behaviour in video feeds",
                "Instant alerts to security or authorities",
                "Continuous real-time monitoring",
                "Incident reports and analytics to track compliance"
            ],
            "How it works": [
                "Camera feeds from restricted zones are monitored.",
                "Computer vision detects smoking behaviour in the footage.",
                "An alert notification is triggered immediately.",
                "The incident is recorded so patterns can be reviewed and compliance improved."
            ],
            "Technology stack": [
                "Computer Vision — detects smoking in video feeds",
                "Django — backend, alert notifications and incident records",
                "Python — application logic"
            ]
        },
        "thumbnail": null,
        "github_url": "",
        "live_demo_url": "",
        "updated_at": ""
    },
    {
        "slug": "ulcer-detection-tool",
        "title": "Ulcer Detection Tool",
        "summary": "Medical image analysis platform for early-stage ulcer detection.",
        "description": "A medical image analysis platform for early-stage foot ulcer detection. A user uploads a foot image, AI analyses it, and the platform returns results and recommendations to support clinical decisions.",
        "technologies": [
            "Medical Imaging AI",
            "Django"
        ],
        "featured": false,
        "case_study_content": {
            "Domain": "Healthcare",
            "Overview": "A medical image analysis platform for early-stage foot ulcer detection. A user uploads a foot image, AI analyses it, and the platform returns results and recommendations to support clinical decisions.",
            "Problem": "Foot ulcers that go unnoticed can lead to serious complications. Early, easy-to-use image-based screening helps patients and clinicians act sooner.",
            "Key features": [
                "Image analysis: upload a foot image for AI-powered review",
                "Early-stage ulcer detection",
                "Results with practical recommendations",
                "Progress tracking over time",
                "Simple, non-invasive workflow"
            ],
            "How it works": [
                "A foot image is uploaded through the web interface.",
                "AI models analyse the image for signs of an ulcer.",
                "The platform shows the result together with recommendations.",
                "Progress can be tracked to support treatment decisions."
            ],
            "Technology stack": [
                "Medical Imaging AI — image analysis for early-stage ulcer detection",
                "Django — web platform and results delivery",
                "Python — application logic"
            ],
            "Note": "Supports clinical decisions and does not replace professional diagnosis."
        },
        "thumbnail": null,
        "github_url": "",
        "live_demo_url": "",
        "updated_at": ""
    },
    {
        "slug": "ai-job-recommendation-resume-screening",
        "title": "AI-Based Job Recommendation & Resume Screening System",
        "summary": "AI-powered platform for resume screening and personalized job recommendations.",
        "description": "A web-based recruitment platform developed using Python and Django that analyzes resumes, extracts candidate skills and qualifications, and recommends suitable job opportunities based on job descriptions. The system helps job seekers discover relevant vacancies and assists recruiters in screening candidates efficiently.",
        "technologies": [
            "Python",
            "Django",
            "Artificial Intelligence",
            "Natural Language Processing",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap"
        ],
        "featured": false,
        "case_study_content": {
            "Domain": "Recruitment and Human Resources",
            "Overview": "An AI-powered recruitment web application that automates resume screening and recommends suitable job opportunities based on candidate skills, qualifications, and experience. Developed using Python, Django, and MySQL, the platform simplifies job searching and supports efficient candidate evaluation.",
            "Problem": "Job seekers often struggle to find relevant vacancies, while recruiters spend considerable time manually reviewing resumes. Automated resume analysis and personalized job recommendations can reduce repetitive work and improve recruitment efficiency.",
            "Key features": [
                "Resume upload and information extraction from PDF and DOCX files",
                "AI-based resume screening and candidate evaluation",
                "Personalized job recommendations based on candidate profiles",
                "Resume-to-job compatibility scoring",
                "Candidate profile and skill management",
                "Job posting and management for recruiters",
                "Job application and status tracking",
                "Dashboard for recommended jobs and resume analysis results"
            ],
            "How it works": [
                "The job seeker registers, logs in, and uploads a resume through the web interface.",
                "The Django backend processes the resume and extracts skills, qualifications, education, and experience.",
                "AI and text-processing techniques compare candidate information with available job descriptions.",
                "The system calculates matching scores and ranks suitable job opportunities.",
                "The job seeker reviews recommendations and applies for relevant vacancies.",
                "Recruiters manage job listings, review candidate profiles, and evaluate applications through the dashboard."
            ],
            "Technology stack": [
                "Python — application logic, resume processing, and matching algorithms",
                "Django — web backend, authentication, and recruitment workflows",
                "Artificial Intelligence and NLP — resume analysis, skill extraction, and job recommendations",
                "MySQL — storage for candidate profiles, job listings, and application records",
                "HTML, CSS, JavaScript, Bootstrap — responsive user interface and dashboards",
                "PDF/DOCX processing libraries — resume text extraction"
            ],
            "Note": "Job recommendations and compatibility scores support recruitment decisions but do not guarantee candidate suitability. Human review is essential for fair and informed hiring decisions."
        },
        "thumbnail": "/projects/AI-Powered_Job_Matching_Banner.jpg",
        "github_url": "",
        "live_demo_url": "",
        "updated_at": ""
    }
];
}),
"[project]/src/lib/services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Services are based on the freelance and project experience in the resume. Edit text here; no prices or timelines are claimed.
__turbopack_context__.s([
    "getService",
    ()=>getService,
    "services",
    ()=>services,
    "servicesIntro",
    ()=>servicesIntro
]);
const servicesIntro = 'Freelance web development from first wireframe to deployment, built around the way I already work on my own projects.';
const site = (file, alt, caption, w = 1200, h = 750)=>({
        src: `/services/${file}`,
        alt,
        caption,
        w,
        h
    });
const cover = (slug, title)=>({
        src: `/projects/${slug}.jpg`,
        alt: `${title} project cover`,
        caption: `${title}: project cover`,
        w: 1200,
        h: 800
    });
const services = [
    {
        slug: 'website-development',
        title: 'Website Development',
        icon: 'globe',
        summary: 'Responsive websites designed in Figma and built with HTML5, CSS3, JavaScript and a Django backend.',
        bullets: [
            'Wireframes and high-fidelity Figma prototypes',
            'Responsive layouts for mobile, tablet and desktop',
            'Forms, content and data handled by Django and MySQL'
        ],
        overview: 'I design and build websites that look right on every screen. Drawing on my freelance full-stack work and a UI/UX design course, I take a site from wireframes and high-fidelity Figma prototypes through development, testing and deployment, so you work with one person from idea to launch.',
        deliver: [
            'Responsive layouts that adapt to mobile, tablet and desktop',
            'Figma wireframes and high-fidelity prototypes agreed before development starts',
            'A clean front end in HTML5, CSS3 and JavaScript',
            'A Django (or PHP) backend for forms, content and data, with MySQL for storage',
            'Git-based version control and a tested, deployed site'
        ],
        process: [
            {
                title: 'Requirement gathering',
                text: 'We agree the goals, pages, content and features the site needs.'
            },
            {
                title: 'UI/UX design',
                text: 'Wireframes and high-fidelity prototypes in Figma, reviewed before any code is written.'
            },
            {
                title: 'Development',
                text: 'A responsive front end and, where needed, a Django backend with a MySQL database.'
            },
            {
                title: 'Testing',
                text: 'Checks across screen sizes, plus forms and data flows.'
            },
            {
                title: 'Deployment',
                text: 'The site goes live and is handed over with the source in Git.'
            }
        ],
        stack: [
            'HTML5 — semantic page structure',
            'CSS3 — responsive styling and animation',
            'JavaScript — interactivity',
            'Figma — wireframes and prototypes',
            'Python Django — backend, forms and content',
            'PHP — alternative backend option',
            'MySQL — database',
            'Git — version control'
        ],
        goodFor: [
            'Portfolio websites',
            'Business and landing pages',
            'E-commerce concepts, like my Neobrew craft coffee design',
            'Booking and event sites, like my Evento design',
            'Wellness platforms, like my MindfulTech design'
        ],
        related: [],
        shots: [
            site('Neobrew.jpg', 'Neobrew Coffee Craft Website', 'This Website shows the Coffee Crafting Website'),
            site('Eco.jpg', 'Eco-Friendly Website', 'This website: Shows the Eco-Friendly Products'),
            site('futuristic.jpg', 'Futuristic Digital Website', 'This website: Shows the Futuristic Digital Website')
        ]
    },
    {
        slug: 'web-application-development',
        title: 'Web Application Development',
        icon: 'app',
        summary: 'Full-stack Django applications with REST APIs and MySQL, including AI chatbots and computer-vision detection apps.',
        bullets: [
            'Python Django backends with REST APIs and MySQL',
            'AI chatbots built on Claude and ChatGPT',
            'Detection and prediction apps using computer vision and ML models'
        ],
        overview: 'As a freelance AI full-stack developer I build and deploy web applications in Python Django. That includes AI-powered chatbots on Claude and ChatGPT, detection and prediction apps that use computer vision and ML models for healthcare, public safety and transport, and predictive analytics tools. I manage the whole cycle: requirements, AI integration, backend engineering, testing and deployment.',
        deliver: [
            'Custom full-stack web applications in Python Django with MySQL',
            'REST APIs for connecting your app with other systems',
            'AI chatbots with prompts designed for Claude or ChatGPT',
            'Computer vision and ML model integration, with alerts and automatic incident logging',
            'Predictive analytics tools that turn structured inputs into forecasts and business insight',
            'Django admin interfaces for managing records and content'
        ],
        process: [
            {
                title: 'Requirement gathering',
                text: 'We define the problem, the users and what the application must do.'
            },
            {
                title: 'AI integration planning',
                text: 'Choosing where an LLM or ML model fits and how it connects to the app.'
            },
            {
                title: 'Backend engineering',
                text: 'Django models, REST APIs and the database, with the front end on top.'
            },
            {
                title: 'Testing',
                text: 'Functional checks on the application and on the AI-driven parts.'
            },
            {
                title: 'Deployment',
                text: 'The application is deployed and handed over with its source and setup notes.'
            }
        ],
        stack: [
            'Python — application logic and model integration',
            'Django — backend, admin and web interface',
            'REST APIs — integrations and data exchange',
            'MySQL — database',
            'Claude and ChatGPT — conversational AI through designed prompts',
            'Computer Vision and ML models — detection and prediction',
            'HTML5, CSS3, JavaScript — front end',
            'Git — version control'
        ],
        goodFor: [
            'Healthcare assistants and image-analysis tools',
            'Public safety and transport monitoring',
            'Customer enquiry chatbots',
            'Management and workflow automation systems',
            'Forecasting and reporting tools'
        ],
        related: [
            'medical-chatbot',
            'railway-enquiry-chatbot',
            'accident-detection-system',
            'smoking-detection-system',
            'ulcer-detection-tool',
            'ai-job-recommendation-resume-screening'
        ],
        shots: [
            site('Ai_job.jpg', 'AI Based Job Recommendation & Resume Screening', 'This Web application provides job recommedation & Resume Shortlisting'),
            site('Ai_rest.jpg', 'AI Restaurant Recommendation System', 'This Web application provides recommended restaurant & Cuisine based on sentiment analysis'),
            cover('medical-chatbot', 'Medical Chatbot'),
            cover('railway-enquiry-chatbot', 'Railway Enquiry Chatbot'),
            cover('accident-detection-system', 'Accident Detection System')
        ]
    }
];
const getService = (slug)=>services.find((s)=>s.slug === slug);
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/icon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/icon.1bgrmohavly85.svg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__03igwpla0hls1._.js.map