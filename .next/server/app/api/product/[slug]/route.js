/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/product/[slug]/route";
exports.ids = ["app/api/product/[slug]/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fproduct%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2F%5Bslug%5D%2Froute.js&appDir=C%3A%5CUsers%5CRichWan%5CDocuments%5CProject%5Ctokomenarik%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CRichWan%5CDocuments%5CProject%5Ctokomenarik&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fproduct%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2F%5Bslug%5D%2Froute.js&appDir=C%3A%5CUsers%5CRichWan%5CDocuments%5CProject%5Ctokomenarik%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CRichWan%5CDocuments%5CProject%5Ctokomenarik&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_RichWan_Documents_Project_tokomenarik_app_api_product_slug_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/product/[slug]/route.js */ \"(rsc)/./app/api/product/[slug]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/product/[slug]/route\",\n        pathname: \"/api/product/[slug]\",\n        filename: \"route\",\n        bundlePath: \"app/api/product/[slug]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\RichWan\\\\Documents\\\\Project\\\\tokomenarik\\\\app\\\\api\\\\product\\\\[slug]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_RichWan_Documents_Project_tokomenarik_app_api_product_slug_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0JTJGJTVCc2x1ZyU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJvZHVjdCUyRiU1QnNsdWclNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcm9kdWN0JTJGJTVCc2x1ZyU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNSaWNoV2FuJTVDRG9jdW1lbnRzJTVDUHJvamVjdCU1Q3Rva29tZW5hcmlrJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNSaWNoV2FuJTVDRG9jdW1lbnRzJTVDUHJvamVjdCU1Q3Rva29tZW5hcmlrJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN3QztBQUNySDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcUmljaFdhblxcXFxEb2N1bWVudHNcXFxcUHJvamVjdFxcXFx0b2tvbWVuYXJpa1xcXFxhcHBcXFxcYXBpXFxcXHByb2R1Y3RcXFxcW3NsdWddXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcm9kdWN0L1tzbHVnXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Byb2R1Y3QvW3NsdWddXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wcm9kdWN0L1tzbHVnXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXFJpY2hXYW5cXFxcRG9jdW1lbnRzXFxcXFByb2plY3RcXFxcdG9rb21lbmFyaWtcXFxcYXBwXFxcXGFwaVxcXFxwcm9kdWN0XFxcXFtzbHVnXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fproduct%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2F%5Bslug%5D%2Froute.js&appDir=C%3A%5CUsers%5CRichWan%5CDocuments%5CProject%5Ctokomenarik%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CRichWan%5CDocuments%5CProject%5Ctokomenarik&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/product/[slug]/route.js":
/*!*****************************************!*\
  !*** ./app/api/product/[slug]/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst products = {\n    \"kacamata-anti-radiasi\": {\n        name: \"KACAMATA ANTI RADIASI\",\n        slug: \"kacamata-anti-radiasi\",\n        emoji: \"👓\",\n        tagline: \"Lindungi Mata Anda dari Blue Light\",\n        highlights: [\n            {\n                emoji: \"🔥\",\n                text: \"Anti Blue Light\"\n            },\n            {\n                emoji: \"💻\",\n                text: \"PC & Laptop\"\n            },\n            {\n                emoji: \"📱\",\n                text: \"Smartphone\"\n            },\n            {\n                emoji: \"✨\",\n                text: \"Premium\"\n            }\n        ],\n        photos: [\n            \"https://down-id.img.susercontent.com/file/id-11134207-7ras8-m2w1qzx0a3es8f@resize_w450_nl.webp\",\n            \"https://down-id.img.susercontent.com/file/id-11134207-7rask-m2w1qzx0bhz8a6@resize_w450_nl.webp\",\n            \"https://down-id.img.susercontent.com/file/id-11134207-7rasa-m2w2437o8ri72e@resize_w450_nl.webp\",\n            \"https://down-id.img.susercontent.com/file/id-11134207-7r991-lnk9dlzv95oh4d@resize_w450_nl.webp\",\n            \"https://down-id.img.susercontent.com/file/id-11134207-7qul4-lgqsieoo31r079@resize_w450_nl.webp\"\n        ],\n        originalPrice: 253000,\n        salePrice: 110000,\n        whatsappNumber: \"6281221871961\",\n        bonus: \"Refill Pewangi Premium (senilai Rp 150.000)\",\n        videoPoster: \"https://down-id.img.susercontent.com/file/87eb8008d88ce292582d8ea9fc3bdfae@resize_w82_nl.webp\",\n        videoUrl: \"https://cvf.shopee.co.id/file/05e7bf777f1117480e510a51a90f2451\",\n        features: [\n            \"🔥 ANTI BLUE LIGHT\",\n            \"☀️ UV PROTECTION\",\n            \"👓 FRAME PREMIUM\",\n            \"🎯 MATA TIDAK LELAH\",\n            \"💪 AWET & TAHAN LAMA\",\n            \"✨ DESIGN MODERN\"\n        ],\n        stock: 7\n    },\n    \"kotak-makan-karakter-kaca-mata\": {\n        slug: \"kotak-makan-karakter-kaca-mata\",\n        name: \"Kotak Makan Karakter Kaca Mata\",\n        emoji: \"🍱\",\n        tagline: \"Kotak Makan Lucu & Praktis untuk Sehari-hari\",\n        highlights: [\n            {\n                emoji: \"♨️\",\n                text: \"Microwave Safe\"\n            },\n            {\n                emoji: \"❄️\",\n                text: \"Freezer Safe\"\n            },\n            {\n                emoji: \"🧼\",\n                text: \"Dishwasher Safe\"\n            },\n            {\n                emoji: \"🚫\",\n                text: \"BPA Free\"\n            }\n        ],\n        photos: [\n            \"https://down-id.img.susercontent.com/file/id-11134201-23030-5a1z1cfpjvov76.webp\",\n            \"https://down-id.img.susercontent.com/file/id-11134201-23030-1hjv3ffpjvov0e.webp\",\n            \"https://down-id.img.susercontent.com/file/id-11134201-23030-o6yxeefpjvovf5.webp\"\n        ],\n        originalPrice: 143000,\n        salePrice: 110000,\n        whatsappNumber: \"6281221871961\",\n        bonus: \"Extra Bubble Wrap (Optional)\",\n        videoPoster: \"https://down-id.img.susercontent.com/file/id-11110105-7r98q-lnuzsyz3w2i5eb@resize_w82_nl.webp\",\n        videoUrl: \"https://cvf.shopee.co.id/file/api/v4/11110105/mms/id-11110105-6ke1k-lnuzsqcweu899b.16000081699504395.mp4\",\n        features: [\n            \"🍱 KAPASITAS 800ML\",\n            \"♨️ AMAN DI MICROWAVE\",\n            \"❄️ BISA DISIMPAN DI FREEZER\",\n            \"🧼 BISA DICUCI DI DISHWASHER\",\n            \"🚫 BEBAS BPA\",\n            \"✨ DESAIN KARAKTER LUCU\",\n            \"🎁 COCOK UNTUK HADIAH\"\n        ],\n        specifications: {\n            Kategori: \"Tempat Penyimpanan Makanan / Kotak Bekal\",\n            Stok: \"1753\",\n            Kapasitas: \"800ml\",\n            Material: \"PP (Food Grade)\",\n            Fitur: [\n                \"BPA Free\",\n                \"Dapat Dicuci dengan Dishwasher\",\n                \"Dapat Disimpan dalam Freezer\",\n                \"Dapat Dipanaskan dengan Microwave\",\n                \"Dengan Tutup\"\n            ],\n            Warna: [\n                \"Pink\",\n                \"Abu\",\n                \"Coklat\"\n            ],\n            Pengiriman: \"KOTA JAKARTA BARAT\"\n        },\n        notes: [\n            \"Tidak ada kotak kecil/tempat sambal\",\n            \"Rekam video unboxing untuk kemudahan komplain\",\n            \"Tambahkan Extra Bubble Wrap untuk keamanan pengiriman\"\n        ],\n        stock: 1753\n    }\n};\nasync function GET(request, { params }) {\n    const product = products[params.slug];\n    if (!product) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Product not found\"\n        }, {\n            status: 404\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(product);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2R1Y3QvW3NsdWddL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRTNDLE1BQU1DLFdBQVc7SUFDZix5QkFBeUI7UUFDdkJDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsWUFBWTtZQUNWO2dCQUFFRixPQUFPO2dCQUFNRyxNQUFNO1lBQWtCO1lBQ3ZDO2dCQUFFSCxPQUFPO2dCQUFNRyxNQUFNO1lBQWM7WUFDbkM7Z0JBQUVILE9BQU87Z0JBQU1HLE1BQU07WUFBYTtZQUNsQztnQkFBRUgsT0FBTztnQkFBS0csTUFBTTtZQUFVO1NBQy9CO1FBQ0RDLFFBQVE7WUFDTjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7UUFDREMsZUFBZTtRQUNmQyxXQUFXO1FBQ1hDLGdCQUFnQjtRQUNoQkMsT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLFVBQVU7UUFDVkMsVUFBVTtZQUNSO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO1FBQ0RDLE9BQU87SUFDVDtJQUNBLGtDQUFrQztRQUNoQ2IsTUFBTTtRQUNORCxNQUFNO1FBQ05FLE9BQU87UUFDUEMsU0FBUztRQUNUQyxZQUFZO1lBQ1Y7Z0JBQUVGLE9BQU87Z0JBQU1HLE1BQU07WUFBaUI7WUFDdEM7Z0JBQUVILE9BQU87Z0JBQU1HLE1BQU07WUFBZTtZQUNwQztnQkFBRUgsT0FBTztnQkFBTUcsTUFBTTtZQUFrQjtZQUN2QztnQkFBRUgsT0FBTztnQkFBTUcsTUFBTTtZQUFXO1NBQ2pDO1FBQ0RDLFFBQVE7WUFDTjtZQUNBO1lBQ0E7U0FDRDtRQUNEQyxlQUFlO1FBQ2ZDLFdBQVc7UUFDWEMsZ0JBQWdCO1FBQ2hCQyxPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsVUFDRTtRQUNGQyxVQUFVO1lBQ1I7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtRQUNERSxnQkFBZ0I7WUFDZEMsVUFBVTtZQUNWQyxNQUFNO1lBQ05DLFdBQVc7WUFDWEMsVUFBVTtZQUNWQyxPQUFPO2dCQUNMO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2FBQ0Q7WUFDREMsT0FBTztnQkFBQztnQkFBUTtnQkFBTzthQUFTO1lBQ2hDQyxZQUFZO1FBQ2Q7UUFDQUMsT0FBTztZQUNMO1lBQ0E7WUFDQTtTQUNEO1FBQ0RULE9BQU87SUFDVDtBQUNGO0FBRU8sZUFBZVUsSUFBSUMsT0FBTyxFQUFFLEVBQUVDLE1BQU0sRUFBRTtJQUMzQyxNQUFNQyxVQUFVNUIsUUFBUSxDQUFDMkIsT0FBT3pCLElBQUksQ0FBQztJQUVyQyxJQUFJLENBQUMwQixTQUFTO1FBQ1osT0FBTzdCLHFEQUFZQSxDQUFDOEIsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBb0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDekU7SUFFQSxPQUFPaEMscURBQVlBLENBQUM4QixJQUFJLENBQUNEO0FBQzNCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFJpY2hXYW5cXERvY3VtZW50c1xcUHJvamVjdFxcdG9rb21lbmFyaWtcXGFwcFxcYXBpXFxwcm9kdWN0XFxbc2x1Z11cXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuY29uc3QgcHJvZHVjdHMgPSB7XHJcbiAgXCJrYWNhbWF0YS1hbnRpLXJhZGlhc2lcIjoge1xyXG4gICAgbmFtZTogXCJLQUNBTUFUQSBBTlRJIFJBRElBU0lcIixcclxuICAgIHNsdWc6IFwia2FjYW1hdGEtYW50aS1yYWRpYXNpXCIsXHJcbiAgICBlbW9qaTogXCLwn5GTXCIsXHJcbiAgICB0YWdsaW5lOiBcIkxpbmR1bmdpIE1hdGEgQW5kYSBkYXJpIEJsdWUgTGlnaHRcIixcclxuICAgIGhpZ2hsaWdodHM6IFtcclxuICAgICAgeyBlbW9qaTogXCLwn5SlXCIsIHRleHQ6IFwiQW50aSBCbHVlIExpZ2h0XCIgfSxcclxuICAgICAgeyBlbW9qaTogXCLwn5K7XCIsIHRleHQ6IFwiUEMgJiBMYXB0b3BcIiB9LFxyXG4gICAgICB7IGVtb2ppOiBcIvCfk7FcIiwgdGV4dDogXCJTbWFydHBob25lXCIgfSxcclxuICAgICAgeyBlbW9qaTogXCLinKhcIiwgdGV4dDogXCJQcmVtaXVtXCIgfSxcclxuICAgIF0sXHJcbiAgICBwaG90b3M6IFtcclxuICAgICAgXCJodHRwczovL2Rvd24taWQuaW1nLnN1c2VyY29udGVudC5jb20vZmlsZS9pZC0xMTEzNDIwNy03cmFzOC1tMncxcXp4MGEzZXM4ZkByZXNpemVfdzQ1MF9ubC53ZWJwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9kb3duLWlkLmltZy5zdXNlcmNvbnRlbnQuY29tL2ZpbGUvaWQtMTExMzQyMDctN3Jhc2stbTJ3MXF6eDBiaHo4YTZAcmVzaXplX3c0NTBfbmwud2VicFwiLFxyXG4gICAgICBcImh0dHBzOi8vZG93bi1pZC5pbWcuc3VzZXJjb250ZW50LmNvbS9maWxlL2lkLTExMTM0MjA3LTdyYXNhLW0ydzI0MzdvOHJpNzJlQHJlc2l6ZV93NDUwX25sLndlYnBcIixcclxuICAgICAgXCJodHRwczovL2Rvd24taWQuaW1nLnN1c2VyY29udGVudC5jb20vZmlsZS9pZC0xMTEzNDIwNy03cjk5MS1sbms5ZGx6djk1b2g0ZEByZXNpemVfdzQ1MF9ubC53ZWJwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9kb3duLWlkLmltZy5zdXNlcmNvbnRlbnQuY29tL2ZpbGUvaWQtMTExMzQyMDctN3F1bDQtbGdxc2llb28zMXIwNzlAcmVzaXplX3c0NTBfbmwud2VicFwiLFxyXG4gICAgXSxcclxuICAgIG9yaWdpbmFsUHJpY2U6IDI1MzAwMCxcclxuICAgIHNhbGVQcmljZTogMTEwMDAwLFxyXG4gICAgd2hhdHNhcHBOdW1iZXI6IFwiNjI4MTIyMTg3MTk2MVwiLFxyXG4gICAgYm9udXM6IFwiUmVmaWxsIFBld2FuZ2kgUHJlbWl1bSAoc2VuaWxhaSBScCAxNTAuMDAwKVwiLFxyXG4gICAgdmlkZW9Qb3N0ZXI6XHJcbiAgICAgIFwiaHR0cHM6Ly9kb3duLWlkLmltZy5zdXNlcmNvbnRlbnQuY29tL2ZpbGUvODdlYjgwMDhkODhjZTI5MjU4MmQ4ZWE5ZmMzYmRmYWVAcmVzaXplX3c4Ml9ubC53ZWJwXCIsXHJcbiAgICB2aWRlb1VybDogXCJodHRwczovL2N2Zi5zaG9wZWUuY28uaWQvZmlsZS8wNWU3YmY3NzdmMTExNzQ4MGU1MTBhNTFhOTBmMjQ1MVwiLFxyXG4gICAgZmVhdHVyZXM6IFtcclxuICAgICAgXCLwn5SlIEFOVEkgQkxVRSBMSUdIVFwiLFxyXG4gICAgICBcIuKYgO+4jyBVViBQUk9URUNUSU9OXCIsXHJcbiAgICAgIFwi8J+RkyBGUkFNRSBQUkVNSVVNXCIsXHJcbiAgICAgIFwi8J+OryBNQVRBIFRJREFLIExFTEFIXCIsXHJcbiAgICAgIFwi8J+SqiBBV0VUICYgVEFIQU4gTEFNQVwiLFxyXG4gICAgICBcIuKcqCBERVNJR04gTU9ERVJOXCIsXHJcbiAgICBdLFxyXG4gICAgc3RvY2s6IDcsXHJcbiAgfSxcclxuICBcImtvdGFrLW1ha2FuLWthcmFrdGVyLWthY2EtbWF0YVwiOiB7XHJcbiAgICBzbHVnOiBcImtvdGFrLW1ha2FuLWthcmFrdGVyLWthY2EtbWF0YVwiLFxyXG4gICAgbmFtZTogXCJLb3RhayBNYWthbiBLYXJha3RlciBLYWNhIE1hdGFcIixcclxuICAgIGVtb2ppOiBcIvCfjbFcIixcclxuICAgIHRhZ2xpbmU6IFwiS290YWsgTWFrYW4gTHVjdSAmIFByYWt0aXMgdW50dWsgU2VoYXJpLWhhcmlcIixcclxuICAgIGhpZ2hsaWdodHM6IFtcclxuICAgICAgeyBlbW9qaTogXCLimajvuI9cIiwgdGV4dDogXCJNaWNyb3dhdmUgU2FmZVwiIH0sXHJcbiAgICAgIHsgZW1vamk6IFwi4p2E77iPXCIsIHRleHQ6IFwiRnJlZXplciBTYWZlXCIgfSxcclxuICAgICAgeyBlbW9qaTogXCLwn6e8XCIsIHRleHQ6IFwiRGlzaHdhc2hlciBTYWZlXCIgfSxcclxuICAgICAgeyBlbW9qaTogXCLwn5qrXCIsIHRleHQ6IFwiQlBBIEZyZWVcIiB9LFxyXG4gICAgXSxcclxuICAgIHBob3RvczogW1xyXG4gICAgICBcImh0dHBzOi8vZG93bi1pZC5pbWcuc3VzZXJjb250ZW50LmNvbS9maWxlL2lkLTExMTM0MjAxLTIzMDMwLTVhMXoxY2ZwanZvdjc2LndlYnBcIixcclxuICAgICAgXCJodHRwczovL2Rvd24taWQuaW1nLnN1c2VyY29udGVudC5jb20vZmlsZS9pZC0xMTEzNDIwMS0yMzAzMC0xaGp2M2ZmcGp2b3YwZS53ZWJwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9kb3duLWlkLmltZy5zdXNlcmNvbnRlbnQuY29tL2ZpbGUvaWQtMTExMzQyMDEtMjMwMzAtbzZ5eGVlZnBqdm92ZjUud2VicFwiLFxyXG4gICAgXSxcclxuICAgIG9yaWdpbmFsUHJpY2U6IDE0MzAwMCxcclxuICAgIHNhbGVQcmljZTogMTEwMDAwLFxyXG4gICAgd2hhdHNhcHBOdW1iZXI6IFwiNjI4MTIyMTg3MTk2MVwiLFxyXG4gICAgYm9udXM6IFwiRXh0cmEgQnViYmxlIFdyYXAgKE9wdGlvbmFsKVwiLFxyXG4gICAgdmlkZW9Qb3N0ZXI6XHJcbiAgICAgIFwiaHR0cHM6Ly9kb3duLWlkLmltZy5zdXNlcmNvbnRlbnQuY29tL2ZpbGUvaWQtMTExMTAxMDUtN3I5OHEtbG51enN5ejN3Mmk1ZWJAcmVzaXplX3c4Ml9ubC53ZWJwXCIsXHJcbiAgICB2aWRlb1VybDpcclxuICAgICAgXCJodHRwczovL2N2Zi5zaG9wZWUuY28uaWQvZmlsZS9hcGkvdjQvMTExMTAxMDUvbW1zL2lkLTExMTEwMTA1LTZrZTFrLWxudXpzcWN3ZXU4OTliLjE2MDAwMDgxNjk5NTA0Mzk1Lm1wNFwiLFxyXG4gICAgZmVhdHVyZXM6IFtcclxuICAgICAgXCLwn42xIEtBUEFTSVRBUyA4MDBNTFwiLFxyXG4gICAgICBcIuKZqO+4jyBBTUFOIERJIE1JQ1JPV0FWRVwiLFxyXG4gICAgICBcIuKdhO+4jyBCSVNBIERJU0lNUEFOIERJIEZSRUVaRVJcIixcclxuICAgICAgXCLwn6e8IEJJU0EgRElDVUNJIERJIERJU0hXQVNIRVJcIixcclxuICAgICAgXCLwn5qrIEJFQkFTIEJQQVwiLFxyXG4gICAgICBcIuKcqCBERVNBSU4gS0FSQUtURVIgTFVDVVwiLFxyXG4gICAgICBcIvCfjoEgQ09DT0sgVU5UVUsgSEFESUFIXCIsXHJcbiAgICBdLFxyXG4gICAgc3BlY2lmaWNhdGlvbnM6IHtcclxuICAgICAgS2F0ZWdvcmk6IFwiVGVtcGF0IFBlbnlpbXBhbmFuIE1ha2FuYW4gLyBLb3RhayBCZWthbFwiLFxyXG4gICAgICBTdG9rOiBcIjE3NTNcIixcclxuICAgICAgS2FwYXNpdGFzOiBcIjgwMG1sXCIsXHJcbiAgICAgIE1hdGVyaWFsOiBcIlBQIChGb29kIEdyYWRlKVwiLFxyXG4gICAgICBGaXR1cjogW1xyXG4gICAgICAgIFwiQlBBIEZyZWVcIixcclxuICAgICAgICBcIkRhcGF0IERpY3VjaSBkZW5nYW4gRGlzaHdhc2hlclwiLFxyXG4gICAgICAgIFwiRGFwYXQgRGlzaW1wYW4gZGFsYW0gRnJlZXplclwiLFxyXG4gICAgICAgIFwiRGFwYXQgRGlwYW5hc2thbiBkZW5nYW4gTWljcm93YXZlXCIsXHJcbiAgICAgICAgXCJEZW5nYW4gVHV0dXBcIixcclxuICAgICAgXSxcclxuICAgICAgV2FybmE6IFtcIlBpbmtcIiwgXCJBYnVcIiwgXCJDb2tsYXRcIl0sXHJcbiAgICAgIFBlbmdpcmltYW46IFwiS09UQSBKQUtBUlRBIEJBUkFUXCIsXHJcbiAgICB9LFxyXG4gICAgbm90ZXM6IFtcclxuICAgICAgXCJUaWRhayBhZGEga290YWsga2VjaWwvdGVtcGF0IHNhbWJhbFwiLFxyXG4gICAgICBcIlJla2FtIHZpZGVvIHVuYm94aW5nIHVudHVrIGtlbXVkYWhhbiBrb21wbGFpblwiLFxyXG4gICAgICBcIlRhbWJhaGthbiBFeHRyYSBCdWJibGUgV3JhcCB1bnR1ayBrZWFtYW5hbiBwZW5naXJpbWFuXCIsXHJcbiAgICBdLFxyXG4gICAgc3RvY2s6IDE3NTMsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCwgeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0c1twYXJhbXMuc2x1Z107XHJcblxyXG4gIGlmICghcHJvZHVjdCkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiUHJvZHVjdCBub3QgZm91bmRcIiB9LCB7IHN0YXR1czogNDA0IH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHByb2R1Y3QpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcm9kdWN0cyIsIm5hbWUiLCJzbHVnIiwiZW1vamkiLCJ0YWdsaW5lIiwiaGlnaGxpZ2h0cyIsInRleHQiLCJwaG90b3MiLCJvcmlnaW5hbFByaWNlIiwic2FsZVByaWNlIiwid2hhdHNhcHBOdW1iZXIiLCJib251cyIsInZpZGVvUG9zdGVyIiwidmlkZW9VcmwiLCJmZWF0dXJlcyIsInN0b2NrIiwic3BlY2lmaWNhdGlvbnMiLCJLYXRlZ29yaSIsIlN0b2siLCJLYXBhc2l0YXMiLCJNYXRlcmlhbCIsIkZpdHVyIiwiV2FybmEiLCJQZW5naXJpbWFuIiwibm90ZXMiLCJHRVQiLCJyZXF1ZXN0IiwicGFyYW1zIiwicHJvZHVjdCIsImpzb24iLCJlcnJvciIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/product/[slug]/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fproduct%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2F%5Bslug%5D%2Froute.js&appDir=C%3A%5CUsers%5CRichWan%5CDocuments%5CProject%5Ctokomenarik%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CRichWan%5CDocuments%5CProject%5Ctokomenarik&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();