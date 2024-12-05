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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/products.json */ \"(rsc)/./data/products.json\");\n\n\nasync function GET(request, { params }) {\n    const product = _data_products_json__WEBPACK_IMPORTED_MODULE_1__[params.slug];\n    if (!product) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Product not found\"\n        }, {\n            status: 404\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(product);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2R1Y3QvW3NsdWddL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNlO0FBR25ELGVBQWVFLElBQUlDLE9BQU8sRUFBRSxFQUFFQyxNQUFNLEVBQUU7SUFDM0MsTUFBTUMsVUFBVUosZ0RBQVksQ0FBQ0csT0FBT0UsSUFBSSxDQUFDO0lBRXpDLElBQUksQ0FBQ0QsU0FBUztRQUNaLE9BQU9MLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFvQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN6RTtJQUVBLE9BQU9ULHFEQUFZQSxDQUFDTyxJQUFJLENBQUNGO0FBQzNCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFJpY2hXYW5cXERvY3VtZW50c1xcUHJvamVjdFxcdG9rb21lbmFyaWtcXGFwcFxcYXBpXFxwcm9kdWN0XFxbc2x1Z11cXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgcHJvZHVjdHNEYXRhIGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL3Byb2R1Y3RzLmpzb25cIjtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QsIHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHNEYXRhW3BhcmFtcy5zbHVnXTtcclxuXHJcbiAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJQcm9kdWN0IG5vdCBmb3VuZFwiIH0sIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocHJvZHVjdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByb2R1Y3RzRGF0YSIsIkdFVCIsInJlcXVlc3QiLCJwYXJhbXMiLCJwcm9kdWN0Iiwic2x1ZyIsImpzb24iLCJlcnJvciIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/product/[slug]/route.js\n");

/***/ }),

/***/ "(rsc)/./data/products.json":
/*!****************************!*\
  !*** ./data/products.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"kacamata-anti-radiasi":{"name":"KACAMATA ANTI RADIASI","slug":"kacamata-anti-radiasi","emoji":"👓","tagline":"Lindungi Mata Anda dari Blue Light","highlights":[{"emoji":"🔥","text":"Anti Blue Light"},{"emoji":"💻","text":"PC & Laptop"},{"emoji":"📱","text":"Smartphone"},{"emoji":"✨","text":"Premium"}],"photos":["https://down-id.img.susercontent.com/file/id-11134207-7ras8-m2w1qzx0a3es8f@resize_w450_nl.webp","https://down-id.img.susercontent.com/file/id-11134207-7rask-m2w1qzx0bhz8a6@resize_w450_nl.webp","https://down-id.img.susercontent.com/file/id-11134207-7rasa-m2w2437o8ri72e@resize_w450_nl.webp","https://down-id.img.susercontent.com/file/id-11134207-7r991-lnk9dlzv95oh4d@resize_w450_nl.webp","https://down-id.img.susercontent.com/file/id-11134207-7qul4-lgqsieoo31r079@resize_w450_nl.webp"],"originalPrice":253000,"salePrice":110000,"whatsappNumber":"6281221871961","bonus":"Refill Pewangi Premium (senilai Rp 150.000)","videoPoster":"https://down-id.img.susercontent.com/file/87eb8008d88ce292582d8ea9fc3bdfae@resize_w82_nl.webp","videoUrl":"https://cvf.shopee.co.id/file/05e7bf777f1117480e510a51a90f2451","features":["🔥 ANTI BLUE LIGHT","☀️ UV PROTECTION","👓 FRAME PREMIUM","🎯 MATA TIDAK LELAH","💪 AWET & TAHAN LAMA","✨ DESIGN MODERN"],"stock":7},"kotak-makan-karakter-kaca-mata":{"slug":"kotak-makan-karakter-kaca-mata","name":"Kotak Makan Karakter Kaca Mata","emoji":"🍱","tagline":"Kotak Makan Lucu & Praktis untuk Sehari-hari","highlights":[{"emoji":"♨️","text":"Microwave Safe"},{"emoji":"❄️","text":"Freezer Safe"},{"emoji":"🧼","text":"Dishwasher Safe"},{"emoji":"🚫","text":"BPA Free"}],"photos":["https://down-id.img.susercontent.com/file/id-11134201-23030-5a1z1cfpjvov76.webp","https://down-id.img.susercontent.com/file/id-11134201-23030-1hjv3ffpjvov0e.webp","https://down-id.img.susercontent.com/file/id-11134201-23030-o6yxeefpjvovf5.webp"],"originalPrice":143000,"salePrice":110000,"whatsappNumber":"6281221871961","bonus":"Extra Bubble Wrap (Optional)","videoPoster":"https://down-id.img.susercontent.com/file/id-11110105-7r98q-lnuzsyz3w2i5eb@resize_w82_nl.webp","videoUrl":"https://cvf.shopee.co.id/file/api/v4/11110105/mms/id-11110105-6ke1k-lnuzsqcweu899b.16000081699504395.mp4","features":["🍱 KAPASITAS 800ML","♨️ AMAN DI MICROWAVE","❄️ BISA DISIMPAN DI FREEZER","🧼 BISA DICUCI DI DISHWASHER","🚫 BEBAS BPA","✨ DESAIN KARAKTER LUCU","🎁 COCOK UNTUK HADIAH"],"specifications":{"  Kategori":"Tempat Penyimpanan Makanan / Kotak Bekal","  Stok":"1753","  Kapasitas":"800ml","  Material":"PP (Food Grade)","  Fitur":["BPA Free","Dapat Dicuci dengan Dishwasher","Dapat Disimpan dalam Freezer","Dapat Dipanaskan dengan Microwave","Dengan Tutup"],"Warna":["Pink","Abu","Coklat"],"Pengiriman":"KOTA JAKARTA BARAT"},"notes":["Tidak ada kotak kecil/tempat sambal","Rekam video unboxing untuk kemudahan komplain","Tambahkan Extra Bubble Wrap untuk keamanan pengiriman"],"stock":1753}}');

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