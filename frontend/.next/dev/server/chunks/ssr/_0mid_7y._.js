module.exports = [
"[project]/app/ratings/[id]/RatingDetail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RatingDetail",
    ()=>RatingDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Клиентская загрузка и отображение одной оценки с обработкой всех статусов
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$AnalysisScan$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/AnalysisScan.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$RatingResult$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/RatingResult.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$rating$2d$stream$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-rating-stream.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$ratings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-ratings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$photo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/photo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
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
;
function RatingDetail({ id }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$rating$2d$stream$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRatingStream"])(id, true);
    const { data: rating, isPending, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$ratings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRating"])(id, true);
    const deleteRating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$ratings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDeleteRating"])();
    const { data: photoUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "photo-url",
            id
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$photo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolvePhotoUrl"])(id),
        staleTime: 50 * 60 * 1000,
        retry: false
    });
    if (isPending) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-[50vh] items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "size-6 animate-spin text-muted-foreground"
            }, void 0, false, {
                fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    if (isError || !rating) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert"], {
            variant: "destructive",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDescription"], {
                children: "Оценка не найдена или у вас нет к ней доступа"
            }, void 0, false, {
                fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    const isRunning = rating.status === "pending" || rating.status === "processing";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        asChild: true,
                        className: "-ml-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "size-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                "К истории"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        disabled: deleteRating.isPending,
                        onClick: ()=>deleteRating.mutate(id, {
                                onSuccess: ()=>router.push("/dashboard")
                            }),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            "Удалить"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$AnalysisScan$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnalysisScan"], {
                previewUrl: photoUrl ?? null,
                status: rating.status
            }, void 0, false, {
                fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this),
            rating.status === "failed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert"], {
                variant: "destructive",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDescription"], {
                    children: rating.error_message || "Не удалось обработать фото"
                }, void 0, false, {
                    fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this),
            rating.status === "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$RatingResult$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RatingResult"], {
                rating: rating
            }, void 0, false, {
                fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
                lineNumber: 84,
                columnNumber: 41
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ratings/[id]/RatingDetail.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/auth/AuthGuard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthGuard",
    ()=>AuthGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Защита приватных страниц: редирект неавторизованных на страницу входа
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/providers/AuthProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function AuthGuard({ children }) {
    const { user, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoading && !user) {
            router.replace("/sign-in");
        }
    }, [
        user,
        isLoading,
        router
    ]);
    if (isLoading || !user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-[60vh] items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/components/auth/AuthGuard.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/rating/AnalysisScan.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalysisScan",
    ()=>AnalysisScan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Анимация сканирования снимка во время обработки: сетка, бегущая линия и статус
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as TriangleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-ssr] (ecmascript) <locals>");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-square w-full overflow-hidden rounded-xl border border-border/60 bg-black/60",
                children: [
                    previewUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: previewUrl,
                        alt: "Анализируемое фото",
                        fill: true,
                        unoptimized: true,
                        sizes: "(max-width: 640px) 100vw, 42rem",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("object-cover transition-all duration-700", isScanning ? "brightness-75 saturate-[0.85]" : "brightness-100")
                    }, void 0, false, {
                        fileName: "[project]/components/rating/AnalysisScan.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("absolute inset-0 size-full transition-opacity duration-700", isScanning ? "opacity-25" : "opacity-0"),
                                preserveAspectRatio: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                            id: "analysis-grid",
                                            width: "6%",
                                            height: "6%",
                                            patternUnits: "userSpaceOnUse",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                            isScanning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "size-full bg-gradient-to-b from-transparent via-brand/40 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/rating/AnalysisScan.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            isDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-2.5 text-sm",
                children: [
                    isFailed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"], {
                        className: "size-4 text-destructive"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/AnalysisScan.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(isFailed ? "text-destructive" : "text-muted-foreground"),
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
}),
"[project]/components/rating/MetricsGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MetricsGrid",
    ()=>MetricsGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Сетка детальных метрик лица с анимированными полосами прогресса
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/tiers.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const NUMERIC_KEYS = [
    "jawline",
    "symmetry",
    "cheekbones",
    "eye_area",
    "skin_quality"
];
function MetricsGrid({ metrics, accentColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-medium",
                        children: "Метрики лица"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/MetricsGrid.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        className: "font-normal",
                        children: [
                            "Canthal tilt: ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CANTHAL_TILT_LABELS"][metrics.canthal_tilt]
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/rating/MetricsGrid.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/MetricsGrid.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: NUMERIC_KEYS.map((key, index)=>{
                    const value = metrics[key];
                    const percent = Math.min(Math.max(value / 10 * 100, 0), 100);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["METRIC_LABELS"][key]
                                    }, void 0, false, {
                                        fileName: "[project]/components/rating/MetricsGrid.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-sm tabular-nums text-muted-foreground",
                                        children: value.toFixed(1)
                                    }, void 0, false, {
                                        fileName: "[project]/components/rating/MetricsGrid.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/rating/MetricsGrid.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1.5 overflow-hidden rounded-full bg-border/60",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                    className: "h-full rounded-full",
                                    style: {
                                        background: accentColor ?? "var(--brand)"
                                    },
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: `${percent}%`
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.1 + index * 0.08,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/rating/MetricsGrid.tsx",
                                    lineNumber: 48,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/rating/MetricsGrid.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/components/rating/MetricsGrid.tsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/rating/MetricsGrid.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/rating/MetricsGrid.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/rating/RatingPhoto.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RatingPhoto",
    ()=>RatingPhoto
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Фото оценки из приватного бакета, загружаемое по временной подписанной ссылке
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image-off.mjs [app-ssr] (ecmascript) <export default as ImageOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$photo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/photo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
function RatingPhoto({ ratingId, className }) {
    const { data: url, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "photo-url",
            ratingId
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$photo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolvePhotoUrl"])(ratingId),
        staleTime: 50 * 60 * 1000,
        retry: false
    });
    if (isPending) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("aspect-square w-full rounded-xl", className)
        }, void 0, false, {
            fileName: "[project]/components/rating/RatingPhoto.tsx",
            lineNumber: 26,
            columnNumber: 12
        }, this);
    }
    if (!url) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/40 text-muted-foreground", className),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageOff$3e$__["ImageOff"], {
                    className: "size-6"
                }, void 0, false, {
                    fileName: "[project]/components/rating/RatingPhoto.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: url,
        alt: "Фото оценки",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("aspect-square w-full rounded-xl border border-border/60 object-cover", className)
    }, void 0, false, {
        fileName: "[project]/components/rating/RatingPhoto.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this));
}
}),
"[project]/components/rating/RatingResult.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RatingResult",
    ()=>RatingResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Полная карточка результата оценки: балл, тир, метрики, разбор и рекомендации
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$MetricsGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/MetricsGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$RatingPhoto$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/RatingPhoto.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$ScoreDial$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/ScoreDial.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$TierBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/TierBadge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$TipsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rating/TipsList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/tiers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$mode$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rating-mode-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rating-utils.ts [app-ssr] (ecmascript)");
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
;
function RatingResult({ rating }) {
    const tierInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTierInfo"])(rating.tier);
    const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractSummary"])(rating);
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$mode$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRatingMode"])(rating.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].section, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                className: "grid gap-8 md:grid-cols-[minmax(0,18rem)_1fr] md:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$RatingPhoto$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RatingPhoto"], {
                        ratingId: rating.id
                    }, void 0, false, {
                        fileName: "[project]/components/rating/RatingResult.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$ScoreDial$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScoreDial"], {
                                score: rating.score ?? 0,
                                tierInfo: tierInfo
                            }, void 0, false, {
                                fileName: "[project]/components/rating/RatingResult.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 text-center sm:text-left",
                                children: [
                                    tierInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$TierBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TierBadge"], {
                                        tierInfo: tierInfo
                                    }, void 0, false, {
                                        fileName: "[project]/components/rating/RatingResult.tsx",
                                        lineNumber: 37,
                                        columnNumber: 26
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-sm text-sm leading-relaxed text-muted-foreground",
                                        children: tierInfo?.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/rating/RatingResult.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-center gap-2 sm:justify-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                className: "font-normal",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(rating.completed_at ?? rating.created_at)
                                            }, void 0, false, {
                                                fileName: "[project]/components/rating/RatingResult.tsx",
                                                lineNumber: 42,
                                                columnNumber: 15
                                            }, this),
                                            mode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                className: "font-normal",
                                                children: [
                                                    "Режим: ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RATING_MODE_INFO"][mode].label
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/rating/RatingResult.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/rating/RatingResult.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/rating/RatingResult.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/rating/RatingResult.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/RatingResult.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                        fileName: "[project]/components/rating/RatingResult.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-medium",
                                children: "Разбор"
                            }, void 0, false, {
                                fileName: "[project]/components/rating/RatingResult.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "whitespace-pre-line leading-relaxed text-muted-foreground",
                                children: summary
                            }, void 0, false, {
                                fileName: "[project]/components/rating/RatingResult.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/rating/RatingResult.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/RatingResult.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this),
            rating.metrics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                        fileName: "[project]/components/rating/RatingResult.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$MetricsGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MetricsGrid"], {
                        metrics: rating.metrics,
                        accentColor: tierInfo?.colorVar
                    }, void 0, false, {
                        fileName: "[project]/components/rating/RatingResult.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/RatingResult.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            rating.looksmaxxing_tips && rating.looksmaxxing_tips.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                        fileName: "[project]/components/rating/RatingResult.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rating$2f$TipsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TipsList"], {
                        tips: rating.looksmaxxing_tips
                    }, void 0, false, {
                        fileName: "[project]/components/rating/RatingResult.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/RatingResult.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/rating/RatingResult.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/rating/ScoreDial.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScoreDial",
    ()=>ScoreDial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Круговой индикатор итогового балла с анимацией заполнения
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const RADIUS = 74;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
function ScoreDial({ score, tierInfo }) {
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const ratio = Math.min(Math.max(score / 10, 0), 1);
    const color = tierInfo?.colorVar ?? "var(--brand)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative size-44 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 176 176",
                className: "size-full -rotate-90",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "88",
                        cy: "88",
                        r: RADIUS,
                        fill: "none",
                        stroke: "var(--border)",
                        strokeWidth: "8"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/ScoreDial.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].circle, {
                        cx: "88",
                        cy: "88",
                        r: RADIUS,
                        fill: "none",
                        stroke: color,
                        strokeWidth: "8",
                        strokeLinecap: "round",
                        strokeDasharray: CIRCUMFERENCE,
                        initial: {
                            strokeDashoffset: CIRCUMFERENCE
                        },
                        animate: {
                            strokeDashoffset: CIRCUMFERENCE * (1 - ratio)
                        },
                        transition: {
                            duration: reduceMotion ? 0 : 1.2,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/rating/ScoreDial.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/ScoreDial.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                        initial: {
                            opacity: 0,
                            scale: 0.85
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.2
                        },
                        className: "font-mono text-5xl font-semibold tabular-nums",
                        style: {
                            color
                        },
                        children: score.toFixed(1)
                    }, void 0, false, {
                        fileName: "[project]/components/rating/ScoreDial.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground",
                        children: "из 10"
                    }, void 0, false, {
                        fileName: "[project]/components/rating/ScoreDial.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rating/ScoreDial.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/rating/ScoreDial.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/rating/TierBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Бейдж тира луксмаксинга с цветом соответствующего уровня
__turbopack_context__.s([
    "TierBadge",
    ()=>TierBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-ssr] (ecmascript) <locals>");
;
;
function TierBadge({ tierInfo, className, size = "md" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("inline-flex items-center gap-2 rounded-full border font-medium", size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3.5 py-1.5 text-sm", className),
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
}),
"[project]/components/rating/TipsList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TipsList",
    ()=>TipsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Список практических рекомендаций по улучшению внешности
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
"use client";
;
;
;
function TipsList({ tips }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-medium",
                children: "Что делать дальше"
            }, void 0, false, {
                fileName: "[project]/components/rating/TipsList.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "space-y-3",
                children: tips.map((tip, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].li, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.45,
                            delay: index * 0.06
                        },
                        className: "flex items-start gap-3 rounded-lg border border-border/60 bg-card/40 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "size-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/rating/TipsList.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/rating/TipsList.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed",
                                children: tip
                            }, void 0, false, {
                                fileName: "[project]/components/rating/TipsList.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        ]
                    }, tip, true, {
                        fileName: "[project]/components/rating/TipsList.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/rating/TipsList.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/rating/TipsList.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/alert.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group/alert relative grid w-full gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
function AlertAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("absolute top-2 right-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript) <export * as Slot>");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/separator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Separator$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript) <export * as Separator>");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Separator$3e$__["Separator"].Root, {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/separator.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/api/photo.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolvePhotoUrl",
    ()=>resolvePhotoUrl
]);
// Получение временной ссылки на фото оценки из SSE-эндпоинта Edge API
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$photo$2d$url$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/photo-url-store.ts [app-ssr] (ecmascript)");
;
;
;
const STREAM_TIMEOUT_MS = 8000;
async function resolvePhotoUrl(ratingId) {
    // Подписать ссылку может только сервер: политики RLS не дают клиенту доступ к бакету
    const cached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$photo$2d$url$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCachedPhotoUrl"])(ratingId);
    if (cached) return cached;
    const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabaseClient"])().auth.getSession();
    const token = data.session?.access_token;
    if (!token) return null;
    const controller = new AbortController();
    const timer = setTimeout(()=>controller.abort(), STREAM_TIMEOUT_MS);
    try {
        const params = new URLSearchParams({
            token,
            apikey: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPABASE_ANON_KEY"]
        });
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EDGE_URL"]}/ratings/${ratingId}/stream?${params}`, {
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
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$photo$2d$url$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rememberPhotoUrl"])(ratingId, payload.photo_url);
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
}),
"[project]/lib/api/ratings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$compress$2d$image$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/compress-image.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$boost$2d$rating$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/team/boost-rating.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$recognize$2d$team$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/team/recognize-team.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$team$2d$match$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/team/team-match-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$rating$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/rating.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const RATING_FIELDS = "id,user_id,photo_path,status,tier,score,metrics,looksmaxxing_tips,raw_ai_response,error_message,created_at,completed_at";
async function createRating(file, mode) {
    // Профиль создаётся лениво, а ratings ссылается на него внешним ключом
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchMe"])();
    // Ужимаем кадр, иначе Vision-модель упирается в лимит токенов
    const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$compress$2d$image$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compressImage"])(file);
    // Полный цикл: pre-signed URL -> прямая загрузка в Storage -> регистрация в очереди
    const { data: urlData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["edgeClient"].post("/ratings/upload-url", {
        content_type: payload.type
    });
    const uploadPlan = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$rating$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadUrlResponseSchema"].parse(urlData);
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(uploadPlan.upload_url, payload, {
        headers: {
            "Content-Type": payload.type
        }
    });
    const { data: ratingData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["edgeClient"].post("/ratings", {
        photo_path: uploadPlan.photo_path,
        rating_mode: mode
    });
    const created = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$rating$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRatingResponseSchema"].parse(ratingData);
    const member = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$recognize$2d$team$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recognizeTeamMember"])(payload);
    if (member) (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$team$2d$match$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rememberTeamMatch"])(created.rating_id, member.id, mode);
    return created;
}
async function fetchRating(id) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["restClient"].get(`/ratings`, {
        params: {
            id: `eq.${id}`,
            select: RATING_FIELDS
        },
        headers: {
            Accept: "application/vnd.pgrst.object+json"
        }
    });
    const rating = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$rating$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ratingSchema"].parse(data);
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$team$2d$match$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeamMatch"])(rating.id);
    return match && rating.status === "completed" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$boost$2d$rating$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boostRating"])(rating, match) : rating;
}
async function fetchRatings(limit = 50) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["restClient"].get(`/ratings`, {
        params: {
            select: RATING_FIELDS,
            order: "created_at.desc",
            limit
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$rating$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ratingSchema"].array().parse(data).map((rating)=>{
        const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$team$2d$match$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeamMatch"])(rating.id);
        return match && rating.status === "completed" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$boost$2d$rating$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boostRating"])(rating, match) : rating;
    });
}
async function deleteRating(id) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["restClient"].delete(`/ratings`, {
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
        apikey: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPABASE_ANON_KEY"]
    });
    return `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EDGE_URL"]}/ratings/${ratingId}/stream?${params}`;
}
}),
"[project]/lib/compress-image.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/constants/tiers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/hooks/use-rating-stream.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRatingStream",
    ()=>useRatingStream
]);
// Отслеживание статуса оценки: SSE-стрим с автоматическим откатом на polling
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$ratings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/ratings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$photo$2d$url$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/photo-url-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$boost$2d$rating$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/team/boost-rating.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$team$2d$match$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/team/team-match-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$rating$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/rating.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function useRatingStream(ratingId, enabled) {
    const [streamed, setStreamed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("connecting");
    const sourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ratingId || !enabled) return;
        let cancelled = false;
        const closeSource = ()=>{
            sourceRef.current?.close();
            sourceRef.current = null;
        };
        const handlePayload = (raw)=>{
            const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$rating$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ratingSchema"].safeParse(JSON.parse(raw));
            if (!parsed.success || cancelled) return;
            const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$team$2d$match$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeamMatch"])(parsed.data.id);
            const rating = match && parsed.data.status === "completed" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$boost$2d$rating$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boostRating"])(parsed.data, match) : parsed.data;
            setStreamed(rating);
            queryClient.setQueryData([
                "rating",
                ratingId
            ], rating);
            if (parsed.data.photo_url) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$photo$2d$url$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rememberPhotoUrl"])(ratingId, parsed.data.photo_url);
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
        };
        const connect = async ()=>{
            const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabaseClient"])().auth.getSession();
            const token = data.session?.access_token;
            if (!token || cancelled) return;
            const source = new EventSource((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$ratings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildStreamUrl"])(ratingId, token));
            sourceRef.current = source;
            source.addEventListener("open", ()=>!cancelled && setState("streaming"));
            source.addEventListener("status", (event)=>handlePayload(event.data));
            source.addEventListener("error", ()=>{
                // Стрим закрылся (120-секундный лимит Edge Function) — переходим на polling
                closeSource();
                if (!cancelled) {
                    setState((current)=>current === "done" ? current : "polling");
                }
            });
        };
        void connect();
        return ()=>{
            cancelled = true;
            closeSource();
        };
    }, [
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
}),
"[project]/lib/hooks/use-ratings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$ratings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/ratings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$mode$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rating-mode-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/providers/AuthProvider.tsx [app-ssr] (ecmascript)");
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
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "ratings",
            user?.id,
            limit
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$ratings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchRatings"])(limit),
        enabled: Boolean(user)
    });
}
function useRating(id, pollingEnabled = false) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "rating",
            id
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$ratings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchRating"])(id),
        enabled: Boolean(id),
        refetchInterval: (query)=>{
            const status = query.state.data?.status;
            if (!pollingEnabled || !status) return false;
            return ACTIVE_STATUSES.has(status) ? 3000 : false;
        }
    });
}
function useCreateRating() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ file, mode })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$ratings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRating"])(file, mode),
        onSuccess: (data, variables)=>{
            // rating_mode не хранится в БД, поэтому запоминаем его локально для истории
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rating$2d$mode$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rememberRatingMode"])(data.rating_id, variables.mode);
            queryClient.invalidateQueries({
                queryKey: [
                    "ratings"
                ]
            });
        },
        onError: (error)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractApiError"])(error))
    });
}
function useDeleteRating() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$ratings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteRating"],
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "ratings"
                ]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Оценка удалена");
        },
        onError: (error)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractApiError"])(error))
    });
}
}),
"[project]/lib/photo-url-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) return {};
    //TURBOPACK unreachable
    ;
}
function rememberPhotoUrl(ratingId, url) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getCachedPhotoUrl(ratingId) {
    const cached = readStore()[ratingId];
    if (!cached) return null;
    return Date.now() - cached.savedAt < TTL_MS ? cached.url : null;
}
}),
"[project]/lib/rating-mode-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) return {};
    //TURBOPACK unreachable
    ;
}
function rememberRatingMode(ratingId, mode) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getRatingMode(ratingId) {
    return readStore()[ratingId] ?? null;
}
}),
"[project]/lib/rating-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/tiers.ts [app-ssr] (ecmascript)");
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
    return tier ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIERS"][tier] : null;
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
}),
"[project]/lib/schemas/rating.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
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
const looksmaxxingTierSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(LOOKSMAXXING_TIERS);
const ratingStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(RATING_STATUSES);
const ratingModeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(RATING_MODES);
const canthalTiltSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(CANTHAL_TILTS);
const ratingMetricsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    canthal_tilt: canthalTiltSchema,
    jawline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    symmetry: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    skin_quality: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    eye_area: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    cheekbones: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
const numericScoreSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
]).nullable().optional().transform((value)=>value === null || value === undefined ? null : Number(value));
const ratingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    user_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    photo_path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    status: ratingStatusSchema,
    tier: looksmaxxingTierSchema.nullable().optional().default(null),
    score: numericScoreSchema,
    metrics: ratingMetricsSchema.nullable().optional().default(null),
    looksmaxxing_tips: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).nullable().optional().default(null),
    raw_ai_response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).nullable().optional(),
    error_message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional().default(null),
    created_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    completed_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional().default(null),
    photo_url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional()
});
const uploadUrlResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    upload_url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    photo_path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    expires_in: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
});
const createRatingResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    rating_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    status: ratingStatusSchema,
    photo_path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    rating_mode: ratingModeSchema.optional(),
    queue_msg_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
    created_at: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
}),
"[project]/lib/team/boost-rating.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Повышение балла для лиц команды в локальном демо-режиме
__turbopack_context__.s([
    "boostRating",
    ()=>boostRating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$team$2d$copy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/team/team-copy.ts [app-ssr] (ecmascript)");
;
const TARGET_MIN = 8.7;
const TARGET_MAX = 9.3;
const METRIC_MIN = 8.4;
const METRIC_MAX = 9.5;
function lift(value, seed) {
    // Подтягиваем метрику в верхний диапазон, сохраняя её относительный порядок
    const normalized = Math.min(Math.max(value, 1), 10) / 10;
    const spread = METRIC_MAX - METRIC_MIN;
    return Number((METRIC_MIN + normalized * spread * 0.6 + seed * spread * 0.4).toFixed(1));
}
function boostRating(rating, match) {
    // Возвращает копию оценки с баллом ~9, метриками и развёрнутым разбором
    const { memberId, mode } = match;
    const seed = memberId === "dev-1" ? 0.62 : 0.38;
    const copy = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$team$2d$copy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEAM_COPY"][memberId]?.[mode];
    const score = Number((TARGET_MIN + seed * (TARGET_MAX - TARGET_MIN)).toFixed(1));
    const metrics = rating.metrics ? {
        ...rating.metrics,
        canthal_tilt: "positive",
        jawline: lift(rating.metrics.jawline, seed),
        symmetry: lift(rating.metrics.symmetry, 1 - seed),
        skin_quality: lift(rating.metrics.skin_quality, seed),
        eye_area: lift(rating.metrics.eye_area, 1 - seed),
        cheekbones: lift(rating.metrics.cheekbones, seed)
    } : rating.metrics;
    const raw = {
        ...rating.raw_ai_response ?? {}
    };
    if (copy) {
        raw.summary = copy.summary;
        const parsed = raw.parsed;
        if (parsed && typeof parsed === "object") {
            raw.parsed = {
                ...parsed,
                summary: copy.summary
            };
        }
    }
    return {
        ...rating,
        score,
        tier: "chad",
        metrics,
        looksmaxxing_tips: copy ? copy.tips : rating.looksmaxxing_tips,
        raw_ai_response: raw
    };
}
}),
"[project]/lib/team/recognize-team.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recognizeTeamMember",
    ()=>recognizeTeamMember
]);
// Локальное распознавание лиц команды: сверяет эмбеддинг фото с эталонами разработчиков
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$team$2d$embeddings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/team/team-embeddings.ts [app-ssr] (ecmascript)");
"use client";
;
const WASM_PATH = "/mediapipe/wasm";
const DETECTOR_MODEL = "/mediapipe/blaze_face_short_range.tflite";
const EMBEDDER_MODEL = "/mediapipe/mobilenet_v3_small.tflite";
const MATCH_THRESHOLD = 0.55;
const CROP_PADDING = 0.25;
const CROP_SIZE = 224;
function cosineSimilarity(a, b) {
    let dot = 0;
    let normA = 0;
    let normB = 0;
    for(let i = 0; i < a.length; i += 1){
        dot += a[i] * b[i];
        normA += a[i] * a[i];
        normB += b[i] * b[i];
    }
    const denom = Math.sqrt(normA) * Math.sqrt(normB);
    return denom === 0 ? 0 : dot / denom;
}
async function recognizeTeamMember(file) {
    // Возвращает разработчика, если лицо на фото совпало с эталоном, иначе null
    try {
        const { FaceDetector, FilesetResolver, ImageEmbedder } = await __turbopack_context__.A("[project]/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs [app-ssr] (ecmascript, async loader)");
        const fileset = await FilesetResolver.forVisionTasks(WASM_PATH);
        const detector = await FaceDetector.createFromOptions(fileset, {
            baseOptions: {
                modelAssetPath: DETECTOR_MODEL
            },
            runningMode: "IMAGE"
        });
        const embedder = await ImageEmbedder.createFromOptions(fileset, {
            baseOptions: {
                modelAssetPath: EMBEDDER_MODEL
            },
            runningMode: "IMAGE",
            quantize: false
        });
        try {
            const bitmap = await createImageBitmap(file);
            const detection = detector.detect(bitmap).detections[0];
            if (!detection?.boundingBox) return null;
            const { originX, originY, width, height } = detection.boundingBox;
            const canvas = document.createElement("canvas");
            canvas.width = CROP_SIZE;
            canvas.height = CROP_SIZE;
            const context = canvas.getContext("2d");
            if (!context) return null;
            context.drawImage(bitmap, Math.max(0, originX - width * CROP_PADDING), Math.max(0, originY - height * CROP_PADDING), width * (1 + 2 * CROP_PADDING), height * (1 + 2 * CROP_PADDING), 0, 0, CROP_SIZE, CROP_SIZE);
            bitmap.close();
            const embedding = embedder.embed(canvas).embeddings[0]?.floatEmbedding;
            if (!embedding) return null;
            const vector = Array.from(embedding);
            let best = null;
            let bestScore = MATCH_THRESHOLD;
            for (const member of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$team$2f$team$2d$embeddings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEAM_MEMBERS"]){
                const score = cosineSimilarity(vector, member.embedding);
                if (score >= bestScore) {
                    bestScore = score;
                    best = member;
                }
            }
            return best;
        } finally{
            detector.close();
            embedder.close();
        }
    } catch  {
        // Распознавание не критично: при любой ошибке отдаём обычную оценку
        return null;
    }
}
}),
"[project]/lib/team/team-copy.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Тексты разбора для лиц команды: развёрнутое описание и советы под высокий балл
__turbopack_context__.s([
    "TEAM_COPY",
    ()=>TEAM_COPY
]);
const DEV_1 = {
    soft: {
        summary: "Редкий случай, когда костная структура не нуждается в оправданиях. Скуловая дуга высокая и широкая, гониальный угол читается чётко даже при нейтральном освещении, а midface сжат ровно настолько, насколько нужно для модельной пропорции. Canthal tilt уверенно позитивный, глазная область глубоко посажена и даёт тот самый hunter eyes без единого вмешательства. Кожа ровная, тон однородный, подкожного жира минимум — вся геометрия лица работает открыто. По совокупности признаков это верхний край Chad-тира: дальше улучшать нечего, дальше только поддерживать.",
        tips: [
            "Держать текущий процент подкожного жира — вся визуальная резкость скул и челюсти держится именно на нём.",
            "Сон 7–8 часов: глазная область здесь главный актив, и она первой реагирует на недосып.",
            "Минимальный уход за кожей — увлажнение и SPF. Ровный тон уже есть, задача только не потерять его.",
            "Стрижка с открытыми висками и объёмом сверху усиливает и без того выигрышное соотношение верхней трети к нижней."
        ]
    },
    honest: {
        summary: "Костная база в верхнем перцентиле. Скуловая кость высокая, проекция вперёд-в стороны выраженная, под ней читается чистая теневая линия — признак низкого процента жира и сильного основания. Гониальный угол острый, ramus длинный, подбородок с хорошей вертикальной и передней проекцией: нижняя треть держит лицо без провисания. Canthal tilt позитивный, орбиты глубокие, вертикальный просвет глаза небольшой — классические hunter eyes. Симметрия высокая, отклонения в пределах нормы для живого лица. Кожа без активных воспалений и постакне. Итог — уверенный Chad: слабых зон, требующих коррекции, по факту нет.",
        tips: [
            "Композиция лица уже собрана — приоритет смещается с улучшения на удержание формы.",
            "Контроль процента жира в диапазоне 10–13%: ниже смысла нет, выше начнёт размывать линию челюсти.",
            "Силовые с акцентом на шею и трапеции — единственное, что здесь ещё добавит визуальной массы кадру.",
            "Ретинол в вечернем уходе как долгосрочная инвестиция в плотность кожи.",
            "Фотографироваться с уровня глаз или чуть ниже: ракурс снизу усиливает и без того сильную челюсть."
        ]
    },
    brutal: {
        summary: "Придираться особо не к чему, и это редкость. Костяк собран правильно: скулы высокие с реальной проекцией, а не с иллюзией от освещения. Гониальный угол острый, ramus длинный, подбородок не убегает назад — нижняя треть закрыта полностью. Canthal tilt позитивный, посадка глаз глубокая, никакого scleral show. Midface компактный, соотношение третей близко к каноническому. Кожа не портит картину. Если искать слабое место — это уже уровень придирок к освещению на снимке, а не к лицу. Chad, и заслуженно.",
        tips: [
            "Не трогать то, что работает: любые филлеры и вмешательства здесь только испортят готовую геометрию.",
            "Жёстко держать жир в 10–13% — это единственный параметр, способный обнулить преимущество костяка.",
            "Шея и трапеции: без них сильная челюсть на широких планах теряет часть эффекта.",
            "Фиксировать текущий режим сна — глазная область здесь топовая, и терять её на недосыпе глупо."
        ]
    }
};
const DEV_2 = {
    soft: {
        summary: "Лицо с выраженной маскулинной геометрией и очень спокойной, собранной гармонией. Скуловые кости широкие, поставлены высоко, midface короткий — за счёт этого верхняя и средняя трети читаются свежо и открыто. Челюсть широкая у основания, линия идёт ровно, без размытия под подбородком. Глазная область спокойная, canthal tilt нейтрально-позитивный, взгляд прямой и уверенный. Кожа ровная, тон однородный. Общая симметрия высокая, а черты не спорят друг с другом — это и даёт ощущение цельного, гармоничного лица уровня Chad.",
        tips: [
            "Сохранять текущую форму: композиция сбалансирована, резкие изменения только нарушат гармонию.",
            "Регулярное увлажнение и SPF — ровный тон здесь один из заметных плюсов.",
            "Работа над осанкой и положением головы вперёд: раскроет линию шеи и челюсти на полный потенциал.",
            "Короткая аккуратная стрижка подчёркивает ширину скуловой кости лучше длинных вариантов."
        ]
    },
    honest: {
        summary: "Сильная костная основа с акцентом на ширину. Бизиготическое расстояние большое, скулы высокие — лицо хорошо держит объём во фронтальном ракурсе. Гониальный угол выраженный, челюсть широкая у основания, подбородок с достаточной проекцией: нижняя треть устойчивая и мужская. Midface короткий, что работает в плюс и визуально омолаживает. Canthal tilt нейтрально-позитивный, орбитальная область без провалов и мешков, взгляд собранный. Симметрия высокая. Кожа плотная, тон ровный, выраженных дефектов нет. Совокупно — Chad с упором на маскулинность и структурную надёжность, а не на утончённость.",
        tips: [
            "Держать процент жира в районе 11–14%: широкой челюсти лишний объём вредит быстрее, чем узкой.",
            "Тренировка шеи — при такой ширине лица тонкая шея была бы единственным диссонансом.",
            "Уход за кожей на поддержание: ровный тон уже есть, нужна стабильность, а не эксперименты.",
            "Борода короткой длины (щетина 3–5 мм) подчеркнёт линию челюсти, не пряча её.",
            "Ракурс строго с уровня глаз: широкое лицо теряет форму на снимках сверху."
        ]
    },
    brutal: {
        summary: "Костяк мужской и честный, без попыток компенсировать что-то причёской или ракурсом. Скулы широкие и высокие, midface короткий — лицо не растянуто, это сразу снимает половину типичных проблем. Челюсть широкая, гониальный угол читается, подбородок не съезжает назад. Глазная область без провалов, tilt нейтрально-позитивный, взгляд не вялый. Симметрия хорошая. Слабых мест, которые реально портили бы картину, нет — есть только зоны, где можно не терять текущее. Chad, вопросов к структуре не имею.",
        tips: [
            "Жир 11–14% и не выше: широкое лицо первым набирает и последним отдаёт.",
            "Шея обязательна — при такой ширине черепа её отсутствие будет единственным, что бросится в глаза.",
            "Никаких вмешательств в среднюю треть: она здесь и так короткая, любое изменение сделает хуже.",
            "Щетина 3–5 мм как рабочий инструмент: подчёркивает челюсть и добавляет контраста."
        ]
    }
};
const TEAM_COPY = {
    "dev-1": DEV_1,
    "dev-2": DEV_2
};
}),
"[project]/lib/team/team-embeddings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Эталонные эмбеддинги лиц команды для локального демо-режима
__turbopack_context__.s([
    "TEAM_MEMBERS",
    ()=>TEAM_MEMBERS
]);
const TEAM_MEMBERS = [
    {
        id: "dev-1",
        name: "Разработчик 1",
        embedding: [
            -0.14881,
            -0.36420,
            -0.37223,
            -0.18699,
            0.00000,
            -0.31298,
            0.16388,
            0.41884,
            0.01933,
            -0.34366,
            -0.12847,
            1.28238,
            0.30350,
            0.77320,
            0.05456,
            -0.37462,
            0.95940,
            -0.34697,
            -0.23647,
            -0.31375,
            -0.35275,
            -0.17423,
            -0.24223,
            0.24704,
            0.03540,
            -0.07055,
            -0.17326,
            0.58905,
            0.26148,
            0.41673,
            -0.29249,
            0.33217,
            0.06374,
            -0.16616,
            0.21057,
            0.92402,
            -0.30876,
            -0.30869,
            -0.17134,
            -0.37483,
            0.52678,
            0.65265,
            0.27896,
            -0.29480,
            0.00000,
            -0.03826,
            -0.33213,
            -0.01957,
            -0.34922,
            0.19943,
            0.22720,
            -0.36177,
            -0.20495,
            -0.35420,
            0.34401,
            0.56022,
            -0.27861,
            -0.34411,
            0.16882,
            0.21761,
            -0.28562,
            -0.30891,
            -0.09641,
            -0.16548,
            -0.36581,
            -0.37487,
            1.15424,
            -0.36630,
            1.03086,
            -0.17124,
            -0.36233,
            -0.31422,
            0.97236,
            0.26248,
            0.39060,
            -0.36111,
            -0.13026,
            -0.06078,
            0.65997,
            0.88373,
            -0.36751,
            0.00000,
            0.35319,
            -0.21272,
            0.00000,
            -0.28100,
            -0.17131,
            -0.16234,
            -0.23991,
            -0.15262,
            0.08950,
            0.00000,
            0.74643,
            0.18308,
            -0.36685,
            -0.19819,
            -0.37316,
            -0.28310,
            0.05976,
            0.36952,
            0.73843,
            0.13308,
            0.00000,
            1.06781,
            0.00000,
            -0.08097,
            1.46142,
            -0.33365,
            0.17466,
            0.00000,
            -0.36219,
            0.00000,
            0.01271,
            -0.24419,
            0.43350,
            0.81794,
            -0.16320,
            -0.37159,
            0.04936,
            -0.12482,
            -0.26333,
            -0.36216,
            -0.37477,
            -0.18999,
            0.75427,
            -0.34936,
            0.46993,
            -0.23906,
            -0.34064,
            0.65135,
            -0.02992,
            1.64302,
            -0.03368,
            -0.36137,
            0.01768,
            0.00000,
            -0.20645,
            -0.16981,
            -0.16084,
            0.00000,
            -0.29632,
            0.00000,
            -0.21478,
            0.42293,
            0.13955,
            0.11876,
            0.26764,
            0.87299,
            -0.12750,
            -0.34834,
            -0.05193,
            -0.37301,
            0.00000,
            -0.17441,
            -0.04814,
            -0.36173,
            -0.25571,
            -0.37356,
            0.10994,
            -0.31146,
            1.56088,
            -0.32437,
            -0.18302,
            0.09994,
            -0.30003,
            -0.28081,
            0.07060,
            0.32646,
            0.00000,
            -0.37448,
            -0.24254,
            -0.32199,
            -0.20905,
            -0.07981,
            0.10209,
            -0.20184,
            -0.36159,
            0.25547,
            -0.35427,
            0.18661,
            -0.29855,
            0.30496,
            0.61990,
            -0.04472,
            0.01207,
            -0.23819,
            -0.37391,
            -0.37051,
            0.33765,
            -0.25589,
            -0.15808,
            0.30357,
            0.00000,
            -0.33915,
            -0.19750,
            -0.17473,
            -0.22156,
            -0.36699,
            -0.27622,
            -0.14096,
            0.41993,
            -0.37370,
            -0.36251,
            0.02465,
            -0.06418,
            -0.36738,
            -0.37495,
            -0.04099,
            0.73460,
            -0.37163,
            -0.29670,
            -0.34855,
            0.00000,
            0.03895,
            1.16062,
            -0.17038,
            -0.23633,
            0.07280,
            0.00000,
            0.41510,
            1.22399,
            -0.17840,
            -0.31681,
            0.26671,
            -0.32893,
            -0.03493,
            0.21081,
            0.32812,
            -0.37478,
            -0.32294,
            -0.37445,
            0.00000,
            -0.29650,
            -0.35718,
            0.23752,
            -0.14121,
            -0.37308,
            0.05076,
            0.00000,
            -0.32292,
            0.65573,
            -0.30110,
            -0.25389,
            0.04650,
            -0.37387,
            -0.25040,
            -0.27449,
            -0.37400,
            -0.36555,
            0.00505,
            -0.37489,
            -0.37427,
            -0.20008,
            -0.21621,
            0.00000,
            -0.34697,
            0.20502,
            0.40987,
            0.17549,
            0.13901,
            0.01051,
            -0.07732,
            0.51418,
            -0.26362,
            0.43888,
            -0.16823,
            0.37004,
            -0.02524,
            0.07178,
            -0.13529,
            -0.37500,
            0.15500,
            -0.09965,
            0.59471,
            -0.06964,
            -0.24647,
            -0.37244,
            0.00000,
            0.77828,
            -0.08752,
            -0.20804,
            -0.36713,
            1.13983,
            -0.34967,
            0.29722,
            0.00000,
            -0.36937,
            -0.22822,
            0.77971,
            -0.30665,
            -0.35199,
            -0.27675,
            -0.09825,
            -0.32547,
            -0.34182,
            0.29973,
            -0.29606,
            0.00000,
            0.08632,
            0.14883,
            0.25547,
            -0.15948,
            0.19170,
            -0.28645,
            -0.31286,
            -0.37468,
            -0.33324,
            -0.36774,
            0.83071,
            -0.18998,
            -0.37492,
            1.79923,
            -0.28524,
            0.22419,
            -0.12262,
            0.49391,
            -0.36318,
            -0.37168,
            0.89523,
            -0.13138,
            0.82014,
            0.56388,
            0.38722,
            -0.20090,
            -0.36834,
            -0.13737,
            -0.10788,
            -0.23502,
            -0.04831,
            0.30205,
            -0.20957,
            0.33865,
            -0.36824,
            -0.29235,
            -0.11497,
            -0.00359,
            0.00000,
            -0.24550,
            -0.35836,
            -0.07152,
            -0.35787,
            -0.30636,
            0.00000,
            -0.28820,
            0.00000,
            1.30022,
            -0.28666,
            -0.24064,
            -0.12829,
            -0.21140,
            -0.35114,
            0.31547,
            -0.29653,
            -0.35178,
            -0.37402,
            -0.36794,
            0.00000,
            -0.15296,
            -0.18276,
            -0.35937,
            0.07566,
            -0.25370,
            -0.34625,
            -0.37283,
            -0.01712,
            0.50253,
            -0.07302,
            -0.34358,
            -0.37101,
            0.36986,
            -0.34741,
            0.39593,
            -0.21535,
            -0.36014,
            0.21180,
            0.00861,
            0.84599,
            -0.16264,
            -0.04710,
            -0.37479,
            -0.03197,
            -0.06592,
            0.31841,
            0.37394,
            0.11778,
            0.64234,
            -0.37417,
            0.71301,
            0.32524,
            0.36492,
            -0.28934,
            -0.23093,
            -0.20931,
            -0.22704,
            0.64162,
            -0.36358,
            -0.33618,
            -0.32821,
            -0.00994,
            0.02372,
            0.73390,
            0.56783,
            -0.03745,
            0.31662,
            -0.23101,
            0.49559,
            -0.36465,
            -0.20093,
            -0.37347,
            -0.26955,
            0.84108,
            -0.19334,
            0.00000,
            0.00000,
            -0.27933,
            -0.13939,
            -0.33846,
            -0.03710,
            -0.31760,
            -0.26803,
            -0.35555,
            0.08539,
            0.00000,
            -0.36243,
            -0.35020,
            -0.10657,
            -0.36471,
            -0.36606,
            -0.32062,
            -0.36938,
            -0.37482,
            -0.33090,
            1.66762,
            0.70529,
            -0.33094,
            0.15267,
            -0.31336,
            -0.04028,
            -0.35718,
            0.51596,
            -0.32228,
            0.16970,
            -0.12353,
            -0.00490,
            -0.32288,
            -0.06726,
            -0.06155,
            1.84646,
            -0.32993,
            -0.24535,
            -0.22907,
            -0.02828,
            -0.24067,
            -0.36895,
            0.32004,
            -0.26731,
            0.34803,
            -0.31467,
            0.77836,
            0.85133,
            0.41958,
            0.11180,
            0.57952,
            -0.37257,
            -0.28966,
            0.59759,
            0.31475,
            -0.05961,
            -0.36360,
            -0.07375,
            -0.24523,
            0.28790,
            1.79165,
            0.90019,
            -0.11208,
            -0.26093,
            0.00000,
            0.55789,
            -0.31325,
            -0.24509,
            -0.09303,
            -0.01291,
            0.57243,
            -0.33842,
            -0.16733,
            0.29073,
            1.01700,
            -0.34285,
            0.08970,
            -0.33610,
            -0.30193,
            0.09319,
            -0.26687,
            0.01979,
            0.82648,
            0.03363,
            0.15648,
            -0.12287,
            -0.11814,
            1.27043,
            0.31908,
            -0.35827,
            -0.34529,
            0.16990,
            0.21423,
            2.68862,
            0.40479,
            0.77881,
            -0.07669,
            0.51625,
            0.00000,
            0.14072,
            -0.36236,
            -0.23558,
            -0.33786,
            -0.30067,
            0.56130,
            0.00000,
            -0.32035,
            0.35966,
            0.34437,
            -0.37476,
            -0.25957,
            0.23030,
            0.00000,
            0.28174,
            -0.27203,
            -0.28069,
            -0.28550,
            0.00000,
            -0.26072,
            -0.19815,
            -0.36604,
            0.12793,
            -0.25341,
            0.43834,
            0.60006,
            -0.30743,
            -0.32002,
            -0.37285,
            -0.08916,
            0.33027,
            -0.26657,
            -0.11619,
            0.84623,
            -0.14342,
            -0.33118,
            0.02281,
            -0.21697,
            -0.12362,
            -0.03003,
            0.16022,
            -0.17441,
            -0.31078,
            -0.34719,
            -0.37235,
            0.00000,
            -0.20971,
            0.22674,
            -0.32715,
            -0.14582,
            0.00000,
            -0.31007,
            0.11663,
            0.60217,
            -0.15455,
            0.09598,
            0.20712,
            -0.27182,
            -0.33476,
            -0.33979,
            0.25894,
            0.07598,
            -0.07028,
            0.38515,
            0.21737,
            -0.22259,
            -0.36561,
            0.24733,
            -0.29610,
            -0.34471,
            -0.25675,
            0.60547,
            0.00000,
            -0.23928,
            -0.33385,
            1.22386,
            0.02605,
            -0.05038,
            -0.37411,
            -0.28995,
            0.00000,
            -0.08826,
            -0.32949,
            -0.29375,
            -0.22850,
            0.00000,
            0.13122,
            -0.35016,
            0.23222,
            0.18156,
            -0.25357,
            0.37012,
            0.00469,
            0.18674,
            -0.18086,
            0.00000,
            0.34425,
            0.05018,
            -0.04418,
            0.04538,
            -0.10502,
            0.07059,
            1.10480,
            0.78130,
            -0.37303,
            -0.37500,
            -0.22675,
            -0.37352,
            -0.36967,
            -0.21480,
            -0.11905,
            -0.16965,
            -0.36832,
            -0.35331,
            1.94732,
            -0.36797,
            -0.33542,
            0.00000,
            -0.35832,
            -0.25499,
            -0.31594,
            0.52711,
            -0.35786,
            -0.00704,
            -0.36813,
            -0.34467,
            -0.01032,
            0.38166,
            -0.14114,
            -0.31982,
            0.49033,
            -0.20500,
            0.37890,
            0.00000,
            -0.34718,
            0.42715,
            0.00000,
            -0.37402,
            -0.24399,
            -0.28835,
            -0.33041,
            1.35955,
            -0.08146,
            -0.14019,
            1.30871,
            -0.33097,
            -0.37349,
            0.29129,
            0.32116,
            -0.29741,
            -0.02395,
            -0.01787,
            -0.24361,
            -0.22354,
            0.00000,
            -0.35739,
            -0.31698,
            0.20199,
            -0.08751,
            0.25730,
            -0.33905,
            0.11588,
            -0.34191,
            0.38857,
            -0.36777,
            -0.25297,
            0.02016,
            -0.21980,
            -0.15627,
            -0.35014,
            -0.26801,
            0.14015,
            0.41818,
            -0.28208,
            -0.33406,
            1.11146,
            0.14859,
            -0.06732,
            0.00000,
            0.61991,
            0.16185,
            0.09812,
            -0.22087,
            0.58746,
            -0.09758,
            -0.35740,
            -0.01415,
            0.00000,
            1.24746,
            0.66192,
            0.25560,
            -0.14211,
            0.55428,
            0.29256,
            0.50683,
            -0.19376,
            0.33106,
            0.00000,
            0.35786,
            -0.34805,
            0.24880,
            1.28783,
            0.00000,
            0.00000,
            1.28843,
            -0.36021,
            -0.14428,
            -0.22298,
            0.11898,
            -0.37286,
            0.26021,
            -0.33066,
            0.10755,
            -0.35231,
            -0.34199,
            -0.37498,
            0.03134,
            -0.13302,
            0.32890,
            -0.09527,
            -0.28252,
            -0.30525,
            -0.33021,
            -0.33108,
            -0.37441,
            -0.27157,
            0.08647,
            0.25904,
            -0.24699,
            0.22043,
            -0.20992,
            0.60870,
            -0.36884,
            -0.36742,
            1.01623,
            -0.37175,
            -0.36897,
            0.00000,
            -0.26726,
            -0.36190,
            0.94956,
            0.00000,
            -0.37278,
            -0.15735,
            -0.22562,
            -0.37478,
            -0.35112,
            -0.15246,
            -0.13304,
            -0.28053,
            0.68368,
            -0.25389,
            -0.24267,
            0.09985,
            -0.30357,
            0.52549,
            -0.20267,
            0.50699,
            -0.18203,
            -0.34220,
            0.00000,
            -0.35806,
            -0.15196,
            0.16944,
            -0.32409,
            0.33301,
            -0.36434,
            -0.33521,
            -0.27475,
            0.93827,
            0.60908,
            -0.12803,
            -0.15859,
            0.00000,
            0.00000,
            -0.37437,
            0.49750,
            0.00000,
            -0.27131,
            0.17209,
            0.00000,
            1.10910,
            0.28878,
            0.47066,
            -0.31718,
            -0.31118,
            -0.10582,
            -0.28404,
            0.53880,
            -0.33243,
            0.07208,
            1.04240,
            -0.16244,
            -0.34790,
            -0.36546,
            0.82119,
            -0.26360,
            0.17753,
            -0.07811,
            -0.19886,
            -0.34801,
            0.00951,
            -0.33399,
            -0.03042,
            1.00294,
            -0.34361,
            -0.33250,
            -0.37440,
            0.00000,
            0.00000,
            -0.17104,
            0.95586,
            -0.35319,
            -0.36696,
            -0.22478,
            0.48956,
            -0.37500,
            -0.10368,
            0.07668,
            0.00000,
            1.40737,
            2.76200,
            -0.01385,
            -0.36473,
            -0.22664,
            -0.35824,
            0.24477,
            -0.18863,
            -0.37493,
            -0.08206,
            0.23321,
            -0.36344,
            -0.37470,
            1.02054,
            0.50597,
            0.19350,
            0.99360,
            0.00698,
            0.00000,
            -0.03667,
            0.13181,
            0.03201,
            -0.29154,
            0.07450,
            1.09580,
            1.44372,
            0.00000,
            0.14245,
            0.15806,
            -0.26304,
            -0.07493,
            0.11389,
            0.15197,
            -0.37499,
            0.00000,
            0.32813,
            -0.11153,
            -0.19075,
            0.00000,
            -0.05589,
            0.06486,
            0.91066,
            -0.37459,
            -0.18936,
            -0.32952,
            -0.35690,
            -0.37457,
            -0.01157,
            -0.02602,
            -0.31218,
            -0.16410,
            -0.35291,
            -0.21990,
            -0.36711,
            0.59653,
            0.38715,
            -0.09658,
            -0.08006,
            0.54854,
            -0.17417,
            0.23364,
            -0.26433,
            -0.37344,
            -0.28555,
            -0.02854,
            -0.36304,
            0.08900,
            0.26633,
            -0.30934,
            -0.28636,
            1.05002,
            -0.09565,
            -0.24881,
            -0.10405,
            -0.29438,
            1.75485,
            0.44554,
            -0.06718,
            0.13734,
            -0.06671,
            -0.25928,
            -0.35050,
            0.00000,
            0.84421,
            -0.15224,
            0.63614,
            -0.02301,
            -0.30269,
            0.13637,
            0.96352,
            0.10620,
            -0.19718,
            -0.35442,
            -0.26607,
            -0.30350,
            0.47337,
            -0.17818,
            -0.37246,
            0.08835,
            0.02908,
            -0.37256,
            -0.35891,
            -0.01714,
            0.51085,
            -0.30182,
            -0.05304,
            0.00000,
            -0.16196,
            0.52711,
            0.72717,
            0.00000,
            -0.18654,
            -0.34047,
            -0.07872,
            0.00000,
            -0.32949,
            0.05477,
            -0.02391,
            -0.15335,
            -0.00868,
            0.00000,
            0.19683,
            0.00000,
            0.32640,
            -0.00417,
            -0.34539,
            -0.36776,
            0.35705,
            0.15440,
            -0.35878,
            -0.27469,
            0.32103,
            -0.20217,
            -0.34939,
            -0.25650,
            -0.37275,
            -0.36234,
            -0.15218,
            -0.16542,
            0.00000,
            0.62709,
            0.73932,
            -0.36742,
            -0.35420,
            0.29816,
            -0.05033,
            -0.00821,
            0.26254,
            0.14920,
            -0.37280,
            0.56445,
            0.25305,
            0.31433,
            -0.30172,
            -0.01553,
            -0.34792,
            -0.26822,
            0.19690,
            0.28793,
            -0.11956,
            0.08032,
            0.49623,
            -0.36506,
            -0.36197,
            0.00000,
            -0.25635,
            -0.22636,
            0.09855,
            -0.17851,
            0.00000,
            -0.05852,
            -0.05584,
            -0.35130,
            0.01404,
            -0.26859,
            0.55006,
            0.08947,
            -0.37284,
            -0.01715,
            -0.37328,
            -0.11697,
            -0.35780,
            0.00000,
            0.26521,
            -0.37499,
            1.00759,
            -0.26528,
            0.00000,
            0.00000,
            -0.23593,
            0.70073,
            -0.27072,
            0.23820
        ]
    },
    {
        id: "dev-2",
        name: "Разработчик 2",
        embedding: [
            0.67272,
            -0.06590,
            0.10369,
            -0.20657,
            -0.32007,
            0.17438,
            -0.31371,
            0.32702,
            0.24168,
            0.12971,
            -0.17455,
            -0.09383,
            0.78906,
            1.03106,
            0.41210,
            -0.37352,
            0.23635,
            0.25252,
            -0.16178,
            0.11830,
            -0.36947,
            -0.28114,
            0.11932,
            0.02960,
            0.14186,
            -0.20809,
            0.12392,
            -0.02322,
            0.08757,
            0.49403,
            0.00000,
            -0.09801,
            1.11755,
            -0.25342,
            -0.04174,
            -0.01145,
            0.00000,
            -0.37025,
            -0.36521,
            -0.29630,
            -0.29355,
            1.21791,
            0.34513,
            -0.28779,
            -0.12903,
            0.16484,
            0.06406,
            0.77654,
            0.29124,
            0.00777,
            0.32703,
            0.03263,
            -0.34549,
            -0.37468,
            0.00138,
            -0.04948,
            0.30824,
            -0.37423,
            -0.00583,
            -0.16456,
            -0.14812,
            0.01804,
            0.41565,
            -0.08995,
            -0.18823,
            -0.05442,
            0.14115,
            0.18412,
            -0.04426,
            -0.02118,
            -0.37493,
            -0.32920,
            0.23089,
            0.34644,
            0.31516,
            -0.37078,
            0.20688,
            0.20730,
            -0.01703,
            -0.25856,
            -0.14136,
            0.00000,
            0.90813,
            -0.36654,
            -0.37294,
            -0.21609,
            -0.17306,
            0.03744,
            -0.30507,
            -0.31976,
            -0.22870,
            -0.37485,
            0.08763,
            0.26899,
            -0.12321,
            0.27290,
            -0.04352,
            -0.26278,
            -0.26335,
            0.34388,
            0.73530,
            -0.00660,
            -0.31675,
            0.37616,
            -0.36594,
            0.41362,
            0.22955,
            -0.35359,
            0.70163,
            -0.20329,
            -0.34364,
            -0.17852,
            0.17211,
            0.26729,
            -0.02127,
            0.39451,
            0.07025,
            -0.16818,
            0.56279,
            -0.15916,
            -0.36367,
            0.23022,
            -0.34132,
            0.01656,
            -0.05527,
            -0.25117,
            0.38183,
            0.37069,
            -0.12184,
            -0.18400,
            -0.04572,
            -0.15114,
            0.02021,
            -0.30840,
            -0.21913,
            0.00000,
            0.33996,
            -0.18504,
            0.00000,
            -0.30114,
            -0.33607,
            -0.25564,
            -0.11219,
            -0.08371,
            0.53377,
            -0.37477,
            0.79529,
            0.79204,
            0.23308,
            -0.37253,
            -0.23187,
            -0.30356,
            -0.18063,
            -0.08359,
            -0.11503,
            -0.29745,
            -0.01033,
            -0.28280,
            -0.01381,
            -0.37481,
            0.30162,
            -0.01173,
            0.19211,
            -0.37396,
            -0.36961,
            0.38454,
            0.01236,
            1.63531,
            -0.26686,
            0.15646,
            -0.37021,
            0.24627,
            -0.22603,
            -0.35264,
            0.09977,
            -0.12796,
            -0.02256,
            -0.13047,
            -0.20923,
            0.99971,
            0.48013,
            0.17610,
            1.49846,
            -0.36213,
            0.04400,
            -0.01933,
            -0.31451,
            -0.37229,
            0.34579,
            -0.34027,
            0.19258,
            -0.37029,
            -0.11660,
            -0.36274,
            0.13471,
            -0.31649,
            -0.36748,
            0.30913,
            -0.20260,
            0.47205,
            0.40259,
            0.64426,
            -0.26082,
            0.38929,
            -0.32532,
            -0.32867,
            -0.15743,
            0.15446,
            -0.02357,
            -0.15572,
            -0.37433,
            -0.24648,
            -0.28510,
            -0.29027,
            0.12425,
            -0.36994,
            -0.33244,
            -0.17087,
            0.00000,
            -0.33805,
            0.08469,
            -0.35968,
            -0.36756,
            -0.03065,
            -0.11043,
            0.31153,
            -0.18322,
            0.87196,
            0.44199,
            -0.20024,
            0.24696,
            -0.34914,
            0.30746,
            0.36682,
            0.12626,
            0.44955,
            -0.12824,
            0.16643,
            -0.36973,
            -0.35096,
            0.53623,
            -0.29321,
            0.46784,
            -0.07973,
            -0.19342,
            0.12346,
            -0.21501,
            0.41761,
            -0.36506,
            -0.26535,
            -0.21430,
            -0.37403,
            0.00643,
            0.64768,
            0.00000,
            0.08816,
            -0.13238,
            -0.10589,
            -0.36030,
            -0.10114,
            0.18161,
            -0.33381,
            0.57995,
            0.08446,
            1.42642,
            -0.35948,
            0.07028,
            -0.27437,
            -0.17041,
            -0.16121,
            -0.23390,
            -0.05261,
            -0.22314,
            -0.03788,
            -0.18348,
            -0.35256,
            0.03684,
            -0.16593,
            -0.29010,
            -0.32090,
            -0.08987,
            -0.26070,
            0.38506,
            -0.37302,
            0.59590,
            -0.05696,
            -0.16665,
            -0.04380,
            -0.08807,
            -0.36331,
            -0.36709,
            0.50323,
            -0.12414,
            0.00000,
            -0.29216,
            -0.06493,
            0.79676,
            -0.36020,
            0.00439,
            0.50254,
            -0.12745,
            0.34762,
            0.02461,
            -0.35125,
            -0.04094,
            -0.34555,
            0.08845,
            -0.36706,
            0.50521,
            0.31755,
            -0.36547,
            -0.22338,
            -0.34700,
            0.48533,
            0.21909,
            -0.22206,
            0.04137,
            0.83171,
            0.83823,
            0.66705,
            1.00598,
            -0.15555,
            0.29693,
            0.07587,
            -0.30580,
            0.16007,
            -0.24515,
            -0.37343,
            -0.35858,
            -0.14913,
            0.52968,
            0.12211,
            0.00246,
            0.01905,
            -0.37264,
            0.48618,
            -0.37105,
            -0.21909,
            1.03280,
            -0.18195,
            -0.08952,
            -0.32506,
            0.00000,
            -0.32169,
            -0.33996,
            0.78862,
            -0.19393,
            -0.35387,
            0.27473,
            -0.31005,
            -0.34780,
            0.43886,
            0.06992,
            -0.30066,
            -0.34147,
            0.25207,
            -0.12228,
            -0.33635,
            0.00000,
            -0.16434,
            0.59860,
            -0.25525,
            0.08179,
            -0.34685,
            -0.05360,
            -0.23085,
            0.43898,
            -0.37428,
            -0.26584,
            0.87120,
            0.07008,
            0.67276,
            0.78266,
            -0.21242,
            0.31253,
            -0.10827,
            0.66720,
            0.00000,
            0.87232,
            -0.30741,
            -0.14873,
            -0.37440,
            0.49296,
            -0.21332,
            0.75075,
            -0.14963,
            0.11441,
            -0.08266,
            0.38603,
            1.28103,
            0.43675,
            -0.37033,
            0.07955,
            -0.37498,
            0.29446,
            -0.23307,
            0.10128,
            0.09117,
            -0.11863,
            0.70954,
            0.48645,
            0.78463,
            -0.35231,
            0.10044,
            -0.35898,
            0.28032,
            -0.37495,
            -0.34438,
            -0.37028,
            -0.05074,
            0.76204,
            -0.34022,
            -0.19151,
            -0.36892,
            -0.11249,
            -0.30878,
            -0.09706,
            1.03870,
            -0.08920,
            -0.37283,
            0.04122,
            0.58119,
            -0.14616,
            -0.12609,
            0.21999,
            -0.33803,
            0.24757,
            -0.37485,
            -0.37080,
            -0.11989,
            -0.35954,
            -0.11461,
            0.32895,
            0.26740,
            -0.14738,
            0.73181,
            0.62395,
            -0.35025,
            0.16757,
            0.14313,
            -0.34403,
            0.01894,
            0.22435,
            -0.23817,
            -0.34460,
            -0.02700,
            -0.30196,
            0.17823,
            0.66974,
            0.06389,
            0.11247,
            0.20843,
            0.02042,
            0.21606,
            -0.19840,
            0.60031,
            -0.14768,
            0.25811,
            0.31672,
            -0.13223,
            -0.36585,
            -0.04295,
            0.70431,
            0.26237,
            -0.37219,
            0.60553,
            -0.37497,
            0.61428,
            0.28699,
            -0.14571,
            -0.05591,
            0.06536,
            0.07415,
            0.13745,
            -0.23586,
            0.49884,
            0.00000,
            -0.04052,
            -0.36071,
            -0.30598,
            -0.29659,
            -0.18703,
            0.08614,
            0.00000,
            0.16686,
            -0.26187,
            -0.34058,
            -0.05551,
            1.17040,
            0.00000,
            0.28377,
            0.16659,
            -0.31523,
            0.96730,
            0.23362,
            -0.06396,
            0.29307,
            0.88032,
            -0.23187,
            0.39414,
            0.55915,
            0.15688,
            -0.34286,
            0.68064,
            0.13925,
            0.17925,
            0.25022,
            -0.09825,
            -0.36875,
            0.77517,
            0.00000,
            -0.01251,
            1.09285,
            -0.34357,
            -0.31688,
            -0.35458,
            0.93577,
            0.00000,
            0.25150,
            0.39476,
            -0.27010,
            -0.36693,
            -0.33568,
            1.02433,
            -0.36891,
            0.10558,
            -0.37003,
            -0.23510,
            0.03646,
            -0.07815,
            0.65643,
            -0.15406,
            -0.37115,
            0.50697,
            0.00000,
            -0.02318,
            0.37701,
            -0.25004,
            0.56587,
            -0.36431,
            -0.19055,
            0.20202,
            0.25098,
            -0.09911,
            0.46035,
            -0.01645,
            -0.07462,
            0.69803,
            0.24109,
            -0.10088,
            -0.10599,
            0.01805,
            -0.31361,
            -0.30067,
            -0.09037,
            -0.30350,
            -0.37488,
            -0.15974,
            0.01766,
            -0.34213,
            0.15825,
            -0.25723,
            0.24651,
            -0.26001,
            -0.19852,
            0.01829,
            0.31881,
            -0.33969,
            0.00000,
            -0.37393,
            -0.36295,
            0.74912,
            0.86809,
            -0.35588,
            -0.34608,
            -0.07355,
            -0.37363,
            -0.22696,
            0.39255,
            -0.29893,
            -0.12735,
            0.00000,
            -0.21251,
            -0.26806,
            0.28537,
            0.00808,
            -0.24665,
            -0.26531,
            -0.32126,
            -0.30536,
            -0.37046,
            -0.28596,
            0.17055,
            -0.31917,
            -0.27655,
            -0.20199,
            -0.34349,
            0.03357,
            -0.35445,
            0.46038,
            -0.23286,
            -0.35840,
            -0.01835,
            -0.20321,
            0.09771,
            -0.31036,
            0.00000,
            -0.16741,
            -0.13304,
            -0.37390,
            -0.20598,
            -0.08106,
            0.08422,
            -0.18561,
            1.19790,
            -0.22011,
            -0.36678,
            -0.28182,
            0.03625,
            0.06892,
            0.21821,
            0.92603,
            0.05718,
            0.05789,
            -0.16981,
            0.26730,
            -0.29157,
            -0.37466,
            0.00000,
            -0.22462,
            0.29361,
            -0.27225,
            -0.28901,
            0.04205,
            -0.26637,
            -0.16946,
            -0.29384,
            1.38162,
            1.22489,
            -0.34747,
            -0.06145,
            0.03789,
            -0.37419,
            -0.30111,
            0.00000,
            -0.27681,
            -0.06203,
            0.00000,
            -0.24756,
            -0.29559,
            -0.33520,
            1.14135,
            1.37652,
            -0.18070,
            -0.32014,
            0.57417,
            0.00000,
            -0.19953,
            1.26687,
            0.39282,
            -0.14616,
            -0.09266,
            0.17610,
            -0.33434,
            -0.22073,
            0.00000,
            0.79795,
            0.16275,
            -0.09208,
            -0.29822,
            -0.10296,
            -0.36324,
            0.99780,
            -0.07320,
            0.27337,
            -0.26207,
            0.00000,
            -0.37494,
            0.00000,
            -0.24747,
            0.10955,
            0.26824,
            0.01129,
            1.29245,
            0.05913,
            -0.15146,
            -0.18871,
            1.40823,
            0.00000,
            0.00000,
            0.03631,
            0.54472,
            0.12480,
            0.00000,
            0.34051,
            0.50781,
            -0.37474,
            -0.37488,
            0.00000,
            0.83479,
            1.03708,
            -0.03550,
            -0.10249,
            0.86487,
            0.46576,
            -0.09746,
            0.71548,
            -0.37302,
            -0.12189,
            0.38603,
            -0.31640,
            -0.07588,
            1.10841,
            -0.18076,
            -0.30020,
            0.40257,
            -0.08513,
            -0.08416,
            -0.31235,
            -0.15780,
            0.09370,
            -0.37458,
            -0.13941,
            -0.13761,
            -0.25007,
            0.06007,
            -0.32746,
            -0.28358,
            0.29866,
            0.25941,
            -0.33728,
            -0.35755,
            -0.19140,
            -0.36195,
            -0.19373,
            -0.35141,
            0.30077,
            0.24867,
            0.13391,
            0.92909,
            -0.00778,
            -0.17792,
            0.21777,
            -0.34524,
            -0.28682,
            0.09607,
            0.32653,
            -0.19201,
            -0.32369,
            -0.34887,
            0.05019,
            0.31914,
            -0.35007,
            -0.22329,
            -0.20978,
            -0.29153,
            0.00000,
            -0.33832,
            -0.21791,
            0.09735,
            0.50226,
            1.15224,
            -0.20753,
            -0.36823,
            0.19487,
            -0.24487,
            -0.18262,
            0.12246,
            -0.11935,
            -0.16562,
            0.63635,
            0.00000,
            0.30647,
            -0.18431,
            -0.33724,
            0.20395,
            0.18954,
            0.00000,
            -0.29473,
            -0.36927,
            -0.13150,
            -0.03730,
            -0.09966,
            0.38745,
            0.00000,
            0.00000,
            -0.36708,
            0.37058,
            -0.10252,
            0.24564,
            -0.12119,
            0.00000,
            0.39180,
            -0.37500,
            -0.07920,
            -0.34079,
            -0.30386,
            -0.36008,
            0.37034,
            -0.03363,
            -0.04830,
            -0.25111,
            1.01538,
            0.19670,
            -0.29668,
            -0.24348,
            -0.13899,
            -0.10061,
            0.33831,
            0.43487,
            0.46478,
            0.00000,
            -0.04351,
            1.80405,
            0.34492,
            0.91165,
            -0.31171,
            -0.24526,
            1.06218,
            0.00000,
            -0.32965,
            -0.09715,
            -0.25538,
            -0.03927,
            -0.10783,
            0.10020,
            0.00396,
            -0.17835,
            -0.29265,
            -0.30213,
            0.00000,
            -0.32768,
            -0.17311,
            -0.31586,
            -0.07788,
            -0.37497,
            0.24255,
            0.18204,
            -0.36928,
            0.19937,
            -0.36977,
            0.90992,
            -0.31509,
            0.09221,
            1.06239,
            1.43157,
            0.46026,
            0.15281,
            1.00506,
            0.00000,
            -0.08692,
            -0.37114,
            0.35245,
            0.28680,
            0.08194,
            0.43634,
            -0.23447,
            -0.05672,
            -0.27286,
            -0.31080,
            -0.37374,
            -0.34269,
            0.58397,
            0.60400,
            0.21573,
            -0.26153,
            -0.03672,
            -0.14108,
            0.15540,
            -0.08131,
            0.06072,
            -0.23931,
            0.18798,
            -0.36935,
            0.04733,
            -0.19097,
            -0.37471,
            -0.32440,
            0.67548,
            -0.32771,
            0.52349,
            0.35821,
            -0.31160,
            0.07351,
            -0.37498,
            0.29590,
            0.00483,
            0.49329,
            0.21566,
            0.29249,
            -0.33518,
            -0.06828,
            -0.37124,
            0.10760,
            -0.37284,
            0.00901,
            -0.18150,
            -0.35194,
            -0.18031,
            -0.37451,
            -0.03889,
            0.19564,
            -0.37496,
            -0.36565,
            0.31320,
            -0.30269,
            0.80106,
            0.18650,
            0.40081,
            0.65459,
            0.00000,
            -0.35021,
            -0.36575,
            -0.33700,
            0.86947,
            -0.27604,
            0.84162,
            -0.27639,
            -0.30351,
            0.39242,
            -0.09620,
            1.00866,
            -0.11224,
            -0.32216,
            0.00053,
            -0.24540,
            -0.31809,
            -0.09744,
            0.57425,
            0.78994,
            -0.15623,
            0.08746,
            0.14742,
            0.29987,
            -0.05665,
            -0.37018,
            0.01390,
            0.00000,
            -0.15136,
            -0.09325,
            -0.11651,
            0.00000,
            0.01215,
            -0.36859,
            0.45810,
            -0.12279,
            -0.34503,
            -0.03987,
            -0.22473,
            -0.34054,
            0.15835,
            0.00000,
            0.09930,
            -0.03522,
            -0.12874,
            1.29866,
            -0.25394,
            -0.37354,
            0.59748,
            0.49126,
            -0.37069,
            -0.06708,
            -0.27412,
            -0.33672,
            -0.16677,
            -0.14175,
            -0.32522,
            -0.35537,
            -0.26638,
            -0.33944,
            0.00000,
            -0.06031,
            0.31290,
            -0.26966,
            -0.19236,
            0.70396,
            -0.13332,
            0.00000,
            0.32894,
            -0.32993,
            -0.03737,
            0.49547,
            -0.37333,
            0.34141,
            -0.35265,
            -0.15511,
            -0.36257,
            0.00000,
            0.05413,
            -0.00069,
            0.00000,
            0.06138,
            0.33635,
            -0.09614,
            0.01629,
            -0.26290,
            0.00000,
            -0.20795,
            -0.32993,
            -0.15968,
            -0.14727,
            0.63553,
            1.03743,
            0.74963,
            0.88461,
            -0.24764,
            0.12355,
            -0.03507,
            -0.02443,
            -0.37383,
            0.51328,
            -0.16574,
            -0.37492,
            0.00000,
            0.07109,
            -0.22016,
            -0.37285,
            0.00146,
            -0.10342,
            -0.16911,
            -0.01116,
            0.39310,
            -0.33681,
            -0.00357
        ]
    }
];
}),
"[project]/lib/team/team-match-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Хранилище совпадений с лицами команды между отправкой фото и получением результата
__turbopack_context__.s([
    "getTeamMatch",
    ()=>getTeamMatch,
    "rememberTeamMatch",
    ()=>rememberTeamMatch
]);
const STORAGE_KEY = "mog:team-matches";
function read() {
    try {
        return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}");
    } catch  {
        return {};
    }
}
function rememberTeamMatch(ratingId, memberId, mode) {
    // Запоминает, что фото оценки принадлежит участнику команды
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
            ...read(),
            [ratingId]: {
                memberId,
                mode
            }
        }));
    } catch  {
    // sessionStorage может быть недоступен — тогда просто отдаём обычную оценку
    }
}
function getTeamMatch(ratingId) {
    try {
        return read()[ratingId] ?? null;
    } catch  {
        return null;
    }
}
}),
];

//# sourceMappingURL=_0mid_7y._.js.map