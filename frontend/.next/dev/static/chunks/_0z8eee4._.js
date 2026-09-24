(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/auth/AuthGuard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthGuard",
    ()=>AuthGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Защита приватных страниц: редирект неавторизованных на страницу входа
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/providers/AuthProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AuthGuard({ children }) {
    _s();
    const { user, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthGuard.useEffect": ()=>{
            if (!isLoading && !user) {
                router.replace("/sign-in");
            }
        }
    }["AuthGuard.useEffect"], [
        user,
        isLoading,
        router
    ]);
    if (isLoading || !user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-[60vh] items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "size-6 animate-spin text-muted-foreground"
            }, void 0, false, {
                fileName: "[project]/components/auth/AuthGuard.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/auth/AuthGuard.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/components/auth/AuthGuard.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_s(AuthGuard, "FG2DkPvrCUydgYqHSyFl4Q88edA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthGuard;
var _c;
__turbopack_context__.k.register(_c, "AuthGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/rating/AnalysisScan.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalysisScan",
    ()=>AnalysisScan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Анимация сканирования снимка во время обработки: сетка, бегущая линия и статус
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as TriangleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
"use client";
;
;
;
;
;
const STATUS_LABELS = {
    pending: "Готовим снимок к анализу",
    processing: "Сканируем черты лица",
    completed: "Анализ завершён",
    failed: "Обработка прервана"
};
function AnalysisScan({ previewUrl, status }) {
    // Показывает снимок с анимацией сканирования, пока идёт обработка оценки
    const isFailed = status === "failed";
    const isDone = status === "completed";
    const isScanning = !isFailed && !isDone;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-square w-full overflow-hidden rounded-xl border border-border/60 bg-black/60",
                children: [
                    previewUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: previewUrl,
                        alt: "Анализируемое фото",
                        fill: true,
                        unoptimized: true,
                        sizes: "(max-width: 640px) 100vw, 42rem",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("object-cover transition-all duration-700", isScanning ? "brightness-75 saturate-[0.85]" : "brightness-100")
                    }, void 0, false, {
                        fileName: "[project]/components/rating/AnalysisScan.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("absolute inset-0 size-full transition-opacity duration-700", isScanning ? "opacity-25" : "opacity-0"),
                                preserveAspectRatio: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                            id: "analysis-grid",
                                            width: "6%",
                                            height: "6%",
                                            patternUnits: "userSpaceOnUse",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M 100 0 L 0 0 0 100",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/rating/AnalysisScan.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/rating/AnalysisScan.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/rating/AnalysisScan.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "100%",
                                        height: "100%",
                                        fill: "url(#analysis-grid)",
                                        className: "text-brand"
                                    }, void 0, false, {
                                        fileName: "[project]/components/rating/AnalysisScan.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/rating/AnalysisScan.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            isScanning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                animate: {
                                    top: [
                                        "-10%",
                                        "110%"
                                    ]
                                },
                                transition: {
                                    duration: 2.4,
                                    repeat: Infinity,
                                    ease: "linear"
                                },
                                className: "absolute inset-x-0 h-24 -translate-y-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "size-full bg-gradient-to-b from-transparent via-brand/40 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/rating/AnalysisScan.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px w-full bg-brand/80 shadow-[0_0_12px_var(--color-brand)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/rating/AnalysisScan.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/rating/AnalysisScan.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            isDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                className: "absolute inset-0 bg-brand/10"
                            }, void 0, false, {
                                fileName: "[project]/components/rating/AnalysisScan.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/rating/AnalysisScan.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/AnalysisScan.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-2.5 text-sm",
                children: [
                    isFailed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"], {
                        className: "size-4 text-destructive"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/AnalysisScan.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                        animate: isScanning ? {
                            opacity: [
                                1,
                                0.3,
                                1
                            ]
                        } : {
                            opacity: 1
                        },
                        transition: {
                            duration: 1.4,
                            repeat: isScanning ? Infinity : 0
                        },
                        className: "size-2 rounded-full bg-brand"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/AnalysisScan.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(isFailed ? "text-destructive" : "text-muted-foreground"),
                        children: STATUS_LABELS[status]
                    }, void 0, false, {
                        fileName: "[project]/components/rating/AnalysisScan.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/AnalysisScan.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/rating/AnalysisScan.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = AnalysisScan;
var _c;
__turbopack_context__.k.register(_c, "AnalysisScan");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/rating/CameraCapture.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CameraCapture",
    ()=>CameraCapture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Съёмка фото с веб-камеры: автозапуск сканирования и автоматический снимок при попадании лица в рамку
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.mjs [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$FaceScanOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/FaceScanOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$camera$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-camera.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$face$2d$detector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-face-detector.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const HINTS = {
    loading: "Загружаем модуль распознавания лица...",
    unavailable: "Автоскан недоступен — снимите фото вручную",
    searching: "Расположите лицо по центру круга",
    "too-far": "Придвиньтесь ближе к камере",
    "too-close": "Отодвиньтесь немного назад",
    "off-center": "Выровняйте лицо по центру",
    holding: "Не двигайтесь, идёт сканирование...",
    ready: "Лицо зафиксировано — делаем снимок"
};
function CameraCapture({ onCapture, onClose }) {
    _s();
    const { videoRef, isActive, isStarting, error, start, stop, capture } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$camera$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCamera"])();
    const [video, setVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const hasCapturedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const { status, box, holdProgress, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$face$2d$detector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFaceDetector"])(video, isActive);
    const attachVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CameraCapture.useCallback[attachVideo]": (element)=>{
            videoRef.current = element;
            setVideo(element);
        }
    }["CameraCapture.useCallback[attachVideo]"], [
        videoRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CameraCapture.useEffect": ()=>{
            void start();
        }
    }["CameraCapture.useEffect"], [
        start
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CameraCapture.useEffect": ()=>{
            if (status !== "ready" || hasCapturedRef.current) return;
            hasCapturedRef.current = true;
            // Небольшая пауза, чтобы пользователь увидел завершённый цикл сканирования
            const timer = setTimeout({
                "CameraCapture.useEffect.timer": async ()=>{
                    const file = await capture();
                    stop();
                    if (file) {
                        onCapture(file);
                        return;
                    }
                    hasCapturedRef.current = false;
                    reset();
                }
            }["CameraCapture.useEffect.timer"], 420);
            return ({
                "CameraCapture.useEffect": ()=>clearTimeout(timer)
            })["CameraCapture.useEffect"];
        }
    }["CameraCapture.useEffect"], [
        status,
        capture,
        stop,
        onCapture,
        reset
    ]);
    const handleClose = ()=>{
        stop();
        onClose();
    };
    const handleManualShoot = async ()=>{
        const file = await capture();
        if (!file) return;
        hasCapturedRef.current = true;
        stop();
        onCapture(file);
    };
    const handleRetry = ()=>{
        hasCapturedRef.current = false;
        reset();
        void start();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 12
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.35,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: "overflow-hidden rounded-xl border border-border/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-square w-full bg-black/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: attachVideo,
                        playsInline: true,
                        muted: true,
                        className: "size-full -scale-x-100 object-cover"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/CameraCapture.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    (isStarting || !isActive && !error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "size-6 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/components/rating/CameraCapture.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "Запрашиваем доступ к камере..."
                            }, void 0, false, {
                                fileName: "[project]/components/rating/CameraCapture.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/rating/CameraCapture.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$FaceScanOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceScanOverlay"], {
                        status: status,
                        box: box,
                        holdProgress: holdProgress
                    }, void 0, false, {
                        fileName: "[project]/components/rating/CameraCapture.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/CameraCapture.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 border-t border-border/60 bg-card/60 p-4",
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                        variant: "destructive",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/rating/CameraCapture.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/rating/CameraCapture.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "min-w-0 flex-1 truncate text-sm text-muted-foreground",
                                children: error ? "Камера недоступна" : HINTS[status]
                            }, void 0, false, {
                                fileName: "[project]/components/rating/CameraCapture.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                onClick: handleRetry,
                                children: "Повторить"
                            }, void 0, false, {
                                fileName: "[project]/components/rating/CameraCapture.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex shrink-0 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: handleClose,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "size-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/rating/CameraCapture.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this),
                                            "Отмена"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/rating/CameraCapture.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    status === "unavailable" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        disabled: !isActive,
                                        onClick: handleManualShoot,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                className: "size-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/rating/CameraCapture.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            "Снять"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/rating/CameraCapture.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/rating/CameraCapture.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/rating/CameraCapture.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/CameraCapture.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/rating/CameraCapture.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(CameraCapture, "OVVGe9VpjtYuREw7ZqY2qim8LSM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$camera$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCamera"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$face$2d$detector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFaceDetector"]
    ];
});
_c = CameraCapture;
var _c;
__turbopack_context__.k.register(_c, "CameraCapture");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/rating/FaceScanOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceScanOverlay",
    ()=>FaceScanOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Визуальный оверлей сканирования лица: сетка, рамка захвата и индикатор удержания
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
"use client";
;
;
;
const CORNERS = [
    "left-0 top-0 border-l-2 border-t-2 rounded-tl-lg",
    "right-0 top-0 border-r-2 border-t-2 rounded-tr-lg",
    "left-0 bottom-0 border-l-2 border-b-2 rounded-bl-lg",
    "right-0 bottom-0 border-r-2 border-b-2 rounded-br-lg"
];
function FaceScanOverlay({ status, box, holdProgress }) {
    // Рисует сетку сканирования и рамку вокруг найденного лица
    const isLocked = status === "holding" || status === "ready";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute inset-0 size-full opacity-[0.18]",
                preserveAspectRatio: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                            id: "scan-grid",
                            width: "7.5%",
                            height: "7.5%",
                            patternUnits: "userSpaceOnUse",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 100 0 L 0 0 0 100",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/components/rating/FaceScanOverlay.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/rating/FaceScanOverlay.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/rating/FaceScanOverlay.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "100%",
                        height: "100%",
                        fill: "url(#scan-grid)",
                        className: "text-brand"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/FaceScanOverlay.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/FaceScanOverlay.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("absolute left-1/2 top-1/2 size-[62%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border-2 border-dashed transition-colors duration-500", isLocked ? "border-brand/70" : "border-white/25")
            }, void 0, false, {
                fileName: "[project]/components/rating/FaceScanOverlay.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            box && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                animate: {
                    left: `${box.x * 100}%`,
                    top: `${box.y * 100}%`,
                    width: `${box.width * 100}%`,
                    height: `${box.height * 100}%`
                },
                transition: {
                    duration: 0.18,
                    ease: "easeOut"
                },
                className: "absolute",
                children: CORNERS.map((corner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("absolute size-5 transition-colors duration-300", corner, isLocked ? "border-brand" : "border-white/70")
                    }, corner, false, {
                        fileName: "[project]/components/rating/FaceScanOverlay.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/rating/FaceScanOverlay.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this),
            isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                initial: {
                    top: "0%"
                },
                animate: {
                    top: [
                        "0%",
                        "100%",
                        "0%"
                    ]
                },
                transition: {
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                className: "absolute inset-x-0 h-16 -translate-y-1/2 bg-gradient-to-b from-transparent via-brand/35 to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/rating/FaceScanOverlay.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            status !== "ready" && holdProgress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute left-1/2 top-1/2 size-[64%] -translate-x-1/2 -translate-y-1/2 -rotate-90",
                viewBox: "0 0 100 100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "50",
                    cy: "50",
                    r: "48",
                    fill: "none",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    pathLength: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1 - holdProgress,
                    className: "stroke-brand"
                }, void 0, false, {
                    fileName: "[project]/components/rating/FaceScanOverlay.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/rating/FaceScanOverlay.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/rating/FaceScanOverlay.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = FaceScanOverlay;
var _c;
__turbopack_context__.k.register(_c, "FaceScanOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/rating/ModeSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModeSelector",
    ()=>ModeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Переключатель тона разбора: мягкий, честный или жёсткий
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$tiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/tiers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
"use client";
;
;
;
function ModeSelector({ value, onChange, disabled }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-3 sm:grid-cols-3",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$tiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RATING_MODE_ORDER"].map((mode)=>{
            const info = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$tiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RATING_MODE_INFO"][mode];
            const isActive = value === mode;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: disabled,
                onClick: ()=>onChange(mode),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("rounded-xl border p-4 text-left transition-all", isActive ? "border-brand bg-brand/5 ring-1 ring-brand/30" : "border-border/60 hover:border-border hover:bg-card/40", disabled && "pointer-events-none opacity-60"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("font-medium", isActive && "text-brand"),
                        children: info.label
                    }, void 0, false, {
                        fileName: "[project]/components/rating/ModeSelector.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-xs leading-relaxed text-muted-foreground",
                        children: info.description
                    }, void 0, false, {
                        fileName: "[project]/components/rating/ModeSelector.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this)
                ]
            }, mode, true, {
                fileName: "[project]/components/rating/ModeSelector.tsx",
                lineNumber: 23,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/rating/ModeSelector.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = ModeSelector;
var _c;
__turbopack_context__.k.register(_c, "ModeSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/rating/PhotoDropzone.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoDropzone",
    ()=>PhotoDropzone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Зона загрузки фото с drag-and-drop, превью и проверкой формата и размера
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.mjs [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image-up.mjs [app-client] (ecmascript) <export default as ImageUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const ALLOWED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/heic"
];
const MAX_SIZE_BYTES = 15 * 1024 * 1024;
function formatFileSize(bytes) {
    return bytes < 1024 * 1024 ? `${Math.round(bytes / 1024)} КБ` : `${(bytes / 1024 / 1024).toFixed(1)} МБ`;
}
function PhotoDropzone({ file, previewUrl, onSelect, onRequestCamera, disabled }) {
    _s();
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const validateAndSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PhotoDropzone.useCallback[validateAndSelect]": (candidate)=>{
            if (!candidate) return;
            if (!ALLOWED_TYPES.includes(candidate.type)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Поддерживаются только JPG, PNG, WebP и HEIC");
                return;
            }
            if (candidate.size > MAX_SIZE_BYTES) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Файл больше 15 МБ");
                return;
            }
            onSelect(candidate);
        }
    }["PhotoDropzone.useCallback[validateAndSelect]"], [
        onSelect
    ]);
    const handleDrop = (event)=>{
        event.preventDefault();
        setIsDragging(false);
        if (!disabled) validateAndSelect(event.dataTransfer.files[0]);
    };
    if (file && previewUrl) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-xl border border-border/60",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: previewUrl,
                    alt: "Загруженное фото",
                    width: 640,
                    height: 640,
                    unoptimized: true,
                    className: "max-h-[26rem] w-full object-contain bg-black/40"
                }, void 0, false, {
                    fileName: "[project]/components/rating/PhotoDropzone.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-3 border-t border-border/60 bg-card/60 px-4 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "min-w-0 truncate text-sm text-muted-foreground",
                            children: [
                                file.name,
                                " · ",
                                formatFileSize(file.size)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/rating/PhotoDropzone.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            disabled: disabled,
                            onClick: ()=>onSelect(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "size-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/rating/PhotoDropzone.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                "Убрать"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/rating/PhotoDropzone.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/rating/PhotoDropzone.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/rating/PhotoDropzone.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onDragOver: (event)=>{
            event.preventDefault();
            if (!disabled) setIsDragging(true);
        },
        onDragLeave: ()=>setIsDragging(false),
        onDrop: handleDrop,
        onClick: ()=>!disabled && inputRef.current?.click(),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border border-dashed px-6 py-16 text-center transition-colors", isDragging ? "border-brand bg-brand/5" : "border-border/70 hover:border-border hover:bg-card/40", disabled && "pointer-events-none opacity-60"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex size-14 items-center justify-center rounded-xl bg-brand/10 text-brand",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageUp$3e$__["ImageUp"], {
                    className: "size-6"
                }, void 0, false, {
                    fileName: "[project]/components/rating/PhotoDropzone.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/rating/PhotoDropzone.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium",
                        children: "Перетащите фото или нажмите для выбора"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/PhotoDropzone.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Фронтальный снимок, ровный свет. JPG, PNG, WebP или HEIC до 15 МБ"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/PhotoDropzone.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/PhotoDropzone.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 text-xs text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-px w-8 bg-border"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/PhotoDropzone.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    "или",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-px w-8 bg-border"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/PhotoDropzone.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/PhotoDropzone.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                disabled: disabled,
                onClick: (event)=>{
                    event.stopPropagation();
                    onRequestCamera();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/PhotoDropzone.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    "Снять на камеру"
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/PhotoDropzone.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                type: "file",
                accept: ALLOWED_TYPES.join(","),
                className: "hidden",
                onChange: (event)=>validateAndSelect(event.target.files?.[0])
            }, void 0, false, {
                fileName: "[project]/components/rating/PhotoDropzone.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/rating/PhotoDropzone.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(PhotoDropzone, "EDFdGOo/I0h1MYUJNeOgOZL1byM=");
_c = PhotoDropzone;
var _c;
__turbopack_context__.k.register(_c, "PhotoDropzone");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/rating/RateFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RateFlow",
    ()=>RateFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Основной сценарий получения оценки: выбор фото и режима, отправка и анимация сканирования
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$AnalysisScan$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/AnalysisScan.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$CameraCapture$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/CameraCapture.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$ModeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/ModeSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$PhotoDropzone$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/PhotoDropzone.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-ratings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$rating$2d$stream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-rating-stream.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
;
function RateFlow() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("honest");
    const [ratingId, setRatingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCameraOpen, setIsCameraOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const createRating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateRating"])();
    const { state, isPolling } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$rating$2d$stream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRatingStream"])(ratingId, Boolean(ratingId));
    const { data: rating } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRating"])(ratingId, isPolling);
    const previewUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RateFlow.useMemo[previewUrl]": ()=>file ? URL.createObjectURL(file) : null
    }["RateFlow.useMemo[previewUrl]"], [
        file
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RateFlow.useEffect": ()=>{
            return ({
                "RateFlow.useEffect": ()=>{
                    if (previewUrl) URL.revokeObjectURL(previewUrl);
                }
            })["RateFlow.useEffect"];
        }
    }["RateFlow.useEffect"], [
        previewUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RateFlow.useEffect": ()=>{
            if (rating?.status === "completed" && ratingId) {
                const timer = setTimeout({
                    "RateFlow.useEffect.timer": ()=>router.push(`/ratings/${ratingId}`)
                }["RateFlow.useEffect.timer"], 900);
                return ({
                    "RateFlow.useEffect": ()=>clearTimeout(timer)
                })["RateFlow.useEffect"];
            }
        }
    }["RateFlow.useEffect"], [
        rating?.status,
        ratingId,
        router
    ]);
    const handleSubmit = async ()=>{
        if (!file) return;
        const created = await createRating.mutateAsync({
            file,
            mode
        });
        setRatingId(created.rating_id);
    };
    const status = rating?.status ?? "pending";
    const isRunning = Boolean(ratingId) && state !== "done";
    if (ratingId) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$AnalysisScan$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnalysisScan"], {
                    previewUrl: previewUrl,
                    status: status
                }, void 0, false, {
                    fileName: "[project]/components/rating/RateFlow.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                rating?.status === "failed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                            variant: "destructive",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                children: rating.error_message || "Не удалось обработать фото"
                            }, void 0, false, {
                                fileName: "[project]/components/rating/RateFlow.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/rating/RateFlow.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "w-full",
                            onClick: ()=>{
                                setRatingId(null);
                                setFile(null);
                            },
                            children: "Попробовать снова"
                        }, void 0, false, {
                            fileName: "[project]/components/rating/RateFlow.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/rating/RateFlow.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this),
                isRunning && rating?.status !== "failed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-sm text-muted-foreground",
                    children: "Обычно занимает 15–40 секунд. Можно не закрывать вкладку."
                }, void 0, false, {
                    fileName: "[project]/components/rating/RateFlow.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/rating/RateFlow.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            isCameraOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$CameraCapture$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraCapture"], {
                onCapture: (captured)=>{
                    setFile(captured);
                    setIsCameraOpen(false);
                },
                onClose: ()=>setIsCameraOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/rating/RateFlow.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$PhotoDropzone$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhotoDropzone"], {
                file: file,
                previewUrl: previewUrl,
                onSelect: setFile,
                onRequestCamera: ()=>setIsCameraOpen(true),
                disabled: createRating.isPending
            }, void 0, false, {
                fileName: "[project]/components/rating/RateFlow.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium",
                        children: "Тон разбора"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/RateFlow.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$ModeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeSelector"], {
                        value: mode,
                        onChange: setMode,
                        disabled: createRating.isPending
                    }, void 0, false, {
                        fileName: "[project]/components/rating/RateFlow.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/RateFlow.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "lg",
                className: "w-full",
                disabled: !file || createRating.isPending,
                onClick: handleSubmit,
                children: [
                    createRating.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "size-4 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/RateFlow.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/RateFlow.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this),
                    createRating.isPending ? "Загружаем фото..." : "Оценить внешность"
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/RateFlow.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/rating/RateFlow.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(RateFlow, "qIq8owBu8Q/V/paUU+3HMdzcOfQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateRating"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$rating$2d$stream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRatingStream"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRating"]
    ];
});
_c = RateFlow;
var _c;
__turbopack_context__.k.register(_c, "RateFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/alert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "AlertAction",
    ()=>AlertAction,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/alert relative grid w-full gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = Alert;
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c1 = AlertTitle;
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c2 = AlertDescription;
function AlertAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("absolute top-2 right-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c3 = AlertAction;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Alert");
__turbopack_context__.k.register(_c1, "AlertTitle");
__turbopack_context__.k.register(_c2, "AlertDescription");
__turbopack_context__.k.register(_c3, "AlertAction");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/ratings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildStreamUrl",
    ()=>buildStreamUrl,
    "createRating",
    ()=>createRating,
    "deleteRating",
    ()=>deleteRating,
    "fetchRating",
    ()=>fetchRating,
    "fetchRatings",
    ()=>fetchRatings
]);
// Сервис работы с оценками: загрузка фото, постановка в очередь, чтение истории
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$compress$2d$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/compress-image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$rating$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/rating.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const RATING_FIELDS = "id,user_id,photo_path,status,tier,score,metrics,looksmaxxing_tips,raw_ai_response,error_message,created_at,completed_at";
async function createRating(file, mode) {
    // Профиль создаётся лениво, а ratings ссылается на него внешним ключом
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMe"])();
    // Ужимаем кадр, иначе Vision-модель упирается в лимит токенов
    const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$compress$2d$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compressImage"])(file);
    // Полный цикл: pre-signed URL -> прямая загрузка в Storage -> регистрация в очереди
    const { data: urlData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edgeClient"].post("/ratings/upload-url", {
        content_type: payload.type
    });
    const uploadPlan = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$rating$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadUrlResponseSchema"].parse(urlData);
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(uploadPlan.upload_url, payload, {
        headers: {
            "Content-Type": payload.type
        }
    });
    const { data: ratingData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edgeClient"].post("/ratings", {
        photo_path: uploadPlan.photo_path,
        rating_mode: mode
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$rating$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRatingResponseSchema"].parse(ratingData);
}
async function fetchRating(id) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restClient"].get(`/ratings`, {
        params: {
            id: `eq.${id}`,
            select: RATING_FIELDS
        },
        headers: {
            Accept: "application/vnd.pgrst.object+json"
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$rating$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ratingSchema"].parse(data);
}
async function fetchRatings(limit = 50) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restClient"].get(`/ratings`, {
        params: {
            select: RATING_FIELDS,
            order: "created_at.desc",
            limit
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$rating$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ratingSchema"].array().parse(data);
}
async function deleteRating(id) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restClient"].delete(`/ratings`, {
        params: {
            id: `eq.${id}`
        },
        headers: {
            Prefer: "return=minimal"
        }
    });
}
function buildStreamUrl(ratingId, token) {
    const params = new URLSearchParams({
        token,
        apikey: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPABASE_ANON_KEY"]
    });
    return `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDGE_URL"]}/ratings/${ratingId}/stream?${params}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/compress-image.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compressImage",
    ()=>compressImage
]);
// Сжатие фото перед загрузкой: уменьшает размер кадра для экономии токенов Vision-модели
const MAX_DIMENSION = 768;
const JPEG_QUALITY = 0.85;
async function compressImage(file) {
    // Ужимает изображение до MAX_DIMENSION по длинной стороне, сохраняя пропорции
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_DIMENSION / Math.max(bitmap.width, bitmap.height));
    if (scale === 1 && file.type === "image/jpeg") {
        bitmap.close();
        return file;
    }
    const width = Math.round(bitmap.width * scale);
    const height = Math.round(bitmap.height * scale);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) {
        bitmap.close();
        return file;
    }
    context.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();
    const blob = await new Promise((resolve)=>canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY));
    if (!blob) return file;
    const name = file.name.replace(/\.[^.]+$/, "") + ".jpg";
    return new File([
        blob
    ], name, {
        type: "image/jpeg"
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants/tiers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Справочник тиров луксмаксинга: подписи, диапазоны баллов и цвета для UI
__turbopack_context__.s([
    "CANTHAL_TILT_LABELS",
    ()=>CANTHAL_TILT_LABELS,
    "METRIC_LABELS",
    ()=>METRIC_LABELS,
    "RATING_MODE_INFO",
    ()=>RATING_MODE_INFO,
    "RATING_MODE_ORDER",
    ()=>RATING_MODE_ORDER,
    "TIERS",
    ()=>TIERS,
    "TIER_ORDER",
    ()=>TIER_ORDER
]);
const TIERS = {
    sub3: {
        tier: "sub3",
        label: "Sub 3",
        short: "S3",
        min: 1.0,
        max: 2.9,
        description: "Выраженные асимметрии и структурные особенности. Максимальный потенциал роста.",
        colorVar: "var(--tier-sub3)"
    },
    ltn: {
        tier: "ltn",
        label: "Low Tier Normie",
        short: "LTN",
        min: 3.0,
        max: 4.4,
        description: "Ниже среднего: невыраженная линия челюсти, слабая проекция подбородка.",
        colorVar: "var(--tier-ltn)"
    },
    mtn: {
        tier: "mtn",
        label: "Mid Tier Normie",
        short: "MTN",
        min: 4.5,
        max: 5.9,
        description: "Средняя внешность большинства людей, стандартные пропорции без явных изъянов.",
        colorVar: "var(--tier-mtn)"
    },
    htn: {
        tier: "htn",
        label: "High Tier Normie",
        short: "HTN",
        min: 6.0,
        max: 7.4,
        description: "Выше среднего: хорошая костная структура и приятные гармоничные черты.",
        colorVar: "var(--tier-htn)"
    },
    chadlite: {
        tier: "chadlite",
        label: "Chadlite",
        short: "CL",
        min: 7.5,
        max: 8.4,
        description: "Отличная генетика: выраженная челюсть, позитивный canthal tilt, гармония.",
        colorVar: "var(--tier-chadlite)"
    },
    chad: {
        tier: "chad",
        label: "Chad",
        short: "CH",
        min: 8.5,
        max: 9.4,
        description: "Модельная внешность: высокая маскулинность и идеальная гармония костных структур.",
        colorVar: "var(--tier-chad)"
    },
    true_adam: {
        tier: "true_adam",
        label: "True Adam",
        short: "TA",
        min: 9.5,
        max: 10.0,
        description: "Идеальные антропометрические пропорции лица. Абсолютная вершина шкалы.",
        colorVar: "var(--tier-true_adam)"
    }
};
const TIER_ORDER = [
    "sub3",
    "ltn",
    "mtn",
    "htn",
    "chadlite",
    "chad",
    "true_adam"
];
const RATING_MODE_INFO = {
    soft: {
        mode: "soft",
        label: "Мягкий",
        description: "Щадящая оценка с фокусом на сильных сторонах и потенциале."
    },
    honest: {
        mode: "honest",
        label: "Честный",
        description: "Объективный и реалистичный анализ без прикрас и без жести."
    },
    brutal: {
        mode: "brutal",
        label: "Жёсткий",
        description: "Бескомпромиссный разбор. Только для крепкой психики."
    }
};
const RATING_MODE_ORDER = [
    "soft",
    "honest",
    "brutal"
];
const METRIC_LABELS = {
    jawline: "Линия челюсти",
    symmetry: "Симметрия",
    skin_quality: "Качество кожи",
    eye_area: "Зона глаз",
    cheekbones: "Скулы"
};
const CANTHAL_TILT_LABELS = {
    positive: "Позитивный",
    neutral: "Нейтральный",
    negative: "Негативный"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/hooks/use-camera.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCamera",
    ()=>useCamera
]);
// Управление потоком веб-камеры: запуск, остановка и снимок кадра в файл
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const ERROR_MESSAGES = {
    unsupported: "Браузер не поддерживает камеру или страница открыта не по HTTPS",
    denied: "Доступ к камере запрещён. Разрешите его в настройках браузера",
    "not-found": "Камера не найдена. Подключите устройство и попробуйте снова",
    "in-use": "Камера занята другим приложением",
    unknown: "Не удалось включить камеру"
};
function mapError(error) {
    if (!(error instanceof DOMException)) return "unknown";
    if (error.name === "NotAllowedError" || error.name === "SecurityError") {
        return "denied";
    }
    if (error.name === "NotFoundError" || error.name === "OverconstrainedError") {
        return "not-found";
    }
    if (error.name === "NotReadableError") return "in-use";
    return "unknown";
}
function useCamera() {
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const requestIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStarting, setIsStarting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCamera.useCallback[stop]": ()=>{
            // Гасим дорожки всех выданных потоков, иначе индикатор камеры останется гореть
            requestIdRef.current += 1;
            streamsRef.current.forEach({
                "useCamera.useCallback[stop]": (stream)=>stream.getTracks().forEach({
                        "useCamera.useCallback[stop]": (track)=>track.stop()
                    }["useCamera.useCallback[stop]"])
            }["useCamera.useCallback[stop]"]);
            streamsRef.current.clear();
            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
            setIsActive(false);
        }
    }["useCamera.useCallback[stop]"], []);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCamera.useCallback[start]": async ()=>{
            if (!navigator.mediaDevices?.getUserMedia) {
                setError(ERROR_MESSAGES.unsupported);
                return;
            }
            const requestId = ++requestIdRef.current;
            setIsStarting(true);
            setError(null);
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: "user",
                        width: {
                            ideal: 1280
                        },
                        height: {
                            ideal: 1280
                        }
                    },
                    audio: false
                });
                // Пока ждали разрешение, мог прийти новый запуск или остановка
                if (requestId !== requestIdRef.current) {
                    stream.getTracks().forEach({
                        "useCamera.useCallback[start]": (track)=>track.stop()
                    }["useCamera.useCallback[start]"]);
                    return;
                }
                streamsRef.current.add(stream);
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    await videoRef.current.play();
                }
                setIsActive(true);
            } catch (cause) {
                if (requestId === requestIdRef.current) {
                    setError(ERROR_MESSAGES[mapError(cause)]);
                    stop();
                }
            } finally{
                setIsStarting(false);
            }
        }
    }["useCamera.useCallback[start]"], [
        stop
    ]);
    const capture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCamera.useCallback[capture]": async ()=>{
            const video = videoRef.current;
            if (!video || !video.videoWidth) return null;
            const canvas = document.createElement("canvas");
            const size = Math.min(video.videoWidth, video.videoHeight);
            canvas.width = size;
            canvas.height = size;
            const context = canvas.getContext("2d");
            if (!context) return null;
            // Отражаем кадр по горизонтали, чтобы снимок совпал с зеркальным превью
            context.translate(size, 0);
            context.scale(-1, 1);
            context.drawImage(video, (video.videoWidth - size) / 2, (video.videoHeight - size) / 2, size, size, 0, 0, size, size);
            const blob = await new Promise({
                "useCamera.useCallback[capture]": (resolve)=>canvas.toBlob(resolve, "image/jpeg", 0.92)
            }["useCamera.useCallback[capture]"]);
            if (!blob) return null;
            return new File([
                blob
            ], `camera-${Date.now()}.jpg`, {
                type: "image/jpeg"
            });
        }
    }["useCamera.useCallback[capture]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCamera.useEffect": ()=>stop
    }["useCamera.useEffect"], [
        stop
    ]);
    return {
        videoRef,
        isActive,
        isStarting,
        error,
        start,
        stop,
        capture
    };
}
_s(useCamera, "YT4zeiL3WjQnYs3pmUZQkAZJG5E=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/hooks/use-face-detector.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFaceDetector",
    ()=>useFaceDetector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const WASM_PATH = "/mediapipe/wasm";
const MODEL_PATH = "/mediapipe/blaze_face_short_range.tflite";
const MIN_FACE_RATIO = 0.26;
const MAX_FACE_RATIO = 0.82;
const MAX_CENTER_OFFSET = 0.2;
const HOLD_DURATION_MS = 1400;
function evaluate(detection, videoWidth, videoHeight) {
    if (!detection?.boundingBox) return {
        status: "searching",
        box: null
    };
    const { originX, originY, width, height } = detection.boundingBox;
    const box = {
        x: originX / videoWidth,
        y: originY / videoHeight,
        width: width / videoWidth,
        height: height / videoHeight
    };
    const size = Math.max(box.width, box.height);
    const offset = Math.hypot(box.x + box.width / 2 - 0.5, box.y + box.height / 2 - 0.5);
    if (size < MIN_FACE_RATIO) return {
        status: "too-far",
        box
    };
    if (size > MAX_FACE_RATIO) return {
        status: "too-close",
        box
    };
    if (offset > MAX_CENTER_OFFSET) return {
        status: "off-center",
        box
    };
    return {
        status: "holding",
        box
    };
}
function useFaceDetector(video, enabled) {
    _s();
    // Возвращает статус кадрирования лица, его рамку и прогресс удержания позиции
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("loading");
    const [box, setBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [holdProgress, setHoldProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const detectorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const holdStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTimestampRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const isReadyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFaceDetector.useEffect": ()=>{
            if (!enabled || detectorRef.current) return;
            let cancelled = false;
            const load = {
                "useFaceDetector.useEffect.load": async ()=>{
                    try {
                        const { FaceDetector, FilesetResolver } = await __turbopack_context__.A("[project]/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs [app-client] (ecmascript, async loader)");
                        const fileset = await FilesetResolver.forVisionTasks(WASM_PATH);
                        const detector = await FaceDetector.createFromOptions(fileset, {
                            baseOptions: {
                                modelAssetPath: MODEL_PATH,
                                delegate: "GPU"
                            },
                            runningMode: "VIDEO"
                        });
                        if (cancelled) {
                            detector.close();
                            return;
                        }
                        detectorRef.current = detector;
                        setStatus("searching");
                    } catch  {
                        // Модель или WASM не загрузились — оставляем ручной снимок как запасной путь
                        if (!cancelled) setStatus("unavailable");
                    }
                }
            }["useFaceDetector.useEffect.load"];
            void load();
            return ({
                "useFaceDetector.useEffect": ()=>{
                    cancelled = true;
                }
            })["useFaceDetector.useEffect"];
        }
    }["useFaceDetector.useEffect"], [
        enabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFaceDetector.useEffect": ()=>{
            return ({
                "useFaceDetector.useEffect": ()=>{
                    detectorRef.current?.close();
                    detectorRef.current = null;
                }
            })["useFaceDetector.useEffect"];
        }
    }["useFaceDetector.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFaceDetector.useEffect": ()=>{
            if (!enabled || !video) return;
            const tick = {
                "useFaceDetector.useEffect.tick": ()=>{
                    frameRef.current = requestAnimationFrame(tick);
                    const detector = detectorRef.current;
                    if (!detector || !video.videoWidth || isReadyRef.current) return;
                    // MediaPipe требует строго возрастающие таймстемпы кадров
                    const timestamp = performance.now();
                    if (timestamp <= lastTimestampRef.current) return;
                    lastTimestampRef.current = timestamp;
                    const result = detector.detectForVideo(video, timestamp);
                    const next = evaluate(result.detections[0], video.videoWidth, video.videoHeight);
                    setBox(next.box);
                    if (next.status !== "holding") {
                        holdStartRef.current = null;
                        setHoldProgress(0);
                        setStatus(next.status);
                        return;
                    }
                    holdStartRef.current ??= timestamp;
                    const elapsed = timestamp - holdStartRef.current;
                    const progress = Math.min(elapsed / HOLD_DURATION_MS, 1);
                    setHoldProgress(progress);
                    setStatus(progress >= 1 ? "ready" : "holding");
                    if (progress >= 1) isReadyRef.current = true;
                }
            }["useFaceDetector.useEffect.tick"];
            frameRef.current = requestAnimationFrame(tick);
            return ({
                "useFaceDetector.useEffect": ()=>{
                    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
                    frameRef.current = null;
                }
            })["useFaceDetector.useEffect"];
        }
    }["useFaceDetector.useEffect"], [
        enabled,
        video
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFaceDetector.useCallback[reset]": ()=>{
            holdStartRef.current = null;
            isReadyRef.current = false;
            lastTimestampRef.current = -1;
            setHoldProgress(0);
            setBox(null);
            setStatus({
                "useFaceDetector.useCallback[reset]": (current)=>detectorRef.current ? "searching" : current === "unavailable" ? current : "loading"
            }["useFaceDetector.useCallback[reset]"]);
        }
    }["useFaceDetector.useCallback[reset]"], []);
    return {
        status,
        box,
        holdProgress,
        reset
    };
}
_s(useFaceDetector, "nSieZtcjj2g5MYXkyGofPZn52xM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/hooks/use-rating-stream.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRatingStream",
    ()=>useRatingStream
]);
// Отслеживание статуса оценки: SSE-стрим с автоматическим откатом на polling
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/ratings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$photo$2d$url$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/photo-url-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$rating$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/rating.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function useRatingStream(ratingId, enabled) {
    _s();
    const [streamed, setStreamed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("connecting");
    const sourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRatingStream.useEffect": ()=>{
            if (!ratingId || !enabled) return;
            let cancelled = false;
            const closeSource = {
                "useRatingStream.useEffect.closeSource": ()=>{
                    sourceRef.current?.close();
                    sourceRef.current = null;
                }
            }["useRatingStream.useEffect.closeSource"];
            const handlePayload = {
                "useRatingStream.useEffect.handlePayload": (raw)=>{
                    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$rating$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ratingSchema"].safeParse(JSON.parse(raw));
                    if (!parsed.success || cancelled) return;
                    setStreamed(parsed.data);
                    queryClient.setQueryData([
                        "rating",
                        ratingId
                    ], parsed.data);
                    if (parsed.data.photo_url) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$photo$2d$url$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rememberPhotoUrl"])(ratingId, parsed.data.photo_url);
                        queryClient.setQueryData([
                            "photo-url",
                            ratingId
                        ], parsed.data.photo_url);
                    }
                    if (parsed.data.status === "completed" || parsed.data.status === "failed") {
                        setState("done");
                        queryClient.invalidateQueries({
                            queryKey: [
                                "ratings"
                            ]
                        });
                        closeSource();
                    }
                }
            }["useRatingStream.useEffect.handlePayload"];
            const connect = {
                "useRatingStream.useEffect.connect": async ()=>{
                    const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseClient"])().auth.getSession();
                    const token = data.session?.access_token;
                    if (!token || cancelled) return;
                    const source = new EventSource((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildStreamUrl"])(ratingId, token));
                    sourceRef.current = source;
                    source.addEventListener("open", {
                        "useRatingStream.useEffect.connect": ()=>!cancelled && setState("streaming")
                    }["useRatingStream.useEffect.connect"]);
                    source.addEventListener("status", {
                        "useRatingStream.useEffect.connect": (event)=>handlePayload(event.data)
                    }["useRatingStream.useEffect.connect"]);
                    source.addEventListener("error", {
                        "useRatingStream.useEffect.connect": ()=>{
                            // Стрим закрылся (120-секундный лимит Edge Function) — переходим на polling
                            closeSource();
                            if (!cancelled) {
                                setState({
                                    "useRatingStream.useEffect.connect": (current)=>current === "done" ? current : "polling"
                                }["useRatingStream.useEffect.connect"]);
                            }
                        }
                    }["useRatingStream.useEffect.connect"]);
                }
            }["useRatingStream.useEffect.connect"];
            void connect();
            return ({
                "useRatingStream.useEffect": ()=>{
                    cancelled = true;
                    closeSource();
                }
            })["useRatingStream.useEffect"];
        }
    }["useRatingStream.useEffect"], [
        ratingId,
        enabled,
        queryClient
    ]);
    return {
        streamed,
        state,
        isPolling: state === "polling"
    };
}
_s(useRatingStream, "X79PIVedbBee5P6xB8C5+A/2q1E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/hooks/use-ratings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateRating",
    ()=>useCreateRating,
    "useDeleteRating",
    ()=>useDeleteRating,
    "useRating",
    ()=>useRating,
    "useRatings",
    ()=>useRatings
]);
// Запросы и мутации оценок: создание, список, детальная карточка и удаление
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/ratings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$mode$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rating-mode-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/providers/AuthProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const ACTIVE_STATUSES = new Set([
    "pending",
    "processing"
]);
function useRatings(limit = 50) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "ratings",
            user?.id,
            limit
        ],
        queryFn: {
            "useRatings.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRatings"])(limit)
        }["useRatings.useQuery"],
        enabled: Boolean(user)
    });
}
_s(useRatings, "feBfegY2LWvVkHAo3/+H6/HJ9O4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useRating(id, pollingEnabled = false) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "rating",
            id
        ],
        queryFn: {
            "useRating.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRating"])(id)
        }["useRating.useQuery"],
        enabled: Boolean(id),
        refetchInterval: {
            "useRating.useQuery": (query)=>{
                const status = query.state.data?.status;
                if (!pollingEnabled || !status) return false;
                return ACTIVE_STATUSES.has(status) ? 3000 : false;
            }
        }["useRating.useQuery"]
    });
}
_s1(useRating, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateRating() {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateRating.useMutation": ({ file, mode })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRating"])(file, mode)
        }["useCreateRating.useMutation"],
        onSuccess: {
            "useCreateRating.useMutation": (data, variables)=>{
                // rating_mode не хранится в БД, поэтому запоминаем его локально для истории
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$mode$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rememberRatingMode"])(data.rating_id, variables.mode);
                queryClient.invalidateQueries({
                    queryKey: [
                        "ratings"
                    ]
                });
            }
        }["useCreateRating.useMutation"],
        onError: {
            "useCreateRating.useMutation": (error)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractApiError"])(error))
        }["useCreateRating.useMutation"]
    });
}
_s2(useCreateRating, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteRating() {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteRating"],
        onSuccess: {
            "useDeleteRating.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "ratings"
                    ]
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Оценка удалена");
            }
        }["useDeleteRating.useMutation"],
        onError: {
            "useDeleteRating.useMutation": (error)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractApiError"])(error))
        }["useDeleteRating.useMutation"]
    });
}
_s3(useDeleteRating, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/photo-url-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCachedPhotoUrl",
    ()=>getCachedPhotoUrl,
    "rememberPhotoUrl",
    ()=>rememberPhotoUrl
]);
// Кэш подписанных ссылок на фото: сервер отдаёт их только в момент завершения оценки
const STORAGE_KEY = "mog:photo-urls";
const TTL_MS = 55 * 60 * 1000;
function readStore() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch  {
        return {};
    }
}
function rememberPhotoUrl(ratingId, url) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const store = readStore();
        store[ratingId] = {
            url,
            savedAt: Date.now()
        };
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch  {
    // Хранилище недоступно — ссылка просто не переживёт перезагрузку страницы
    }
}
function getCachedPhotoUrl(ratingId) {
    const cached = readStore()[ratingId];
    if (!cached) return null;
    return Date.now() - cached.savedAt < TTL_MS ? cached.url : null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/rating-mode-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Локальное хранилище режимов оценки, так как бэкенд не сохраняет rating_mode в БД
__turbopack_context__.s([
    "getRatingMode",
    ()=>getRatingMode,
    "rememberRatingMode",
    ()=>rememberRatingMode
]);
const STORAGE_KEY = "mog:rating-modes";
function readStore() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch  {
        return {};
    }
}
function rememberRatingMode(ratingId, mode) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const store = readStore();
        store[ratingId] = mode;
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch  {
    // Приватный режим браузера или переполненное хранилище — режим просто не сохранится
    }
}
function getRatingMode(ratingId) {
    return readStore()[ratingId] ?? null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/schemas/rating.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CANTHAL_TILTS",
    ()=>CANTHAL_TILTS,
    "LOOKSMAXXING_TIERS",
    ()=>LOOKSMAXXING_TIERS,
    "RATING_MODES",
    ()=>RATING_MODES,
    "RATING_STATUSES",
    ()=>RATING_STATUSES,
    "canthalTiltSchema",
    ()=>canthalTiltSchema,
    "createRatingResponseSchema",
    ()=>createRatingResponseSchema,
    "looksmaxxingTierSchema",
    ()=>looksmaxxingTierSchema,
    "ratingMetricsSchema",
    ()=>ratingMetricsSchema,
    "ratingModeSchema",
    ()=>ratingModeSchema,
    "ratingSchema",
    ()=>ratingSchema,
    "ratingStatusSchema",
    ()=>ratingStatusSchema,
    "uploadUrlResponseSchema",
    ()=>uploadUrlResponseSchema
]);
// Zod-схемы и типы доменной модели оценок, зеркалирующие контракт бэкенда
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const LOOKSMAXXING_TIERS = [
    "sub3",
    "ltn",
    "mtn",
    "htn",
    "chadlite",
    "chad",
    "true_adam"
];
const RATING_STATUSES = [
    "pending",
    "processing",
    "completed",
    "failed"
];
const RATING_MODES = [
    "brutal",
    "honest",
    "soft"
];
const CANTHAL_TILTS = [
    "positive",
    "neutral",
    "negative"
];
const looksmaxxingTierSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(LOOKSMAXXING_TIERS);
const ratingStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(RATING_STATUSES);
const ratingModeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(RATING_MODES);
const canthalTiltSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(CANTHAL_TILTS);
const ratingMetricsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    canthal_tilt: canthalTiltSchema,
    jawline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    symmetry: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    skin_quality: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    eye_area: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    cheekbones: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
const numericScoreSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
]).nullable().optional().transform((value)=>value === null || value === undefined ? null : Number(value));
const ratingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    user_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    photo_path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    status: ratingStatusSchema,
    tier: looksmaxxingTierSchema.nullable().optional().default(null),
    score: numericScoreSchema,
    metrics: ratingMetricsSchema.nullable().optional().default(null),
    looksmaxxing_tips: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).nullable().optional().default(null),
    raw_ai_response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).nullable().optional(),
    error_message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional().default(null),
    created_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    completed_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional().default(null),
    photo_url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional()
});
const uploadUrlResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    upload_url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    photo_path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    expires_in: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
});
const createRatingResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    rating_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    status: ratingStatusSchema,
    photo_path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    rating_mode: ratingModeSchema.optional(),
    queue_msg_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
    created_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0z8eee4._.js.map