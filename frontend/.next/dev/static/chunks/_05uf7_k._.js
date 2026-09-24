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
"[project]/components/motion/Stagger.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stagger",
    ()=>Stagger,
    "StaggerItem",
    ()=>StaggerItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Контейнер и элемент для каскадного появления списков при скролле
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Stagger({ children, className, gap = 0.08 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: className,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            amount: 0.1,
            margin: "0px 0px -40px 0px"
        },
        variants: {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: gap
                }
            }
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/motion/Stagger.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Stagger;
function StaggerItem({ children, className }) {
    _s();
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: className,
        variants: {
            hidden: reduceMotion ? {
                opacity: 0
            } : {
                opacity: 0,
                y: 20
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.55,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                }
            }
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/motion/Stagger.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(StaggerItem, "yAKkJs7CtWSNDV8HpmqLOOhKJtw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = StaggerItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "Stagger");
__turbopack_context__.k.register(_c1, "StaggerItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/rating/RatingCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RatingCard",
    ()=>RatingCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Карточка оценки в истории со статусом, баллом и тиром
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as TriangleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$RatingPhoto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/RatingPhoto.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$TierBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/TierBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rating-utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function RatingCard({ rating }) {
    const tierInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierInfo"])(rating.tier);
    const isRunning = rating.status === "pending" || rating.status === "processing";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/ratings/${rating.id}`,
        className: "group flex gap-4 rounded-xl border border-border/60 bg-card/40 p-4 transition-all hover:border-border hover:bg-card/70",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$RatingPhoto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RatingPhoto"], {
                ratingId: rating.id,
                className: "size-20 shrink-0 rounded-lg"
            }, void 0, false, {
                fileName: "[project]/components/rating/RatingCard.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 flex-1 flex-col justify-between gap-2 py-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-3",
                        children: [
                            tierInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$TierBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TierBadge"], {
                                tierInfo: tierInfo,
                                size: "sm"
                            }, void 0, false, {
                                fileName: "[project]/components/rating/RatingCard.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this) : isRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "secondary",
                                className: "gap-1.5 font-normal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "size-3 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/rating/RatingCard.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    rating.status === "pending" ? "В очереди" : "Анализ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/rating/RatingCard.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "destructive",
                                className: "gap-1.5 font-normal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"], {
                                        className: "size-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/rating/RatingCard.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    "Ошибка"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/rating/RatingCard.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-2xl font-semibold tabular-nums",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatScore"])(rating.score)
                            }, void 0, false, {
                                fileName: "[project]/components/rating/RatingCard.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/rating/RatingCard.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(rating.created_at)
                    }, void 0, false, {
                        fileName: "[project]/components/rating/RatingCard.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/RatingCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/rating/RatingCard.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = RatingCard;
var _c;
__turbopack_context__.k.register(_c, "RatingCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/rating/RatingHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RatingHistory",
    ()=>RatingHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// История всех оценок пользователя со статистикой и пустым состоянием
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$RatingCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/RatingCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$RatingStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/RatingStats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Stagger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion/Stagger.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-ratings.ts [app-client] (ecmascript)");
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
function RatingHistory() {
    _s();
    const { data: ratings, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRatings"])();
    if (isPending) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-28 w-full rounded-xl"
                }, void 0, false, {
                    fileName: "[project]/components/rating/RatingHistory.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        0,
                        1,
                        2
                    ].map((index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-28 w-full rounded-xl"
                        }, index, false, {
                            fileName: "[project]/components/rating/RatingHistory.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/rating/RatingHistory.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/rating/RatingHistory.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this);
    }
    if (!ratings || ratings.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-5 rounded-xl border border-dashed border-border/70 px-6 py-20 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex size-14 items-center justify-center rounded-xl bg-brand/10 text-brand",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "size-6"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/RatingHistory.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/rating/RatingHistory.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-medium",
                            children: "Пока ни одной оценки"
                        }, void 0, false, {
                            fileName: "[project]/components/rating/RatingHistory.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Загрузите фото и узнайте свой тир за полминуты"
                        }, void 0, false, {
                            fileName: "[project]/components/rating/RatingHistory.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/rating/RatingHistory.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/rate",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/rating/RatingHistory.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            "Первая оценка"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/rating/RatingHistory.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/rating/RatingHistory.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/rating/RatingHistory.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$RatingStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RatingStats"], {
                ratings: ratings
            }, void 0, false, {
                fileName: "[project]/components/rating/RatingHistory.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Stagger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                className: "space-y-3",
                gap: 0.05,
                children: ratings.map((rating)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Stagger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$RatingCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RatingCard"], {
                            rating: rating
                        }, void 0, false, {
                            fileName: "[project]/components/rating/RatingHistory.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    }, rating.id, false, {
                        fileName: "[project]/components/rating/RatingHistory.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/rating/RatingHistory.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/rating/RatingHistory.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(RatingHistory, "TZ7NVnWYB56+jZEamdoWZRnn4mE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$ratings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRatings"]
    ];
});
_c = RatingHistory;
var _c;
__turbopack_context__.k.register(_c, "RatingHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/rating/RatingPhoto.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RatingPhoto",
    ()=>RatingPhoto
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Фото оценки из приватного бакета, загружаемое по временной подписанной ссылке
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image-off.mjs [app-client] (ecmascript) <export default as ImageOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$photo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/photo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
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
function RatingPhoto({ ratingId, className }) {
    _s();
    const { data: url, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "photo-url",
            ratingId
        ],
        queryFn: {
            "RatingPhoto.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$photo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePhotoUrl"])(ratingId)
        }["RatingPhoto.useQuery"],
        staleTime: 50 * 60 * 1000,
        retry: false
    });
    if (isPending) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("aspect-square w-full rounded-xl", className)
        }, void 0, false, {
            fileName: "[project]/components/rating/RatingPhoto.tsx",
            lineNumber: 26,
            columnNumber: 12
        }, this);
    }
    if (!url) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/40 text-muted-foreground", className),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageOff$3e$__["ImageOff"], {
                    className: "size-6"
                }, void 0, false, {
                    fileName: "[project]/components/rating/RatingPhoto.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs",
                    children: "Фото недоступно"
                }, void 0, false, {
                    fileName: "[project]/components/rating/RatingPhoto.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/rating/RatingPhoto.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    return(// Подписанная ссылка живёт около часа, поэтому кэш оптимизатора Next бесполезен
    // eslint-disable-next-line @next/next/no-img-element
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: url,
        alt: "Фото оценки",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("aspect-square w-full rounded-xl border border-border/60 object-cover", className)
    }, void 0, false, {
        fileName: "[project]/components/rating/RatingPhoto.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this));
}
_s(RatingPhoto, "ywZqzogKoeHC4TuECAaNxiKzFNI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = RatingPhoto;
var _c;
__turbopack_context__.k.register(_c, "RatingPhoto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/rating/RatingStats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RatingStats",
    ()=>RatingStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Сводная статистика пользователя: количество оценок, лучший и средний балл
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$tiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/tiers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rating-utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function RatingStats({ ratings }) {
    const completed = ratings.filter((item)=>item.status === "completed" && typeof item.score === "number");
    const scores = completed.map((item)=>item.score);
    const best = scores.length ? Math.max(...scores) : null;
    const average = scores.length ? scores.reduce((sum, value)=>sum + value, 0) / scores.length : null;
    const bestRating = completed.find((item)=>item.score === best);
    const bestTier = bestRating?.tier ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$tiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIERS"][bestRating.tier] : null;
    const items = [
        {
            label: "Всего оценок",
            value: String(ratings.length),
            accent: undefined
        },
        {
            label: "Лучший балл",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatScore"])(best),
            accent: bestTier?.colorVar
        },
        {
            label: "Средний балл",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatScore"])(average),
            accent: undefined
        },
        {
            label: "Лучший тир",
            value: bestTier?.label ?? "—",
            accent: bestTier?.colorVar
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4",
        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-background p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-wider text-muted-foreground",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/components/rating/RatingStats.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 font-mono text-2xl font-semibold tabular-nums",
                        style: item.accent ? {
                            color: item.accent
                        } : undefined,
                        children: item.value
                    }, void 0, false, {
                        fileName: "[project]/components/rating/RatingStats.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                ]
            }, item.label, true, {
                fileName: "[project]/components/rating/RatingStats.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/rating/RatingStats.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = RatingStats;
var _c;
__turbopack_context__.k.register(_c, "RatingStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/rating/TierBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Бейдж тира луксмаксинга с цветом соответствующего уровня
__turbopack_context__.s([
    "TierBadge",
    ()=>TierBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
;
;
function TierBadge({ tierInfo, className, size = "md" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("inline-flex items-center gap-2 rounded-full border font-medium", size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3.5 py-1.5 text-sm", className),
        style: {
            color: tierInfo.colorVar,
            borderColor: `color-mix(in oklch, ${tierInfo.colorVar} 40%, transparent)`,
            background: `color-mix(in oklch, ${tierInfo.colorVar} 12%, transparent)`
        },
        children: tierInfo.label
    }, void 0, false, {
        fileName: "[project]/components/rating/TierBadge.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = TierBadge;
var _c;
__turbopack_context__.k.register(_c, "TierBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
            destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
            outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
            ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
            link: "text-primary underline-offset-4 hover:underline"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/photo.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolvePhotoUrl",
    ()=>resolvePhotoUrl
]);
// Получение временной ссылки на фото оценки из SSE-эндпоинта Edge API
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$photo$2d$url$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/photo-url-store.ts [app-client] (ecmascript)");
;
;
;
const STREAM_TIMEOUT_MS = 8000;
async function resolvePhotoUrl(ratingId) {
    // Подписать ссылку может только сервер: политики RLS не дают клиенту доступ к бакету
    const cached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$photo$2d$url$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedPhotoUrl"])(ratingId);
    if (cached) return cached;
    const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseClient"])().auth.getSession();
    const token = data.session?.access_token;
    if (!token) return null;
    const controller = new AbortController();
    const timer = setTimeout(()=>controller.abort(), STREAM_TIMEOUT_MS);
    try {
        const params = new URLSearchParams({
            token,
            apikey: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPABASE_ANON_KEY"]
        });
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDGE_URL"]}/ratings/${ratingId}/stream?${params}`, {
            headers: {
                Accept: "text/event-stream"
            },
            signal: controller.signal
        });
        const reader = response.body?.getReader();
        if (!reader) return null;
        const decoder = new TextDecoder();
        let buffer = "";
        while(true){
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, {
                stream: true
            });
            const lines = buffer.split("\n");
            buffer = lines.pop() ?? "";
            for (const line of lines){
                if (!line.startsWith("data:")) continue;
                try {
                    const payload = JSON.parse(line.slice(5).trim());
                    if (payload.photo_url) {
                        void reader.cancel();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$photo$2d$url$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rememberPhotoUrl"])(ratingId, payload.photo_url);
                        return payload.photo_url;
                    }
                } catch  {
                    continue;
                }
            }
        }
        return null;
    } catch  {
        return null;
    } finally{
        clearTimeout(timer);
    }
}
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
"[project]/lib/rating-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractSummary",
    ()=>extractSummary,
    "formatDate",
    ()=>formatDate,
    "formatScore",
    ()=>formatScore,
    "getTierInfo",
    ()=>getTierInfo,
    "scoreToPercent",
    ()=>scoreToPercent
]);
// Утилиты извлечения и форматирования данных оценки для отображения в интерфейсе
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$tiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/tiers.ts [app-client] (ecmascript)");
;
function extractSummary(rating) {
    // summary не сохраняется отдельной колонкой, поэтому достаём его из raw_ai_response
    const raw = rating.raw_ai_response;
    if (!raw) return null;
    const parsed = raw.parsed;
    if (parsed && typeof parsed.summary === "string") {
        return parsed.summary;
    }
    if (typeof raw.summary === "string") {
        return raw.summary;
    }
    return null;
}
function getTierInfo(tier) {
    return tier ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$tiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIERS"][tier] : null;
}
function formatScore(score) {
    return typeof score === "number" && Number.isFinite(score) ? score.toFixed(1) : "—";
}
function formatDate(value) {
    if (!value) return "—";
    return new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }).format(new Date(value));
}
function scoreToPercent(score) {
    if (typeof score !== "number" || !Number.isFinite(score)) return 0;
    return Math.min(Math.max(score / 10 * 100, 0), 100);
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

//# sourceMappingURL=_05uf7_k._.js.map