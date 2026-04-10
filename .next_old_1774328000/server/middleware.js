(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[826],{

/***/ 476:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ar.json": 519,
	"./cs.json": 201,
	"./de.json": 964,
	"./en.json": 981,
	"./es.json": 573,
	"./fr.json": 456,
	"./ur.json": 817,
	"./zh.json": 874
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 476;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 67:
/***/ ((module) => {

"use strict";
module.exports = require("node:async_hooks");

/***/ }),

/***/ 195:
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ 419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ nHandler)
});

// NAMESPACE OBJECT: ./middleware.ts
var middleware_namespaceObject_0 = {};
__webpack_require__.r(middleware_namespaceObject_0);
__webpack_require__.d(middleware_namespaceObject_0, {
  config: () => (config),
  "default": () => (middleware_0)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/globals.js
async function registerInstrumentation() {
    if ("_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && _ENTRIES.middleware_instrumentation.register) {
        try {
            await _ENTRIES.middleware_instrumentation.register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if (!registerInstrumentationPromise) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === "then") {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === "function") {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== __webpack_require__.g.process) {
        // prefer local process but global.process has correct "env"
        process.env = __webpack_require__.g.process.env;
        __webpack_require__.g.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, "__import_unsupported", {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    // Eagerly fire instrumentation hook to make the startup faster.
    void ensureInstrumentationRegistered();
}
enhanceGlobals(); //# sourceMappingURL=globals.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/error.js
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/utils.js
var utils = __webpack_require__(7);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js

const responseSymbol = Symbol("response");
const passThroughSymbol = Symbol("passThrough");
const waitUntilSymbol = Symbol("waitUntil");
class FetchEvent {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){
        this[waitUntilSymbol] = [];
        this[passThroughSymbol] = false;
    }
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        super(params.request);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
} //# sourceMappingURL=fetch-event.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/next-url.js + 12 modules
var next_url = __webpack_require__(498);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/cookies.js
var spec_extension_cookies = __webpack_require__(141);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/request.js




const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0,utils/* validateURL */.r4)(url);
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new next_url/* NextURL */.c(url, {
            headers: (0,utils/* toNodeOutgoingHttpHeaders */.lb)(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new spec_extension_cookies/* RequestCookies */.q(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url:  false ? 0 : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/response.js
var spec_extension_response = __webpack_require__(695);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js
/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ function relativizeURL(url, base) {
    const baseURL = typeof base === "string" ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = baseURL.protocol + "//" + baseURL.host;
    return relative.protocol + "//" + relative.host === origin ? relative.toString().replace(origin, "") : relative.toString();
} //# sourceMappingURL=relativize-url.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/app-router-headers.js
const RSC_HEADER = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH_HEADER = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = RSC_HEADER + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH_HEADER + ", " + NEXT_URL;
const FLIGHT_PARAMETERS = [
    [
        RSC_HEADER
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH_HEADER
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc";
const NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed"; //# sourceMappingURL=app-router-headers.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/shared/lib/modern-browserslist-target.js
var modern_browserslist_target = __webpack_require__(687);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/constants.js


const COMPILER_NAMES = {
    client: "client",
    server: "server",
    edgeServer: "edge-server"
};
/**
 * Headers that are set by the Next.js server and should be stripped from the
 * request headers going to the user's application.
 */ const constants_INTERNAL_HEADERS = (/* unused pure expression or super */ null && ([
    "x-invoke-error",
    "x-invoke-output",
    "x-invoke-path",
    "x-invoke-query",
    "x-invoke-status",
    "x-middleware-invoke"
]));
const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
const PHASE_EXPORT = "phase-export";
const PHASE_PRODUCTION_BUILD = "phase-production-build";
const PHASE_PRODUCTION_SERVER = "phase-production-server";
const PHASE_DEVELOPMENT_SERVER = "phase-development-server";
const PHASE_TEST = "phase-test";
const PHASE_INFO = "phase-info";
const PAGES_MANIFEST = "pages-manifest.json";
const APP_PATHS_MANIFEST = "app-paths-manifest.json";
const APP_PATH_ROUTES_MANIFEST = "app-path-routes-manifest.json";
const BUILD_MANIFEST = "build-manifest.json";
const APP_BUILD_MANIFEST = "app-build-manifest.json";
const FUNCTIONS_CONFIG_MANIFEST = "functions-config-manifest.json";
const SUBRESOURCE_INTEGRITY_MANIFEST = "subresource-integrity-manifest";
const NEXT_FONT_MANIFEST = "next-font-manifest";
const EXPORT_MARKER = "export-marker.json";
const EXPORT_DETAIL = "export-detail.json";
const PRERENDER_MANIFEST = "prerender-manifest.json";
const ROUTES_MANIFEST = "routes-manifest.json";
const IMAGES_MANIFEST = "images-manifest.json";
const SERVER_FILES_MANIFEST = "required-server-files.json";
const DEV_CLIENT_PAGES_MANIFEST = "_devPagesManifest.json";
const MIDDLEWARE_MANIFEST = "middleware-manifest.json";
const DEV_MIDDLEWARE_MANIFEST = "_devMiddlewareManifest.json";
const REACT_LOADABLE_MANIFEST = "react-loadable-manifest.json";
const FONT_MANIFEST = "font-manifest.json";
const SERVER_DIRECTORY = "server";
const CONFIG_FILES = (/* unused pure expression or super */ null && ([
    "next.config.js",
    "next.config.mjs"
]));
const BUILD_ID_FILE = "BUILD_ID";
const BLOCKED_PAGES = (/* unused pure expression or super */ null && ([
    "/_document",
    "/_app",
    "/_error"
]));
const CLIENT_PUBLIC_FILES_PATH = "public";
const CLIENT_STATIC_FILES_PATH = "static";
const STRING_LITERAL_DROP_BUNDLE = "__NEXT_DROP_CLIENT_FILE__";
const NEXT_BUILTIN_DOCUMENT = "__NEXT_BUILTIN_DOCUMENT__";
const BARREL_OPTIMIZATION_PREFIX = "__barrel_optimize__";
// server/[entry]/page_client-reference-manifest.js
const CLIENT_REFERENCE_MANIFEST = "client-reference-manifest";
// server/server-reference-manifest
const SERVER_REFERENCE_MANIFEST = "server-reference-manifest";
// server/middleware-build-manifest.js
const MIDDLEWARE_BUILD_MANIFEST = "middleware-build-manifest";
// server/middleware-react-loadable-manifest.js
const MIDDLEWARE_REACT_LOADABLE_MANIFEST = "middleware-react-loadable-manifest";
// static/runtime/main.js
const CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = "" + CLIENT_STATIC_FILES_RUNTIME_MAIN + "-app";
// next internal client components chunk for layouts
const APP_CLIENT_INTERNALS = "app-pages-internals";
// static/runtime/react-refresh.js
const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
// static/runtime/amp.js
const CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
// static/runtime/webpack.js
const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
// static/runtime/polyfills.js
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = "polyfills";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
const EDGE_RUNTIME_WEBPACK = "edge-runtime-webpack";
const STATIC_PROPS_ID = "__N_SSG";
const SERVER_PROPS_ID = "__N_SSP";
const PAGE_SEGMENT_KEY = "__PAGE__";
const GOOGLE_FONT_PROVIDER = "https://fonts.googleapis.com/";
const OPTIMIZED_FONT_PROVIDERS = [
    {
        url: GOOGLE_FONT_PROVIDER,
        preconnect: "https://fonts.gstatic.com"
    },
    {
        url: "https://use.typekit.net",
        preconnect: "https://use.typekit.net"
    }
];
const DEFAULT_SERIF_FONT = {
    name: "Times New Roman",
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
const DEFAULT_SANS_SERIF_FONT = {
    name: "Arial",
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
const STATIC_STATUS_PAGES = (/* unused pure expression or super */ null && ([
    "/500"
]));
const TRACE_OUTPUT_VERSION = 1;
// in `MB`
const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
const RSC_MODULE_TYPES = {
    client: "client",
    server: "server"
};
// comparing
// https://nextjs.org/docs/api-reference/edge-runtime
// with
// https://nodejs.org/docs/latest/api/globals.html
const EDGE_UNSUPPORTED_NODE_APIS = (/* unused pure expression or super */ null && ([
    "clearImmediate",
    "setImmediate",
    "BroadcastChannel",
    "ByteLengthQueuingStrategy",
    "CompressionStream",
    "CountQueuingStrategy",
    "DecompressionStream",
    "DomException",
    "MessageChannel",
    "MessageEvent",
    "MessagePort",
    "ReadableByteStreamController",
    "ReadableStreamBYOBRequest",
    "ReadableStreamDefaultController",
    "TransformStreamDefaultController",
    "WritableStreamDefaultController"
]));
const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_AMP,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]); //# sourceMappingURL=constants.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/internal-utils.js


const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextInferredLocaleFromDefault",
    "__nextDefaultLocale",
    "__nextIsNotFound",
    NEXT_RSC_UNION_QUERY
];
const EDGE_EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(url, isEdge) {
    const isStringUrl = typeof url === "string";
    const instance = isStringUrl ? new URL(url) : url;
    for (const name of INTERNAL_QUERY_NAMES){
        instance.searchParams.delete(name);
    }
    if (isEdge) {
        for (const name of EDGE_EXTENDED_INTERNAL_QUERY_NAMES){
            instance.searchParams.delete(name);
        }
    }
    return isStringUrl ? instance.toString() : instance;
}
/**
 * Strip internal headers from the request headers.
 *
 * @param headers the headers to strip of internal headers
 */ function stripInternalHeaders(headers) {
    for (const key of INTERNAL_HEADERS){
        delete headers[key];
    }
} //# sourceMappingURL=internal-utils.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js


/**
 * Normalizes an app route so it represents the actual request path. Essentially
 * performing the following transformations:
 *
 * - `/(dashboard)/user/[id]/page` to `/user/[id]`
 * - `/(dashboard)/account/page` to `/account`
 * - `/user/[id]/page` to `/user/[id]`
 * - `/account/page` to `/account`
 * - `/page` to `/`
 * - `/(dashboard)/user/[id]/route` to `/user/[id]`
 * - `/(dashboard)/account/route` to `/account`
 * - `/user/[id]/route` to `/user/[id]`
 * - `/account/route` to `/account`
 * - `/route` to `/`
 * - `/` to `/`
 *
 * @param route the app route to normalize
 * @returns the normalized pathname
 */ function normalizeAppPath(route) {
    return ensureLeadingSlash(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (isGroupSegment(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
/**
 * Strips the `.rsc` extension if it's in the pathname.
 * Since this function is used on full urls it checks `?` for searchParams handling.
 */ function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, "$1");
} //# sourceMappingURL=app-paths.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/lib/constants.js
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
const RSC_PREFETCH_SUFFIX = ".prefetch.rsc";
const RSC_SUFFIX = ".rsc";
const NEXT_DATA_SUFFIX = ".json";
const NEXT_META_SUFFIX = ".meta";
const NEXT_BODY_SUFFIX = ".body";
const NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
const NEXT_CACHE_SOFT_TAGS_HEADER = "x-next-cache-soft-tags";
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
// in seconds
const CACHE_ONE_YEAR = 31536000;
// Patterns to detect middleware files
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = (/* unused pure expression or super */ null && (`(?:src/)?${MIDDLEWARE_FILENAME}`));
// Pattern to detect instrumentation hooks file
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
// Because on Windows absolute paths in the generated code can break because of numbers, eg 1 in the path,
// we have to use a private alias
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
const RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-action-proxy";
const RSC_ACTION_ENCRYPTION_ALIAS = "private-next-rsc-action-encryption";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = (/* unused pure expression or super */ null && (`You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`));
const SSG_GET_INITIAL_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`));
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`));
const SERVER_PROPS_SSG_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`));
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = (/* unused pure expression or super */ null && (`can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`));
const SERVER_PROPS_EXPORT_ERROR = (/* unused pure expression or super */ null && (`pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`));
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = (/* unused pure expression or super */ null && ("The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead."));
const GSSP_COMPONENT_MEMBER_ERROR = (/* unused pure expression or super */ null && (`can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`));
const NON_STANDARD_NODE_ENV = (/* unused pure expression or super */ null && (`You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`));
const SSG_FALLBACK_EXPORT_ERROR = (/* unused pure expression or super */ null && (`Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`));
const ESLINT_DEFAULT_DIRS = (/* unused pure expression or super */ null && ([
    "app",
    "pages",
    "components",
    "lib",
    "src"
]));
const ESLINT_PROMPT_VALUES = [
    {
        title: "Strict",
        recommended: true,
        config: {
            extends: "next/core-web-vitals"
        }
    },
    {
        title: "Base",
        config: {
            extends: "next"
        }
    },
    {
        title: "Cancel",
        config: null
    }
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: "shared",
    /**
   * React Server Components layer (rsc).
   */ reactServerComponents: "rsc",
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: "ssr",
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: "action-browser",
    /**
   * The layer for the API routes.
   */ api: "api",
    /**
   * The layer for the middleware code.
   */ middleware: "middleware",
    /**
   * The layer for assets on the edge.
   */ edgeAsset: "edge-asset",
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: "app-pages-browser",
    /**
   * The server bundle layer for metadata routes.
   */ appMetadataRoute: "app-metadata-route",
    /**
   * The layer for the server bundle for App Route handlers.
   */ appRouteHandler: "app-route-handler"
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        server: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler
        ],
        nonClientServerTarget: [
            // plus middleware and pages api
            WEBPACK_LAYERS_NAMES.middleware,
            WEBPACK_LAYERS_NAMES.api
        ],
        app: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: "__next_edge_ssr_entry__",
    metadata: "__next_metadata__",
    metadataRoute: "__next_metadata_route__",
    metadataImageMeta: "__next_metadata_image_meta__"
};
 //# sourceMappingURL=constants.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js

/**
 * @internal
 */ class ReadonlyHeadersError extends Error {
    constructor(){
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === "symbol") {
                    return ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === "undefined") return;
                // If the original casing exists, return the value.
                return ReflectAdapter.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === "symbol") {
                    return ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return ReflectAdapter.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === "symbol") return ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === "undefined") return false;
                // If the original casing exists, return true.
                return ReflectAdapter.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === "symbol") return ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === "undefined") return true;
                // If the original casing exists, delete the property.
                return ReflectAdapter.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case "append":
                    case "delete":
                    case "set":
                        return ReadonlyHeadersError.callable;
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== "undefined";
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js


/**
 * @internal
 */ class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case "clear":
                    case "delete":
                    case "set":
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookes = new spec_extension_cookies/* ResponseCookies */.n(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookes.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            var _fetch___nextGetStaticStore;
            // TODO-APP: change method of getting staticGenerationAsyncStore
            const staticGenerationAsyncStore = fetch.__nextGetStaticStore == null ? void 0 : (_fetch___nextGetStaticStore = fetch.__nextGetStaticStore.call(fetch)) == null ? void 0 : _fetch___nextGetStaticStore.getStore();
            if (staticGenerationAsyncStore) {
                staticGenerationAsyncStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookes.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new spec_extension_cookies/* ResponseCookies */.n(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        return new Proxy(responseCookes, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case "delete":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case "set":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                return target.set(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
} //# sourceMappingURL=request-cookies.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/api-utils/index.js


/**
 *
 * @param res response object
 * @param statusCode `HTTP` status code of response
 */ function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
/**
 *
 * @param res response object
 * @param [statusOrUrl] `HTTP` status code of redirect
 * @param url URL of redirect
 */ function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = HeadersAdapter.from(req.headers);
    const previewModeId = headers.get(PRERENDER_REVALIDATE_HEADER);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = (/* unused pure expression or super */ null && (4 * 1024 * 1024));
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __webpack_require__(53);
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
/**
 * Custom error class
 */ class ApiError extends (/* unused pure expression or super */ null && (Error)) {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
/**
 * Sends error in `response`
 * @param res response object
 * @param statusCode of response
 * @param message of response
 */ function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
/**
 * Execute getter function only if its needed
 * @param LazyProps `req` and `params` for lazyProp
 * @param prop name of property
 * @param getter function to get data
 */ function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js

class DraftModeProvider {
    constructor(previewProps, req, cookies, mutableCookies){
        var _cookies_get;
        // The logic for draftMode() is very similar to tryGetPreviewData()
        // but Draft Mode does not have any data associated with it.
        const isOnDemandRevalidate = previewProps && checkIsOnDemandRevalidate(req, previewProps).isOnDemandRevalidate;
        const cookieValue = (_cookies_get = cookies.get(COOKIE_NAME_PRERENDER_BYPASS)) == null ? void 0 : _cookies_get.value;
        this.isEnabled = Boolean(!isOnDemandRevalidate && cookieValue && previewProps && cookieValue === previewProps.previewModeId);
        this._previewModeId = previewProps == null ? void 0 : previewProps.previewModeId;
        this._mutableCookies = mutableCookies;
    }
    enable() {
        if (!this._previewModeId) {
            throw new Error("Invariant: previewProps missing previewModeId this should never happen");
        }
        this._mutableCookies.set({
            name: COOKIE_NAME_PRERENDER_BYPASS,
            value: this._previewModeId,
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/"
        });
    }
    disable() {
        // To delete a cookie, set `expires` to a date in the past:
        // https://tools.ietf.org/html/rfc6265#section-4.1.1
        // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
        this._mutableCookies.set({
            name: COOKIE_NAME_PRERENDER_BYPASS,
            value: "",
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            expires: new Date(0)
        });
    }
} //# sourceMappingURL=draft-mode-provider.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/async-storage/request-async-storage-wrapper.js





function getHeaders(headers) {
    const cleaned = HeadersAdapter.from(headers);
    for (const param of FLIGHT_PARAMETERS){
        cleaned.delete(param.toString().toLowerCase());
    }
    return HeadersAdapter.seal(cleaned);
}
function getCookies(headers) {
    const cookies = new spec_extension_cookies/* RequestCookies */.q(HeadersAdapter.from(headers));
    return RequestCookiesAdapter.seal(cookies);
}
function getMutableCookies(headers, onUpdateCookies) {
    const cookies = new spec_extension_cookies/* RequestCookies */.q(HeadersAdapter.from(headers));
    return MutableRequestCookiesAdapter.wrap(cookies, onUpdateCookies);
}
const RequestAsyncStorageWrapper = {
    /**
   * Wrap the callback with the given store so it can access the underlying
   * store using hooks.
   *
   * @param storage underlying storage object returned by the module
   * @param context context to seed the store
   * @param callback function to call within the scope of the context
   * @returns the result returned by the callback
   */ wrap (storage, { req, res, renderOpts }, callback) {
        let previewProps = undefined;
        if (renderOpts && "previewProps" in renderOpts) {
            // TODO: investigate why previewProps isn't on RenderOpts
            previewProps = renderOpts.previewProps;
        }
        function defaultOnUpdateCookies(cookies) {
            if (res) {
                res.setHeader("Set-Cookie", cookies);
            }
        }
        const cache = {};
        const store = {
            get headers () {
                if (!cache.headers) {
                    // Seal the headers object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.headers = getHeaders(req.headers);
                }
                return cache.headers;
            },
            get cookies () {
                if (!cache.cookies) {
                    // Seal the cookies object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.cookies = getCookies(req.headers);
                }
                return cache.cookies;
            },
            get mutableCookies () {
                if (!cache.mutableCookies) {
                    cache.mutableCookies = getMutableCookies(req.headers, (renderOpts == null ? void 0 : renderOpts.onUpdateCookies) || (res ? defaultOnUpdateCookies : undefined));
                }
                return cache.mutableCookies;
            },
            get draftMode () {
                if (!cache.draftMode) {
                    cache.draftMode = new DraftModeProvider(previewProps, req, this.cookies, this.mutableCookies);
                }
                return cache.draftMode;
            }
        };
        return storage.run(store, callback, store);
    }
}; //# sourceMappingURL=request-async-storage-wrapper.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/request-async-storage.external.js
var request_async_storage_external = __webpack_require__(373);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/lib/trace/constants.js
/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
/* eslint-disable no-shadow */ var BaseServerSpan;
(function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
})(BaseServerSpan || (BaseServerSpan = {}));
var LoadComponentsSpan;
(function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
})(LoadComponentsSpan || (LoadComponentsSpan = {}));
var NextServerSpan;
(function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
})(NextServerSpan || (NextServerSpan = {}));
var NextNodeServerSpan;
(function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
})(NextNodeServerSpan || (NextNodeServerSpan = {}));
var StartServerSpan;
(function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
})(StartServerSpan || (StartServerSpan = {}));
var RenderSpan;
(function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
})(RenderSpan || (RenderSpan = {}));
var AppRenderSpan;
(function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
})(AppRenderSpan || (AppRenderSpan = {}));
var RouterSpan;
(function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
})(RouterSpan || (RouterSpan = {}));
var NodeSpan;
(function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
})(NodeSpan || (NodeSpan = {}));
var AppRouteRouteHandlersSpan;
(function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
})(AppRouteRouteHandlersSpan || (AppRouteRouteHandlersSpan = {}));
var ResolveMetadataSpan;
(function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
})(ResolveMetadataSpan || (ResolveMetadataSpan = {}));
// This list is used to filter out spans that are not relevant to the user
const NextVanillaSpanAllowlist = [
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport"
];
 //# sourceMappingURL=constants.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/lib/trace/tracer.js

let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if (true) {
    api = __webpack_require__(16);
} else {}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
const isPromise = (p)=>{
    return p !== null && typeof p === "object" && typeof p.then === "function";
};
const closeSpanWithError = (span, error)=>{
    if ((error == null ? void 0 : error.bubble) === true) {
        span.setAttribute("next.bubble", true);
    } else {
        if (error) {
            span.recordException(error);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey("next.rootSpanId");
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer("next.js", "0.0.1");
    }
    getContext() {
        return context;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        var _trace_getSpanContext;
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === "function" ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        if (!NextVanillaSpanAllowlist.includes(type) && process.env.NEXT_OTEL_VERBOSE !== "1" || options.hideSpan) {
            return fn();
        }
        const spanName = options.spanName ?? type;
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
            spanContext = ROOT_CONTEXT;
            isRootSpan = true;
        } else if ((_trace_getSpanContext = trace.getSpanContext(spanContext)) == null ? void 0 : _trace_getSpanContext.isRemote) {
            isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
            "next.span_name": spanName,
            "next.span_type": type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                const onCleanup = ()=>{
                    rootSpanAttributesStore.delete(spanId);
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                try {
                    if (fn.length > 1) {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    }
                    const result = fn(span);
                    if (isPromise(result)) {
                        result.then(()=>span.end(), (err)=>closeSpanWithError(span, err)).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!NextVanillaSpanAllowlist.includes(name) && process.env.NEXT_OTEL_VERBOSE !== "1") {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === "function" && typeof fn === "function") {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === "function") {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();
 //# sourceMappingURL=tracer.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/adapter.js
















class NextRequestHint extends NextRequest {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
}
const headersGetter = {
    keys: (headers)=>Array.from(headers.keys()),
    get: (headers, key)=>headers.get(key) ?? undefined
};
let propagator = (request, fn)=>{
    const tracer = getTracer();
    return tracer.withPropagatedContext(request.headers, fn, headersGetter);
};
let testApisIntercepted = false;
function ensureTestApisIntercepted() {
    if (!testApisIntercepted) {
        testApisIntercepted = true;
        if (process.env.NEXT_PRIVATE_TEST_PROXY === "true") {
            const { interceptTestApis, wrapRequestHandler } = __webpack_require__(457);
            interceptTestApis();
            propagator = wrapRequestHandler(propagator);
        }
    }
}
async function adapter(params) {
    ensureTestApisIntercepted();
    await ensureInstrumentationRegistered();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== "undefined";
    const prerenderManifest = typeof self.__PRERENDER_MANIFEST === "string" ? JSON.parse(self.__PRERENDER_MANIFEST) : undefined;
    params.request.url = normalizeRscURL(params.request.url);
    const requestUrl = new next_url/* NextURL */.c(params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.
    // Instead we use the keys before iteration.
    const keys = [
        ...requestUrl.searchParams.keys()
    ];
    for (const key of keys){
        const value = requestUrl.searchParams.getAll(key);
        if (key !== NEXT_QUERY_PARAM_PREFIX && key.startsWith(NEXT_QUERY_PARAM_PREFIX)) {
            const normalizedKey = key.substring(NEXT_QUERY_PARAM_PREFIX.length);
            requestUrl.searchParams.delete(normalizedKey);
            for (const val of value){
                requestUrl.searchParams.append(normalizedKey, val);
            }
            requestUrl.searchParams.delete(key);
        }
    }
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = "";
    const isDataReq = params.request.headers["x-nextjs-data"];
    if (isDataReq && requestUrl.pathname === "/index") {
        requestUrl.pathname = "/";
    }
    const requestHeaders = (0,utils/* fromNodeOutgoingHttpHeaders */.EK)(params.request.headers);
    const flightHeaders = new Map();
    // Parameters should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const param of FLIGHT_PARAMETERS){
            const key = param.toString().toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, requestHeaders.get(key));
                requestHeaders.delete(key);
            }
        }
    }
    const normalizeUrl =  false ? 0 : requestUrl;
    const request = new NextRequestHint({
        page: params.page,
        // Strip internal query parameters off the request.
        input: stripInternalSearchParams(normalizeUrl, true).toString(),
        init: {
            body: params.request.body,
            geo: params.request.geo,
            headers: requestHeaders,
            ip: params.request.ip,
            method: params.request.method,
            nextConfig: params.request.nextConfig,
            signal: params.request.signal
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isDataReq) {
        Object.defineProperty(request, "__isData", {
            enumerable: false,
            value: true
        });
    }
    if (!globalThis.__incrementalCache && params.IncrementalCache) {
        globalThis.__incrementalCache = new params.IncrementalCache({
            appDir: true,
            fetchCache: true,
            minimalMode: "production" !== "development",
            fetchCacheKeyPrefix: undefined,
            dev: "production" === "development",
            requestHeaders: params.request.headers,
            requestProtocol: "https",
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: {
                        previewModeId: "development-id"
                    }
                };
            }
        });
    }
    const event = new NextFetchEvent({
        request,
        page: params.page
    });
    let response;
    let cookiesFromResponse;
    response = await propagator(request, ()=>{
        // we only care to make async storage available for middleware
        const isMiddleware = params.page === "/middleware" || params.page === "/src/middleware";
        if (isMiddleware) {
            return RequestAsyncStorageWrapper.wrap(request_async_storage_external/* requestAsyncStorage */.F, {
                req: request,
                renderOpts: {
                    onUpdateCookies: (cookies)=>{
                        cookiesFromResponse = cookies;
                    },
                    // @ts-expect-error: TODO: investigate why previewProps isn't on RenderOpts
                    previewProps: (prerenderManifest == null ? void 0 : prerenderManifest.preview) || {
                        previewModeId: "development-id",
                        previewModeEncryptionKey: "",
                        previewModeSigningKey: ""
                    }
                }
            }, ()=>params.handler(request, event));
        }
        return params.handler(request, event);
    });
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError("Expected an instance of Response to be returned");
    }
    if (response && cookiesFromResponse) {
        response.headers.set("set-cookie", cookiesFromResponse);
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get("x-middleware-rewrite");
    if (response && rewrite) {
        const rewriteUrl = new next_url/* NextURL */.c(rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (true) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set("x-middleware-rewrite", String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = relativizeURL(String(rewriteUrl), String(requestUrl));
        if (isDataReq && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(undefined && 0)) {
            response.headers.set("x-nextjs-rewrite", relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get("Location");
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new next_url/* NextURL */.c(redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (true) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set("Location", String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isDataReq) {
            response.headers.delete("Location");
            response.headers.set("x-nextjs-redirect", relativizeURL(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : spec_extension_response/* NextResponse */.x.next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get("x-middleware-override-headers");
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set("x-middleware-override-headers", middlewareOverrideHeaders + "," + overwrittenHeaders.join(","));
        }
    }
    return {
        response: finalResponse,
        waitUntil: Promise.all(event[waitUntilSymbol]),
        fetchMetrics: request.fetchMetrics
    };
} //# sourceMappingURL=adapter.js.map

// EXTERNAL MODULE: ./node_modules/next-intl/dist/production/middleware.js
var middleware = __webpack_require__(285);
// EXTERNAL MODULE: ./node_modules/next-intl/dist/production/server.react-client.js
var server_react_client = __webpack_require__(376);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(913);
;// CONCATENATED MODULE: ./i18n.ts


const locales = [
    "en",
    "ur",
    "ar",
    "zh",
    "cs",
    "de",
    "fr",
    "es"
];
const defaultLocale = "en";
const rtlLocales = (/* unused pure expression or super */ null && ([
    "ur",
    "ar"
]));
/* harmony default export */ const i18n = ((0,server_react_client/* getRequestConfig */.cF)(async ({ locale })=>{
    if (!locales.includes(locale)) (0,navigation.notFound)();
    return {
        messages: (await __webpack_require__(476)(`./${locale}.json`)).default,
        timeZone: "Asia/Karachi"
    };
}));

;// CONCATENATED MODULE: ./middleware.ts


/* harmony default export */ const middleware_0 = ((0,middleware/* default */.Z)({
    locales: locales,
    defaultLocale: defaultLocale,
    localePrefix: "as-needed"
}));
const config = {
    // Match all pathnames except api routes, _next internals, and static files
    matcher: [
        "/((?!api|_next|_vercel|.*\\..*).*)"
    ]
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=private-next-root-dir%2Fmiddleware.ts&page=%2Fmiddleware&rootDir=%2FUsers%2Fshahtabraiz%2FPakistan%20Business%20Forum%20Web%2FPakistanbusinessforum&matchers=W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg%2FOlxcLygoPyFhcGl8X25leHR8X3ZlcmNlbHwuKlxcLi4qKS4qKSkoLmpzb24pP1tcXC8jXFw%2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvKCg%2FIWFwaXxfbmV4dHxfdmVyY2VsfC4qXFwuLiopLiopIn1d&preferredRegion=&middlewareConfig=eyJtYXRjaGVycyI6W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg%2FOlxcLygoPyFhcGl8X25leHR8X3ZlcmNlbHwuKlxcLi4qKS4qKSkoLmpzb24pP1tcXC8jXFw%2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvKCg%2FIWFwaXxfbmV4dHxfdmVyY2VsfC4qXFwuLiopLiopIn1dfQ%3D%3D!


// Import the userland code.

const mod = {
    ...middleware_namespaceObject_0
};
const handler = mod.middleware || mod.default;
const page = "/middleware";
if (typeof handler !== "function") {
    throw new Error(`The Middleware "${page}" must export a \`middleware\` or a \`default\` function`);
}
function nHandler(opts) {
    return adapter({
        ...opts,
        page,
        handler
    });
}

//# sourceMappingURL=middleware.js.map

/***/ }),

/***/ 898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LookupSupportedLocales: () => (/* reexport */ LookupSupportedLocales),
  ResolveLocale: () => (/* reexport */ ResolveLocale),
  match: () => (/* binding */ match)
});

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeLocaleList.js
/**
 * http://ecma-international.org/ecma-402/7.0/index.html#sec-canonicalizelocalelist
 * @param locales
 */ function CanonicalizeLocaleList(locales) {
    return Intl.getCanonicalLocales(locales);
}

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.mjs
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
/** @deprecated */ function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
/** @deprecated */ function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
/* harmony default export */ const tslib_es6 = ({
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
});

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl-localematcher/lib/abstract/languageMatching.js
var languageMatching_data = {
    supplemental: {
        languageMatching: {
            "written-new": [
                {
                    paradigmLocales: {
                        _locales: "en en_GB es es_419 pt_BR pt_PT"
                    }
                },
                {
                    $enUS: {
                        _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI"
                    }
                },
                {
                    $cnsar: {
                        _value: "HK+MO"
                    }
                },
                {
                    $americas: {
                        _value: "019"
                    }
                },
                {
                    $maghreb: {
                        _value: "MA+DZ+TN+LY+MR+EH"
                    }
                },
                {
                    no: {
                        _desired: "nb",
                        _distance: "1"
                    }
                },
                {
                    bs: {
                        _desired: "hr",
                        _distance: "4"
                    }
                },
                {
                    bs: {
                        _desired: "sh",
                        _distance: "4"
                    }
                },
                {
                    hr: {
                        _desired: "sh",
                        _distance: "4"
                    }
                },
                {
                    sr: {
                        _desired: "sh",
                        _distance: "4"
                    }
                },
                {
                    aa: {
                        _desired: "ssy",
                        _distance: "4"
                    }
                },
                {
                    de: {
                        _desired: "gsw",
                        _distance: "4",
                        _oneway: "true"
                    }
                },
                {
                    de: {
                        _desired: "lb",
                        _distance: "4",
                        _oneway: "true"
                    }
                },
                {
                    no: {
                        _desired: "da",
                        _distance: "8"
                    }
                },
                {
                    nb: {
                        _desired: "da",
                        _distance: "8"
                    }
                },
                {
                    ru: {
                        _desired: "ab",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ach",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    nl: {
                        _desired: "af",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ak",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "am",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    es: {
                        _desired: "ay",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    ru: {
                        _desired: "az",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    ur: {
                        _desired: "bal",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    ru: {
                        _desired: "be",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "bem",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    hi: {
                        _desired: "bh",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "bn",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "bo",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    fr: {
                        _desired: "br",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    es: {
                        _desired: "ca",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    fil: {
                        _desired: "ceb",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "chr",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "ckb",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    fr: {
                        _desired: "co",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    fr: {
                        _desired: "crs",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    sk: {
                        _desired: "cs",
                        _distance: "20"
                    }
                },
                {
                    en: {
                        _desired: "cy",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ee",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "eo",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    es: {
                        _desired: "eu",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    da: {
                        _desired: "fo",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    nl: {
                        _desired: "fy",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ga",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "gaa",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "gd",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    es: {
                        _desired: "gl",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    es: {
                        _desired: "gn",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    hi: {
                        _desired: "gu",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ha",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "haw",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    fr: {
                        _desired: "ht",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    ru: {
                        _desired: "hy",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ia",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ig",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "is",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    id: {
                        _desired: "jv",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ka",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    fr: {
                        _desired: "kg",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    ru: {
                        _desired: "kk",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "km",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "kn",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "kri",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    tr: {
                        _desired: "ku",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    ru: {
                        _desired: "ky",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    it: {
                        _desired: "la",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "lg",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    fr: {
                        _desired: "ln",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "lo",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "loz",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    fr: {
                        _desired: "lua",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    hi: {
                        _desired: "mai",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "mfe",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    fr: {
                        _desired: "mg",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "mi",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ml",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    ru: {
                        _desired: "mn",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    hi: {
                        _desired: "mr",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    id: {
                        _desired: "ms",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "mt",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "my",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ne",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    nb: {
                        _desired: "nn",
                        _distance: "20"
                    }
                },
                {
                    no: {
                        _desired: "nn",
                        _distance: "20"
                    }
                },
                {
                    en: {
                        _desired: "nso",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ny",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "nyn",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    fr: {
                        _desired: "oc",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "om",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "or",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "pa",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "pcm",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ps",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    es: {
                        _desired: "qu",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    de: {
                        _desired: "rm",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "rn",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    fr: {
                        _desired: "rw",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    hi: {
                        _desired: "sa",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "sd",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "si",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "sn",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "so",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "sq",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "st",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    id: {
                        _desired: "su",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "sw",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ta",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "te",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    ru: {
                        _desired: "tg",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ti",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    ru: {
                        _desired: "tk",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "tlh",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "tn",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "to",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    ru: {
                        _desired: "tt",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "tum",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "ug",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    ru: {
                        _desired: "uk",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "ur",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    ru: {
                        _desired: "uz",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    fr: {
                        _desired: "wo",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "xh",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "yi",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "yo",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "za",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    en: {
                        _desired: "zu",
                        _distance: "30",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "aao",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "abh",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "abv",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "acm",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "acq",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "acw",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "acx",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "acy",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "adf",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "aeb",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "aec",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "afb",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "ajp",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "apc",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "apd",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "arq",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "ars",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "ary",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "arz",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "auz",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "avl",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "ayh",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "ayl",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "ayn",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "ayp",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "bbz",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "pga",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "shu",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ar: {
                        _desired: "ssh",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    az: {
                        _desired: "azb",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    et: {
                        _desired: "vro",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ff: {
                        _desired: "ffm",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ff: {
                        _desired: "fub",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ff: {
                        _desired: "fue",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ff: {
                        _desired: "fuf",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ff: {
                        _desired: "fuh",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ff: {
                        _desired: "fui",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ff: {
                        _desired: "fuq",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ff: {
                        _desired: "fuv",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    gn: {
                        _desired: "gnw",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    gn: {
                        _desired: "gui",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    gn: {
                        _desired: "gun",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    gn: {
                        _desired: "nhd",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    iu: {
                        _desired: "ikt",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    kln: {
                        _desired: "enb",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    kln: {
                        _desired: "eyo",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    kln: {
                        _desired: "niq",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    kln: {
                        _desired: "oki",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    kln: {
                        _desired: "pko",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    kln: {
                        _desired: "sgc",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    kln: {
                        _desired: "tec",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    kln: {
                        _desired: "tuy",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    kok: {
                        _desired: "gom",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    kpe: {
                        _desired: "gkp",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    luy: {
                        _desired: "ida",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    luy: {
                        _desired: "lkb",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    luy: {
                        _desired: "lko",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    luy: {
                        _desired: "lks",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    luy: {
                        _desired: "lri",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    luy: {
                        _desired: "lrm",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    luy: {
                        _desired: "lsm",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    luy: {
                        _desired: "lto",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    luy: {
                        _desired: "lts",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    luy: {
                        _desired: "lwg",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    luy: {
                        _desired: "nle",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    luy: {
                        _desired: "nyd",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    luy: {
                        _desired: "rag",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    lv: {
                        _desired: "ltg",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    mg: {
                        _desired: "bhr",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    mg: {
                        _desired: "bjq",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    mg: {
                        _desired: "bmm",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    mg: {
                        _desired: "bzc",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    mg: {
                        _desired: "msh",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    mg: {
                        _desired: "skg",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    mg: {
                        _desired: "tdx",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    mg: {
                        _desired: "tkg",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    mg: {
                        _desired: "txy",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    mg: {
                        _desired: "xmv",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    mg: {
                        _desired: "xmw",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    mn: {
                        _desired: "mvf",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "bjn",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "btj",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "bve",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "bvu",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "coa",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "dup",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "hji",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "id",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "jak",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "jax",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "kvb",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "kvr",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "kxd",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "lce",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "lcf",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "liw",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "max",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "meo",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "mfa",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "mfb",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "min",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "mqg",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "msi",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "mui",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "orn",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "ors",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "pel",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "pse",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "tmw",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "urk",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "vkk",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "vkt",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "xmm",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "zlm",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ms: {
                        _desired: "zmi",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ne: {
                        _desired: "dty",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    om: {
                        _desired: "gax",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    om: {
                        _desired: "hae",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    om: {
                        _desired: "orc",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    or: {
                        _desired: "spv",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ps: {
                        _desired: "pbt",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    ps: {
                        _desired: "pst",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qub",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qud",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "quf",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qug",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "quh",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "quk",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qul",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qup",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qur",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qus",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "quw",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qux",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "quy",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qva",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qvc",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qve",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qvh",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qvi",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qvj",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qvl",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qvm",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qvn",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qvo",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qvp",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qvs",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qvw",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qvz",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qwa",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qwc",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qwh",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qws",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qxa",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qxc",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qxh",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qxl",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qxn",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qxo",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qxp",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qxr",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qxt",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qxu",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    qu: {
                        _desired: "qxw",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    sc: {
                        _desired: "sdc",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    sc: {
                        _desired: "sdn",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    sc: {
                        _desired: "sro",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    sq: {
                        _desired: "aae",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    sq: {
                        _desired: "aat",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    sq: {
                        _desired: "aln",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    syr: {
                        _desired: "aii",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    uz: {
                        _desired: "uzs",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    yi: {
                        _desired: "yih",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "cdo",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "cjy",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "cpx",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "czh",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "czo",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "gan",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "hak",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "hsn",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "lzh",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "mnp",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "nan",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "wuu",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    zh: {
                        _desired: "yue",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "*": {
                        _desired: "*",
                        _distance: "80"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "am-Ethi",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "ru-Cyrl": {
                        _desired: "az-Latn",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "bn-Beng",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "zh-Hans": {
                        _desired: "bo-Tibt",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "ru-Cyrl": {
                        _desired: "hy-Armn",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "ka-Geor",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "km-Khmr",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "kn-Knda",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "lo-Laoo",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "ml-Mlym",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "my-Mymr",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "ne-Deva",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "or-Orya",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "pa-Guru",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "ps-Arab",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "sd-Arab",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "si-Sinh",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "ta-Taml",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "te-Telu",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "ti-Ethi",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "ru-Cyrl": {
                        _desired: "tk-Latn",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "ur-Arab",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "ru-Cyrl": {
                        _desired: "uz-Latn",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "en-Latn": {
                        _desired: "yi-Hebr",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "sr-Cyrl": {
                        _desired: "sr-Latn",
                        _distance: "5"
                    }
                },
                {
                    "zh-Hans": {
                        _desired: "za-Latn",
                        _distance: "10",
                        _oneway: "true"
                    }
                },
                {
                    "zh-Hans": {
                        _desired: "zh-Hani",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    "zh-Hant": {
                        _desired: "zh-Hani",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    "ar-Arab": {
                        _desired: "ar-Latn",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    "bn-Beng": {
                        _desired: "bn-Latn",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    "gu-Gujr": {
                        _desired: "gu-Latn",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    "hi-Deva": {
                        _desired: "hi-Latn",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    "kn-Knda": {
                        _desired: "kn-Latn",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    "ml-Mlym": {
                        _desired: "ml-Latn",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    "mr-Deva": {
                        _desired: "mr-Latn",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    "ta-Taml": {
                        _desired: "ta-Latn",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    "te-Telu": {
                        _desired: "te-Latn",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    "zh-Hans": {
                        _desired: "zh-Latn",
                        _distance: "20",
                        _oneway: "true"
                    }
                },
                {
                    "ja-Jpan": {
                        _desired: "ja-Latn",
                        _distance: "5",
                        _oneway: "true"
                    }
                },
                {
                    "ja-Jpan": {
                        _desired: "ja-Hani",
                        _distance: "5",
                        _oneway: "true"
                    }
                },
                {
                    "ja-Jpan": {
                        _desired: "ja-Hira",
                        _distance: "5",
                        _oneway: "true"
                    }
                },
                {
                    "ja-Jpan": {
                        _desired: "ja-Kana",
                        _distance: "5",
                        _oneway: "true"
                    }
                },
                {
                    "ja-Jpan": {
                        _desired: "ja-Hrkt",
                        _distance: "5",
                        _oneway: "true"
                    }
                },
                {
                    "ja-Hrkt": {
                        _desired: "ja-Hira",
                        _distance: "5",
                        _oneway: "true"
                    }
                },
                {
                    "ja-Hrkt": {
                        _desired: "ja-Kana",
                        _distance: "5",
                        _oneway: "true"
                    }
                },
                {
                    "ko-Kore": {
                        _desired: "ko-Hani",
                        _distance: "5",
                        _oneway: "true"
                    }
                },
                {
                    "ko-Kore": {
                        _desired: "ko-Hang",
                        _distance: "5",
                        _oneway: "true"
                    }
                },
                {
                    "ko-Kore": {
                        _desired: "ko-Jamo",
                        _distance: "5",
                        _oneway: "true"
                    }
                },
                {
                    "ko-Hang": {
                        _desired: "ko-Jamo",
                        _distance: "5",
                        _oneway: "true"
                    }
                },
                {
                    "*-*": {
                        _desired: "*-*",
                        _distance: "50"
                    }
                },
                {
                    "ar-*-$maghreb": {
                        _desired: "ar-*-$maghreb",
                        _distance: "4"
                    }
                },
                {
                    "ar-*-$!maghreb": {
                        _desired: "ar-*-$!maghreb",
                        _distance: "4"
                    }
                },
                {
                    "ar-*-*": {
                        _desired: "ar-*-*",
                        _distance: "5"
                    }
                },
                {
                    "en-*-$enUS": {
                        _desired: "en-*-$enUS",
                        _distance: "4"
                    }
                },
                {
                    "en-*-GB": {
                        _desired: "en-*-$!enUS",
                        _distance: "3"
                    }
                },
                {
                    "en-*-$!enUS": {
                        _desired: "en-*-$!enUS",
                        _distance: "4"
                    }
                },
                {
                    "en-*-*": {
                        _desired: "en-*-*",
                        _distance: "5"
                    }
                },
                {
                    "es-*-$americas": {
                        _desired: "es-*-$americas",
                        _distance: "4"
                    }
                },
                {
                    "es-*-$!americas": {
                        _desired: "es-*-$!americas",
                        _distance: "4"
                    }
                },
                {
                    "es-*-*": {
                        _desired: "es-*-*",
                        _distance: "5"
                    }
                },
                {
                    "pt-*-$americas": {
                        _desired: "pt-*-$americas",
                        _distance: "4"
                    }
                },
                {
                    "pt-*-$!americas": {
                        _desired: "pt-*-$!americas",
                        _distance: "4"
                    }
                },
                {
                    "pt-*-*": {
                        _desired: "pt-*-*",
                        _distance: "5"
                    }
                },
                {
                    "zh-Hant-$cnsar": {
                        _desired: "zh-Hant-$cnsar",
                        _distance: "4"
                    }
                },
                {
                    "zh-Hant-$!cnsar": {
                        _desired: "zh-Hant-$!cnsar",
                        _distance: "4"
                    }
                },
                {
                    "zh-Hant-*": {
                        _desired: "zh-Hant-*",
                        _distance: "5"
                    }
                },
                {
                    "*-*-*": {
                        _desired: "*-*-*",
                        _distance: "4"
                    }
                }
            ]
        }
    }
};

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl-localematcher/lib/abstract/regions.generated.js
// This file is generated from regions-gen.ts
var regions = {
    "001": [
        "001",
        "001-status-grouping",
        "002",
        "005",
        "009",
        "011",
        "013",
        "014",
        "015",
        "017",
        "018",
        "019",
        "021",
        "029",
        "030",
        "034",
        "035",
        "039",
        "053",
        "054",
        "057",
        "061",
        "142",
        "143",
        "145",
        "150",
        "151",
        "154",
        "155",
        "AC",
        "AD",
        "AE",
        "AF",
        "AG",
        "AI",
        "AL",
        "AM",
        "AO",
        "AQ",
        "AR",
        "AS",
        "AT",
        "AU",
        "AW",
        "AX",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BL",
        "BM",
        "BN",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BT",
        "BV",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CC",
        "CD",
        "CF",
        "CG",
        "CH",
        "CI",
        "CK",
        "CL",
        "CM",
        "CN",
        "CO",
        "CP",
        "CQ",
        "CR",
        "CU",
        "CV",
        "CW",
        "CX",
        "CY",
        "CZ",
        "DE",
        "DG",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EA",
        "EC",
        "EE",
        "EG",
        "EH",
        "ER",
        "ES",
        "ET",
        "EU",
        "EZ",
        "FI",
        "FJ",
        "FK",
        "FM",
        "FO",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GF",
        "GG",
        "GH",
        "GI",
        "GL",
        "GM",
        "GN",
        "GP",
        "GQ",
        "GR",
        "GS",
        "GT",
        "GU",
        "GW",
        "GY",
        "HK",
        "HM",
        "HN",
        "HR",
        "HT",
        "HU",
        "IC",
        "ID",
        "IE",
        "IL",
        "IM",
        "IN",
        "IO",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JE",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KY",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MF",
        "MG",
        "MH",
        "MK",
        "ML",
        "MM",
        "MN",
        "MO",
        "MP",
        "MQ",
        "MR",
        "MS",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NC",
        "NE",
        "NF",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NU",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PF",
        "PG",
        "PH",
        "PK",
        "PL",
        "PM",
        "PN",
        "PR",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "QO",
        "RE",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SH",
        "SI",
        "SJ",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SV",
        "SX",
        "SY",
        "SZ",
        "TA",
        "TC",
        "TD",
        "TF",
        "TG",
        "TH",
        "TJ",
        "TK",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UM",
        "UN",
        "US",
        "UY",
        "UZ",
        "VA",
        "VC",
        "VE",
        "VG",
        "VI",
        "VN",
        "VU",
        "WF",
        "WS",
        "XK",
        "YE",
        "YT",
        "ZA",
        "ZM",
        "ZW"
    ],
    "002": [
        "002",
        "002-status-grouping",
        "011",
        "014",
        "015",
        "017",
        "018",
        "202",
        "AO",
        "BF",
        "BI",
        "BJ",
        "BW",
        "CD",
        "CF",
        "CG",
        "CI",
        "CM",
        "CV",
        "DJ",
        "DZ",
        "EA",
        "EG",
        "EH",
        "ER",
        "ET",
        "GA",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GW",
        "IC",
        "IO",
        "KE",
        "KM",
        "LR",
        "LS",
        "LY",
        "MA",
        "MG",
        "ML",
        "MR",
        "MU",
        "MW",
        "MZ",
        "NA",
        "NE",
        "NG",
        "RE",
        "RW",
        "SC",
        "SD",
        "SH",
        "SL",
        "SN",
        "SO",
        "SS",
        "ST",
        "SZ",
        "TD",
        "TF",
        "TG",
        "TN",
        "TZ",
        "UG",
        "YT",
        "ZA",
        "ZM",
        "ZW"
    ],
    "003": [
        "003",
        "013",
        "021",
        "029",
        "AG",
        "AI",
        "AW",
        "BB",
        "BL",
        "BM",
        "BQ",
        "BS",
        "BZ",
        "CA",
        "CR",
        "CU",
        "CW",
        "DM",
        "DO",
        "GD",
        "GL",
        "GP",
        "GT",
        "HN",
        "HT",
        "JM",
        "KN",
        "KY",
        "LC",
        "MF",
        "MQ",
        "MS",
        "MX",
        "NI",
        "PA",
        "PM",
        "PR",
        "SV",
        "SX",
        "TC",
        "TT",
        "US",
        "VC",
        "VG",
        "VI"
    ],
    "005": [
        "005",
        "AR",
        "BO",
        "BR",
        "BV",
        "CL",
        "CO",
        "EC",
        "FK",
        "GF",
        "GS",
        "GY",
        "PE",
        "PY",
        "SR",
        "UY",
        "VE"
    ],
    "009": [
        "009",
        "053",
        "054",
        "057",
        "061",
        "AC",
        "AQ",
        "AS",
        "AU",
        "CC",
        "CK",
        "CP",
        "CX",
        "DG",
        "FJ",
        "FM",
        "GU",
        "HM",
        "KI",
        "MH",
        "MP",
        "NC",
        "NF",
        "NR",
        "NU",
        "NZ",
        "PF",
        "PG",
        "PN",
        "PW",
        "QO",
        "SB",
        "TA",
        "TK",
        "TO",
        "TV",
        "UM",
        "VU",
        "WF",
        "WS"
    ],
    "011": [
        "011",
        "BF",
        "BJ",
        "CI",
        "CV",
        "GH",
        "GM",
        "GN",
        "GW",
        "LR",
        "ML",
        "MR",
        "NE",
        "NG",
        "SH",
        "SL",
        "SN",
        "TG"
    ],
    "013": [
        "013",
        "BZ",
        "CR",
        "GT",
        "HN",
        "MX",
        "NI",
        "PA",
        "SV"
    ],
    "014": [
        "014",
        "BI",
        "DJ",
        "ER",
        "ET",
        "IO",
        "KE",
        "KM",
        "MG",
        "MU",
        "MW",
        "MZ",
        "RE",
        "RW",
        "SC",
        "SO",
        "SS",
        "TF",
        "TZ",
        "UG",
        "YT",
        "ZM",
        "ZW"
    ],
    "015": [
        "015",
        "DZ",
        "EA",
        "EG",
        "EH",
        "IC",
        "LY",
        "MA",
        "SD",
        "TN"
    ],
    "017": [
        "017",
        "AO",
        "CD",
        "CF",
        "CG",
        "CM",
        "GA",
        "GQ",
        "ST",
        "TD"
    ],
    "018": [
        "018",
        "BW",
        "LS",
        "NA",
        "SZ",
        "ZA"
    ],
    "019": [
        "003",
        "005",
        "013",
        "019",
        "019-status-grouping",
        "021",
        "029",
        "419",
        "AG",
        "AI",
        "AR",
        "AW",
        "BB",
        "BL",
        "BM",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BV",
        "BZ",
        "CA",
        "CL",
        "CO",
        "CR",
        "CU",
        "CW",
        "DM",
        "DO",
        "EC",
        "FK",
        "GD",
        "GF",
        "GL",
        "GP",
        "GS",
        "GT",
        "GY",
        "HN",
        "HT",
        "JM",
        "KN",
        "KY",
        "LC",
        "MF",
        "MQ",
        "MS",
        "MX",
        "NI",
        "PA",
        "PE",
        "PM",
        "PR",
        "PY",
        "SR",
        "SV",
        "SX",
        "TC",
        "TT",
        "US",
        "UY",
        "VC",
        "VE",
        "VG",
        "VI"
    ],
    "021": [
        "021",
        "BM",
        "CA",
        "GL",
        "PM",
        "US"
    ],
    "029": [
        "029",
        "AG",
        "AI",
        "AW",
        "BB",
        "BL",
        "BQ",
        "BS",
        "CU",
        "CW",
        "DM",
        "DO",
        "GD",
        "GP",
        "HT",
        "JM",
        "KN",
        "KY",
        "LC",
        "MF",
        "MQ",
        "MS",
        "PR",
        "SX",
        "TC",
        "TT",
        "VC",
        "VG",
        "VI"
    ],
    "030": [
        "030",
        "CN",
        "HK",
        "JP",
        "KP",
        "KR",
        "MN",
        "MO",
        "TW"
    ],
    "034": [
        "034",
        "AF",
        "BD",
        "BT",
        "IN",
        "IR",
        "LK",
        "MV",
        "NP",
        "PK"
    ],
    "035": [
        "035",
        "BN",
        "ID",
        "KH",
        "LA",
        "MM",
        "MY",
        "PH",
        "SG",
        "TH",
        "TL",
        "VN"
    ],
    "039": [
        "039",
        "AD",
        "AL",
        "BA",
        "ES",
        "GI",
        "GR",
        "HR",
        "IT",
        "ME",
        "MK",
        "MT",
        "PT",
        "RS",
        "SI",
        "SM",
        "VA",
        "XK"
    ],
    "053": [
        "053",
        "AU",
        "CC",
        "CX",
        "HM",
        "NF",
        "NZ"
    ],
    "054": [
        "054",
        "FJ",
        "NC",
        "PG",
        "SB",
        "VU"
    ],
    "057": [
        "057",
        "FM",
        "GU",
        "KI",
        "MH",
        "MP",
        "NR",
        "PW",
        "UM"
    ],
    "061": [
        "061",
        "AS",
        "CK",
        "NU",
        "PF",
        "PN",
        "TK",
        "TO",
        "TV",
        "WF",
        "WS"
    ],
    "142": [
        "030",
        "034",
        "035",
        "142",
        "143",
        "145",
        "AE",
        "AF",
        "AM",
        "AZ",
        "BD",
        "BH",
        "BN",
        "BT",
        "CN",
        "CY",
        "GE",
        "HK",
        "ID",
        "IL",
        "IN",
        "IQ",
        "IR",
        "JO",
        "JP",
        "KG",
        "KH",
        "KP",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LK",
        "MM",
        "MN",
        "MO",
        "MV",
        "MY",
        "NP",
        "OM",
        "PH",
        "PK",
        "PS",
        "QA",
        "SA",
        "SG",
        "SY",
        "TH",
        "TJ",
        "TL",
        "TM",
        "TR",
        "TW",
        "UZ",
        "VN",
        "YE"
    ],
    "143": [
        "143",
        "KG",
        "KZ",
        "TJ",
        "TM",
        "UZ"
    ],
    "145": [
        "145",
        "AE",
        "AM",
        "AZ",
        "BH",
        "CY",
        "GE",
        "IL",
        "IQ",
        "JO",
        "KW",
        "LB",
        "OM",
        "PS",
        "QA",
        "SA",
        "SY",
        "TR",
        "YE"
    ],
    "150": [
        "039",
        "150",
        "151",
        "154",
        "155",
        "AD",
        "AL",
        "AT",
        "AX",
        "BA",
        "BE",
        "BG",
        "BY",
        "CH",
        "CQ",
        "CZ",
        "DE",
        "DK",
        "EE",
        "ES",
        "FI",
        "FO",
        "FR",
        "GB",
        "GG",
        "GI",
        "GR",
        "HR",
        "HU",
        "IE",
        "IM",
        "IS",
        "IT",
        "JE",
        "LI",
        "LT",
        "LU",
        "LV",
        "MC",
        "MD",
        "ME",
        "MK",
        "MT",
        "NL",
        "NO",
        "PL",
        "PT",
        "RO",
        "RS",
        "RU",
        "SE",
        "SI",
        "SJ",
        "SK",
        "SM",
        "UA",
        "VA",
        "XK"
    ],
    "151": [
        "151",
        "BG",
        "BY",
        "CZ",
        "HU",
        "MD",
        "PL",
        "RO",
        "RU",
        "SK",
        "UA"
    ],
    "154": [
        "154",
        "AX",
        "CQ",
        "DK",
        "EE",
        "FI",
        "FO",
        "GB",
        "GG",
        "IE",
        "IM",
        "IS",
        "JE",
        "LT",
        "LV",
        "NO",
        "SE",
        "SJ"
    ],
    "155": [
        "155",
        "AT",
        "BE",
        "CH",
        "DE",
        "FR",
        "LI",
        "LU",
        "MC",
        "NL"
    ],
    "202": [
        "011",
        "014",
        "017",
        "018",
        "202",
        "AO",
        "BF",
        "BI",
        "BJ",
        "BW",
        "CD",
        "CF",
        "CG",
        "CI",
        "CM",
        "CV",
        "DJ",
        "ER",
        "ET",
        "GA",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GW",
        "IO",
        "KE",
        "KM",
        "LR",
        "LS",
        "MG",
        "ML",
        "MR",
        "MU",
        "MW",
        "MZ",
        "NA",
        "NE",
        "NG",
        "RE",
        "RW",
        "SC",
        "SH",
        "SL",
        "SN",
        "SO",
        "SS",
        "ST",
        "SZ",
        "TD",
        "TF",
        "TG",
        "TZ",
        "UG",
        "YT",
        "ZA",
        "ZM",
        "ZW"
    ],
    "419": [
        "005",
        "013",
        "029",
        "419",
        "AG",
        "AI",
        "AR",
        "AW",
        "BB",
        "BL",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BV",
        "BZ",
        "CL",
        "CO",
        "CR",
        "CU",
        "CW",
        "DM",
        "DO",
        "EC",
        "FK",
        "GD",
        "GF",
        "GP",
        "GS",
        "GT",
        "GY",
        "HN",
        "HT",
        "JM",
        "KN",
        "KY",
        "LC",
        "MF",
        "MQ",
        "MS",
        "MX",
        "NI",
        "PA",
        "PE",
        "PR",
        "PY",
        "SR",
        "SV",
        "SX",
        "TC",
        "TT",
        "UY",
        "VC",
        "VE",
        "VG",
        "VI"
    ],
    "EU": [
        "AT",
        "BE",
        "BG",
        "CY",
        "CZ",
        "DE",
        "DK",
        "EE",
        "ES",
        "EU",
        "FI",
        "FR",
        "GR",
        "HR",
        "HU",
        "IE",
        "IT",
        "LT",
        "LU",
        "LV",
        "MT",
        "NL",
        "PL",
        "PT",
        "RO",
        "SE",
        "SI",
        "SK"
    ],
    "EZ": [
        "AT",
        "BE",
        "CY",
        "DE",
        "EE",
        "ES",
        "EZ",
        "FI",
        "FR",
        "GR",
        "IE",
        "IT",
        "LT",
        "LU",
        "LV",
        "MT",
        "NL",
        "PT",
        "SI",
        "SK"
    ],
    "QO": [
        "AC",
        "AQ",
        "CP",
        "DG",
        "QO",
        "TA"
    ],
    "UN": [
        "AD",
        "AE",
        "AF",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CF",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CN",
        "CO",
        "CR",
        "CU",
        "CV",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ER",
        "ES",
        "ET",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MM",
        "MN",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SV",
        "SY",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TZ",
        "UA",
        "UG",
        "UN",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "YE",
        "ZA",
        "ZM",
        "ZW"
    ]
};

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js



var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
function invariant(condition, message, Err) {
    if (Err === void 0) {
        Err = Error;
    }
    if (!condition) {
        throw new Err(message);
    }
}
// This is effectively 2 languages in 2 different regions in the same cluster
var DEFAULT_MATCHING_THRESHOLD = 838;
var PROCESSED_DATA;
function processData() {
    var _a, _b;
    if (!PROCESSED_DATA) {
        var paradigmLocales = (_b = (_a = languageMatching_data.supplemental.languageMatching["written-new"][0]) === null || _a === void 0 ? void 0 : _a.paradigmLocales) === null || _b === void 0 ? void 0 : _b._locales.split(" ");
        var matchVariables = languageMatching_data.supplemental.languageMatching["written-new"].slice(1, 5);
        var data = languageMatching_data.supplemental.languageMatching["written-new"].slice(5);
        var matches = data.map(function(d) {
            var key = Object.keys(d)[0];
            var value = d[key];
            return {
                supported: key,
                desired: value._desired,
                distance: +value._distance,
                oneway: value.oneway === "true" ? true : false
            };
        }, {});
        PROCESSED_DATA = {
            matches: matches,
            matchVariables: matchVariables.reduce(function(all, d) {
                var key = Object.keys(d)[0];
                var value = d[key];
                all[key.slice(1)] = value._value.split("+");
                return all;
            }, {}),
            paradigmLocales: __spreadArray(__spreadArray([], paradigmLocales, true), paradigmLocales.map(function(l) {
                return new Intl.Locale(l.replace(/_/g, "-")).maximize().toString();
            }), true)
        };
    }
    return PROCESSED_DATA;
}
function isMatched(locale, languageMatchInfoLocale, matchVariables) {
    var _a = languageMatchInfoLocale.split("-"), language = _a[0], script = _a[1], region = _a[2];
    var matches = true;
    if (region && region[0] === "$") {
        var shouldInclude = region[1] !== "!";
        var matchRegions = shouldInclude ? matchVariables[region.slice(1)] : matchVariables[region.slice(2)];
        var expandedMatchedRegions = matchRegions.map(function(r) {
            return regions[r] || [
                r
            ];
        }).reduce(function(all, list) {
            return __spreadArray(__spreadArray([], all, true), list, true);
        }, []);
        matches && (matches = !(expandedMatchedRegions.indexOf(locale.region || "") > 1 != shouldInclude));
    } else {
        matches && (matches = locale.region ? region === "*" || region === locale.region : true);
    }
    matches && (matches = locale.script ? script === "*" || script === locale.script : true);
    matches && (matches = locale.language ? language === "*" || language === locale.language : true);
    return matches;
}
function serializeLSR(lsr) {
    return [
        lsr.language,
        lsr.script,
        lsr.region
    ].filter(Boolean).join("-");
}
function findMatchingDistanceForLSR(desired, supported, data) {
    for(var _i = 0, _a = data.matches; _i < _a.length; _i++){
        var d = _a[_i];
        var matches = isMatched(desired, d.desired, data.matchVariables) && isMatched(supported, d.supported, data.matchVariables);
        if (!d.oneway && !matches) {
            matches = isMatched(desired, d.supported, data.matchVariables) && isMatched(supported, d.desired, data.matchVariables);
        }
        if (matches) {
            var distance = d.distance * 10;
            if (data.paradigmLocales.indexOf(serializeLSR(desired)) > -1 != data.paradigmLocales.indexOf(serializeLSR(supported)) > -1) {
                return distance - 1;
            }
            return distance;
        }
    }
    throw new Error("No matching distance found");
}
function findMatchingDistance(desired, supported) {
    var desiredLocale = new Intl.Locale(desired).maximize();
    var supportedLocale = new Intl.Locale(supported).maximize();
    var desiredLSR = {
        language: desiredLocale.language,
        script: desiredLocale.script || "",
        region: desiredLocale.region || ""
    };
    var supportedLSR = {
        language: supportedLocale.language,
        script: supportedLocale.script || "",
        region: supportedLocale.region || ""
    };
    var matchingDistance = 0;
    var data = processData();
    if (desiredLSR.language !== supportedLSR.language) {
        matchingDistance += findMatchingDistanceForLSR({
            language: desiredLocale.language,
            script: "",
            region: ""
        }, {
            language: supportedLocale.language,
            script: "",
            region: ""
        }, data);
    }
    if (desiredLSR.script !== supportedLSR.script) {
        matchingDistance += findMatchingDistanceForLSR({
            language: desiredLocale.language,
            script: desiredLSR.script,
            region: ""
        }, {
            language: supportedLocale.language,
            script: desiredLSR.script,
            region: ""
        }, data);
    }
    if (desiredLSR.region !== supportedLSR.region) {
        matchingDistance += findMatchingDistanceForLSR(desiredLSR, supportedLSR, data);
    }
    return matchingDistance;
}
function findBestMatch(requestedLocales, supportedLocales, threshold) {
    if (threshold === void 0) {
        threshold = DEFAULT_MATCHING_THRESHOLD;
    }
    var lowestDistance = Infinity;
    var result = {
        matchedDesiredLocale: "",
        distances: {}
    };
    requestedLocales.forEach(function(desired, i) {
        if (!result.distances[desired]) {
            result.distances[desired] = {};
        }
        supportedLocales.forEach(function(supported) {
            // Add some weight to the distance based on the order of the supported locales
            // Add penalty for the order of the requested locales, which currently is 0 since ECMA-402
            // doesn't really have room for weighted locales like `en; q=0.1`
            var distance = findMatchingDistance(desired, supported) + 0 + i * 40;
            result.distances[desired][supported] = distance;
            if (distance < lowestDistance) {
                lowestDistance = distance;
                result.matchedDesiredLocale = desired;
                result.matchedSupportedLocale = supported;
            }
        });
    });
    if (lowestDistance >= threshold) {
        result.matchedDesiredLocale = undefined;
        result.matchedSupportedLocale = undefined;
    }
    return result;
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl-localematcher/lib/abstract/BestFitMatcher.js

/**
 * https://tc39.es/ecma402/#sec-bestfitmatcher
 * @param availableLocales
 * @param requestedLocales
 * @param getDefaultLocale
 */ function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var foundLocale;
    var extension;
    var noExtensionLocales = [];
    var noExtensionLocaleMap = requestedLocales.reduce(function(all, l) {
        var noExtensionLocale = l.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
        noExtensionLocales.push(noExtensionLocale);
        all[noExtensionLocale] = l;
        return all;
    }, {});
    var result = findBestMatch(noExtensionLocales, availableLocales);
    if (result.matchedSupportedLocale && result.matchedDesiredLocale) {
        foundLocale = result.matchedSupportedLocale;
        extension = noExtensionLocaleMap[result.matchedDesiredLocale].slice(result.matchedDesiredLocale.length) || undefined;
    }
    if (!foundLocale) {
        return {
            locale: getDefaultLocale()
        };
    }
    return {
        locale: foundLocale,
        extension: extension
    };
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeUValue.js

function CanonicalizeUValue(ukey, uvalue) {
    // TODO: Implement algorithm for CanonicalizeUValue per https://tc39.es/ecma402/#sec-canonicalizeuvalue
    var lowerValue = uvalue.toLowerCase();
    invariant(ukey !== undefined, "ukey must be defined");
    var canonicalized = lowerValue;
    return canonicalized;
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeUnicodeLocaleId.js
function CanonicalizeUnicodeLocaleId(locale) {
    return Intl.getCanonicalLocales(locale)[0];
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl-localematcher/lib/abstract/InsertUnicodeExtensionAndCanonicalize.js


function InsertUnicodeExtensionAndCanonicalize(locale, attributes, keywords) {
    invariant(locale.indexOf("-u-") === -1, "Expected locale to not have a Unicode locale extension");
    var extension = "-u";
    for(var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++){
        var attr = attributes_1[_i];
        extension += "-".concat(attr);
    }
    for(var _a = 0, keywords_1 = keywords; _a < keywords_1.length; _a++){
        var kw = keywords_1[_a];
        var key = kw.key, value = kw.value;
        extension += "-".concat(key);
        if (value !== "") {
            extension += "-".concat(value);
        }
    }
    if (extension === "-u") {
        return CanonicalizeUnicodeLocaleId(locale);
    }
    var privateIndex = locale.indexOf("-x-");
    var newLocale;
    if (privateIndex === -1) {
        newLocale = locale + extension;
    } else {
        var preExtension = locale.slice(0, privateIndex);
        var postExtension = locale.slice(privateIndex);
        newLocale = preExtension + extension + postExtension;
    }
    return CanonicalizeUnicodeLocaleId(newLocale);
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl-localematcher/lib/abstract/BestAvailableLocale.js
/**
 * https://tc39.es/ecma402/#sec-bestavailablelocale
 * @param availableLocales
 * @param locale
 */ function BestAvailableLocale(availableLocales, locale) {
    var candidate = locale;
    while(true){
        if (availableLocales.indexOf(candidate) > -1) {
            return candidate;
        }
        var pos = candidate.lastIndexOf("-");
        if (!~pos) {
            return undefined;
        }
        if (pos >= 2 && candidate[pos - 2] === "-") {
            pos -= 2;
        }
        candidate = candidate.slice(0, pos);
    }
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl-localematcher/lib/abstract/LookupMatcher.js


/**
 * https://tc39.es/ecma402/#sec-lookupmatcher
 * @param availableLocales
 * @param requestedLocales
 * @param getDefaultLocale
 */ function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var result = {
        locale: ""
    };
    for(var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++){
        var locale = requestedLocales_1[_i];
        var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
        var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
        if (availableLocale) {
            result.locale = availableLocale;
            if (locale !== noExtensionLocale) {
                result.extension = locale.slice(noExtensionLocale.length, locale.length);
            }
            return result;
        }
    }
    result.locale = getDefaultLocale();
    return result;
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl-localematcher/lib/abstract/UnicodeExtensionComponents.js

function UnicodeExtensionComponents(extension) {
    invariant(extension === extension.toLowerCase(), "Expected extension to be lowercase");
    invariant(extension.slice(0, 3) === "-u-", "Expected extension to be a Unicode locale extension");
    var attributes = [];
    var keywords = [];
    var keyword;
    var size = extension.length;
    var k = 3;
    while(k < size){
        var e = extension.indexOf("-", k);
        var len = void 0;
        if (e === -1) {
            len = size - k;
        } else {
            len = e - k;
        }
        var subtag = extension.slice(k, k + len);
        invariant(len >= 2, "Expected a subtag to have at least 2 characters");
        if (keyword === undefined && len != 2) {
            if (attributes.indexOf(subtag) === -1) {
                attributes.push(subtag);
            }
        } else if (len === 2) {
            keyword = {
                key: subtag,
                value: ""
            };
            if (keywords.find(function(k) {
                return k.key === (keyword === null || keyword === void 0 ? void 0 : keyword.key);
            }) === undefined) {
                keywords.push(keyword);
            }
        } else if ((keyword === null || keyword === void 0 ? void 0 : keyword.value) === "") {
            keyword.value = subtag;
        } else {
            invariant(keyword !== undefined, "Expected keyword to be defined");
            keyword.value += "-" + subtag;
        }
        k += len + 1;
    }
    return {
        attributes: attributes,
        keywords: keywords
    };
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl-localematcher/lib/abstract/ResolveLocale.js






/**
 * https://tc39.es/ecma402/#sec-resolvelocale
 */ function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
    var _a;
    var matcher = options.localeMatcher;
    var r;
    if (matcher === "lookup") {
        r = LookupMatcher(Array.from(availableLocales), requestedLocales, getDefaultLocale);
    } else {
        r = BestFitMatcher(Array.from(availableLocales), requestedLocales, getDefaultLocale);
    }
    if (r == null) {
        r = {
            locale: getDefaultLocale(),
            extension: ""
        };
    }
    var foundLocale = r.locale;
    var foundLocaleData = localeData[foundLocale];
    // TODO: We can't really guarantee that the locale data is available
    // invariant(
    //   foundLocaleData !== undefined,
    //   `Missing locale data for ${foundLocale}`
    // )
    var result = {
        locale: "en",
        dataLocale: foundLocale
    };
    var components;
    var keywords;
    if (r.extension) {
        components = UnicodeExtensionComponents(r.extension);
        keywords = components.keywords;
    } else {
        keywords = [];
    }
    var supportedKeywords = [];
    var _loop_1 = function(key) {
        // TODO: Shouldn't default to empty array, see TODO above
        var keyLocaleData = (_a = foundLocaleData === null || foundLocaleData === void 0 ? void 0 : foundLocaleData[key]) !== null && _a !== void 0 ? _a : [];
        invariant(Array.isArray(keyLocaleData), "keyLocaleData for ".concat(key, " must be an array"));
        var value = keyLocaleData[0];
        invariant(value === undefined || typeof value === "string", "value must be a string or undefined");
        var supportedKeyword = void 0;
        var entry = keywords.find(function(k) {
            return k.key === key;
        });
        if (entry) {
            var requestedValue = entry.value;
            if (requestedValue !== "") {
                if (keyLocaleData.indexOf(requestedValue) > -1) {
                    value = requestedValue;
                    supportedKeyword = {
                        key: key,
                        value: value
                    };
                }
            } else if (keyLocaleData.indexOf("true") > -1) {
                value = "true";
                supportedKeyword = {
                    key: key,
                    value: value
                };
            }
        }
        var optionsValue = options[key];
        invariant(optionsValue == null || typeof optionsValue === "string", "optionsValue must be a string or undefined");
        if (typeof optionsValue === "string") {
            var ukey = key.toLowerCase();
            optionsValue = CanonicalizeUValue(ukey, optionsValue);
            if (optionsValue === "") {
                optionsValue = "true";
            }
        }
        if (optionsValue !== value && keyLocaleData.indexOf(optionsValue) > -1) {
            value = optionsValue;
            supportedKeyword = undefined;
        }
        if (supportedKeyword) {
            supportedKeywords.push(supportedKeyword);
        }
        result[key] = value;
    };
    for(var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++){
        var key = relevantExtensionKeys_1[_i];
        _loop_1(key);
    }
    var supportedAttributes = [];
    if (supportedKeywords.length > 0) {
        supportedAttributes = [];
        foundLocale = InsertUnicodeExtensionAndCanonicalize(foundLocale, supportedAttributes, supportedKeywords);
    }
    result.locale = foundLocale;
    return result;
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl-localematcher/lib/abstract/LookupSupportedLocales.js


/**
 * https://tc39.es/ecma402/#sec-lookupsupportedlocales
 * @param availableLocales
 * @param requestedLocales
 */ function LookupSupportedLocales(availableLocales, requestedLocales) {
    var subset = [];
    for(var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++){
        var locale = requestedLocales_1[_i];
        var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
        var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
        if (availableLocale) {
            subset.push(availableLocale);
        }
    }
    return subset;
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl-localematcher/lib/index.js


function match(requestedLocales, availableLocales, defaultLocale, opts) {
    return ResolveLocale(availableLocales, CanonicalizeLocaleList(requestedLocales), {
        localeMatcher: (opts === null || opts === void 0 ? void 0 : opts.algorithm) || "best fit"
    }, [], {}, function() {
        return defaultLocale;
    }).locale;
}




/***/ }),

/***/ 766:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * negotiator
 * Copyright(c) 2012 Federico Romero
 * Copyright(c) 2012-2014 Isaac Z. Schlueter
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 
var preferredCharsets = __webpack_require__(475);
var preferredEncodings = __webpack_require__(577);
var preferredLanguages = __webpack_require__(367);
var preferredMediaTypes = __webpack_require__(564);
/**
 * Module exports.
 * @public
 */ module.exports = Negotiator;
module.exports.Negotiator = Negotiator;
/**
 * Create a Negotiator instance from a request.
 * @param {object} request
 * @public
 */ function Negotiator(request) {
    if (!(this instanceof Negotiator)) {
        return new Negotiator(request);
    }
    this.request = request;
}
Negotiator.prototype.charset = function charset(available) {
    var set = this.charsets(available);
    return set && set[0];
};
Negotiator.prototype.charsets = function charsets(available) {
    return preferredCharsets(this.request.headers["accept-charset"], available);
};
Negotiator.prototype.encoding = function encoding(available, opts) {
    var set = this.encodings(available, opts);
    return set && set[0];
};
Negotiator.prototype.encodings = function encodings(available, options) {
    var opts = options || {};
    return preferredEncodings(this.request.headers["accept-encoding"], available, opts.preferred);
};
Negotiator.prototype.language = function language(available) {
    var set = this.languages(available);
    return set && set[0];
};
Negotiator.prototype.languages = function languages(available) {
    return preferredLanguages(this.request.headers["accept-language"], available);
};
Negotiator.prototype.mediaType = function mediaType(available) {
    var set = this.mediaTypes(available);
    return set && set[0];
};
Negotiator.prototype.mediaTypes = function mediaTypes(available) {
    return preferredMediaTypes(this.request.headers.accept, available);
};
// Backwards compatibility
Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;


/***/ }),

/***/ 475:
/***/ ((module) => {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 
/**
 * Module exports.
 * @public
 */ module.exports = preferredCharsets;
module.exports.preferredCharsets = preferredCharsets;
/**
 * Module variables.
 * @private
 */ var simpleCharsetRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
/**
 * Parse the Accept-Charset header.
 * @private
 */ function parseAcceptCharset(accept) {
    var accepts = accept.split(",");
    for(var i = 0, j = 0; i < accepts.length; i++){
        var charset = parseCharset(accepts[i].trim(), i);
        if (charset) {
            accepts[j++] = charset;
        }
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse a charset from the Accept-Charset header.
 * @private
 */ function parseCharset(str, i) {
    var match = simpleCharsetRegExp.exec(str);
    if (!match) return null;
    var charset = match[1];
    var q = 1;
    if (match[2]) {
        var params = match[2].split(";");
        for(var j = 0; j < params.length; j++){
            var p = params[j].trim().split("=");
            if (p[0] === "q") {
                q = parseFloat(p[1]);
                break;
            }
        }
    }
    return {
        charset: charset,
        q: q,
        i: i
    };
}
/**
 * Get the priority of a charset.
 * @private
 */ function getCharsetPriority(charset, accepted, index) {
    var priority = {
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(charset, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the charset.
 * @private
 */ function specify(charset, spec, index) {
    var s = 0;
    if (spec.charset.toLowerCase() === charset.toLowerCase()) {
        s |= 1;
    } else if (spec.charset !== "*") {
        return null;
    }
    return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
/**
 * Get the preferred charsets from an Accept-Charset header.
 * @public
 */ function preferredCharsets(accept, provided) {
    // RFC 2616 sec 14.2: no header = *
    var accepts = parseAcceptCharset(accept === undefined ? "*" : accept || "");
    if (!provided) {
        // sorted list of all charsets
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullCharset);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getCharsetPriority(type, accepts, index);
    });
    // sorted list of accepted charsets
    return priorities.filter(isQuality).sort(compareSpecs).map(function getCharset(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
}
/**
 * Get full charset string.
 * @private
 */ function getFullCharset(spec) {
    return spec.charset;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}


/***/ }),

/***/ 577:
/***/ ((module) => {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 
/**
 * Module exports.
 * @public
 */ module.exports = preferredEncodings;
module.exports.preferredEncodings = preferredEncodings;
/**
 * Module variables.
 * @private
 */ var simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
/**
 * Parse the Accept-Encoding header.
 * @private
 */ function parseAcceptEncoding(accept) {
    var accepts = accept.split(",");
    var hasIdentity = false;
    var minQuality = 1;
    for(var i = 0, j = 0; i < accepts.length; i++){
        var encoding = parseEncoding(accepts[i].trim(), i);
        if (encoding) {
            accepts[j++] = encoding;
            hasIdentity = hasIdentity || specify("identity", encoding);
            minQuality = Math.min(minQuality, encoding.q || 1);
        }
    }
    if (!hasIdentity) {
        /*
     * If identity doesn't explicitly appear in the accept-encoding header,
     * it's added to the list of acceptable encoding with the lowest q
     */ accepts[j++] = {
            encoding: "identity",
            q: minQuality,
            i: i
        };
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse an encoding from the Accept-Encoding header.
 * @private
 */ function parseEncoding(str, i) {
    var match = simpleEncodingRegExp.exec(str);
    if (!match) return null;
    var encoding = match[1];
    var q = 1;
    if (match[2]) {
        var params = match[2].split(";");
        for(var j = 0; j < params.length; j++){
            var p = params[j].trim().split("=");
            if (p[0] === "q") {
                q = parseFloat(p[1]);
                break;
            }
        }
    }
    return {
        encoding: encoding,
        q: q,
        i: i
    };
}
/**
 * Get the priority of an encoding.
 * @private
 */ function getEncodingPriority(encoding, accepted, index) {
    var priority = {
        encoding: encoding,
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(encoding, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the encoding.
 * @private
 */ function specify(encoding, spec, index) {
    var s = 0;
    if (spec.encoding.toLowerCase() === encoding.toLowerCase()) {
        s |= 1;
    } else if (spec.encoding !== "*") {
        return null;
    }
    return {
        encoding: encoding,
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
/**
 * Get the preferred encodings from an Accept-Encoding header.
 * @public
 */ function preferredEncodings(accept, provided, preferred) {
    var accepts = parseAcceptEncoding(accept || "");
    var comparator = preferred ? function comparator(a, b) {
        if (a.q !== b.q) {
            return b.q - a.q // higher quality first
            ;
        }
        var aPreferred = preferred.indexOf(a.encoding);
        var bPreferred = preferred.indexOf(b.encoding);
        if (aPreferred === -1 && bPreferred === -1) {
            // consider the original specifity/order
            return b.s - a.s || a.o - b.o || a.i - b.i;
        }
        if (aPreferred !== -1 && bPreferred !== -1) {
            return aPreferred - bPreferred // consider the preferred order
            ;
        }
        return aPreferred === -1 ? 1 : -1 // preferred first
        ;
    } : compareSpecs;
    if (!provided) {
        // sorted list of all encodings
        return accepts.filter(isQuality).sort(comparator).map(getFullEncoding);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getEncodingPriority(type, accepts, index);
    });
    // sorted list of accepted encodings
    return priorities.filter(isQuality).sort(comparator).map(function getEncoding(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i;
}
/**
 * Get full encoding string.
 * @private
 */ function getFullEncoding(spec) {
    return spec.encoding;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}


/***/ }),

/***/ 367:
/***/ ((module) => {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 
/**
 * Module exports.
 * @public
 */ module.exports = preferredLanguages;
module.exports.preferredLanguages = preferredLanguages;
/**
 * Module variables.
 * @private
 */ var simpleLanguageRegExp = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
/**
 * Parse the Accept-Language header.
 * @private
 */ function parseAcceptLanguage(accept) {
    var accepts = accept.split(",");
    for(var i = 0, j = 0; i < accepts.length; i++){
        var language = parseLanguage(accepts[i].trim(), i);
        if (language) {
            accepts[j++] = language;
        }
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse a language from the Accept-Language header.
 * @private
 */ function parseLanguage(str, i) {
    var match = simpleLanguageRegExp.exec(str);
    if (!match) return null;
    var prefix = match[1];
    var suffix = match[2];
    var full = prefix;
    if (suffix) full += "-" + suffix;
    var q = 1;
    if (match[3]) {
        var params = match[3].split(";");
        for(var j = 0; j < params.length; j++){
            var p = params[j].split("=");
            if (p[0] === "q") q = parseFloat(p[1]);
        }
    }
    return {
        prefix: prefix,
        suffix: suffix,
        q: q,
        i: i,
        full: full
    };
}
/**
 * Get the priority of a language.
 * @private
 */ function getLanguagePriority(language, accepted, index) {
    var priority = {
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(language, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the language.
 * @private
 */ function specify(language, spec, index) {
    var p = parseLanguage(language);
    if (!p) return null;
    var s = 0;
    if (spec.full.toLowerCase() === p.full.toLowerCase()) {
        s |= 4;
    } else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {
        s |= 2;
    } else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) {
        s |= 1;
    } else if (spec.full !== "*") {
        return null;
    }
    return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
/**
 * Get the preferred languages from an Accept-Language header.
 * @public
 */ function preferredLanguages(accept, provided) {
    // RFC 2616 sec 14.4: no header = *
    var accepts = parseAcceptLanguage(accept === undefined ? "*" : accept || "");
    if (!provided) {
        // sorted list of all languages
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullLanguage);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getLanguagePriority(type, accepts, index);
    });
    // sorted list of accepted languages
    return priorities.filter(isQuality).sort(compareSpecs).map(function getLanguage(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
}
/**
 * Get full language string.
 * @private
 */ function getFullLanguage(spec) {
    return spec.full;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}


/***/ }),

/***/ 564:
/***/ ((module) => {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 
/**
 * Module exports.
 * @public
 */ module.exports = preferredMediaTypes;
module.exports.preferredMediaTypes = preferredMediaTypes;
/**
 * Module variables.
 * @private
 */ var simpleMediaTypeRegExp = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
/**
 * Parse the Accept header.
 * @private
 */ function parseAccept(accept) {
    var accepts = splitMediaTypes(accept);
    for(var i = 0, j = 0; i < accepts.length; i++){
        var mediaType = parseMediaType(accepts[i].trim(), i);
        if (mediaType) {
            accepts[j++] = mediaType;
        }
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse a media type from the Accept header.
 * @private
 */ function parseMediaType(str, i) {
    var match = simpleMediaTypeRegExp.exec(str);
    if (!match) return null;
    var params = Object.create(null);
    var q = 1;
    var subtype = match[2];
    var type = match[1];
    if (match[3]) {
        var kvps = splitParameters(match[3]).map(splitKeyValuePair);
        for(var j = 0; j < kvps.length; j++){
            var pair = kvps[j];
            var key = pair[0].toLowerCase();
            var val = pair[1];
            // get the value, unwrapping quotes
            var value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val;
            if (key === "q") {
                q = parseFloat(value);
                break;
            }
            // store parameter
            params[key] = value;
        }
    }
    return {
        type: type,
        subtype: subtype,
        params: params,
        q: q,
        i: i
    };
}
/**
 * Get the priority of a media type.
 * @private
 */ function getMediaTypePriority(type, accepted, index) {
    var priority = {
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(type, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the media type.
 * @private
 */ function specify(type, spec, index) {
    var p = parseMediaType(type);
    var s = 0;
    if (!p) {
        return null;
    }
    if (spec.type.toLowerCase() == p.type.toLowerCase()) {
        s |= 4;
    } else if (spec.type != "*") {
        return null;
    }
    if (spec.subtype.toLowerCase() == p.subtype.toLowerCase()) {
        s |= 2;
    } else if (spec.subtype != "*") {
        return null;
    }
    var keys = Object.keys(spec.params);
    if (keys.length > 0) {
        if (keys.every(function(k) {
            return spec.params[k] == "*" || (spec.params[k] || "").toLowerCase() == (p.params[k] || "").toLowerCase();
        })) {
            s |= 1;
        } else {
            return null;
        }
    }
    return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
/**
 * Get the preferred media types from an Accept header.
 * @public
 */ function preferredMediaTypes(accept, provided) {
    // RFC 2616 sec 14.2: no header = */*
    var accepts = parseAccept(accept === undefined ? "*/*" : accept || "");
    if (!provided) {
        // sorted list of all types
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullType);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getMediaTypePriority(type, accepts, index);
    });
    // sorted list of accepted types
    return priorities.filter(isQuality).sort(compareSpecs).map(function getType(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
}
/**
 * Get full type string.
 * @private
 */ function getFullType(spec) {
    return spec.type + "/" + spec.subtype;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}
/**
 * Count the number of quotes in a string.
 * @private
 */ function quoteCount(string) {
    var count = 0;
    var index = 0;
    while((index = string.indexOf('"', index)) !== -1){
        count++;
        index++;
    }
    return count;
}
/**
 * Split a key value pair.
 * @private
 */ function splitKeyValuePair(str) {
    var index = str.indexOf("=");
    var key;
    var val;
    if (index === -1) {
        key = str;
    } else {
        key = str.slice(0, index);
        val = str.slice(index + 1);
    }
    return [
        key,
        val
    ];
}
/**
 * Split an Accept header into media types.
 * @private
 */ function splitMediaTypes(accept) {
    var accepts = accept.split(",");
    for(var i = 1, j = 0; i < accepts.length; i++){
        if (quoteCount(accepts[j]) % 2 == 0) {
            accepts[++j] = accepts[i];
        } else {
            accepts[j] += "," + accepts[i];
        }
    }
    // trim accepts
    accepts.length = j + 1;
    return accepts;
}
/**
 * Split a string of parameters.
 * @private
 */ function splitParameters(str) {
    var parameters = str.split(";");
    for(var i = 1, j = 0; i < parameters.length; i++){
        if (quoteCount(parameters[j]) % 2 == 0) {
            parameters[++j] = parameters[i];
        } else {
            parameters[j] += ";" + parameters[i];
        }
    }
    // trim parameters
    parameters.length = j + 1;
    for(var i = 0; i < parameters.length; i++){
        parameters[i] = parameters[i].trim();
    }
    return parameters;
}


/***/ }),

/***/ 285:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: !0
});
var e = __webpack_require__(754);
exports.Z = e.default;


/***/ }),

/***/ 641:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: !0
}));
var e = __webpack_require__(523), a = __webpack_require__(281);
exports["default"] = function(t) {
    var o;
    let { localizedPathnames: n, request: l, resolvedLocale: r, routing: s } = t;
    const i = l.nextUrl.clone(), c = a.getHost(l.headers);
    function p(t, o) {
        return t.pathname = e.normalizeTrailingSlash(t.pathname), l.nextUrl.basePath && ((t = new URL(t)).pathname = a.applyBasePath(t.pathname, l.nextUrl.basePath)), "<".concat(t.toString(), '>; rel="alternate"; hreflang="').concat(o, '"');
    }
    function m(e, t) {
        return n && "object" == typeof n ? a.formatTemplatePathname(e, n[r], n[t]) : e;
    }
    c && (i.port = "", i.host = c), i.protocol = null !== (o = l.headers.get("x-forwarded-proto")) && void 0 !== o ? o : i.protocol, i.pathname = a.getNormalizedPathname(i.pathname, s.locales, s.localePrefix);
    const h = a.getLocalePrefixes(s.locales, s.localePrefix, !1).flatMap((e)=>{
        let t, [o, l] = e;
        function r(e) {
            return "/" === e ? l : l + e;
        }
        if (s.domains) {
            return s.domains.filter((e)=>a.isLocaleSupportedOnDomain(o, e)).map((e)=>(t = new URL(i), t.port = "", t.host = e.domain, t.pathname = m(i.pathname, o), o === e.defaultLocale && "always" !== s.localePrefix.mode || (t.pathname = r(t.pathname)), p(t, o)));
        }
        {
            let e;
            e = n && "object" == typeof n ? m(i.pathname, o) : i.pathname, o === s.defaultLocale && "always" !== s.localePrefix.mode || (e = r(e)), t = new URL(e, i);
        }
        return p(t, o);
    });
    if (!s.domains && ("always" !== s.localePrefix.mode || "/" === i.pathname)) {
        const e = new URL(m(i.pathname, s.defaultLocale), i);
        h.push(p(e, "x-default"));
    }
    return h.join(", ");
};


/***/ }),

/***/ 754:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

const NextResponse = (__webpack_require__(695)/* .NextResponse */ .x);
Object.defineProperty(exports, "__esModule", ({
    value: !0
}));
var a = __webpack_require__(825), t = __webpack_require__(492), l = __webpack_require__(523), o = __webpack_require__(641), n = __webpack_require__(702), r = __webpack_require__(893), i = __webpack_require__(281);
exports["default"] = function(s, c) {
    var d, h, m;
    const f = a.receiveRoutingConfig({
        ...s,
        alternateLinks: null !== (d = null == c ? void 0 : c.alternateLinks) && void 0 !== d ? d : s.alternateLinks,
        localeDetection: null !== (h = null == c ? void 0 : c.localeDetection) && void 0 !== h ? h : s.localeDetection,
        localeCookie: null !== (m = null == c ? void 0 : c.localeCookie) && void 0 !== m ? m : s.localeCookie
    });
    return function(a) {
        var s;
        let c;
        try {
            c = decodeURI(a.nextUrl.pathname);
        } catch (a) {
            return NextResponse.next();
        }
        const d = i.sanitizePathname(c), { domain: h, locale: m } = n.default(f, a.headers, a.cookies, d), u = h ? h.defaultLocale === m : m === f.defaultLocale, x = (null === (s = f.domains) || void 0 === s ? void 0 : s.filter((e)=>i.isLocaleSupportedOnDomain(m, e))) || [], P = null != f.domains && !h;
        function p(l) {
            const o = new URL(l, a.url);
            a.nextUrl.basePath && (o.pathname = i.applyBasePath(o.pathname, a.nextUrl.basePath));
            const n = new Headers(a.headers);
            return n.set(t.HEADER_LOCALE_NAME, m), NextResponse.rewrite(o, {
                request: {
                    headers: n
                }
            });
        }
        function v(t, o) {
            const n = new URL(t, a.url);
            if (n.pathname = l.normalizeTrailingSlash(n.pathname), x.length > 0 && !o && h) {
                const e = i.getBestMatchingDomain(h, m, x);
                e && (o = e.domain, e.defaultLocale === m && "as-needed" === f.localePrefix.mode && (n.pathname = i.getNormalizedPathname(n.pathname, f.locales, f.localePrefix)));
            }
            var r, s;
            o && (n.host = o, a.headers.get("x-forwarded-host") && (n.protocol = null !== (r = a.headers.get("x-forwarded-proto")) && void 0 !== r ? r : a.nextUrl.protocol, n.port = null !== (s = a.headers.get("x-forwarded-port")) && void 0 !== s ? s : ""));
            return a.nextUrl.basePath && (n.pathname = i.applyBasePath(n.pathname, a.nextUrl.basePath)), NextResponse.redirect(n.toString());
        }
        const g = i.getNormalizedPathname(d, f.locales, f.localePrefix), L = i.getPathnameMatch(d, f.locales, f.localePrefix), U = null != L, k = "never" === f.localePrefix.mode || u && "as-needed" === f.localePrefix.mode;
        let q, j, C = g;
        const D = f.pathnames;
        if (D) {
            let e;
            if ([e, j] = i.getInternalTemplate(D, g, m), j) {
                const t = D[j], o = "string" == typeof t ? t : t[m];
                if (l.matchesPathname(o, g)) C = i.formatTemplatePathname(g, o, j);
                else {
                    let n;
                    n = e ? "string" == typeof t ? t : t[e] : j;
                    const r = k ? void 0 : l.getLocalePrefix(m, f.localePrefix), s = i.formatTemplatePathname(g, n, o);
                    q = v(i.formatPathname(s, r, a.nextUrl.search));
                }
            }
        }
        if (!q) if ("/" !== C || U) {
            const e = i.formatPathname(C, i.getLocaleAsPrefix(m), a.nextUrl.search);
            if (U) {
                const t = i.formatPathname(g, L.prefix, a.nextUrl.search);
                if ("never" === f.localePrefix.mode) q = v(i.formatPathname(g, void 0, a.nextUrl.search));
                else if (L.exact) if (u && k) q = v(i.formatPathname(g, void 0, a.nextUrl.search));
                else if (f.domains) {
                    const a = i.getBestMatchingDomain(h, L.locale, x);
                    q = (null == h ? void 0 : h.domain) === (null == a ? void 0 : a.domain) || P ? p(e) : v(t, null == a ? void 0 : a.domain);
                } else q = p(e);
                else q = v(t);
            } else q = k ? p(e) : v(i.formatPathname(g, l.getLocalePrefix(m, f.localePrefix), a.nextUrl.search));
        } else q = k ? p(i.formatPathname(C, i.getLocaleAsPrefix(m), a.nextUrl.search)) : v(i.formatPathname(g, l.getLocalePrefix(m, f.localePrefix), a.nextUrl.search));
        return f.localeDetection && f.localeCookie && r.default(a, q, m, f.localeCookie), "never" !== f.localePrefix.mode && f.alternateLinks && f.locales.length > 1 && q.headers.set("Link", o.default({
            routing: f,
            localizedPathnames: null != j && D ? D[j] : void 0,
            request: a,
            resolvedLocale: m
        })), q;
    };
};


/***/ }),

/***/ 702:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: !0
}));
var e = __webpack_require__(898), o = __webpack_require__(766), l = __webpack_require__(281);
function t(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}
var a = t(o);
function n(o, l, t) {
    let n;
    const c = new a.default({
        headers: {
            "accept-language": o.get("accept-language") || void 0
        }
    }).languages();
    try {
        const o = function(e) {
            return e.slice().sort((e, o)=>o.length - e.length);
        }(l);
        n = e.match(c, o, t);
    } catch (e) {}
    return n;
}
function c(e, o) {
    if (e.localeCookie && o.has(e.localeCookie.name)) {
        var l;
        const t = null === (l = o.get(e.localeCookie.name)) || void 0 === l ? void 0 : l.value;
        if (t && e.locales.includes(t)) return t;
    }
}
function i(e, o, t, a) {
    let i;
    var r;
    a && (i = null === (r = l.getPathnameMatch(a, e.locales, e.localePrefix)) || void 0 === r ? void 0 : r.locale);
    return !i && e.localeDetection && (i = c(e, t)), !i && e.localeDetection && (i = n(o, e.locales, e.defaultLocale)), i || (i = e.defaultLocale), i;
}
function r(e, o, t, a) {
    const r = function(e, o) {
        const t = l.getHost(e);
        if (t) return o.find((e)=>e.domain === t);
    }(o, e.domains);
    if (!r) return {
        locale: i(e, o, t, a)
    };
    let u;
    if (a) {
        var s;
        const o = null === (s = l.getPathnameMatch(a, e.locales, e.localePrefix)) || void 0 === s ? void 0 : s.locale;
        if (o) {
            if (!l.isLocaleSupportedOnDomain(o, r)) return {
                locale: o,
                domain: r
            };
            u = o;
        }
    }
    if (!u && e.localeDetection) {
        const o = c(e, t);
        o && l.isLocaleSupportedOnDomain(o, r) && (u = o);
    }
    if (!u && e.localeDetection) {
        const l = n(o, r.locales || e.locales, r.defaultLocale);
        l && (u = l);
    }
    return u || (u = r.defaultLocale), {
        locale: u,
        domain: r
    };
}
exports["default"] = function(e, o, l, t) {
    return e.domains ? r(e, o, l, t) : {
        locale: i(e, o, l, t)
    };
}, exports.getAcceptLanguageLocale = n;


/***/ }),

/***/ 893:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: !0
})), exports["default"] = function(e, t, o, s) {
    var a;
    const { name: i, ...l } = s;
    (null === (a = e.cookies.get(i)) || void 0 === a ? void 0 : a.value) !== o && t.cookies.set(i, o, {
        path: e.nextUrl.basePath || void 0,
        ...l
    });
};


/***/ }),

/***/ 281:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: !0
}));
var e = __webpack_require__(523);
function t(t, n) {
    let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    const o = t.map((t)=>[
            t,
            e.getLocalePrefix(t, n)
        ]);
    return r && o.sort((e, t)=>t[1].length - e[1].length), o;
}
function n(t, n) {
    const r = e.normalizeTrailingSlash(n), o = e.normalizeTrailingSlash(t), a = e.templateToRegex(o).exec(r);
    if (!a) return;
    const l = {};
    for(let e = 1; e < a.length; e++){
        var i;
        const t = null === (i = o.match(/\[([^\]]+)\]/g)) || void 0 === i ? void 0 : i[e - 1].replace(/[[\]]/g, "");
        t && (l[t] = a[e]);
    }
    return l;
}
function r(e, t) {
    if (!t) return e;
    let n = e = e.replace(/\[\[/g, "[").replace(/\]\]/g, "]");
    return Object.entries(t).forEach((e)=>{
        let [t, r] = e;
        n = n.replace("[".concat(t, "]"), r);
    }), n;
}
function o(e, t) {
    return t.defaultLocale === e || !t.locales || t.locales.includes(e);
}
exports.applyBasePath = function(t, n) {
    return e.normalizeTrailingSlash(n + t);
}, exports.formatPathname = function(t, n, r) {
    let o = t;
    return n && (o = e.prefixPathname(n, o)), r && (o += r), o;
}, exports.formatPathnameTemplate = r, exports.formatTemplatePathname = function(t, o, a, l) {
    let i = "";
    return i += r(a, n(o, t)), i = e.normalizeTrailingSlash(i), i;
}, exports.getBestMatchingDomain = function(e, t, n) {
    let r;
    return e && o(t, e) && (r = e), r || (r = n.find((e)=>e.defaultLocale === t)), r || (r = n.find((e)=>{
        var n;
        return null === (n = e.locales) || void 0 === n ? void 0 : n.includes(t);
    })), r || null != (null == e ? void 0 : e.locales) || (r = e), r || (r = n.find((e)=>!e.locales)), r;
}, exports.getHost = function(e) {
    var t, n;
    return null !== (t = null !== (n = e.get("x-forwarded-host")) && void 0 !== n ? n : e.get("host")) && void 0 !== t ? t : void 0;
}, exports.getInternalTemplate = function(t, n, r) {
    const o = e.getSortedPathnames(Object.keys(t));
    for (const a of o){
        const o = t[a];
        if ("string" == typeof o) {
            const t = o;
            if (e.matchesPathname(t, n)) return [
                void 0,
                a
            ];
        } else {
            const t = Object.entries(o), l = t.findIndex((e)=>{
                let [t] = e;
                return t === r;
            });
            l > 0 && t.unshift(t.splice(l, 1)[0]);
            for (const [r, o] of t)if (e.matchesPathname(o, n)) return [
                r,
                a
            ];
        }
    }
    for (const r of Object.keys(t))if (e.matchesPathname(r, n)) return [
        void 0,
        r
    ];
    return [
        void 0,
        void 0
    ];
}, exports.getLocaleAsPrefix = function(e) {
    return "/".concat(e);
}, exports.getLocalePrefixes = t, exports.getNormalizedPathname = function(n, r, o) {
    n.endsWith("/") || (n += "/");
    const a = t(r, o), l = new RegExp("^(".concat(a.map((e)=>{
        let [, t] = e;
        return t.replaceAll("/", "\\/");
    }).join("|"), ")/(.*)"), "i"), i = n.match(l);
    let s = i ? "/" + i[2] : n;
    return "/" !== s && (s = e.normalizeTrailingSlash(s)), s;
}, exports.getPathnameMatch = function(e, n, r) {
    const o = t(n, r);
    for (const [t, n] of o){
        let r, o;
        if (e === n || e.startsWith(n + "/")) r = o = !0;
        else {
            const t = e.toLowerCase(), a = n.toLowerCase();
            (t === a || t.startsWith(a + "/")) && (r = !1, o = !0);
        }
        if (o) return {
            locale: t,
            prefix: n,
            matchedPrefix: e.slice(0, n.length),
            exact: r
        };
    }
}, exports.getRouteParams = n, exports.isLocaleSupportedOnDomain = o, exports.sanitizePathname = function(e) {
    return e.replace(/\\/g, "%5C").replace(/\/+/g, "/");
};


/***/ }),

/***/ 825:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

function e(e) {
    return !(null != e && !e) && {
        name: "NEXT_LOCALE",
        maxAge: 31536e3,
        sameSite: "lax",
        ..."object" == typeof e && e
    };
}
function o(e) {
    return "object" == typeof e ? e : {
        mode: e || "always"
    };
}
Object.defineProperty(exports, "__esModule", ({
    value: !0
})), exports.receiveLocaleCookie = e, exports.receiveLocalePrefixConfig = o, exports.receiveRoutingConfig = function(t) {
    var l, i;
    return {
        ...t,
        localePrefix: o(t.localePrefix),
        localeCookie: e(t.localeCookie),
        localeDetection: null === (l = t.localeDetection) || void 0 === l || l,
        alternateLinks: null === (i = t.alternateLinks) || void 0 === i || i
    };
};


/***/ }),

/***/ 376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: !0
});
var e = __webpack_require__(829);
__webpack_unused_export__ = e.getFormatter, __webpack_unused_export__ = e.getLocale, __webpack_unused_export__ = e.getMessages, __webpack_unused_export__ = e.getNow, exports.cF = e.getRequestConfig, __webpack_unused_export__ = e.getTimeZone, __webpack_unused_export__ = e.getTranslations, __webpack_unused_export__ = e.setRequestLocale, __webpack_unused_export__ = e.unstable_setRequestLocale;


/***/ }),

/***/ 829:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

function e(e) {
    return ()=>{
        throw new Error("`".concat(e, "` is not supported in Client Components."));
    };
}
Object.defineProperty(exports, "__esModule", ({
    value: !0
}));
const t = e("getFormatter"), s = e("getNow"), o = e("getTimeZone"), r = e("getMessages"), n = e("getLocale"), a = e("getTranslations"), g = e("unstable_setRequestLocale"), u = e("setRequestLocale");
exports.getFormatter = t, exports.getLocale = n, exports.getMessages = r, exports.getNow = s, exports.getRequestConfig = function() {
    return e("getRequestConfig");
}, exports.getTimeZone = o, exports.getTranslations = a, exports.setRequestLocale = u, exports.unstable_setRequestLocale = g;


/***/ }),

/***/ 492:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: !0
}));
exports.HEADER_LOCALE_NAME = "X-NEXT-INTL-LOCALE", exports.LOCALE_SEGMENT_NAME = "locale";


/***/ }),

/***/ 523:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

function t(t) {
    return function(t) {
        return "object" == typeof t ? null == t.host && null == t.hostname : !/^[a-z]+:/i.test(t);
    }(t) && !function(t) {
        const e = "object" == typeof t ? t.pathname : t;
        return null != e && !e.startsWith("/");
    }(t);
}
function e(t, e) {
    let r;
    return "string" == typeof t ? r = n(e, t) : (r = {
        ...t
    }, t.pathname && (r.pathname = n(e, t.pathname))), r;
}
function n(t, e) {
    let n = t;
    return /^\/(\?.*)?$/.test(e) && (e = e.slice(1)), n += e, n;
}
function r(t, e) {
    return e === t || e.startsWith("".concat(t, "/"));
}
function o(t) {
    const e = function() {
        try {
            return "true" === process.env._next_intl_trailing_slash;
        } catch (t) {
            return !1;
        }
    }();
    if ("/" !== t) {
        const n = t.endsWith("/");
        e && !n ? t += "/" : !e && n && (t = t.slice(0, -1));
    }
    return t;
}
function i(t) {
    return "/" + t;
}
function u(t) {
    const e = t.replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "?(.*)").replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)").replace(/\[([^\]]+)\]/g, "([^/]+)");
    return new RegExp("^".concat(e, "$"));
}
function s(t) {
    return t.includes("[[...");
}
function c(t) {
    return t.includes("[...");
}
function f(t) {
    return t.includes("[");
}
function a(t, e) {
    const n = t.split("/"), r = e.split("/"), o = Math.max(n.length, r.length);
    for(let t = 0; t < o; t++){
        const e = n[t], o = r[t];
        if (!e && o) return -1;
        if (e && !o) return 1;
        if (e || o) {
            if (!f(e) && f(o)) return -1;
            if (f(e) && !f(o)) return 1;
            if (!c(e) && c(o)) return -1;
            if (c(e) && !c(o)) return 1;
            if (!s(e) && s(o)) return -1;
            if (s(e) && !s(o)) return 1;
        }
    }
    return 0;
}
Object.defineProperty(exports, "__esModule", ({
    value: !0
})), exports.getLocaleAsPrefix = i, exports.getLocalePrefix = function(t, e) {
    var n;
    return "never" !== e.mode && (null === (n = e.prefixes) || void 0 === n ? void 0 : n[t]) || i(t);
}, exports.getSortedPathnames = function(t) {
    return t.sort(a);
}, exports.hasPathnamePrefixed = r, exports.isLocalizableHref = t, exports.isPromise = function(t) {
    return "function" == typeof t.then;
}, exports.localizeHref = function(n, o) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o, u = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0;
    if (!t(n)) return n;
    const c = o !== i, f = r(s, u);
    return (c || f) && null != s ? e(n, s) : n;
}, exports.matchesPathname = function(t, e) {
    const n = o(t), r = o(e);
    return u(n).test(r);
}, exports.normalizeTrailingSlash = o, exports.prefixHref = e, exports.prefixPathname = n, exports.templateToRegex = u, exports.unprefixPathname = function(t, e) {
    return t.replace(new RegExp("^".concat(e)), "") || "/";
};


/***/ }),

/***/ 170:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    return `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0].path,
            args[0].domain
        ];
        return this.set({
            name,
            path,
            domain,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ 16:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
var __dirname = "/";

(()=>{
    "use strict";
    var e = {
        491: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContextAPI = void 0;
            const n = r(223);
            const a = r(172);
            const o = r(930);
            const i = "context";
            const c = new n.NoopContextManager;
            class ContextAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new ContextAPI;
                    }
                    return this._instance;
                }
                setGlobalContextManager(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                active() {
                    return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                    return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                    return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                    return (0, a.getGlobal)(i) || c;
                }
                disable() {
                    this._getContextManager().disable();
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.ContextAPI = ContextAPI;
        },
        930: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagAPI = void 0;
            const n = r(56);
            const a = r(912);
            const o = r(957);
            const i = r(172);
            const c = "diag";
            class DiagAPI {
                constructor(){
                    function _logProxy(e) {
                        return function(...t) {
                            const r = (0, i.getGlobal)("diag");
                            if (!r) return;
                            return r[e](...t);
                        };
                    }
                    const e = this;
                    const setLogger = (t, r = {
                        logLevel: o.DiagLogLevel.INFO
                    })=>{
                        var n, c, s;
                        if (t === e) {
                            const t = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            e.error((n = t.stack) !== null && n !== void 0 ? n : t.message);
                            return false;
                        }
                        if (typeof r === "number") {
                            r = {
                                logLevel: r
                            };
                        }
                        const u = (0, i.getGlobal)("diag");
                        const l = (0, a.createLogLevelDiagLogger)((c = r.logLevel) !== null && c !== void 0 ? c : o.DiagLogLevel.INFO, t);
                        if (u && !r.suppressOverrideMessage) {
                            const e = (s = (new Error).stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
                            u.warn(`Current logger will be overwritten from ${e}`);
                            l.warn(`Current logger will overwrite one already registered from ${e}`);
                        }
                        return (0, i.registerGlobal)("diag", l, e, true);
                    };
                    e.setLogger = setLogger;
                    e.disable = ()=>{
                        (0, i.unregisterGlobal)(c, e);
                    };
                    e.createComponentLogger = (e)=>new n.DiagComponentLogger(e);
                    e.verbose = _logProxy("verbose");
                    e.debug = _logProxy("debug");
                    e.info = _logProxy("info");
                    e.warn = _logProxy("warn");
                    e.error = _logProxy("error");
                }
                static instance() {
                    if (!this._instance) {
                        this._instance = new DiagAPI;
                    }
                    return this._instance;
                }
            }
            t.DiagAPI = DiagAPI;
        },
        653: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetricsAPI = void 0;
            const n = r(660);
            const a = r(172);
            const o = r(930);
            const i = "metrics";
            class MetricsAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new MetricsAPI;
                    }
                    return this._instance;
                }
                setGlobalMeterProvider(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                getMeterProvider() {
                    return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                    return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.MetricsAPI = MetricsAPI;
        },
        181: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PropagationAPI = void 0;
            const n = r(172);
            const a = r(874);
            const o = r(194);
            const i = r(277);
            const c = r(369);
            const s = r(930);
            const u = "propagation";
            const l = new a.NoopTextMapPropagator;
            class PropagationAPI {
                constructor(){
                    this.createBaggage = c.createBaggage;
                    this.getBaggage = i.getBaggage;
                    this.getActiveBaggage = i.getActiveBaggage;
                    this.setBaggage = i.setBaggage;
                    this.deleteBaggage = i.deleteBaggage;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PropagationAPI;
                    }
                    return this._instance;
                }
                setGlobalPropagator(e) {
                    return (0, n.registerGlobal)(u, e, s.DiagAPI.instance());
                }
                inject(e, t, r = o.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = o.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                    return this._getGlobalPropagator().fields();
                }
                disable() {
                    (0, n.unregisterGlobal)(u, s.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                    return (0, n.getGlobal)(u) || l;
                }
            }
            t.PropagationAPI = PropagationAPI;
        },
        997: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceAPI = void 0;
            const n = r(172);
            const a = r(846);
            const o = r(139);
            const i = r(607);
            const c = r(930);
            const s = "trace";
            class TraceAPI {
                constructor(){
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                    this.wrapSpanContext = o.wrapSpanContext;
                    this.isSpanContextValid = o.isSpanContextValid;
                    this.deleteSpan = i.deleteSpan;
                    this.getSpan = i.getSpan;
                    this.getActiveSpan = i.getActiveSpan;
                    this.getSpanContext = i.getSpanContext;
                    this.setSpan = i.setSpan;
                    this.setSpanContext = i.setSpanContext;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new TraceAPI;
                    }
                    return this._instance;
                }
                setGlobalTracerProvider(e) {
                    const t = (0, n.registerGlobal)(s, this._proxyTracerProvider, c.DiagAPI.instance());
                    if (t) {
                        this._proxyTracerProvider.setDelegate(e);
                    }
                    return t;
                }
                getTracerProvider() {
                    return (0, n.getGlobal)(s) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                    return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                    (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                }
            }
            t.TraceAPI = TraceAPI;
        },
        277: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
            const n = r(491);
            const a = r(780);
            const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
            function getBaggage(e) {
                return e.getValue(o) || undefined;
            }
            t.getBaggage = getBaggage;
            function getActiveBaggage() {
                return getBaggage(n.ContextAPI.getInstance().active());
            }
            t.getActiveBaggage = getActiveBaggage;
            function setBaggage(e, t) {
                return e.setValue(o, t);
            }
            t.setBaggage = setBaggage;
            function deleteBaggage(e) {
                return e.deleteValue(o);
            }
            t.deleteBaggage = deleteBaggage;
        },
        993: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BaggageImpl = void 0;
            class BaggageImpl {
                constructor(e){
                    this._entries = e ? new Map(e) : new Map;
                }
                getEntry(e) {
                    const t = this._entries.get(e);
                    if (!t) {
                        return undefined;
                    }
                    return Object.assign({}, t);
                }
                getAllEntries() {
                    return Array.from(this._entries.entries()).map(([e, t])=>[
                            e,
                            t
                        ]);
                }
                setEntry(e, t) {
                    const r = new BaggageImpl(this._entries);
                    r._entries.set(e, t);
                    return r;
                }
                removeEntry(e) {
                    const t = new BaggageImpl(this._entries);
                    t._entries.delete(e);
                    return t;
                }
                removeEntries(...e) {
                    const t = new BaggageImpl(this._entries);
                    for (const r of e){
                        t._entries.delete(r);
                    }
                    return t;
                }
                clear() {
                    return new BaggageImpl;
                }
            }
            t.BaggageImpl = BaggageImpl;
        },
        830: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataSymbol = void 0;
            t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        },
        369: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataFromString = t.createBaggage = void 0;
            const n = r(930);
            const a = r(993);
            const o = r(830);
            const i = n.DiagAPI.instance();
            function createBaggage(e = {}) {
                return new a.BaggageImpl(new Map(Object.entries(e)));
            }
            t.createBaggage = createBaggage;
            function baggageEntryMetadataFromString(e) {
                if (typeof e !== "string") {
                    i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
                    e = "";
                }
                return {
                    __TYPE__: o.baggageEntryMetadataSymbol,
                    toString () {
                        return e;
                    }
                };
            }
            t.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
        },
        67: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.context = void 0;
            const n = r(491);
            t.context = n.ContextAPI.getInstance();
        },
        223: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopContextManager = void 0;
            const n = r(780);
            class NoopContextManager {
                active() {
                    return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                    return t.call(r, ...n);
                }
                bind(e, t) {
                    return t;
                }
                enable() {
                    return this;
                }
                disable() {
                    return this;
                }
            }
            t.NoopContextManager = NoopContextManager;
        },
        780: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ROOT_CONTEXT = t.createContextKey = void 0;
            function createContextKey(e) {
                return Symbol.for(e);
            }
            t.createContextKey = createContextKey;
            class BaseContext {
                constructor(e){
                    const t = this;
                    t._currentContext = e ? new Map(e) : new Map;
                    t.getValue = (e)=>t._currentContext.get(e);
                    t.setValue = (e, r)=>{
                        const n = new BaseContext(t._currentContext);
                        n._currentContext.set(e, r);
                        return n;
                    };
                    t.deleteValue = (e)=>{
                        const r = new BaseContext(t._currentContext);
                        r._currentContext.delete(e);
                        return r;
                    };
                }
            }
            t.ROOT_CONTEXT = new BaseContext;
        },
        506: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.diag = void 0;
            const n = r(930);
            t.diag = n.DiagAPI.instance();
        },
        56: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagComponentLogger = void 0;
            const n = r(172);
            class DiagComponentLogger {
                constructor(e){
                    this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                    return logProxy("debug", this._namespace, e);
                }
                error(...e) {
                    return logProxy("error", this._namespace, e);
                }
                info(...e) {
                    return logProxy("info", this._namespace, e);
                }
                warn(...e) {
                    return logProxy("warn", this._namespace, e);
                }
                verbose(...e) {
                    return logProxy("verbose", this._namespace, e);
                }
            }
            t.DiagComponentLogger = DiagComponentLogger;
            function logProxy(e, t, r) {
                const a = (0, n.getGlobal)("diag");
                if (!a) {
                    return;
                }
                r.unshift(t);
                return a[e](...r);
            }
        },
        972: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagConsoleLogger = void 0;
            const r = [
                {
                    n: "error",
                    c: "error"
                },
                {
                    n: "warn",
                    c: "warn"
                },
                {
                    n: "info",
                    c: "info"
                },
                {
                    n: "debug",
                    c: "debug"
                },
                {
                    n: "verbose",
                    c: "trace"
                }
            ];
            class DiagConsoleLogger {
                constructor(){
                    function _consoleFunc(e) {
                        return function(...t) {
                            if (console) {
                                let r = console[e];
                                if (typeof r !== "function") {
                                    r = console.log;
                                }
                                if (typeof r === "function") {
                                    return r.apply(console, t);
                                }
                            }
                        };
                    }
                    for(let e = 0; e < r.length; e++){
                        this[r[e].n] = _consoleFunc(r[e].c);
                    }
                }
            }
            t.DiagConsoleLogger = DiagConsoleLogger;
        },
        912: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createLogLevelDiagLogger = void 0;
            const n = r(957);
            function createLogLevelDiagLogger(e, t) {
                if (e < n.DiagLogLevel.NONE) {
                    e = n.DiagLogLevel.NONE;
                } else if (e > n.DiagLogLevel.ALL) {
                    e = n.DiagLogLevel.ALL;
                }
                t = t || {};
                function _filterFunc(r, n) {
                    const a = t[r];
                    if (typeof a === "function" && e >= n) {
                        return a.bind(t);
                    }
                    return function() {};
                }
                return {
                    error: _filterFunc("error", n.DiagLogLevel.ERROR),
                    warn: _filterFunc("warn", n.DiagLogLevel.WARN),
                    info: _filterFunc("info", n.DiagLogLevel.INFO),
                    debug: _filterFunc("debug", n.DiagLogLevel.DEBUG),
                    verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE)
                };
            }
            t.createLogLevelDiagLogger = createLogLevelDiagLogger;
        },
        957: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagLogLevel = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["ERROR"] = 30] = "ERROR";
                e[e["WARN"] = 50] = "WARN";
                e[e["INFO"] = 60] = "INFO";
                e[e["DEBUG"] = 70] = "DEBUG";
                e[e["VERBOSE"] = 80] = "VERBOSE";
                e[e["ALL"] = 9999] = "ALL";
            })(r = t.DiagLogLevel || (t.DiagLogLevel = {}));
        },
        172: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
            const n = r(200);
            const a = r(521);
            const o = r(130);
            const i = a.VERSION.split(".")[0];
            const c = Symbol.for(`opentelemetry.js.api.${i}`);
            const s = n._globalThis;
            function registerGlobal(e, t, r, n = false) {
                var o;
                const i = s[c] = (o = s[c]) !== null && o !== void 0 ? o : {
                    version: a.VERSION
                };
                if (!n && i[e]) {
                    const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                if (i.version !== a.VERSION) {
                    const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                i[e] = t;
                r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);
                return true;
            }
            t.registerGlobal = registerGlobal;
            function getGlobal(e) {
                var t, r;
                const n = (t = s[c]) === null || t === void 0 ? void 0 : t.version;
                if (!n || !(0, o.isCompatible)(n)) {
                    return;
                }
                return (r = s[c]) === null || r === void 0 ? void 0 : r[e];
            }
            t.getGlobal = getGlobal;
            function unregisterGlobal(e, t) {
                t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);
                const r = s[c];
                if (r) {
                    delete r[e];
                }
            }
            t.unregisterGlobal = unregisterGlobal;
        },
        130: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isCompatible = t._makeCompatibilityCheck = void 0;
            const n = r(521);
            const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function _makeCompatibilityCheck(e) {
                const t = new Set([
                    e
                ]);
                const r = new Set;
                const n = e.match(a);
                if (!n) {
                    return ()=>false;
                }
                const o = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4]
                };
                if (o.prerelease != null) {
                    return function isExactmatch(t) {
                        return t === e;
                    };
                }
                function _reject(e) {
                    r.add(e);
                    return false;
                }
                function _accept(e) {
                    t.add(e);
                    return true;
                }
                return function isCompatible(e) {
                    if (t.has(e)) {
                        return true;
                    }
                    if (r.has(e)) {
                        return false;
                    }
                    const n = e.match(a);
                    if (!n) {
                        return _reject(e);
                    }
                    const i = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (i.prerelease != null) {
                        return _reject(e);
                    }
                    if (o.major !== i.major) {
                        return _reject(e);
                    }
                    if (o.major === 0) {
                        if (o.minor === i.minor && o.patch <= i.patch) {
                            return _accept(e);
                        }
                        return _reject(e);
                    }
                    if (o.minor <= i.minor) {
                        return _accept(e);
                    }
                    return _reject(e);
                };
            }
            t._makeCompatibilityCheck = _makeCompatibilityCheck;
            t.isCompatible = _makeCompatibilityCheck(n.VERSION);
        },
        886: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.metrics = void 0;
            const n = r(653);
            t.metrics = n.MetricsAPI.getInstance();
        },
        901: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ValueType = void 0;
            var r;
            (function(e) {
                e[e["INT"] = 0] = "INT";
                e[e["DOUBLE"] = 1] = "DOUBLE";
            })(r = t.ValueType || (t.ValueType = {}));
        },
        102: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
            class NoopMeter {
                constructor(){}
                createHistogram(e, r) {
                    return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                    return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                    return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                    return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                    return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                    return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
            }
            t.NoopMeter = NoopMeter;
            class NoopMetric {
            }
            t.NoopMetric = NoopMetric;
            class NoopCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopCounterMetric = NoopCounterMetric;
            class NoopUpDownCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
            class NoopHistogramMetric extends NoopMetric {
                record(e, t) {}
            }
            t.NoopHistogramMetric = NoopHistogramMetric;
            class NoopObservableMetric {
                addCallback(e) {}
                removeCallback(e) {}
            }
            t.NoopObservableMetric = NoopObservableMetric;
            class NoopObservableCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableCounterMetric = NoopObservableCounterMetric;
            class NoopObservableGaugeMetric extends NoopObservableMetric {
            }
            t.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
            class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
            t.NOOP_METER = new NoopMeter;
            t.NOOP_COUNTER_METRIC = new NoopCounterMetric;
            t.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric;
            t.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric;
            t.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric;
            t.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric;
            t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric;
            function createNoopMeter() {
                return t.NOOP_METER;
            }
            t.createNoopMeter = createNoopMeter;
        },
        660: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
            const n = r(102);
            class NoopMeterProvider {
                getMeter(e, t, r) {
                    return n.NOOP_METER;
                }
            }
            t.NoopMeterProvider = NoopMeterProvider;
            t.NOOP_METER_PROVIDER = new NoopMeterProvider;
        },
        200: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(46), t);
        },
        651: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t._globalThis = void 0;
            t._globalThis = typeof globalThis === "object" ? globalThis : __webpack_require__.g;
        },
        46: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(651), t);
        },
        939: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.propagation = void 0;
            const n = r(181);
            t.propagation = n.PropagationAPI.getInstance();
        },
        874: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTextMapPropagator = void 0;
            class NoopTextMapPropagator {
                inject(e, t) {}
                extract(e, t) {
                    return e;
                }
                fields() {
                    return [];
                }
            }
            t.NoopTextMapPropagator = NoopTextMapPropagator;
        },
        194: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultTextMapSetter = t.defaultTextMapGetter = void 0;
            t.defaultTextMapGetter = {
                get (e, t) {
                    if (e == null) {
                        return undefined;
                    }
                    return e[t];
                },
                keys (e) {
                    if (e == null) {
                        return [];
                    }
                    return Object.keys(e);
                }
            };
            t.defaultTextMapSetter = {
                set (e, t, r) {
                    if (e == null) {
                        return;
                    }
                    e[t] = r;
                }
            };
        },
        845: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.trace = void 0;
            const n = r(997);
            t.trace = n.TraceAPI.getInstance();
        },
        403: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NonRecordingSpan = void 0;
            const n = r(476);
            class NonRecordingSpan {
                constructor(e = n.INVALID_SPAN_CONTEXT){
                    this._spanContext = e;
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(e, t) {
                    return this;
                }
                setAttributes(e) {
                    return this;
                }
                addEvent(e, t) {
                    return this;
                }
                setStatus(e) {
                    return this;
                }
                updateName(e) {
                    return this;
                }
                end(e) {}
                isRecording() {
                    return false;
                }
                recordException(e, t) {}
            }
            t.NonRecordingSpan = NonRecordingSpan;
        },
        614: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracer = void 0;
            const n = r(491);
            const a = r(607);
            const o = r(403);
            const i = r(139);
            const c = n.ContextAPI.getInstance();
            class NoopTracer {
                startSpan(e, t, r = c.active()) {
                    const n = Boolean(t === null || t === void 0 ? void 0 : t.root);
                    if (n) {
                        return new o.NonRecordingSpan;
                    }
                    const s = r && (0, a.getSpanContext)(r);
                    if (isSpanContext(s) && (0, i.isSpanContextValid)(s)) {
                        return new o.NonRecordingSpan(s);
                    } else {
                        return new o.NonRecordingSpan;
                    }
                }
                startActiveSpan(e, t, r, n) {
                    let o;
                    let i;
                    let s;
                    if (arguments.length < 2) {
                        return;
                    } else if (arguments.length === 2) {
                        s = t;
                    } else if (arguments.length === 3) {
                        o = t;
                        s = r;
                    } else {
                        o = t;
                        i = r;
                        s = n;
                    }
                    const u = i !== null && i !== void 0 ? i : c.active();
                    const l = this.startSpan(e, o, u);
                    const g = (0, a.setSpan)(u, l);
                    return c.with(g, s, undefined, l);
                }
            }
            t.NoopTracer = NoopTracer;
            function isSpanContext(e) {
                return typeof e === "object" && typeof e["spanId"] === "string" && typeof e["traceId"] === "string" && typeof e["traceFlags"] === "number";
            }
        },
        124: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracerProvider = void 0;
            const n = r(614);
            class NoopTracerProvider {
                getTracer(e, t, r) {
                    return new n.NoopTracer;
                }
            }
            t.NoopTracerProvider = NoopTracerProvider;
        },
        125: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracer = void 0;
            const n = r(614);
            const a = new n.NoopTracer;
            class ProxyTracer {
                constructor(e, t, r, n){
                    this._provider = e;
                    this.name = t;
                    this.version = r;
                    this.options = n;
                }
                startSpan(e, t, r) {
                    return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                    const a = this._getTracer();
                    return Reflect.apply(a.startActiveSpan, a, arguments);
                }
                _getTracer() {
                    if (this._delegate) {
                        return this._delegate;
                    }
                    const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
                    if (!e) {
                        return a;
                    }
                    this._delegate = e;
                    return this._delegate;
                }
            }
            t.ProxyTracer = ProxyTracer;
        },
        846: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracerProvider = void 0;
            const n = r(125);
            const a = r(124);
            const o = new a.NoopTracerProvider;
            class ProxyTracerProvider {
                getTracer(e, t, r) {
                    var a;
                    return (a = this.getDelegateTracer(e, t, r)) !== null && a !== void 0 ? a : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                    var e;
                    return (e = this._delegate) !== null && e !== void 0 ? e : o;
                }
                setDelegate(e) {
                    this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                    var n;
                    return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, t, r);
                }
            }
            t.ProxyTracerProvider = ProxyTracerProvider;
        },
        996: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SamplingDecision = void 0;
            var r;
            (function(e) {
                e[e["NOT_RECORD"] = 0] = "NOT_RECORD";
                e[e["RECORD"] = 1] = "RECORD";
                e[e["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
            })(r = t.SamplingDecision || (t.SamplingDecision = {}));
        },
        607: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
            const n = r(780);
            const a = r(403);
            const o = r(491);
            const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
            function getSpan(e) {
                return e.getValue(i) || undefined;
            }
            t.getSpan = getSpan;
            function getActiveSpan() {
                return getSpan(o.ContextAPI.getInstance().active());
            }
            t.getActiveSpan = getActiveSpan;
            function setSpan(e, t) {
                return e.setValue(i, t);
            }
            t.setSpan = setSpan;
            function deleteSpan(e) {
                return e.deleteValue(i);
            }
            t.deleteSpan = deleteSpan;
            function setSpanContext(e, t) {
                return setSpan(e, new a.NonRecordingSpan(t));
            }
            t.setSpanContext = setSpanContext;
            function getSpanContext(e) {
                var t;
                return (t = getSpan(e)) === null || t === void 0 ? void 0 : t.spanContext();
            }
            t.getSpanContext = getSpanContext;
        },
        325: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceStateImpl = void 0;
            const n = r(564);
            const a = 32;
            const o = 512;
            const i = ",";
            const c = "=";
            class TraceStateImpl {
                constructor(e){
                    this._internalState = new Map;
                    if (e) this._parse(e);
                }
                set(e, t) {
                    const r = this._clone();
                    if (r._internalState.has(e)) {
                        r._internalState.delete(e);
                    }
                    r._internalState.set(e, t);
                    return r;
                }
                unset(e) {
                    const t = this._clone();
                    t._internalState.delete(e);
                    return t;
                }
                get(e) {
                    return this._internalState.get(e);
                }
                serialize() {
                    return this._keys().reduce((e, t)=>{
                        e.push(t + c + this.get(t));
                        return e;
                    }, []).join(i);
                }
                _parse(e) {
                    if (e.length > o) return;
                    this._internalState = e.split(i).reverse().reduce((e, t)=>{
                        const r = t.trim();
                        const a = r.indexOf(c);
                        if (a !== -1) {
                            const o = r.slice(0, a);
                            const i = r.slice(a + 1, t.length);
                            if ((0, n.validateKey)(o) && (0, n.validateValue)(i)) {
                                e.set(o, i);
                            } else {}
                        }
                        return e;
                    }, new Map);
                    if (this._internalState.size > a) {
                        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
                    }
                }
                _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                    const e = new TraceStateImpl;
                    e._internalState = new Map(this._internalState);
                    return e;
                }
            }
            t.TraceStateImpl = TraceStateImpl;
        },
        564: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.validateValue = t.validateKey = void 0;
            const r = "[_0-9a-z-*/]";
            const n = `[a-z]${r}{0,255}`;
            const a = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;
            const o = new RegExp(`^(?:${n}|${a})$`);
            const i = /^[ -~]{0,255}[!-~]$/;
            const c = /,|=/;
            function validateKey(e) {
                return o.test(e);
            }
            t.validateKey = validateKey;
            function validateValue(e) {
                return i.test(e) && !c.test(e);
            }
            t.validateValue = validateValue;
        },
        98: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createTraceState = void 0;
            const n = r(325);
            function createTraceState(e) {
                return new n.TraceStateImpl(e);
            }
            t.createTraceState = createTraceState;
        },
        476: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
            const n = r(475);
            t.INVALID_SPANID = "0000000000000000";
            t.INVALID_TRACEID = "00000000000000000000000000000000";
            t.INVALID_SPAN_CONTEXT = {
                traceId: t.INVALID_TRACEID,
                spanId: t.INVALID_SPANID,
                traceFlags: n.TraceFlags.NONE
            };
        },
        357: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanKind = void 0;
            var r;
            (function(e) {
                e[e["INTERNAL"] = 0] = "INTERNAL";
                e[e["SERVER"] = 1] = "SERVER";
                e[e["CLIENT"] = 2] = "CLIENT";
                e[e["PRODUCER"] = 3] = "PRODUCER";
                e[e["CONSUMER"] = 4] = "CONSUMER";
            })(r = t.SpanKind || (t.SpanKind = {}));
        },
        139: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
            const n = r(476);
            const a = r(403);
            const o = /^([0-9a-f]{32})$/i;
            const i = /^[0-9a-f]{16}$/i;
            function isValidTraceId(e) {
                return o.test(e) && e !== n.INVALID_TRACEID;
            }
            t.isValidTraceId = isValidTraceId;
            function isValidSpanId(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
            }
            t.isValidSpanId = isValidSpanId;
            function isSpanContextValid(e) {
                return isValidTraceId(e.traceId) && isValidSpanId(e.spanId);
            }
            t.isSpanContextValid = isSpanContextValid;
            function wrapSpanContext(e) {
                return new a.NonRecordingSpan(e);
            }
            t.wrapSpanContext = wrapSpanContext;
        },
        847: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanStatusCode = void 0;
            var r;
            (function(e) {
                e[e["UNSET"] = 0] = "UNSET";
                e[e["OK"] = 1] = "OK";
                e[e["ERROR"] = 2] = "ERROR";
            })(r = t.SpanStatusCode || (t.SpanStatusCode = {}));
        },
        475: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceFlags = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["SAMPLED"] = 1] = "SAMPLED";
            })(r = t.TraceFlags || (t.TraceFlags = {}));
        },
        521: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VERSION = void 0;
            t.VERSION = "1.6.0";
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var a = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r].call(a.exports, a, a.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = {};
    (()=>{
        var e = r;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
        var t = __nccwpck_require__(369);
        Object.defineProperty(e, "baggageEntryMetadataFromString", {
            enumerable: true,
            get: function() {
                return t.baggageEntryMetadataFromString;
            }
        });
        var n = __nccwpck_require__(780);
        Object.defineProperty(e, "createContextKey", {
            enumerable: true,
            get: function() {
                return n.createContextKey;
            }
        });
        Object.defineProperty(e, "ROOT_CONTEXT", {
            enumerable: true,
            get: function() {
                return n.ROOT_CONTEXT;
            }
        });
        var a = __nccwpck_require__(972);
        Object.defineProperty(e, "DiagConsoleLogger", {
            enumerable: true,
            get: function() {
                return a.DiagConsoleLogger;
            }
        });
        var o = __nccwpck_require__(957);
        Object.defineProperty(e, "DiagLogLevel", {
            enumerable: true,
            get: function() {
                return o.DiagLogLevel;
            }
        });
        var i = __nccwpck_require__(102);
        Object.defineProperty(e, "createNoopMeter", {
            enumerable: true,
            get: function() {
                return i.createNoopMeter;
            }
        });
        var c = __nccwpck_require__(901);
        Object.defineProperty(e, "ValueType", {
            enumerable: true,
            get: function() {
                return c.ValueType;
            }
        });
        var s = __nccwpck_require__(194);
        Object.defineProperty(e, "defaultTextMapGetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapGetter;
            }
        });
        Object.defineProperty(e, "defaultTextMapSetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapSetter;
            }
        });
        var u = __nccwpck_require__(125);
        Object.defineProperty(e, "ProxyTracer", {
            enumerable: true,
            get: function() {
                return u.ProxyTracer;
            }
        });
        var l = __nccwpck_require__(846);
        Object.defineProperty(e, "ProxyTracerProvider", {
            enumerable: true,
            get: function() {
                return l.ProxyTracerProvider;
            }
        });
        var g = __nccwpck_require__(996);
        Object.defineProperty(e, "SamplingDecision", {
            enumerable: true,
            get: function() {
                return g.SamplingDecision;
            }
        });
        var p = __nccwpck_require__(357);
        Object.defineProperty(e, "SpanKind", {
            enumerable: true,
            get: function() {
                return p.SpanKind;
            }
        });
        var d = __nccwpck_require__(847);
        Object.defineProperty(e, "SpanStatusCode", {
            enumerable: true,
            get: function() {
                return d.SpanStatusCode;
            }
        });
        var _ = __nccwpck_require__(475);
        Object.defineProperty(e, "TraceFlags", {
            enumerable: true,
            get: function() {
                return _.TraceFlags;
            }
        });
        var f = __nccwpck_require__(98);
        Object.defineProperty(e, "createTraceState", {
            enumerable: true,
            get: function() {
                return f.createTraceState;
            }
        });
        var b = __nccwpck_require__(139);
        Object.defineProperty(e, "isSpanContextValid", {
            enumerable: true,
            get: function() {
                return b.isSpanContextValid;
            }
        });
        Object.defineProperty(e, "isValidTraceId", {
            enumerable: true,
            get: function() {
                return b.isValidTraceId;
            }
        });
        Object.defineProperty(e, "isValidSpanId", {
            enumerable: true,
            get: function() {
                return b.isValidSpanId;
            }
        });
        var v = __nccwpck_require__(476);
        Object.defineProperty(e, "INVALID_SPANID", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPANID;
            }
        });
        Object.defineProperty(e, "INVALID_TRACEID", {
            enumerable: true,
            get: function() {
                return v.INVALID_TRACEID;
            }
        });
        Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPAN_CONTEXT;
            }
        });
        const O = __nccwpck_require__(67);
        Object.defineProperty(e, "context", {
            enumerable: true,
            get: function() {
                return O.context;
            }
        });
        const P = __nccwpck_require__(506);
        Object.defineProperty(e, "diag", {
            enumerable: true,
            get: function() {
                return P.diag;
            }
        });
        const N = __nccwpck_require__(886);
        Object.defineProperty(e, "metrics", {
            enumerable: true,
            get: function() {
                return N.metrics;
            }
        });
        const S = __nccwpck_require__(939);
        Object.defineProperty(e, "propagation", {
            enumerable: true,
            get: function() {
                return S.propagation;
            }
        });
        const C = __nccwpck_require__(845);
        Object.defineProperty(e, "trace", {
            enumerable: true,
            get: function() {
                return C.trace;
            }
        });
        e["default"] = {
            context: O.context,
            diag: P.diag,
            metrics: N.metrics,
            propagation: S.propagation,
            trace: C.trace
        };
    })();
    module.exports = r;
})();


/***/ }),

/***/ 53:
/***/ ((module) => {

"use strict";
var __dirname = "/";

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();


/***/ }),

/***/ 916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  bailoutToClientRendering: () => (/* binding */ bailoutToClientRendering)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/lazy-dynamic/no-ssr-error.js
// This has to be a shared module which is shared between client component error boundary and dynamic component
const NEXT_DYNAMIC_NO_SSR_CODE = "NEXT_DYNAMIC_NO_SSR_CODE";
function throwWithNoSSR() {
    const error = new Error(NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
} //# sourceMappingURL=no-ssr-error.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/async-local-storage.js
var async_local_storage = __webpack_require__(186);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/static-generation-async-storage.external.js

const staticGenerationAsyncStorage = (0,async_local_storage/* createAsyncLocalStorage */.P)(); //# sourceMappingURL=static-generation-async-storage.external.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/bailout-to-client-rendering.js


function bailoutToClientRendering() {
    const staticGenerationStore = staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        throwWithNoSSR();
    }
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  notFound: () => (/* reexport */ notFound)
});

// UNUSED EXPORTS: ReadonlyURLSearchParams, RedirectType, ServerInsertedHTMLContext, permanentRedirect, redirect, useParams, usePathname, useRouter, useSearchParams, useSelectedLayoutSegment, useSelectedLayoutSegments, useServerInsertedHTML

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(809);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/app-router-context.shared-runtime.js
"use client";

var CacheStates;
(function(CacheStates) {
    CacheStates["LAZY_INITIALIZED"] = "LAZYINITIALIZED";
    CacheStates["DATA_FETCH"] = "DATAFETCH";
    CacheStates["READY"] = "READY";
})(CacheStates || (CacheStates = {}));
const app_router_context_shared_runtime_AppRouterContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.createContext(null)));
const app_router_context_shared_runtime_LayoutRouterContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.createContext(null)));
const app_router_context_shared_runtime_GlobalLayoutRouterContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.createContext(null)));
const TemplateContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.createContext(null)));
if (false) {} //# sourceMappingURL=app-router-context.shared-runtime.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/hooks-client-context.shared-runtime.js
"use client";

const hooks_client_context_shared_runtime_SearchParamsContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(null)));
const hooks_client_context_shared_runtime_PathnameContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(null)));
const hooks_client_context_shared_runtime_PathParamsContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(null)));
if (false) {} //# sourceMappingURL=hooks-client-context.shared-runtime.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/client-hook-in-server-component-error.js

function client_hook_in_server_component_error_clientHookInServerComponentError(hookName) {
    if (false) {}
} //# sourceMappingURL=client-hook-in-server-component-error.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/server-inserted-html.shared-runtime.js
"use client";

// Use `React.createContext` to avoid errors from the RSC checks because
// it can't be imported directly in Server Components:
//
//   import { createContext } from 'react'
//
// More info: https://github.com/vercel/next.js/pull/40686
const ServerInsertedHTMLContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.createContext(null)));
function useServerInsertedHTML(callback) {
    const addInsertedServerHTMLCallback = useContext(ServerInsertedHTMLContext);
    // Should have no effects on client where there's no flush effects provider
    if (addInsertedServerHTMLCallback) {
        addInsertedServerHTMLCallback(callback);
    }
} //# sourceMappingURL=server-inserted-html.shared-runtime.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/request-async-storage.external.js
var request_async_storage_external = __webpack_require__(373);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/async-local-storage.js
var async_local_storage = __webpack_require__(186);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/action-async-storage.external.js

const action_async_storage_external_actionAsyncStorage = (0,async_local_storage/* createAsyncLocalStorage */.P)(); //# sourceMappingURL=action-async-storage.external.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/redirect-status-code.js
var redirect_status_code_RedirectStatusCode;
(function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
})(redirect_status_code_RedirectStatusCode || (redirect_status_code_RedirectStatusCode = {})); //# sourceMappingURL=redirect-status-code.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/redirect.js



const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
var RedirectType;
(function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
})(RedirectType || (RedirectType = {}));
function getRedirectError(url, type, statusCode) {
    if (statusCode === void 0) statusCode = RedirectStatusCode.TemporaryRedirect;
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
    const requestStore = requestAsyncStorage.getStore();
    if (requestStore) {
        error.mutableCookies = requestStore.mutableCookies;
    }
    return error;
}
/**
 * When used in a streaming context, this will insert a meta tag to
 * redirect the user to the target page. When used in a custom app route, it
 * will serve a 307/303 to the caller.
 *
 * @param url the url to redirect to
 */ function redirect(url, type) {
    if (type === void 0) type = "replace";
    const actionStore = actionAsyncStorage.getStore();
    throw getRedirectError(url, type, // as we don't want the POST request to follow the redirect,
    // as it could result in erroneous re-submissions.
    (actionStore == null ? void 0 : actionStore.isAction) ? RedirectStatusCode.SeeOther : RedirectStatusCode.TemporaryRedirect);
}
/**
 * When used in a streaming context, this will insert a meta tag to
 * redirect the user to the target page. When used in a custom app route, it
 * will serve a 308/303 to the caller.
 *
 * @param url the url to redirect to
 */ function permanentRedirect(url, type) {
    if (type === void 0) type = "replace";
    const actionStore = actionAsyncStorage.getStore();
    throw getRedirectError(url, type, // as we don't want the POST request to follow the redirect,
    // as it could result in erroneous re-submissions.
    (actionStore == null ? void 0 : actionStore.isAction) ? RedirectStatusCode.SeeOther : RedirectStatusCode.PermanentRedirect);
}
/**
 * Checks an error to determine if it's an error generated by the
 * `redirect(url)` helper.
 *
 * @param error the error that may reference a redirect error
 * @returns true if the error is a redirect error
 */ function isRedirectError(error) {
    if (typeof (error == null ? void 0 : error.digest) !== "string") return false;
    const [errorCode, type, destination, status] = error.digest.split(";", 4);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string" && !isNaN(statusCode) && statusCode in RedirectStatusCode;
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(";", 3)[2];
}
function getRedirectTypeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return error.digest.split(";", 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return Number(error.digest.split(";", 4)[3]);
} //# sourceMappingURL=redirect.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/not-found.js
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
/**
 * When used in a React server component, this will set the status code to 404.
 * When used in a custom app route it will just send a 404 status.
 */ function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
/**
 * Checks an error to determine if it's an error generated by the `notFound()`
 * helper.
 *
 * @param error the error that may reference a not found error
 * @returns true if the error is a not found error
 */ function isNotFoundError(error) {
    return (error == null ? void 0 : error.digest) === NOT_FOUND_ERROR_CODE;
} //# sourceMappingURL=not-found.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/navigation.js





const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
        this.size = urlSearchParams.size;
    }
}
/**
 * Get a read-only URLSearchParams object. For example searchParams.get('foo') would return 'bar' when ?foo=bar
 * Learn more about URLSearchParams here: https://developer.mozilla.org/docs/Web/API/URLSearchParams
 */ function useSearchParams() {
    clientHookInServerComponentError("useSearchParams");
    const searchParams = useContext(SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = useMemo(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __webpack_require__(916);
        // TODO-APP: handle dynamic = 'force-static' here and on the client
        bailoutToClientRendering();
    }
    return readonlySearchParams;
}
/**
 * Get the current pathname. For example usePathname() on /dashboard?foo=bar would return "/dashboard"
 */ function usePathname() {
    clientHookInServerComponentError("usePathname");
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return useContext(PathnameContext);
}

/**
 * Get the router methods. For example router.push('/dashboard')
 */ function useRouter() {
    clientHookInServerComponentError("useRouter");
    const router = useContext(AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// this function performs a depth-first search of the tree to find the selected
// params
function getSelectedParams(tree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = tree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith("__PAGE__")) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === "c" || segment[2] === "oc");
        if (isCatchAll) {
            params[segment[0]] = segment[1].split("/");
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
/**
 * Get the current parameters. For example useParams() on /dashboard/[team]
 * where pathname is /dashboard/nextjs would return { team: 'nextjs' }
 */ function useParams() {
    clientHookInServerComponentError("useParams");
    const globalLayoutRouter = useContext(GlobalLayoutRouterContext);
    const pathParams = useContext(PathParamsContext);
    return useMemo(()=>{
        // When it's under app router
        if (globalLayoutRouter == null ? void 0 : globalLayoutRouter.tree) {
            return getSelectedParams(globalLayoutRouter.tree);
        }
        // When it's under client side pages router
        return pathParams;
    }, [
        globalLayoutRouter == null ? void 0 : globalLayoutRouter.tree,
        pathParams
    ]);
}
// TODO-APP: handle parallel routes
/**
 * Get the canonical parameters from the current level to the leaf node.
 */ function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = getSegmentValue(segment);
    if (!segmentValue || segmentValue.startsWith("__PAGE__")) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
// TODO-APP: Expand description when the docs are written for it.
/**
 * Get the canonical segment path from the current level to the leaf node.
 */ function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    clientHookInServerComponentError("useSelectedLayoutSegments");
    const { tree } = useContext(LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
// TODO-APP: Expand description when the docs are written for it.
/**
 * Get the segment below the current level
 */ function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    clientHookInServerComponentError("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}

 //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ requestAsyncStorage)
/* harmony export */ });
/* harmony import */ var _async_local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);

const requestAsyncStorage = (0,_async_local_storage__WEBPACK_IMPORTED_MODULE_0__/* .createAsyncLocalStorage */ .P)(); //# sourceMappingURL=request-async-storage.external.js.map


/***/ }),

/***/ 498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ NextURL)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js

/**
 * Adds the provided prefix to the given path. It first ensures that the path
 * is indeed starting with a slash.
 */ function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js

/**
 * Similarly to `addPathPrefix`, this function adds a suffix at the end on the
 * provided path. It also works only for paths ensuring the argument starts
 * with a slash.
 */ function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js

/**
 * Checks if a given path starts with a given prefix. It ensures it matches
 * exactly without containing extra chars. e.g. prefix /docs should replace
 * for /docs, /docs/, /docs/a but not /docsss
 * @param path The path to check.
 * @param prefix The prefix to check against.
 */ function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = parsePath(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js


/**
 * For a given path and a locale, if the locale is given, it will prefix the
 * locale. The path shouldn't be an API path. If a default locale is given the
 * prefix will be omitted if the locale is already the default locale.
 */ function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if (pathHasPrefix(lower, "/api")) return path;
        if (pathHasPrefix(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return addPathPrefix(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js




function formatNextPathnameInfo(info) {
    let pathname = addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = removeTrailingSlash(pathname);
    }
    if (info.buildId) {
        pathname = addPathSuffix(addPathPrefix(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = addPathPrefix(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? addPathSuffix(pathname, "/") : pathname : removeTrailingSlash(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/get-hostname.js
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":", 1)[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js
/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js

/**
 * Given a path and a prefix it will remove the prefix when it exists in the
 * given path. It ensures it matches exactly without containing extra chars
 * and if the prefix is not there it will be noop.
 *
 * @param path The path to remove the prefix from.
 * @param prefix The prefix to be removed.
 */ function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!pathHasPrefix(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js



function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && pathHasPrefix(info.pathname, basePath)) {
        info.pathname = removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : normalizeLocalePath(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/next-url.js




const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = getNextPathnameInfo(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = getHostname(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : detectDomainLocale((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return formatNextPathnameInfo({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map


/***/ }),

/***/ 141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* reexport safe */ next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__.ResponseCookies),
/* harmony export */   q: () => (/* reexport safe */ next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__.RequestCookies)
/* harmony export */ });
/* harmony import */ var next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__);
 //# sourceMappingURL=cookies.js.map


/***/ }),

/***/ 695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ NextResponse)
/* harmony export */ });
/* harmony import */ var _next_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(498);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141);



const INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[INTERNALS] = {
            cookies: new _cookies__WEBPACK_IMPORTED_MODULE_1__/* .ResponseCookies */ .n(this.headers),
            url: init.url ? new _next_url__WEBPACK_IMPORTED_MODULE_0__/* .NextURL */ .c(init.url, {
                headers: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .toNodeOutgoingHttpHeaders */ .lb)(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .validateURL */ .r4)(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .validateURL */ .r4)(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map


/***/ }),

/***/ 7:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EK: () => (/* binding */ fromNodeOutgoingHttpHeaders),
/* harmony export */   lb: () => (/* binding */ toNodeOutgoingHttpHeaders),
/* harmony export */   r4: () => (/* binding */ validateURL)
/* harmony export */ });
/* unused harmony export splitCookiesString */
/**
 * Converts a Node.js IncomingHttpHeaders object to a Headers object. Any
 * headers with multiple values will be joined with a comma and space. Any
 * headers that have an undefined value will be ignored and others will be
 * coerced to strings.
 *
 * @param nodeHeaders the headers object to convert
 * @returns the converted headers object
 */ function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.
  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.
  
  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/ function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
/**
 * Converts a Headers object to a Node.js OutgoingHttpHeaders object. This is
 * required to support the set-cookie header, which may have multiple values.
 *
 * @param headers the headers object to convert
 * @returns the converted headers object
 */ function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
/**
 * Validate the correctness of a user-provided URL.
 */ function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 687:
/***/ ((module) => {

"use strict";
// Note: This file is JS because it's used by the taskfile-swc.js file, which is JS.
// Keep file changes in sync with the corresponding `.d.ts` files.
/**
 * These are the browser versions that support all of the following:
 * static import: https://caniuse.com/es6-module
 * dynamic import: https://caniuse.com/es6-module-dynamic-import
 * import.meta: https://caniuse.com/mdn-javascript_operators_import_meta
 */ 
const MODERN_BROWSERSLIST_TARGET = [
    "chrome 64",
    "edge 79",
    "firefox 67",
    "opera 51",
    "safari 12"
];
module.exports = MODERN_BROWSERSLIST_TARGET; //# sourceMappingURL=modern-browserslist-target.js.map


/***/ }),

/***/ 241:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    withRequest: function() {
        return withRequest;
    },
    getTestReqInfo: function() {
        return getTestReqInfo;
    }
});
const _nodeasync_hooks = __webpack_require__(67);
const testStorage = new _nodeasync_hooks.AsyncLocalStorage();
function extractTestInfoFromRequest(req, reader) {
    const proxyPortHeader = reader.header(req, "next-test-proxy-port");
    if (!proxyPortHeader) {
        return undefined;
    }
    const url = reader.url(req);
    const proxyPort = Number(proxyPortHeader);
    const testData = reader.header(req, "next-test-data") || "";
    return {
        url,
        proxyPort,
        testData
    };
}
function withRequest(req, reader, fn) {
    const testReqInfo = extractTestInfoFromRequest(req, reader);
    if (!testReqInfo) {
        return fn();
    }
    return testStorage.run(testReqInfo, fn);
}
function getTestReqInfo(req, reader) {
    const testReqInfo = testStorage.getStore();
    if (testReqInfo) {
        return testReqInfo;
    }
    if (req && reader) {
        return extractTestInfoFromRequest(req, reader);
    }
    return undefined;
} //# sourceMappingURL=context.js.map


/***/ }),

/***/ 178:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(195)["Buffer"];

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    reader: function() {
        return reader;
    },
    handleFetch: function() {
        return handleFetch;
    },
    interceptFetch: function() {
        return interceptFetch;
    }
});
const _context = __webpack_require__(241);
const reader = {
    url (req) {
        return req.url;
    },
    header (req, name) {
        return req.headers.get(name);
    }
};
function getTestStack() {
    let stack = (new Error().stack ?? "").split("\n");
    // Skip the first line and find first non-empty line.
    for(let i = 1; i < stack.length; i++){
        if (stack[i].length > 0) {
            stack = stack.slice(i);
            break;
        }
    }
    // Filter out franmework lines.
    stack = stack.filter((f)=>!f.includes("/next/dist/"));
    // At most 5 lines.
    stack = stack.slice(0, 5);
    // Cleanup some internal info and trim.
    stack = stack.map((s)=>s.replace("webpack-internal:///(rsc)/", "").trim());
    return stack.join("    ");
}
async function buildProxyRequest(testData, request) {
    const { url, method, headers, body, cache, credentials, integrity, mode, redirect, referrer, referrerPolicy } = request;
    return {
        testData,
        api: "fetch",
        request: {
            url,
            method,
            headers: [
                ...Array.from(headers),
                [
                    "next-test-stack",
                    getTestStack()
                ]
            ],
            body: body ? Buffer.from(await request.arrayBuffer()).toString("base64") : null,
            cache,
            credentials,
            integrity,
            mode,
            redirect,
            referrer,
            referrerPolicy
        }
    };
}
function buildResponse(proxyResponse) {
    const { status, headers, body } = proxyResponse.response;
    return new Response(body ? Buffer.from(body, "base64") : null, {
        status,
        headers: new Headers(headers)
    });
}
async function handleFetch(originalFetch, request) {
    const testInfo = (0, _context.getTestReqInfo)(request, reader);
    if (!testInfo) {
        throw new Error(`No test info for ${request.method} ${request.url}`);
    }
    const { testData, proxyPort } = testInfo;
    const proxyRequest = await buildProxyRequest(testData, request);
    const resp = await originalFetch(`http://localhost:${proxyPort}`, {
        method: "POST",
        body: JSON.stringify(proxyRequest),
        next: {
            // @ts-ignore
            internal: true
        }
    });
    if (!resp.ok) {
        throw new Error(`Proxy request failed: ${resp.status}`);
    }
    const proxyResponse = await resp.json();
    const { api } = proxyResponse;
    switch(api){
        case "continue":
            return originalFetch(request);
        case "abort":
        case "unhandled":
            throw new Error(`Proxy request aborted [${request.method} ${request.url}]`);
        default:
            break;
    }
    return buildResponse(proxyResponse);
}
function interceptFetch(originalFetch) {
    __webpack_require__.g.fetch = function testFetch(input, init) {
        var _init_next;
        // Passthrough internal requests.
        // @ts-ignore
        if (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next.internal) {
            return originalFetch(input, init);
        }
        return handleFetch(originalFetch, new Request(input, init));
    };
    return ()=>{
        __webpack_require__.g.fetch = originalFetch;
    };
} //# sourceMappingURL=fetch.js.map


/***/ }),

/***/ 457:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    interceptTestApis: function() {
        return interceptTestApis;
    },
    wrapRequestHandler: function() {
        return wrapRequestHandler;
    }
});
const _context = __webpack_require__(241);
const _fetch = __webpack_require__(178);
function interceptTestApis() {
    return (0, _fetch.interceptFetch)(__webpack_require__.g.fetch);
}
function wrapRequestHandler(handler) {
    return (req, fn)=>(0, _context.withRequest)(req, _fetch.reader, ()=>handler(req, fn));
} //# sourceMappingURL=server-edge.js.map


/***/ }),

/***/ 913:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(343);


/***/ }),

/***/ 166:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
function A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = z && a[z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var B = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, C = Object.assign, D = {};
function E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {}
F.prototype = E.prototype;
function G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
}
var H = G.prototype = new F;
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = !0;
var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = {
    current: null
}, L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
        for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
        c.children = f;
    }
    if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
    return {
        $$typeof: l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: K.current
    };
}
function N(a, b) {
    return {
        $$typeof: l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(a) {
        return b[a];
    });
}
var P = /\/+/g;
function Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R(a, b, e, d, c) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(k){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case l:
                case n:
                    h = !0;
            }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a) {
        return a;
    })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if (I(a)) for(var g = 0; g < a.length; g++){
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
    }
    else if (f = A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
}
function S(a, b, e) {
    if (null == a) return a;
    var d = [], c = 0;
    R(a, d, "", "", function(a) {
        return b.call(e, a, c++);
    });
    return d;
}
function T(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
        }, function(b) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
var U = {
    current: null
}, V = {
    transition: null
}, W = {
    ReactCurrentDispatcher: U,
    ReactCurrentBatchConfig: V,
    ReactCurrentOwner: K
};
__webpack_unused_export__ = {
    map: S,
    forEach: function(a, b, e) {
        S(a, function() {
            b.apply(this, arguments);
        }, e);
    },
    count: function(a) {
        var b = 0;
        S(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return S(a, function(a) {
            return a;
        }) || [];
    },
    only: function(a) {
        if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
    }
};
__webpack_unused_export__ = E;
__webpack_unused_export__ = p;
__webpack_unused_export__ = r;
__webpack_unused_export__ = G;
__webpack_unused_export__ = q;
__webpack_unused_export__ = w;
__webpack_unused_export__ = W;
__webpack_unused_export__ = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(f in b)J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
        g = Array(f);
        for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
        d.children = g;
    }
    return {
        $$typeof: l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h
    };
};
__webpack_unused_export__ = function(a) {
    a = {
        $$typeof: u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    };
    a.Provider = {
        $$typeof: t,
        _context: a
    };
    return a.Consumer = a;
};
__webpack_unused_export__ = M;
__webpack_unused_export__ = function(a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
};
__webpack_unused_export__ = function() {
    return {
        current: null
    };
};
__webpack_unused_export__ = function(a) {
    return {
        $$typeof: v,
        render: a
    };
};
__webpack_unused_export__ = O;
__webpack_unused_export__ = function(a) {
    return {
        $$typeof: y,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: T
    };
};
__webpack_unused_export__ = function(a, b) {
    return {
        $$typeof: x,
        type: a,
        compare: void 0 === b ? null : b
    };
};
__webpack_unused_export__ = function(a) {
    var b = V.transition;
    V.transition = {};
    try {
        a();
    } finally{
        V.transition = b;
    }
};
__webpack_unused_export__ = function() {
    throw Error("act(...) is not supported in production builds of React.");
};
__webpack_unused_export__ = function(a, b) {
    return U.current.useCallback(a, b);
};
__webpack_unused_export__ = function(a) {
    return U.current.useContext(a);
};
__webpack_unused_export__ = function() {};
__webpack_unused_export__ = function(a) {
    return U.current.useDeferredValue(a);
};
__webpack_unused_export__ = function(a, b) {
    return U.current.useEffect(a, b);
};
__webpack_unused_export__ = function() {
    return U.current.useId();
};
__webpack_unused_export__ = function(a, b, e) {
    return U.current.useImperativeHandle(a, b, e);
};
__webpack_unused_export__ = function(a, b) {
    return U.current.useInsertionEffect(a, b);
};
__webpack_unused_export__ = function(a, b) {
    return U.current.useLayoutEffect(a, b);
};
__webpack_unused_export__ = function(a, b) {
    return U.current.useMemo(a, b);
};
__webpack_unused_export__ = function(a, b, e) {
    return U.current.useReducer(a, b, e);
};
__webpack_unused_export__ = function(a) {
    return U.current.useRef(a);
};
__webpack_unused_export__ = function(a) {
    return U.current.useState(a);
};
__webpack_unused_export__ = function(a, b, e) {
    return U.current.useSyncExternalStore(a, b, e);
};
__webpack_unused_export__ = function() {
    return U.current.useTransition();
};
__webpack_unused_export__ = "18.2.0";


/***/ }),

/***/ 809:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    /* unused reexport */ __webpack_require__(166);
} else {}


/***/ }),

/***/ 186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ createAsyncLocalStorage)
/* harmony export */ });
const sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
}
const maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
} //# sourceMappingURL=async-local-storage.js.map


/***/ }),

/***/ 519:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"nav":{"about":"من نحن","home":"الرئيسية","strategicAdvisory":"الاستشارات الاستراتيجية","research":"البحث","practiceAreas":"مجالات العمل","impact":"الأثر","media":"الإعلام","regions":"المناطق","gallery":"المعرض","partners":"الشركاء","events":"الفعاليات","workWithUs":"اعمل معنا","becomeAMember":"كن عضواً","contact":"اتصل بنا","brand":"منتدى باكستان للأعمال","brandSubtitle":"منصة السياسات الاستراتيجية والبحث","openMenu":"فتح القائمة","closeMenu":"إغلاق القائمة","search":"بحث","latest":"الأحدث","language":"اللغة"},"footer":{"brandDesc":"منصة تحليلية مستقلة تنتج أبحاثاً قائمة على الأدلة في السياسات والتنظيم والاقتصاد منذ عام 2016.","practiceAreas":"مجالات العمل","publicAffairs":"الشؤون العامة والسياسات","regulatoryMonitoring":"الرقابة التنظيمية","economicAffairs":"الشؤون الاقتصادية","mediaComms":"الإعلام والاتصالات","crisisManagement":"إدارة الأزمات","strategicAdvisory":"الاستشارات الاستراتيجية","research":"البحث","researchOverview":"نظرة عامة على البحث","publications":"المطبوعات","knowledgeOutputs":"المخرجات المعرفية","policyBriefings":"إحاطات السياسات","impact":"الأثر","regionalCoverage":"التغطية الإقليمية","organisation":"المنظمة","aboutPbf":"عن منتدى PBF","globalPartners":"الشركاء العالميون","events":"الفعاليات","gallery":"المعرض","membership":"العضوية","workWithUs":"اعمل معنا","contact":"اتصل بنا","copyright":"© 2016–2026 منتدى باكستان للأعمال®. جميع الحقوق محفوظة. لأغراض إعلامية وأكاديمية فقط.","privacy":"الخصوصية","terms":"الشروط","cookies":"ملفات تعريف الارتباط","accessibility":"إمكانية الوصول"},"home":{"heroTitle":"تعزيز تحليل السياسات القائم على الأدلة","heroLead":"منتدى باكستان للأعمال® — وظيفة السياسة الاستراتيجية والبحث هي منصة مستقلة للسياسات الاستراتيجية والبحث تساهم في العمل التحليلي في مجال الحوكمة والأنظمة الاقتصادية والأطر التنظيمية والتنمية المؤسسية.","heroBody":"يُجري المنتدى بحوثاً منظمة وتحليلاً للسياسات لدعم اتخاذ القرارات المستنيرة عبر المؤسسات العامة والشركاء الدوليين وأصحاب المصلحة القائمين على المعرفة.","purpose":"الغرض","purposeText1":"تتطلب صياغة السياسات الفعّالة أدلةً موثوقة وسياقاً مؤسسياً ومنظوراً طويل الأمد. يوجد منتدى باكستان للأعمال لتعزيز فهم السياسات من خلال إنتاج بحوث سليمة منهجياً وصارمة تحليلياً وذات صلة بتحديات الحوكمة المعاصرة.","purposeText2":"يعمل المنتدى باستقلالية عن الانتماءات السياسية وأجندات المناصرة والمصالح التجارية.","areasOfWork":"مجالات العمل","work01Title":"السياسات العامة والحوكمة","work01Desc":"تحليل تصميم السياسات والقدرة المؤسسية والأنظمة الإدارية.","work02Title":"السياسات الاقتصادية والتنموية","work02Desc":"البحث في الأطر الاقتصادية الكلية والأداء القطاعي والتخطيط التنموي.","work03Title":"الأطر التنظيمية والقانونية","work03Desc":"تقييم البيئات التنظيمية وأنظمة الامتثال والفاعلية المؤسسية.","work04Title":"الأداء المؤسسي والإصلاح","work04Desc":"تقييم هياكل القطاع العام وتقديم الخدمات ومبادرات الإصلاح.","work05Title":"الشؤون الإقليمية والدولية","work05Desc":"العمل التحليلي في الديناميات الإقليمية والحوكمة العالمية وقضايا السياسات العابرة للحدود.","explore":"استكشف","latestTitle":"الأحدث من PBF®","pub1Tag":"إحاطة سياسات","pub1Title":"أجندة الإصلاح التنظيمي: الاستعداد المؤسسي لباكستان","pub1Meta":"مارس 2026 · الشؤون العامة والسياسات","pub2Tag":"إحاطة استراتيجية","pub2Title":"الحرب من الجيل الخامس: إعداد المؤسسات لعصر المعلومات","pub2Meta":"مارس 2026 · الاستشارات الاستراتيجية","pub3Tag":"ملاحظة بحثية","pub3Title":"العلاقات الاقتصادية الثنائية وتوليد فرص العمل في الاقتصادات النامية","pub3Meta":"فبراير 2026 · الشؤون الاقتصادية","viewAll":"عرض الكل","viewAllTitle":"المطبوعات والمخرجات المعرفية","browseLibrary":"تصفح المكتبة ←","read":"اقرأ ←","analyticalApproach":"المنهج التحليلي","analyticalText1":"تطبّق البحوث التي يُجريها المنتدى منهجيات تحليل السياسات الراسخة، بما فيها التقييم التجريبي والتحليل المقارن والمراجعة المؤسسية النوعية. تُطوَّر المخرجات لإثراء الفهم لا للدفاع عن مواقف.","analyticalText2":"لا يشارك المنتدى في أعمال الضغط أو الحملات السياسية أو تمثيل مجموعات المصالح.","engagement":"التواصل","engagementText":"يتفاعل منتدى باكستان للأعمال® مع المؤسسات الحكومية والمنظمات الدولية والهيئات الأكاديمية والمهنيين في مجال السياسات الباحثين عن تحليل موضوعي وبصيرة منظمة.","closingLine":"تحليل مستقل لدعم تطوير السياسات المستنيرة.","statFounded":"تأسس","statResearch":"مخرجات بحثية","statRegions":"المناطق المشمولة","statPracticeAreas":"مجالات العمل"},"common":{"readMore":"اقرأ المزيد","learnMore":"اعرف المزيد","contactUs":"اتصل بنا","backToTop":"العودة إلى الأعلى","loading":"جارٍ التحميل...","trademark":"®","viewResearch":"عرض الأبحاث","viewRegion":"عرض المنطقة","viewMethodology":"عرض المنهجية","viewPublications":"عرض المنشورات","viewBriefings":"عرض الإحاطات"},"practiceAreas":{"title":"مجالات العمل","lead":"تُنظَّم الأنشطة التنظيمية لمنتدى باكستان للأعمال® عبر ستة مجالات للبحث السياسي والتحليل والدراسة الأكاديمية. يُعدّ منتدى باكستان للأعمال® — وظيفة السياسة الاستراتيجية والبحث قدرةً تحليليةً شاملة تدعم هذه المجالات بالمناهج القائمة على الأدلة.","sectionTitle":"مجالات العمل","pa1Title":"PBF® – وظيفة السياسة الاستراتيجية والبحث","pa1Desc":"قدرة تحليل السياسات المؤسسية والدراسات الاستراتيجية لدعم الفهم القائم على الأدلة والاستعداد المؤسسي.","pa2Title":"الشؤون العامة والاستشارات السياسية","pa2Desc":"تحليل عمليات تطوير السياسات والأطر التشريعية والآليات المؤسسية الحاكمة لإدارة الشؤون العامة.","pa3Title":"الرقابة التنظيمية والاستخبارات الاستراتيجية","pa3Desc":"التحليل المنهجي للتطورات التنظيمية وتطور السياسات والديناميات المؤسسية داخل هياكل الحوكمة.","pa4Title":"الدراسات والبحوث","pa4Desc":"بحث أكاديمي مستقل يدرس قضايا السياسات والظواهر الاقتصادية وتحديات الحوكمة من خلال أُطر تحليلية صارمة.","pa5Title":"الشؤون الاقتصادية","pa5Desc":"بحث متخصص في تحليل السياسات الاقتصادية وتقييم السياسة المالية وأُطر التنمية الاقتصادية.","pa6Title":"إدارة الأزمات","pa6Desc":"دعم تحليلي لحالات الطوارئ المرتبطة بالسياسات والتحديات التنظيمية والأزمات المؤسسية التي تستوجب تقييماً منهجياً.","pa7Title":"الإعلام والاتصالات الاستراتيجية","pa7Desc":"بحث وتحليل في استراتيجيات الاتصال وأطر رسائل السياسات وآليات المشاركة العامة."},"research":{"title":"البحث والرؤى","lead":"بحث أكاديمي مستقل يدرس تحديات السياسات المعاصرة من خلال مناهج منهجية صارمة.","methodTitle":"منهجية البحث","methodText":"تخضع أنشطتنا البحثية لمعايير أكاديمية راسخة وبروتوكولات منهجية محددة.","themesTitle":"موضوعات البحث","theme1Title":"الحوكمة والمؤسسات","theme1Desc":"تحليل التصميم المؤسسي وأطر الحوكمة والقدرة الإدارية.","theme2Title":"السياسة الاقتصادية","theme2Desc":"بحث في السياسة المالية والنقدية واستراتيجيات التنمية الاقتصادية.","theme3Title":"بحوث العلاقات الإعلامية","theme3Desc":"بحث في آليات المشاركة الإعلامية.","theme4Title":"تصميم السياسات وتقييمها","theme4Desc":"بحث يدرس عمليات تصميم السياسات وآليات التقييم.","pubTitle":"المنشورات","pubText":"تُنشر نتائج بحوثنا عبر قنوات متعددة تشمل التقارير البحثية والموجزات السياسية والأوراق العلمية.","portfolioTitle":"محفظة البحث","portfolioText":"تتناول محفظة بحوثنا تحديات السياسات المعاصرة.","collaborationTitle":"التعاون البحثي","collaborationText":"تنخرط المنظمة في أنشطة بحثية تعاونية."},"regions":{"title":"المناطق","lead":"يُنظَّم البحث الإقليمي لدعم التحليل المقارن والفهم المؤسسي وملاءمة السياسات عبر أنظمة الحوكمة والاقتصاد المتنوعة.","sectionTitle":"التغطية الإقليمية","r1Title":"أفريقيا","r1Desc":"أنظمة الحوكمة والبيئات التنظيمية والسياسة الاقتصادية عبر السياقات الإقليمية والوطنية.","r2Title":"آسيا والمحيط الهادئ","r2Desc":"الأطر المؤسسية والسياسة الاقتصادية والديناميات التنظيمية في اقتصادات آسيا والمحيط الهادئ.","r3Title":"أوروبا","r3Desc":"حوكمة التنظيم والتوازن المؤسسي وتنسيق السياسة الاقتصادية في أوروبا.","r4Title":"الشرق الأوسط وشمال أفريقيا","r4Desc":"الإصلاح المؤسسي والبيئات التنظيمية والسياسة الاقتصادية في منطقة الشرق الأوسط وشمال أفريقيا.","r5Title":"الأمريكتان","r5Desc":"السياسة الاقتصادية والأنظمة التنظيمية والقدرة المؤسسية في الأمريكتين.","r6Title":"روسيا وأوراسيا","r6Desc":"الأنظمة المؤسسية والأطر التنظيمية والسياسة الاقتصادية في أوراسيا."},"impact":{"title":"القياس والأثر","lead":"بحث في منهجيات التقييم وأطر تقييم الأثر ومناهج القياس للتدخلات السياسية وفعالية البرامج.","frameworkTitle":"إطار بحث التقييم","frameworkText":"يُعدّ القياس المنهجي وتقييم الأثر أساسيَّين لفهم فعالية التدخلات السياسية وتطبيقات البرامج.","methodsTitle":"الأساليب","m1Title":"تقييم الأثر","m1Desc":"تقييم شامل لآثار السياسات والبرامج باستخدام أساليب تجريبية وشبه تجريبية.","m2Title":"قياس الأداء","m2Desc":"تطوير وتطبيق أطر الأداء والمؤشرات وأنظمة جمع البيانات.","m3Title":"تقييم العمليات","m3Desc":"تحليل عمليات تنفيذ البرامج وتحديد نقاط القوة والضعف.","m4Title":"التقييم الاقتصادي","m4Desc":"تحليل فعالية التكلفة والمنفعة للتدخلات السياسية والبرامج.","researchStandardsTitle":"معايير البحث","researchStandardsText":"تلتزم جميع أبحاث التقييم بالمعايير الأكاديمية والمهنية المعتمدة.","ring1Label":"تقييم الأثر","ring1Desc":"التصاميم التجريبية","ring2Label":"قياس الأداء","ring2Desc":"مؤشرات الأداء","ring3Label":"تقييم العملية","ring3Desc":"تحليل التنفيذ","ring4Label":"التقييم الاقتصادي","ring4Desc":"تحليل التكلفة والعائد"},"media":{"title":"الإعلام والاتصالات","lead":"بحث وتحليل في استراتيجيات الاتصال وأطر رسائل السياسات وآليات المشاركة العامة في سياقات السياسات والحوكمة.","approachTitle":"نهج الاتصال","approachText":"تُنشر نتائج بحوثنا ومخرجاتنا التحليلية عبر قنوات اتصال متنوعة.","productsTitle":"المنتجات المعرفية","p1Title":"المنشورات","p1Desc":"منشورات أكاديمية وتقارير بحثية ومخرجات تحليلية تساهم في الأدبيات الأكاديمية والسياسية.","p2Title":"الإحاطات","p2Desc":"إحاطات تحليلية توفر ملخصات موجزة لنتائج البحوث والتطورات السياسية.","p3Title":"المخرجات المعرفية","p3Desc":"مجموعة منتقاة من المخرجات التحليلية وتصورات البيانات وملخصات الأبحاث.","latestTitle":"أحدث المخرجات"},"about":{"title":"منتدى باكستان للأعمال®","subtitle":"منصة السياسة الاستراتيجية والبحث","intro":"منصة مستقلة للسياسة الاستراتيجية والبحث تعمل في تحليل الحوكمة والأنظمة الاقتصادية والأطر التنظيمية والتنمية المؤسسية.","tabHistory":"التاريخ","tabMessages":"الرسائل","tabValues":"قيمنا الجوهرية","tabTeam":"فريقنا","tabTeamPak":"فريق باكستان","tabAdvisors":"مجلس المستشارين","historyTitle":"تاريخنا","historyIntro":"تأسس منتدى باكستان للأعمال® كمؤسسة تحليلية منظمة ذات حدود واضحة والتزام بالاستقلالية.","formationTitle":"التأسيس والتطوير"},"strategicAdvisory":{"title":"الاستشارات الاستراتيجية","lead":"تحليل منظم قائم على البحث يدعم وضوح السياسات والاستعداد المؤسسي والفهم الاقتصادي طويل الأمد.","tabOverview":"نظرة عامة","tabOpinion":"صنع الرأي","tabVigilance":"اليقظة","tab5gw":"حرب الجيل الخامس","purposeTitle":"الغرض","purposeText":"توفر الاستشارات الاستراتيجية تحليلاً منظماً قائماً على البحث يدعم وضوح السياسات والاستعداد المؤسسي.","scopeTitle":"نطاق العمل","scope1":"تحليل السياسات والتنظيم","scope2":"الاستراتيجية الاقتصادية والمؤسسية","scope3":"الاستخبارات الاستراتيجية وتقييم السيناريوهات","scope4":"المخرجات الاستشارية بما فيها الموجزات والتقييمات والملاحظات التحليلية","relevanceTitle":"الصلة بالسياسة","relevanceText":"تساهم الوظيفة في الخطاب السياسي من خلال تحليل محايد مدفوع بالبحث.","outcomesTitle":"النتائج","outcome1":"تحسين فهم السياسات","outcome2":"الاستعداد الاستراتيجي","outcome3":"رؤية قائمة على الأدلة","outcome4":"الوضوح المؤسسي","opinionTitle":"عملية صنع الرأي","opinionText":"لدينا القدرة على تحويل الروايات الموجودة بشكل جذري.","vigilanceTitle":"استراتيجية اليقظة","vigilanceText":"يقظة على مدار الساعة عبر جميع شرائح الجمهور — كل محادثة تتلقى رداً.","fgwTitle":"حرب الجيل الخامس","fgwText":"حرب الجيل الخامس تدور حول الأفكار — كيف نتصور الصراعات ونُعدّ المؤسسات للتعامل معها.","tabAmplification":"التضخيم والألعاب"},"gallery":{"title":"معرض الصور","lead":"توثيق بصري لأنشطة منتدى الأعمال الباكستاني®.","aboutTitle":"حول المعرض","aboutText":"يعرض المعرض توثيقًا بصريًا لأنشطة المنتدى.","aboutText2":"تُحتفظ بجميع الصور لأغراض التوثيق المؤسسي.","eventsTitle":"الفعاليات والندوات الدولية","usageTitle":"حقوق الاستخدام","usageText":"جميع صور المعرض ملك منتدى الأعمال الباكستاني®.","contributionsTitle":"المساهمات","contributionsText":"يمكن للمنظمات التواصل لتقديم المواد."}}');

/***/ }),

/***/ 201:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"nav":{"about":"O nás","home":"Domů","strategicAdvisory":"Strategické poradenství","research":"Výzkum","practiceAreas":"Oblast praxe","impact":"Dopad","media":"Média","regions":"Regiony","gallery":"Galerie","partners":"Partneři","events":"Akce","workWithUs":"Pracujte s námi","becomeAMember":"Staňte se členem","contact":"Kontakt","brand":"Pákistánské obchodní fórum","brandSubtitle":"Platforma pro strategickou politiku a výzkum","openMenu":"Otevřít menu","closeMenu":"Zavřít menu","search":"Hledat","latest":"Nejnovější","language":"Jazyk"},"footer":{"brandDesc":"Nezávislá analytická platforma produkující výzkum v oblasti politiky, regulace a ekonomiky na základě důkazů od roku 2016.","practiceAreas":"Oblast praxe","publicAffairs":"Veřejné záležitosti a politika","regulatoryMonitoring":"Regulační monitorování","economicAffairs":"Ekonomické záležitosti","mediaComms":"Média a komunikace","crisisManagement":"Krizové řízení","strategicAdvisory":"Strategické poradenství","research":"Výzkum","researchOverview":"Přehled výzkumu","publications":"Publikace","knowledgeOutputs":"Znalostní výstupy","policyBriefings":"Politické briefingy","impact":"Dopad","regionalCoverage":"Regionální pokrytí","organisation":"Organizace","aboutPbf":"O PBF","globalPartners":"Globální partneři","events":"Akce","gallery":"Galerie","membership":"Členství","workWithUs":"Pracujte s námi","contact":"Kontakt","copyright":"© 2016–2026 Pákistánské obchodní fórum®. Všechna práva vyhrazena. Pouze pro informační a akademické účely.","privacy":"Ochrana osobních údajů","terms":"Podmínky","cookies":"Cookies","accessibility":"Přístupnost"},"home":{"heroTitle":"Podpora analytiky politiky založené na důkazech","heroLead":"Pákistánské obchodní fórum® — Funkce strategické politiky a výzkumu je nezávislá platforma pro strategickou politiku a výzkum přispívající analytickou prací v oblasti správy věcí veřejných, ekonomických systémů, regulačních rámců a institucionálního rozvoje.","heroBody":"Fórum provádí strukturovaný výzkum a analýzu politiky na podporu informovaného rozhodování ve veřejných institucích, mezinárodních partnerech a znalostních stakeholderech.","purpose":"Účel","purposeText1":"Efektivní tvorba politik vyžaduje spolehlivé důkazy, institucionální kontext a dlouhodobou perspektivu. Pákistánské obchodní fórum existuje proto, aby posílilo porozumění politice prostřednictvím výzkumu, který je metodologicky správný, analyticky přísný a relevantní pro současné výzvy správy věcí veřejných.","purposeText2":"Fórum funguje nezávisle na politické příslušnosti, advokačních agendách a komerčních zájmech.","areasOfWork":"Oblasti práce","work01Title":"Veřejná politika a správa","work01Desc":"Analýza návrhu politik, institucionálních kapacit a správních systémů.","work02Title":"Ekonomická a rozvojová politika","work02Desc":"Výzkum makroekonomických rámců, odvětvového výkonu a rozvojového plánování.","work03Title":"Regulační a právní rámce","work03Desc":"Hodnocení regulačního prostředí, systémů dodržování předpisů a institucionální efektivnosti.","work04Title":"Institucionální výkonnost a reforma","work04Desc":"Hodnocení struktur veřejného sektoru, poskytování služeb a reformních iniciativ.","work05Title":"Regionální a mezinárodní záležitosti","work05Desc":"Analytická práce v oblasti regionální dynamiky, globální správy a přeshraničních politických otázek.","explore":"Prozkoumat","latestTitle":"Nejnovější z PBF®","pub1Tag":"Politický brief","pub1Title":"Agenda regulační reformy: Institucionální připravenost Pákistánu","pub1Meta":"Březen 2026 · Veřejné záležitosti a politika","pub2Tag":"Strategický brief","pub2Title":"Válka páté generace: Příprava institucí na informační věk","pub2Meta":"Březen 2026 · Strategické poradenství","pub3Tag":"Výzkumná poznámka","pub3Title":"Bilaterální ekonomické vztahy a tvorba zaměstnanosti v rozvojových ekonomikách","pub3Meta":"Únor 2026 · Ekonomické záležitosti","viewAll":"Zobrazit vše","viewAllTitle":"Publikace a znalostní výstupy","browseLibrary":"Procházet knihovnu →","read":"Číst →","analyticalApproach":"Analytický přístup","analyticalText1":"Výzkum prováděný fórem využívá zavedené metodologie analýzy politik, včetně empirického hodnocení, srovnávací analýzy a kvalitativní institucionální revize. Výstupy jsou vyvíjeny za účelem informování o porozumění, nikoli prosazování pozic.","analyticalText2":"Fórum se nezapojuje do lobbingu, politických kampaní nebo zastupování zájmových skupin.","engagement":"Spolupráce","engagementText":"Pákistánské obchodní fórum® spolupracuje s vládními institucemi, mezinárodními organizacemi, akademickými orgány a politickými profesionály hledajícími objektivní analýzu a strukturovaný přehled.","closingLine":"Nezávislá analýza na podporu informovaného rozvoje politik.","statFounded":"Založeno","statResearch":"Výzkumné výstupy","statRegions":"Pokryté regiony","statPracticeAreas":"Oblasti praxe"},"common":{"readMore":"Číst více","learnMore":"Dozvědět se více","contactUs":"Kontaktujte nás","backToTop":"Zpět nahoru","loading":"Načítání...","trademark":"®","viewResearch":"Zobrazit výzkum","viewRegion":"Zobrazit region","viewMethodology":"Zobrazit metodologii","viewPublications":"Zobrazit publikace","viewBriefings":"Zobrazit briefingy"},"practiceAreas":{"title":"Oblast praxe","lead":"Organizační aktivity Pákistánského obchodního fóra® jsou strukturovány v šesti oblastech politického výzkumu, analýzy a vědeckého bádání.","sectionTitle":"Oblast praxe","pa1Title":"PBF® – Funkce strategické politiky a výzkumu","pa1Desc":"Kapacita institucionální politické analýzy a strategických studií pro podporu znalostí založených na důkazech.","pa2Title":"Veřejné záležitosti a politické poradenství","pa2Desc":"Analýza procesů tvorby politik, legislativních rámců a institucionálních mechanismů.","pa3Title":"Regulační monitoring a strategická zpravodajství","pa3Desc":"Systematická analýza regulačního vývoje a institucionálních dynamik.","pa4Title":"Studie a výzkum","pa4Desc":"Nezávislý vědecký výzkum politických otázek, ekonomických jevů a výzev v oblasti správy věcí veřejných.","pa5Title":"Ekonomické záležitosti","pa5Desc":"Specializovaný výzkum v analýze hospodářské politiky a rámcích ekonomického rozvoje.","pa6Title":"Krizové řízení","pa6Desc":"Analytická podpora pro politicky související pohotovostní situace a regulační výzvy.","pa7Title":"Média a strategická komunikace","pa7Desc":"Výzkum a analýza komunikačních strategií a rámců politického sdělování."},"research":{"title":"Výzkum a poznatky","lead":"Nezávislý vědecký výzkum současných politických výzev.","methodTitle":"Výzkumná metodologie","methodText":"Naše výzkumné aktivity se řídí zavedhenými akademickými standardy.","themesTitle":"Výzkumná témata","theme1Title":"Správa a instituce","theme1Desc":"Analýza institucionálního designu, rámců správy a administrativní kapacity.","theme2Title":"Hospodářská politika","theme2Desc":"Výzkum fiskální politiky, měnové politiky a strategií hospodářského rozvoje.","theme3Title":"Výzkum mediálních vztahů","theme3Desc":"Výzkum mechanismů mediálního zapojení.","theme4Title":"Návrh a hodnocení politik","theme4Desc":"Výzkum procesů návrhu politik a hodnotících mechanismů.","pubTitle":"Publikace","pubText":"Výsledky našeho výzkumu jsou šířeny prostřednictvím více kanálů.","portfolioTitle":"Výzkumné portfolio","portfolioText":"Naše výzkumné portfolio řeší současné politické výzvy v několika oblastech.","collaborationTitle":"Výzkumná spolupráce","collaborationText":"Organizace se zapojuje do spolupráce s akademickými institucemi a mezinárodními subjekty."},"regions":{"title":"Regiony","lead":"Regionální výzkum je organizován za účelem podpory srovnávací analýzy a politické relevance.","sectionTitle":"Regionální pokrytí","r1Title":"Afrika","r1Desc":"Systémy správy, regulační prostředí a hospodářská politika.","r2Title":"Asie a Tichomoří","r2Desc":"Institucionální rámce, hospodářská politika a regulační dynamiky.","r3Title":"Evropa","r3Desc":"Regulační správa, institucionální rovnováha a koordinace hospodářské politiky.","r4Title":"Blízký východ a severní Afrika","r4Desc":"Institucionální reformy, regulační prostředí a hospodářská politika v regionu MENA.","r5Title":"Amerika","r5Desc":"Hospodářská politika, regulační systémy a institucionální kapacita.","r6Title":"Rusko a Eurasie","r6Desc":"Institucionální systémy, regulační rámce a hospodářská politika."},"impact":{"title":"Měření a dopad","lead":"Výzkum evaluačních metodologií a rámců hodnocení dopadu.","frameworkTitle":"Rámec evaluačního výzkumu","frameworkText":"Systematické měření a hodnocení dopadu jsou základní pro pochopení účinnosti politických intervencí.","methodsTitle":"Metody","m1Title":"Hodnocení dopadu","m1Desc":"Komplexní hodnocení dopadů politik a programů.","m2Title":"Měření výkonnosti","m2Desc":"Vývoj a implementace rámců výkonnosti a indikátorů.","m3Title":"Procesní hodnocení","m3Desc":"Analýza procesů implementace programů.","m4Title":"Ekonomické hodnocení","m4Desc":"Analýza nákladů a přínosů politických intervencí.","researchStandardsTitle":"Výzkumné standardy","researchStandardsText":"Veškerý evaluační výzkum dodržuje zavedené akademické a profesionální standardy.","ring1Label":"Hodnocení dopadu","ring1Desc":"Experimentální a kvázix experimentální designy","ring2Label":"Měření výkonnosti","ring2Desc":"KPI, rámce, monitorovací systémy","ring3Label":"Hodnocení procesu","ring3Desc":"Analýza implementace","ring4Label":"Ekonomické hodnocení","ring4Desc":"Analýza nákladů a přínosů"},"media":{"title":"Média a komunikace","lead":"Výzkum a analýza komunikačních strategií a mechanismů veřejného zapojení.","approachTitle":"Komunikační přístup","approachText":"Výsledky výzkumu šíříme prostřednictvím různých komunikačních kanálů.","productsTitle":"Znalostní produkty","p1Title":"Publikace","p1Desc":"Vědecké publikace, výzkumné zprávy a analytické výstupy.","p2Title":"Briefingy","p2Desc":"Analytické briefingy se stručnými souhrny výsledků výzkumu.","p3Title":"Znalostní výstupy","p3Desc":"Kurátorská sbírka analytických výstupů a výzkumných souhrnů.","latestTitle":"Nejnovější výstupy"},"about":{"title":"Pákistánské obchodní fórum®","subtitle":"PLATFORMA PRO STRATEGICKOU POLITIKU A VÝZKUM","intro":"Nezávislá platforma pro strategickou politiku a výzkum pro analýzu správy a ekonomických systémů.","tabHistory":"Historie","tabMessages":"Zprávy","tabValues":"Naše základní hodnoty","tabTeam":"Náš tým","tabTeamPak":"Tým Pákistán","tabAdvisors":"Rada poradců","historyTitle":"Naše historie","historyIntro":"Pákistánské obchodní fórum® bylo založeno jako strukturovaná analytická instituce.","formationTitle":"Vznik a rozvoj"},"strategicAdvisory":{"title":"Strategické poradenství","lead":"Strukturovaná, výzkumem podložená analýza na podporu politické jasnosti a institucionální připravenosti.","tabOverview":"Přehled","tabOpinion":"Tvorba názorů","tabVigilance":"Ostražitost","tab5gw":"Válka 5. generace","purposeTitle":"Účel","purposeText":"Strategické poradenství poskytuje strukturovanou, výzkumem podloženou analýzu.","scopeTitle":"Rozsah práce","scope1":"Politická a regulační analýza","scope2":"Ekonomická a institucionální strategie","scope3":"Strategická zpravodajství a hodnocení scénářů","scope4":"Poradenské výstupy včetně briefingů a analytických poznámek","relevanceTitle":"Politická relevance","relevanceText":"Funkce přispívá k politickému diskurzu prostřednictvím neutrální analýzy.","outcomesTitle":"Výsledky","outcome1":"Zlepšené porozumění politice","outcome2":"Strategická připravenost","outcome3":"Poznatky založené na důkazech","outcome4":"Institucionální jasnost","opinionTitle":"Proces tvorby názorů","opinionText":"Máme potenciál zásadně změnit stávající narativy.","vigilanceTitle":"Strategie ostražitosti","vigilanceText":"Nepřetržitá ostražitost ve všech segmentech publika — každý rozhovor obdrží odpověď.","fgwTitle":"Válka páté generace","fgwText":"Válka páté generace je o myšlenkách.","tabAmplification":"Amplifikace a hry"},"gallery":{"title":"Galerie","lead":"Vizuální dokumentace aktivit Pakistan Business Forum®.","aboutTitle":"O galerii","aboutText":"Galerie prezentuje vizuální dokumentaci aktivit, událostí a institucionálních milníků Fóra.","aboutText2":"Veškeré vizuální materiály jsou uchovávány pro institucionální dokumentaci.","eventsTitle":"Mezinárodní události a semináře","usageTitle":"Práva použití","usageText":"Všechny obrázky galerie jsou majetkem Pakistan Business Forum®.","contributionsTitle":"Příspěvky","contributionsText":"Organizace, které chtějí přispět, mohou kontaktovat administrativní funkci."}}');

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"nav":{"about":"Über uns","home":"Startseite","strategicAdvisory":"Strategische Beratung","research":"Forschung","practiceAreas":"Themenbereiche","impact":"Wirkung","media":"Medien","regions":"Regionen","gallery":"Galerie","partners":"Partner","events":"Veranstaltungen","workWithUs":"Arbeiten Sie mit uns","becomeAMember":"Mitglied werden","contact":"Kontakt","brand":"Pakistan Business Forum","brandSubtitle":"Plattform für strategische Politik und Forschung","openMenu":"Menü öffnen","closeMenu":"Menü schließen","search":"Suche","latest":"Aktuell","language":"Sprache"},"footer":{"brandDesc":"Unabhängige Analyseplattform, die seit 2016 evidenzbasierte Forschung zu Politik, Regulierung und Wirtschaft produziert.","practiceAreas":"Themenbereiche","publicAffairs":"Öffentliche Angelegenheiten & Politik","regulatoryMonitoring":"Regulatorisches Monitoring","economicAffairs":"Wirtschaftliche Angelegenheiten","mediaComms":"Medien & Kommunikation","crisisManagement":"Krisenmanagement","strategicAdvisory":"Strategische Beratung","research":"Forschung","researchOverview":"Forschungsübersicht","publications":"Publikationen","knowledgeOutputs":"Wissensprodukte","policyBriefings":"Policy-Briefings","impact":"Wirkung","regionalCoverage":"Regionale Abdeckung","organisation":"Organisation","aboutPbf":"Über PBF","globalPartners":"Globale Partner","events":"Veranstaltungen","gallery":"Galerie","membership":"Mitgliedschaft","workWithUs":"Arbeiten Sie mit uns","contact":"Kontakt","copyright":"© 2016–2026 Pakistan Business Forum®. Alle Rechte vorbehalten. Nur zu Informations- und akademischen Zwecken.","privacy":"Datenschutz","terms":"Nutzungsbedingungen","cookies":"Cookies","accessibility":"Barrierefreiheit"},"home":{"heroTitle":"Förderung evidenzbasierter Politikanalyse","heroLead":"Pakistan Business Forum® — Strategische Politik & Forschungsfunktion ist eine unabhängige strategische Politik- und Forschungsplattform, die analytische Arbeit zu Governance, Wirtschaftssystemen, Regulierungsrahmen und institutioneller Entwicklung leistet.","heroBody":"Das Forum führt strukturierte Forschung und Politikanalyse durch, um eine fundierte Entscheidungsfindung in öffentlichen Institutionen, internationalen Partnern und wissensbasierten Akteuren zu unterstützen.","purpose":"Zweck","purposeText1":"Effektive Politikgestaltung erfordert verlässliche Belege, institutionellen Kontext und langfristige Perspektive. Das Pakistan Business Forum existiert, um das Politikverständnis zu stärken, indem es Forschung produziert, die methodisch fundiert, analytisch rigoros und für aktuelle Governance-Herausforderungen relevant ist.","purposeText2":"Das Forum operiert unabhängig von politischer Zugehörigkeit, Advocacy-Agenden und kommerziellen Interessen.","areasOfWork":"Arbeitsbereiche","work01Title":"Öffentliche Politik & Governance","work01Desc":"Analyse von Politikgestaltung, institutioneller Kapazität und Verwaltungssystemen.","work02Title":"Wirtschafts- und Entwicklungspolitik","work02Desc":"Forschung zu makroökonomischen Rahmenbedingungen, sektorieller Leistung und Entwicklungsplanung.","work03Title":"Regulierungs- und Rechtsrahmen","work03Desc":"Bewertung von Regulierungsumgebungen, Compliance-Systemen und institutioneller Wirksamkeit.","work04Title":"Institutionelle Leistung & Reform","work04Desc":"Evaluierung von Strukturen des öffentlichen Sektors, Leistungserbringung und Reforminitiativen.","work05Title":"Regionale & internationale Angelegenheiten","work05Desc":"Analytische Arbeit zu regionalen Dynamiken, Global Governance und grenzüberschreitenden Politikfragen.","explore":"Erkunden","latestTitle":"Neuestes von PBF®","pub1Tag":"Policy Brief","pub1Title":"Regulierungsreformagenda: Pakistans institutionelle Bereitschaft","pub1Meta":"März 2026 · Öffentliche Angelegenheiten & Politik","pub2Tag":"Strategischer Brief","pub2Title":"Krieg der fünften Generation: Institutionen auf das Informationszeitalter vorbereiten","pub2Meta":"März 2026 · Strategische Beratung","pub3Tag":"Forschungsnotiz","pub3Title":"Bilaterale Wirtschaftsbeziehungen und Beschäftigungsschaffung in Entwicklungsländern","pub3Meta":"Februar 2026 · Wirtschaftliche Angelegenheiten","viewAll":"Alle anzeigen","viewAllTitle":"Publikationen & Wissensprodukte","browseLibrary":"Bibliothek durchsuchen →","read":"Lesen →","analyticalApproach":"Analytischer Ansatz","analyticalText1":"Die vom Forum durchgeführte Forschung wendet etablierte Methodologien der Politikanalyse an, einschließlich empirischer Bewertung, vergleichender Analyse und qualitativer institutioneller Überprüfung. Ergebnisse werden entwickelt, um das Verständnis zu informieren, nicht um Positionen zu vertreten.","analyticalText2":"Das Forum beteiligt sich nicht an Lobbyarbeit, politischen Kampagnen oder der Vertretung von Interessengruppen.","engagement":"Zusammenarbeit","engagementText":"Das Pakistan Business Forum® arbeitet mit Regierungsinstitutionen, internationalen Organisationen, akademischen Gremien und Politikfachleuten zusammen, die objektive Analyse und strukturierte Einblicke suchen.","closingLine":"Unabhängige Analyse zur Unterstützung einer informierten Politikentwicklung.","statFounded":"Gegründet","statResearch":"Forschungsergebnisse","statRegions":"Abgedeckte Regionen","statPracticeAreas":"Themenbereiche"},"common":{"readMore":"Mehr lesen","learnMore":"Mehr erfahren","contactUs":"Kontaktieren Sie uns","backToTop":"Zurück nach oben","loading":"Wird geladen...","trademark":"®","viewResearch":"Forschung ansehen","viewRegion":"Region ansehen","viewMethodology":"Methodik ansehen","viewPublications":"Publikationen ansehen","viewBriefings":"Briefings ansehen"},"practiceAreas":{"title":"Themenbereiche","lead":"Die Aktivitäten des Pakistan Business Forum® sind in sechs Bereichen der Politikforschung, Analyse und wissenschaftlichen Untersuchung strukturiert.","sectionTitle":"Themenbereiche","pa1Title":"PBF® – Strategische Politik & Forschungsfunktion","pa1Desc":"Institutionelle Politikanalyse und strategische Studienkapazität zur Unterstützung evidenzbasierter Erkenntnisse und institutioneller Vorbereitung.","pa2Title":"Öffentliche Angelegenheiten & Politikberatung","pa2Desc":"Analyse von Politikentwicklungsprozessen, gesetzlichen Rahmenbedingungen und institutionellen Mechanismen.","pa3Title":"Regulatorisches Monitoring & Strategische Intelligenz","pa3Desc":"Systematische Analyse regulatorischer Entwicklungen, Politikentwicklung und institutioneller Dynamiken.","pa4Title":"Studien & Forschung","pa4Desc":"Unabhängige wissenschaftliche Forschung zu Politikfragen, wirtschaftlichen Phänomenen und Governance-Herausforderungen.","pa5Title":"Wirtschaftliche Angelegenheiten","pa5Desc":"Spezialisierte Forschung zur Wirtschaftspolitikanalyse, Haushaltspolitikbewertung und wirtschaftlichen Entwicklungsrahmen.","pa6Title":"Krisenmanagement","pa6Desc":"Analytische Unterstützung für politikbezogene Notfälle und regulatorische Herausforderungen.","pa7Title":"Medien & Strategische Kommunikation","pa7Desc":"Forschung und Analyse zu Kommunikationsstrategien und politischen Botschaftsrahmen."},"research":{"title":"Forschung & Erkenntnisse","lead":"Unabhängige wissenschaftliche Forschung zu zeitgenössischen Politikherausforderungen.","methodTitle":"Forschungsmethodik","methodText":"Unsere Forschungsaktivitäten folgen etablierten akademischen Standards und methodischen Protokollen.","themesTitle":"Forschungsthemen","theme1Title":"Governance & Institutionen","theme1Desc":"Analyse institutionellen Designs, Governance-Rahmenbedingungen und administrativer Kapazität.","theme2Title":"Wirtschaftspolitik","theme2Desc":"Forschung zu Fiskal-, Geldpolitik und wirtschaftlichen Entwicklungsstrategien.","theme3Title":"Medienbeziehungsforschung","theme3Desc":"Forschung zu Medienbeteiligungsmechanismen.","theme4Title":"Politikgestaltung & Evaluation","theme4Desc":"Forschung zu Politikgestaltungsprozessen und Evaluationsmechanismen.","pubTitle":"Publikationen","pubText":"Unsere Forschungsergebnisse werden über mehrere Kanäle verbreitet.","portfolioTitle":"Forschungsportfolio","portfolioText":"Unser Forschungsportfolio befasst sich mit zeitgenössischen politischen Herausforderungen in mehreren Bereichen.","collaborationTitle":"Forschungskooperation","collaborationText":"Die Organisation engagiert sich in kollaborativen Forschungsaktivitäten mit akademischen Institutionen."},"regions":{"title":"Regionen","lead":"Die regionale Forschung ist darauf ausgerichtet, vergleichende Analyse und institutionelles Verständnis zu unterstützen.","sectionTitle":"Regionale Abdeckung","r1Title":"Afrika","r1Desc":"Governance-Systeme, regulatorische Umgebungen und Wirtschaftspolitik.","r2Title":"Asien-Pazifik","r2Desc":"Institutionelle Rahmenbedingungen, Wirtschaftspolitik und regulatorische Dynamiken.","r3Title":"Europa","r3Desc":"Regulatorische Governance, institutionelles Gleichgewicht und wirtschaftspolitische Koordination.","r4Title":"Naher Osten & Nordafrika","r4Desc":"Institutionelle Reformen, regulatorische Umgebungen und Wirtschaftspolitik in MENA.","r5Title":"Amerika","r5Desc":"Wirtschaftspolitik, regulatorische Systeme und institutionelle Kapazität.","r6Title":"Russland & Eurasien","r6Desc":"Institutionelle Systeme, regulatorische Rahmenbedingungen und Wirtschaftspolitik."},"impact":{"title":"Messung & Wirkung","lead":"Forschung zu Evaluationsmethoden, Wirkungsbewertungsrahmen und Messansätzen.","frameworkTitle":"Evaluationsforschungsrahmen","frameworkText":"Systematische Messung und Wirkungsbewertung sind grundlegend für das Verständnis politischer Interventionen.","methodsTitle":"Methoden","m1Title":"Wirkungsevaluation","m1Desc":"Umfassende Bewertung von Politik- und Programmwirkungen.","m2Title":"Leistungsmessung","m2Desc":"Entwicklung und Implementierung von Leistungsrahmen und Indikatoren.","m3Title":"Prozessevaluation","m3Desc":"Analyse von Programmimplementierungsprozessen.","m4Title":"Wirtschaftliche Evaluation","m4Desc":"Kosten-Nutzen-Analyse von Politikinterventionen.","researchStandardsTitle":"Forschungsstandards","researchStandardsText":"Alle Evaluierungsforschung hält sich an etablierte akademische und professionelle Standards.","ring1Label":"Wirkungsevaluierung","ring1Desc":"Experimentelle und quasi-experimentelle Designs","ring2Label":"Leistungsmessung","ring2Desc":"KPIs, Rahmenbedingungen, Monitoring-Systeme","ring3Label":"Prozessevaluierung","ring3Desc":"Implementierungsanalyse","ring4Label":"Wirtschaftliche Evaluierung","ring4Desc":"Kosten-Nutzen-Analyse"},"media":{"title":"Medien & Kommunikation","lead":"Forschung und Analyse zu Kommunikationsstrategien und öffentlichen Engagementmechanismen.","approachTitle":"Kommunikationsansatz","approachText":"Wir verbreiten Forschungsergebnisse über vielfältige Kommunikationskanäle.","productsTitle":"Wissensprodukte","p1Title":"Publikationen","p1Desc":"Wissenschaftliche Publikationen, Forschungsberichte und analytische Ergebnisse.","p2Title":"Briefings","p2Desc":"Analytische Briefings mit prägnanten Zusammenfassungen der Forschungsergebnisse.","p3Title":"Wissensprodukte","p3Desc":"Eine kuratierte Sammlung analytischer Ergebnisse und Forschungszusammenfassungen.","latestTitle":"Neueste Ergebnisse"},"about":{"title":"Pakistan Business Forum®","subtitle":"STRATEGISCHE POLITIK- UND FORSCHUNGSPLATTFORM","intro":"Eine unabhängige strategische Politik- und Forschungsplattform für die Analyse von Governance, Wirtschaftssystemen und institutioneller Entwicklung.","tabHistory":"Geschichte","tabMessages":"Botschaften","tabValues":"Unsere Kernwerte","tabTeam":"Unser Team","tabTeamPak":"Team Pakistan","tabAdvisors":"Beirat","historyTitle":"Unsere Geschichte","historyIntro":"Das Pakistan Business Forum® wurde als strukturierte analytische Institution mit klaren Grenzen und einem Bekenntnis zur Unabhängigkeit gegründet.","formationTitle":"Gründung & Entwicklung"},"strategicAdvisory":{"title":"Strategische Beratung","lead":"Strukturierte, forschungsbasierte Analyse zur Unterstützung von Politikklarheit und institutioneller Vorbereitung.","tabOverview":"Übersicht","tabOpinion":"Meinungsbildung","tabVigilance":"Wachsamkeit","tab5gw":"5. Gen. Krieg","purposeTitle":"Zweck","purposeText":"Strategische Beratung liefert strukturierte, forschungsbasierte Analyse.","scopeTitle":"Arbeitsumfang","scope1":"Politik- und Regulierungsanalyse","scope2":"Wirtschaftliche und institutionelle Strategie","scope3":"Strategische Intelligenz und Szenariobewertung","scope4":"Beratungsergebnisse einschließlich Briefings und analytischer Notizen","relevanceTitle":"Politikrelevanz","relevanceText":"Die Funktion trägt durch neutrale, forschungsgetriebene Analyse zum Politikdiskurs bei.","outcomesTitle":"Ergebnisse","outcome1":"Verbessertes Politikverständnis","outcome2":"Strategische Vorbereitung","outcome3":"Evidenzbasierte Erkenntnisse","outcome4":"Institutionelle Klarheit","opinionTitle":"Meinungsbildungsprozess","opinionText":"Wir haben das Potenzial, bestehende Narrative grundlegend zu verändern.","vigilanceTitle":"Wachsamkeitsstrategie","vigilanceText":"Rund-um-die-Uhr-Wachsamkeit — jedes Gespräch erhält eine Antwort.","fgwTitle":"Krieg der fünften Generation","fgwText":"Krieg der fünften Generation dreht sich um Ideen.","tabAmplification":"Amplifikation & Spiele"},"gallery":{"title":"Galerie","lead":"Visuelle Dokumentation der Aktivitäten des Pakistan Business Forums®.","aboutTitle":"Über die Galerie","aboutText":"Die Galerie zeigt eine visuelle Dokumentation der Aktivitäten und Veranstaltungen des Forums.","aboutText2":"Alle visuellen Materialien werden zu institutionellen Dokumentationszwecken aufbewahrt.","eventsTitle":"Internationale Veranstaltungen und Seminare","usageTitle":"Nutzungsrechte","usageText":"Alle Galeriebilder sind Eigentum des Pakistan Business Forums®.","contributionsTitle":"Beiträge","contributionsText":"Organisationen, die Beiträge leisten möchten, können die Verwaltungsfunktion kontaktieren."}}');

/***/ }),

/***/ 981:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"nav":{"about":"About","home":"Home","strategicAdvisory":"Strategic Advisory","research":"Research","practiceAreas":"Practice Areas","impact":"Impact","media":"Media","regions":"Regions","gallery":"Gallery","partners":"Partners","events":"Events","workWithUs":"Work With Us","becomeAMember":"Become a Member","contact":"Contact","brand":"Pakistan Business Forum","brandSubtitle":"Strategic Policy & Research Platform","openMenu":"Open menu","closeMenu":"Close menu","search":"Search","latest":"Latest","language":"Language"},"footer":{"brandDesc":"Independent analytical platform producing evidence-based policy, regulatory, and economic research since 2016.","practiceAreas":"Practice Areas","publicAffairs":"Public Affairs & Policy","regulatoryMonitoring":"Regulatory Monitoring","economicAffairs":"Economic Affairs","mediaComms":"Media & Communications","crisisManagement":"Crisis Management","strategicAdvisory":"Strategic Advisory","research":"Research","researchOverview":"Research Overview","publications":"Publications","knowledgeOutputs":"Knowledge Outputs","policyBriefings":"Policy Briefings","impact":"Impact","regionalCoverage":"Regional Coverage","organisation":"Organisation","aboutPbf":"About PBF","globalPartners":"Global Partners","events":"Events","gallery":"Gallery","membership":"Membership","workWithUs":"Work With Us","contact":"Contact","copyright":"© 2016–2026 Pakistan Business Forum®. All rights reserved. Informational and academic purposes only.","privacy":"Privacy","terms":"Terms","cookies":"Cookies","accessibility":"Accessibility"},"home":{"heroTitle":"Advancing Evidence-Based Policy Analysis","heroLead":"Pakistan Business Forum® — Strategic Policy & Research Function is an independent strategic policy and research platform contributing analytical work on governance, economic systems, regulatory frameworks, and institutional development.","heroBody":"The Forum undertakes structured research and policy analysis to support informed decision-making across public institutions, international partners, and knowledge-based stakeholders.","purpose":"Purpose","purposeText1":"Effective policy formulation requires reliable evidence, institutional context, and long-term perspective. Pakistan Business Forum — Strategic Policy & Research Function exists to strengthen policy understanding by producing research that is methodologically sound, analytically rigorous, and relevant to contemporary governance challenges.","purposeText2":"The Forum operates independently of political affiliation, advocacy agendas, and commercial interests.","areasOfWork":"Areas of Work","work01Title":"Public Policy & Governance","work01Desc":"Analysis of policy design, institutional capacity, and administrative systems.","work02Title":"Economic & Development Policy","work02Desc":"Research on macroeconomic frameworks, sectoral performance, and development planning.","work03Title":"Regulatory & Legal Frameworks","work03Desc":"Assessment of regulatory environments, compliance systems, and institutional effectiveness.","work04Title":"Institutional Performance & Reform","work04Desc":"Evaluation of public-sector structures, service delivery, and reform initiatives.","work05Title":"Regional & International Affairs","work05Desc":"Analytical work on regional dynamics, global governance, and cross-border policy issues.","explore":"Explore","latestTitle":"Latest From PBF®","pub1Tag":"Policy Brief","pub1Title":"Regulatory Reform Agenda: Pakistan\'s Institutional Readiness","pub1Meta":"March 2026 · Public Affairs & Policy","pub2Tag":"Strategic Brief","pub2Title":"Fifth Generation Warfare: Preparing Institutions for the Information Age","pub2Meta":"March 2026 · Strategic Advisory","pub3Tag":"Research Note","pub3Title":"Bilateral Economic Relations and Employment Generation in Developing Economies","pub3Meta":"February 2026 · Economic Affairs","viewAll":"View All","viewAllTitle":"Publications & Knowledge Outputs","browseLibrary":"Browse Library →","read":"Read →","analyticalApproach":"Analytical Approach","analyticalText1":"Research undertaken by Pakistan Business Forum — Strategic Policy & Research Function applies established policy-analysis methodologies, including empirical assessment, comparative analysis, and qualitative institutional review. Outputs are developed to inform understanding rather than advocate positions.","analyticalText2":"The Forum does not engage in lobbying, political campaigning, or representation of interest groups.","engagement":"Engagement","engagementText":"Pakistan Business Forum® — Strategic Policy & Research Function engages with government institutions, international organizations, academic bodies, and policy professionals seeking objective analysis and structured insight. Engagements are conducted within clearly defined analytical and ethical boundaries.","closingLine":"Independent analysis in support of informed policy development.","statFounded":"Founded","statResearch":"Research Outputs","statRegions":"Regions Covered","statPracticeAreas":"Practice Areas"},"common":{"readMore":"Read More","learnMore":"Learn More","contactUs":"Contact Us","backToTop":"Back to Top","loading":"Loading...","trademark":"®","viewResearch":"View research","viewRegion":"View region","viewMethodology":"View methodology","viewPublications":"View publications","viewBriefings":"View briefings"},"practiceAreas":{"title":"Practice Areas","lead":"Organizational activities within Pakistan Business Forum® are structured across six domains of policy research, analysis, and scholarly inquiry. The Pakistan Business Forum® – Strategic Policy & Research Function is a cross-cutting analytical capability that supports these practice areas through evidence-based methods and institutional research standards.","sectionTitle":"Practice Areas","pa1Title":"PBF® – Strategic Policy & Research Function","pa1Desc":"Institutional policy analysis and strategic studies capability supporting evidence-based understanding and institutional preparedness.","pa2Title":"Public Affairs & Policy Advisory","pa2Desc":"Analysis of policy development processes, legislative frameworks, and institutional mechanisms governing public affairs management.","pa3Title":"Regulatory Monitoring & Strategic Intelligence","pa3Desc":"Systematic analysis of regulatory developments, policy evolution, and institutional dynamics within governance structures.","pa4Title":"Studies & Research","pa4Desc":"Independent scholarly research examining policy issues, economic phenomena, and governance challenges through rigorous analytical frameworks.","pa5Title":"Economic Affairs","pa5Desc":"Specialized research in economic policy analysis, fiscal policy evaluation, and economic development frameworks.","pa6Title":"Crisis Management","pa6Desc":"Analytical support for policy-related contingencies, regulatory challenges, and institutional crises requiring systematic assessment.","pa7Title":"Media & Strategic Communications","pa7Desc":"Research and analysis on communication strategies, policy messaging frameworks, and public engagement mechanisms."},"research":{"title":"Research & Insights","lead":"Independent scholarly research examining contemporary policy challenges through rigorous methodological approaches and contributing to the academic and policy literature on governance and public administration.","methodTitle":"Research Methodology","methodText":"Our research activities are governed by established academic standards and methodological protocols. We employ diverse analytical frameworks, including quantitative methods, qualitative inquiry, comparative analysis, and policy evaluation techniques, selected according to the specific research questions and analytical objectives of each project.","themesTitle":"Research Themes","theme1Title":"Governance & Institutions","theme1Desc":"Analysis of institutional design, governance frameworks, and administrative capacity to support effective public service delivery and democratic accountability.","theme2Title":"Economic Policy","theme2Desc":"Research on fiscal policy, monetary policy, economic development strategies, and their impacts on economic growth and stability.","theme3Title":"Media Relations Research","theme3Desc":"Research on media engagement mechanisms, including analysis of press release structures, media briefing formats, and relationships between policy institutions and media organizations.","theme4Title":"Policy Design & Evaluation","theme4Desc":"Research examining policy design processes, evaluation mechanisms, and factors that influence policy effectiveness and outcomes in practice.","pubTitle":"Publications","pubText":"Our research findings are disseminated through multiple channels, including research reports, policy briefs, working papers, and peer-reviewed academic publications, contributing to the scholarly and policy literature.","portfolioTitle":"Research Portfolio","portfolioText":"Our research portfolio addresses contemporary policy challenges across multiple domains. Research outputs are structured to contribute to ongoing academic and policy discourse.","collaborationTitle":"Research Collaboration","collaborationText":"The organization engages in collaborative research activities with academic institutions, research organizations, and international bodies."},"regions":{"title":"Regions","lead":"Regional research is organized to support comparative analysis, institutional understanding, and policy relevance across diverse governance and economic systems.","sectionTitle":"Regional Coverage","r1Title":"Africa","r1Desc":"Governance systems, regulatory environments, and economic policy across regional and national contexts.","r2Title":"Asia-Pacific","r2Desc":"Institutional frameworks, economic policy, and regulatory dynamics across Asia-Pacific economies.","r3Title":"Europe","r3Desc":"Regulatory governance, institutional balance, and economic policy coordination across Europe.","r4Title":"Middle East & North Africa","r4Desc":"Institutional reform, regulatory environments, and economic policy across MENA.","r5Title":"Americas","r5Desc":"Economic policy, regulatory systems, and institutional capacity across the Americas.","r6Title":"Russia & Eurasia","r6Desc":"Institutional systems, regulatory frameworks, and economic policy across Eurasia."},"impact":{"title":"Measurement & Impact","lead":"Research on evaluation methodologies, impact assessment frameworks, and measurement approaches for policy interventions, program effectiveness, and institutional performance.","frameworkTitle":"Evaluation Research Framework","frameworkText":"Systematic measurement and impact assessment are fundamental to understanding the effectiveness of policy interventions, program implementations, and institutional activities. Our evaluation research employs established methodological frameworks to assess outcomes, examine causal relationships, and generate evidence-based findings.","methodsTitle":"Methods","m1Title":"Impact Evaluation","m1Desc":"Comprehensive assessment of policy and program impacts using experimental and quasi-experimental methods, examining causal relationships between interventions and outcomes.","m2Title":"Performance Measurement","m2Desc":"Development and implementation of performance frameworks, indicators, and data collection systems to monitor progress, track outcomes, and evaluate organizational effectiveness.","m3Title":"Process Evaluation","m3Desc":"Analysis of program implementation processes, identifying strengths and weaknesses in delivery mechanisms, stakeholder engagement, and operational effectiveness.","m4Title":"Economic Evaluation","m4Desc":"Cost-effectiveness and cost-benefit analysis of policy interventions and programs, assessing economic efficiency and resource utilization to support evidence-based resource allocation decisions.","researchStandardsTitle":"Research Standards","researchStandardsText":"All evaluation research adheres to established academic and professional standards in evaluation methodology, ensuring methodological rigor, analytical objectivity, and scholarly utility.","ring1Label":"Impact Evaluation","ring1Desc":"Experimental & quasi-experimental designs","ring2Label":"Performance Measurement","ring2Desc":"KPIs, frameworks, monitoring systems","ring3Label":"Process Evaluation","ring3Desc":"Implementation analysis","ring4Label":"Economic Evaluation","ring4Desc":"Cost-benefit & cost-effectiveness"},"media":{"title":"Media & Communications","lead":"Research and analysis on communication strategies, policy messaging frameworks, and public engagement mechanisms in policy and governance contexts.","approachTitle":"Communication Approach","approachText":"Our organization disseminates research findings and analytical outputs through diverse communication channels, ensuring that rigorous research contributes to academic and policy discourse. We maintain high standards of analytical accuracy, methodological transparency, and scholarly rigor in all communication activities.","productsTitle":"Knowledge Products","p1Title":"Publications","p1Desc":"Scholarly publications, research reports, and analytical outputs contributing to academic and policy literature on governance, economic policy, and institutional development.","p2Title":"Briefings","p2Desc":"Analytical briefings providing concise summaries of research findings, policy developments, and institutional analysis for policy audiences and stakeholders.","p3Title":"Knowledge Outputs","p3Desc":"A curated collection of analytical outputs, data visualizations, and research summaries designed to make complex policy research accessible to diverse audiences.","latestTitle":"Latest Outputs"},"about":{"title":"Pakistan Business Forum®","subtitle":"STRATEGIC POLICY & RESEARCH PLATFORM","intro":"An independent strategic policy and research platform engaged in analysis of governance, economic systems, regulatory frameworks, and institutional development at national and international levels.","tabHistory":"History","tabMessages":"Messages","tabValues":"Our Core Values","tabTeam":"Our Team","tabTeamPak":"Team Pakistan","tabAdvisors":"Board of Advisors","historyTitle":"Our History","historyIntro":"Pakistan Business Forum® — Strategic Policy & Research Function was established as a structured analytical institution with clear boundaries and a commitment to independence. The Forum conducts evidence-based research with analytical independence to contribute to policy understanding and institutional clarity.","formationTitle":"Formation & Development"},"strategicAdvisory":{"title":"Strategic Advisory","lead":"Structured, research-based analysis that supports policy clarity, institutional preparedness, and long-term economic understanding.","tabOverview":"Overview","tabOpinion":"Opinion Making","tabVigilance":"Vigilance","tab5gw":"5th Gen Warfare","purposeTitle":"Purpose","purposeText":"Strategic Advisory provides structured, research-based analysis that supports policy clarity, institutional preparedness, and long-term economic understanding within Pakistan Business Forum®.","scopeTitle":"Scope of Work","scope1":"Policy and regulatory analysis","scope2":"Economic and institutional strategy","scope3":"Strategic intelligence and scenario assessment","scope4":"Advisory outputs including briefs, assessments, and analytical notes","relevanceTitle":"Policy Relevance","relevanceText":"The function contributes to policy discourse through neutral, research-driven analysis that improves understanding of governance, regulatory environments, and economic systems. It does not pursue advocacy or political outcomes.","outcomesTitle":"Outcomes","outcome1":"Improved policy understanding","outcome2":"Strategic preparedness","outcome3":"Evidence-based insight","outcome4":"Institutional clarity","opinionTitle":"Opinion Making Process","opinionText":"We have the potential and capacity to turn over a new leaf on existing narratives. The process follows five interconnected stages.","vigilanceTitle":"Vigilance Strategy","vigilanceText":"24/7 vigilance across all audience segments — every conversation receives a response regardless of sentiment. No narrative goes unaddressed.","fgwTitle":"Fifth Generation Warfare","fgwText":"Fifth generation warfare is all about ideas — how we conceive of conflicts and prepare institutions to navigate them.","tabAmplification":"Amplification & Games"},"gallery":{"title":"Gallery","lead":"Visual documentation of events, activities, partnerships, and institutional milestones of Pakistan Business Forum® — Strategic Policy & Research Function.","aboutTitle":"About Our Gallery","aboutText":"The gallery showcases visual documentation of Pakistan Business Forum® activities, events, partnerships, and institutional milestones.","aboutText2":"All photographs and visual materials are maintained for institutional documentation purposes.","eventsTitle":"International Events & Seminars","usageTitle":"Usage Rights","usageText":"All gallery images are the property of Pakistan Business Forum®. Images may be used for educational and academic purposes with appropriate attribution.","contributionsTitle":"Contributions","contributionsText":"Organizations wishing to contribute documentation of collaborative events may contact the administrative function for submission guidelines."}}');

/***/ }),

/***/ 573:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"nav":{"about":"Acerca de","home":"Inicio","strategicAdvisory":"Asesoría estratégica","research":"Investigación","practiceAreas":"Áreas de práctica","impact":"Impacto","media":"Medios","regions":"Regiones","gallery":"Galería","partners":"Socios","events":"Eventos","workWithUs":"Trabaja con nosotros","becomeAMember":"Hazte miembro","contact":"Contacto","brand":"Foro Empresarial de Pakistán","brandSubtitle":"Plataforma de política estratégica e investigación","openMenu":"Abrir menú","closeMenu":"Cerrar menú","search":"Buscar","latest":"Últimas noticias","language":"Idioma"},"footer":{"brandDesc":"Plataforma analítica independiente que produce investigación basada en evidencia sobre política, regulación y economía desde 2016.","practiceAreas":"Áreas de práctica","publicAffairs":"Asuntos públicos y política","regulatoryMonitoring":"Seguimiento regulatorio","economicAffairs":"Asuntos económicos","mediaComms":"Medios y comunicaciones","crisisManagement":"Gestión de crisis","strategicAdvisory":"Asesoría estratégica","research":"Investigación","researchOverview":"Resumen de investigación","publications":"Publicaciones","knowledgeOutputs":"Productos de conocimiento","policyBriefings":"Informes de política","impact":"Impacto","regionalCoverage":"Cobertura regional","organisation":"Organización","aboutPbf":"Acerca del PBF","globalPartners":"Socios globales","events":"Eventos","gallery":"Galería","membership":"Membresía","workWithUs":"Trabaja con nosotros","contact":"Contacto","copyright":"© 2016–2026 Foro Empresarial de Pakistán®. Todos los derechos reservados. Solo para fines informativos y académicos.","privacy":"Privacidad","terms":"Términos","cookies":"Cookies","accessibility":"Accesibilidad"},"home":{"heroTitle":"Promoviendo el análisis de políticas basado en evidencia","heroLead":"Foro Empresarial de Pakistán® — La función de política estratégica e investigación es una plataforma independiente de política estratégica e investigación que contribuye con trabajo analítico sobre gobernanza, sistemas económicos, marcos regulatorios y desarrollo institucional.","heroBody":"El Foro lleva a cabo investigación estructurada y análisis de políticas para apoyar la toma de decisiones informada en instituciones públicas, socios internacionales e interesados basados en el conocimiento.","purpose":"Propósito","purposeText1":"La formulación efectiva de políticas requiere evidencia confiable, contexto institucional y perspectiva a largo plazo. El Foro Empresarial de Pakistán existe para fortalecer la comprensión de políticas mediante la producción de investigación metodológicamente sólida, analíticamente rigurosa y relevante para los desafíos de gobernanza contemporáneos.","purposeText2":"El Foro opera independientemente de filiaciones políticas, agendas de defensa e intereses comerciales.","areasOfWork":"Áreas de trabajo","work01Title":"Política pública y gobernanza","work01Desc":"Análisis del diseño de políticas, capacidad institucional y sistemas administrativos.","work02Title":"Política económica y de desarrollo","work02Desc":"Investigación sobre marcos macroeconómicos, rendimiento sectorial y planificación del desarrollo.","work03Title":"Marcos regulatorios y legales","work03Desc":"Evaluación de entornos regulatorios, sistemas de cumplimiento y eficacia institucional.","work04Title":"Desempeño institucional y reforma","work04Desc":"Evaluación de estructuras del sector público, prestación de servicios e iniciativas de reforma.","work05Title":"Asuntos regionales e internacionales","work05Desc":"Trabajo analítico sobre dinámicas regionales, gobernanza global y cuestiones de política transfronteriza.","explore":"Explorar","latestTitle":"Lo último del PBF®","pub1Tag":"Nota de política","pub1Title":"Agenda de reforma regulatoria: preparación institucional de Pakistán","pub1Meta":"Marzo 2026 · Asuntos públicos y política","pub2Tag":"Nota estratégica","pub2Title":"Guerra de quinta generación: preparando instituciones para la era de la información","pub2Meta":"Marzo 2026 · Asesoría estratégica","pub3Tag":"Nota de investigación","pub3Title":"Relaciones económicas bilaterales y generación de empleo en economías en desarrollo","pub3Meta":"Febrero 2026 · Asuntos económicos","viewAll":"Ver todo","viewAllTitle":"Publicaciones y productos de conocimiento","browseLibrary":"Explorar biblioteca →","read":"Leer →","analyticalApproach":"Enfoque analítico","analyticalText1":"La investigación realizada por el Foro aplica metodologías establecidas de análisis de políticas, incluyendo evaluación empírica, análisis comparativo y revisión institucional cualitativa. Los resultados se desarrollan para informar la comprensión en lugar de abogar por posiciones.","analyticalText2":"El Foro no se involucra en cabildeo, campañas políticas ni representación de grupos de interés.","engagement":"Compromiso","engagementText":"El Foro Empresarial de Pakistán® se relaciona con instituciones gubernamentales, organizaciones internacionales, organismos académicos y profesionales de políticas que buscan análisis objetivo y perspectiva estructurada.","closingLine":"Análisis independiente en apoyo al desarrollo informado de políticas.","statFounded":"Fundado","statResearch":"Productos de investigación","statRegions":"Regiones cubiertas","statPracticeAreas":"Áreas de práctica"},"common":{"readMore":"Leer más","learnMore":"Saber más","contactUs":"Contáctenos","backToTop":"Volver arriba","loading":"Cargando...","trademark":"®","viewResearch":"Ver investigación","viewRegion":"Ver región","viewMethodology":"Ver metodología","viewPublications":"Ver publicaciones","viewBriefings":"Ver informes"},"practiceAreas":{"title":"Áreas de práctica","lead":"Las actividades del Foro Empresarial de Pakistán® están estructuradas en seis dominios de investigación política, análisis e investigación académica.","sectionTitle":"Áreas de práctica","pa1Title":"PBF® – Función de política estratégica e investigación","pa1Desc":"Capacidad de análisis de políticas institucionales y estudios estratégicos que apoyan la comprensión basada en evidencia.","pa2Title":"Asuntos públicos y asesoría política","pa2Desc":"Análisis de procesos de desarrollo de políticas, marcos legislativos y mecanismos institucionales.","pa3Title":"Monitoreo regulatorio e inteligencia estratégica","pa3Desc":"Análisis sistemático de desarrollos regulatorios, evolución de políticas y dinámicas institucionales.","pa4Title":"Estudios e investigación","pa4Desc":"Investigación académica independiente que examina cuestiones de política, fenómenos económicos y desafíos de gobernanza.","pa5Title":"Asuntos económicos","pa5Desc":"Investigación especializada en análisis de política económica y marcos de desarrollo económico.","pa6Title":"Gestión de crisis","pa6Desc":"Apoyo analítico para contingencias relacionadas con políticas y desafíos regulatorios.","pa7Title":"Medios y comunicaciones estratégicas","pa7Desc":"Investigación y análisis sobre estrategias de comunicación y marcos de mensajes de política."},"research":{"title":"Investigación y perspectivas","lead":"Investigación académica independiente sobre desafíos políticos contemporáneos.","methodTitle":"Metodología de investigación","methodText":"Nuestras actividades de investigación se rigen por estándares académicos establecidos.","themesTitle":"Temas de investigación","theme1Title":"Gobernanza e instituciones","theme1Desc":"Análisis del diseño institucional, marcos de gobernanza y capacidad administrativa.","theme2Title":"Política económica","theme2Desc":"Investigación sobre política fiscal, monetaria y estrategias de desarrollo económico.","theme3Title":"Investigación en relaciones mediáticas","theme3Desc":"Investigación sobre mecanismos de participación mediática.","theme4Title":"Diseño y evaluación de políticas","theme4Desc":"Investigación sobre procesos de diseño de políticas y mecanismos de evaluación.","pubTitle":"Publicaciones","pubText":"Nuestros hallazgos de investigación se difunden a través de múltiples canales.","portfolioTitle":"Cartera de investigación","portfolioText":"Nuestra cartera de investigación aborda los desafíos políticos contemporáneos en múltiples dominios.","collaborationTitle":"Colaboración en investigación","collaborationText":"La organización participa en actividades de investigación colaborativas con instituciones académicas."},"regions":{"title":"Regiones","lead":"La investigación regional está organizada para apoyar el análisis comparativo y la relevancia política.","sectionTitle":"Cobertura regional","r1Title":"África","r1Desc":"Sistemas de gobernanza, entornos regulatorios y política económica.","r2Title":"Asia-Pacífico","r2Desc":"Marcos institucionales, política económica y dinámicas regulatorias.","r3Title":"Europa","r3Desc":"Gobernanza regulatoria, equilibrio institucional y coordinación de política económica.","r4Title":"Oriente Medio y Norte de África","r4Desc":"Reforma institucional, entornos regulatorios y política económica en MENA.","r5Title":"Américas","r5Desc":"Política económica, sistemas regulatorios y capacidad institucional.","r6Title":"Rusia y Eurasia","r6Desc":"Sistemas institucionales, marcos regulatorios y política económica."},"impact":{"title":"Medición e impacto","lead":"Investigación sobre metodologías de evaluación y marcos de evaluación de impacto.","frameworkTitle":"Marco de investigación de evaluación","frameworkText":"La medición sistemática y la evaluación de impacto son fundamentales para comprender la efectividad de las intervenciones políticas.","methodsTitle":"Métodos","m1Title":"Evaluación de impacto","m1Desc":"Evaluación integral de los impactos de políticas y programas.","m2Title":"Medición del desempeño","m2Desc":"Desarrollo e implementación de marcos de desempeño e indicadores.","m3Title":"Evaluación de procesos","m3Desc":"Análisis de procesos de implementación de programas.","m4Title":"Evaluación económica","m4Desc":"Análisis de costo-beneficio de intervenciones políticas.","researchStandardsTitle":"Normas de investigación","researchStandardsText":"Toda la investigación evaluativa se adhiere a normas académicas y profesionales establecidas.","ring1Label":"Evaluación de impacto","ring1Desc":"Diseños experimentales y cuasi-experimentales","ring2Label":"Medición del rendimiento","ring2Desc":"KPI, marcos, sistemas de monitoreo","ring3Label":"Evaluación de procesos","ring3Desc":"Análisis de implementación","ring4Label":"Evaluación económica","ring4Desc":"Análisis costo-beneficio"},"media":{"title":"Medios y comunicaciones","lead":"Investigación y análisis sobre estrategias de comunicación y mecanismos de participación pública.","approachTitle":"Enfoque comunicativo","approachText":"Difundimos los resultados de nuestra investigación a través de diversos canales de comunicación.","productsTitle":"Productos de conocimiento","p1Title":"Publicaciones","p1Desc":"Publicaciones académicas, informes de investigación y resultados analíticos.","p2Title":"Informes","p2Desc":"Informes analíticos con resúmenes concisos de los hallazgos de investigación.","p3Title":"Productos de conocimiento","p3Desc":"Una colección curada de resultados analíticos y resúmenes de investigación.","latestTitle":"Últimas producciones"},"about":{"title":"Foro Empresarial de Pakistán®","subtitle":"PLATAFORMA DE POLÍTICA ESTRATÉGICA E INVESTIGACIÓN","intro":"Plataforma independiente de política estratégica e investigación dedicada al análisis de gobernanza y sistemas económicos.","tabHistory":"Historia","tabMessages":"Mensajes","tabValues":"Nuestros valores fundamentales","tabTeam":"Nuestro equipo","tabTeamPak":"Equipo Pakistán","tabAdvisors":"Junta de asesores","historyTitle":"Nuestra historia","historyIntro":"El Foro Empresarial de Pakistán® fue establecido como una institución analítica estructurada.","formationTitle":"Formación y desarrollo"},"strategicAdvisory":{"title":"Asesoría estratégica","lead":"Análisis estructurado y basado en investigación que apoya la claridad política y la preparación institucional.","tabOverview":"Resumen","tabOpinion":"Formación de opinión","tabVigilance":"Vigilancia","tab5gw":"Guerra 5ª generación","purposeTitle":"Propósito","purposeText":"La Asesoría Estratégica proporciona análisis estructurado y basado en investigación.","scopeTitle":"Alcance del trabajo","scope1":"Análisis de políticas y regulación","scope2":"Estrategia económica e institucional","scope3":"Inteligencia estratégica y evaluación de escenarios","scope4":"Resultados de asesoría incluyendo informes y notas analíticas","relevanceTitle":"Relevancia política","relevanceText":"La función contribuye al discurso político a través de análisis neutral y orientado por la investigación.","outcomesTitle":"Resultados","outcome1":"Mejor comprensión de las políticas","outcome2":"Preparación estratégica","outcome3":"Perspectiva basada en evidencia","outcome4":"Claridad institucional","opinionTitle":"Proceso de formación de opinión","opinionText":"Tenemos el potencial de cambiar fundamentalmente las narrativas existentes.","vigilanceTitle":"Estrategia de vigilancia","vigilanceText":"Vigilancia 24/7 en todos los segmentos de audiencia — cada conversación recibe respuesta.","fgwTitle":"Guerra de quinta generación","fgwText":"La guerra de quinta generación se trata de ideas.","tabAmplification":"Amplificación y juegos"},"gallery":{"title":"Galería","lead":"Documentación visual de las actividades del Foro Empresarial de Pakistán®.","aboutTitle":"Acerca de la galería","aboutText":"La galería presenta documentación visual de las actividades y eventos del Foro.","aboutText2":"Todos los materiales visuales se mantienen con fines de documentación institucional.","eventsTitle":"Eventos y seminarios internacionales","usageTitle":"Derechos de uso","usageText":"Todas las imágenes son propiedad del Foro Empresarial de Pakistán®.","contributionsTitle":"Contribuciones","contributionsText":"Las organizaciones que deseen contribuir pueden contactar a la función administrativa."}}');

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"nav":{"about":"À propos","home":"Accueil","strategicAdvisory":"Conseil stratégique","research":"Recherche","practiceAreas":"Domaines d\'activité","impact":"Impact","media":"Médias","regions":"Régions","gallery":"Galerie","partners":"Partenaires","events":"Événements","workWithUs":"Travailler avec nous","becomeAMember":"Devenir membre","contact":"Contact","brand":"Forum des affaires du Pakistan","brandSubtitle":"Plateforme de politique stratégique et de recherche","openMenu":"Ouvrir le menu","closeMenu":"Fermer le menu","search":"Rechercher","latest":"Dernières nouvelles","language":"Langue"},"footer":{"brandDesc":"Plateforme analytique indépendante produisant des recherches factuelles en matière de politique, de réglementation et d\'économie depuis 2016.","practiceAreas":"Domaines d\'activité","publicAffairs":"Affaires publiques et politique","regulatoryMonitoring":"Surveillance réglementaire","economicAffairs":"Affaires économiques","mediaComms":"Médias et communications","crisisManagement":"Gestion de crise","strategicAdvisory":"Conseil stratégique","research":"Recherche","researchOverview":"Aperçu de la recherche","publications":"Publications","knowledgeOutputs":"Productions de connaissances","policyBriefings":"Briefings politiques","impact":"Impact","regionalCoverage":"Couverture régionale","organisation":"Organisation","aboutPbf":"À propos du PBF","globalPartners":"Partenaires mondiaux","events":"Événements","gallery":"Galerie","membership":"Adhésion","workWithUs":"Travailler avec nous","contact":"Contact","copyright":"© 2016–2026 Forum des affaires du Pakistan®. Tous droits réservés. À des fins informatives et académiques uniquement.","privacy":"Confidentialité","terms":"Conditions","cookies":"Cookies","accessibility":"Accessibilité"},"home":{"heroTitle":"Promouvoir l\'analyse des politiques fondée sur des données probantes","heroLead":"Forum des affaires du Pakistan® — La fonction de politique stratégique et de recherche est une plateforme indépendante de politique stratégique et de recherche contribuant à des travaux analytiques sur la gouvernance, les systèmes économiques, les cadres réglementaires et le développement institutionnel.","heroBody":"Le Forum mène des recherches structurées et des analyses politiques pour soutenir une prise de décision éclairée au sein des institutions publiques, des partenaires internationaux et des parties prenantes basées sur les connaissances.","purpose":"Objectif","purposeText1":"Une formulation efficace des politiques nécessite des preuves fiables, un contexte institutionnel et une perspective à long terme. Le Forum des affaires du Pakistan existe pour renforcer la compréhension des politiques en produisant des recherches méthodologiquement solides, analytiquement rigoureuses et pertinentes pour les défis contemporains de la gouvernance.","purposeText2":"Le Forum opère indépendamment des affiliations politiques, des agendas de plaidoyer et des intérêts commerciaux.","areasOfWork":"Domaines de travail","work01Title":"Politique publique et gouvernance","work01Desc":"Analyse de la conception des politiques, des capacités institutionnelles et des systèmes administratifs.","work02Title":"Politique économique et de développement","work02Desc":"Recherche sur les cadres macroéconomiques, la performance sectorielle et la planification du développement.","work03Title":"Cadres réglementaires et juridiques","work03Desc":"Évaluation des environnements réglementaires, des systèmes de conformité et de l\'efficacité institutionnelle.","work04Title":"Performance institutionnelle et réforme","work04Desc":"Évaluation des structures du secteur public, de la prestation de services et des initiatives de réforme.","work05Title":"Affaires régionales et internationales","work05Desc":"Travaux analytiques sur les dynamiques régionales, la gouvernance mondiale et les questions politiques transfrontalières.","explore":"Explorer","latestTitle":"Dernières nouvelles du PBF®","pub1Tag":"Note de politique","pub1Title":"Agenda de réforme réglementaire : la préparation institutionnelle du Pakistan","pub1Meta":"Mars 2026 · Affaires publiques et politique","pub2Tag":"Note stratégique","pub2Title":"Guerre de cinquième génération : préparer les institutions à l\'ère de l\'information","pub2Meta":"Mars 2026 · Conseil stratégique","pub3Tag":"Note de recherche","pub3Title":"Relations économiques bilatérales et création d\'emplois dans les économies en développement","pub3Meta":"Février 2026 · Affaires économiques","viewAll":"Tout afficher","viewAllTitle":"Publications et productions de connaissances","browseLibrary":"Parcourir la bibliothèque →","read":"Lire →","analyticalApproach":"Approche analytique","analyticalText1":"Les recherches menées par le Forum appliquent des méthodologies d\'analyse des politiques établies, notamment l\'évaluation empirique, l\'analyse comparative et la révision institutionnelle qualitative. Les résultats sont développés pour informer la compréhension plutôt que pour défendre des positions.","analyticalText2":"Le Forum ne s\'engage pas dans le lobbying, les campagnes politiques ou la représentation de groupes d\'intérêt.","engagement":"Engagement","engagementText":"Le Forum des affaires du Pakistan® s\'engage avec les institutions gouvernementales, les organisations internationales, les organismes académiques et les professionnels des politiques à la recherche d\'une analyse objective et d\'une perspicacité structurée.","closingLine":"Analyse indépendante en soutien au développement de politiques éclairées.","statFounded":"Fondé","statResearch":"Productions de recherche","statRegions":"Régions couvertes","statPracticeAreas":"Domaines d\'activité"},"common":{"readMore":"En savoir plus","learnMore":"En savoir plus","contactUs":"Contactez-nous","backToTop":"Retour en haut","loading":"Chargement...","trademark":"®","viewResearch":"Voir la recherche","viewRegion":"Voir la région","viewMethodology":"Voir la méthodologie","viewPublications":"Voir les publications","viewBriefings":"Voir les briefings"},"practiceAreas":{"title":"Domaines d\'activité","lead":"Les activités du Forum des affaires du Pakistan® sont structurées en six domaines de recherche politique, d\'analyse et d\'enquête académique.","sectionTitle":"Domaines d\'activité","pa1Title":"PBF® – Fonction de politique stratégique et de recherche","pa1Desc":"Capacité d\'analyse politique institutionnelle et d\'études stratégiques soutenant la compréhension fondée sur des données probantes.","pa2Title":"Affaires publiques et conseil politique","pa2Desc":"Analyse des processus d\'élaboration des politiques, des cadres législatifs et des mécanismes institutionnels.","pa3Title":"Surveillance réglementaire et intelligence stratégique","pa3Desc":"Analyse systématique des développements réglementaires et des dynamiques institutionnelles.","pa4Title":"Études et recherche","pa4Desc":"Recherche académique indépendante sur les questions de politique, les phénomènes économiques et les défis de gouvernance.","pa5Title":"Affaires économiques","pa5Desc":"Recherche spécialisée en analyse de politique économique et en cadres de développement économique.","pa6Title":"Gestion de crise","pa6Desc":"Soutien analytique pour les urgences liées aux politiques et les défis réglementaires.","pa7Title":"Médias et communications stratégiques","pa7Desc":"Recherche et analyse sur les stratégies de communication et les cadres de messagerie politique."},"research":{"title":"Recherche et perspectives","lead":"Recherche académique indépendante sur les défis politiques contemporains.","methodTitle":"Méthodologie de recherche","methodText":"Nos activités de recherche sont régies par des normes académiques établies.","themesTitle":"Thèmes de recherche","theme1Title":"Gouvernance et institutions","theme1Desc":"Analyse de la conception institutionnelle, des cadres de gouvernance et des capacités administratives.","theme2Title":"Politique économique","theme2Desc":"Recherche sur la politique budgétaire, monétaire et les stratégies de développement économique.","theme3Title":"Recherche sur les relations médiatiques","theme3Desc":"Recherche sur les mécanismes d\'engagement médiatique.","theme4Title":"Conception et évaluation des politiques","theme4Desc":"Recherche sur les processus de conception des politiques et les mécanismes d\'évaluation.","pubTitle":"Publications","pubText":"Nos résultats de recherche sont diffusés par de multiples canaux.","portfolioTitle":"Portefeuille de recherche","portfolioText":"Notre portefeuille de recherche aborde les défis politiques contemporains dans de multiples domaines.","collaborationTitle":"Collaboration en recherche","collaborationText":"L\'organisation mène des activités de recherche collaboratives avec des institutions académiques."},"regions":{"title":"Régions","lead":"La recherche régionale est organisée pour soutenir l\'analyse comparative et la pertinence politique.","sectionTitle":"Couverture régionale","r1Title":"Afrique","r1Desc":"Systèmes de gouvernance, environnements réglementaires et politique économique.","r2Title":"Asie-Pacifique","r2Desc":"Cadres institutionnels, politique économique et dynamiques réglementaires.","r3Title":"Europe","r3Desc":"Gouvernance réglementaire, équilibre institutionnel et coordination économique.","r4Title":"Moyen-Orient et Afrique du Nord","r4Desc":"Réforme institutionnelle, environnements réglementaires et politique économique au MENA.","r5Title":"Amériques","r5Desc":"Politique économique, systèmes réglementaires et capacité institutionnelle.","r6Title":"Russie et Eurasie","r6Desc":"Systèmes institutionnels, cadres réglementaires et politique économique."},"impact":{"title":"Mesure et impact","lead":"Recherche sur les méthodologies d\'évaluation et les cadres d\'évaluation d\'impact.","frameworkTitle":"Cadre de recherche d\'évaluation","frameworkText":"La mesure systématique et l\'évaluation d\'impact sont fondamentales pour comprendre l\'efficacité des interventions politiques.","methodsTitle":"Méthodes","m1Title":"Évaluation d\'impact","m1Desc":"Évaluation complète des impacts des politiques et des programmes.","m2Title":"Mesure de la performance","m2Desc":"Développement et mise en œuvre de cadres de performance et d\'indicateurs.","m3Title":"Évaluation des processus","m3Desc":"Analyse des processus de mise en œuvre des programmes.","m4Title":"Évaluation économique","m4Desc":"Analyse coût-bénéfice des interventions politiques.","researchStandardsTitle":"Normes de recherche","researchStandardsText":"Toutes les recherches d\'évaluation respectent les normes académiques et professionnelles établies.","ring1Label":"Évaluation d\'impact","ring1Desc":"Approches expérimentales et quasi-expérimentales","ring2Label":"Mesure de performance","ring2Desc":"KPI, cadres, systèmes de suivi","ring3Label":"Évaluation de processus","ring3Desc":"Analyse de mise en œuvre","ring4Label":"Évaluation économique","ring4Desc":"Analyse coût-bénéfice"},"media":{"title":"Médias et communications","lead":"Recherche et analyse sur les stratégies de communication et les mécanismes d\'engagement public.","approachTitle":"Approche communicationnelle","approachText":"Nous diffusons nos résultats de recherche via divers canaux de communication.","productsTitle":"Produits de connaissance","p1Title":"Publications","p1Desc":"Publications académiques, rapports de recherche et résultats analytiques.","p2Title":"Briefings","p2Desc":"Briefings analytiques fournissant des résumés concis des résultats de recherche.","p3Title":"Productions de connaissances","p3Desc":"Une collection organisée de résultats analytiques et de résumés de recherche.","latestTitle":"Dernières productions"},"about":{"title":"Forum des affaires du Pakistan®","subtitle":"PLATEFORME DE POLITIQUE STRATÉGIQUE ET DE RECHERCHE","intro":"Plateforme indépendante de politique stratégique et de recherche engagée dans l\'analyse de la gouvernance et des systèmes économiques.","tabHistory":"Histoire","tabMessages":"Messages","tabValues":"Nos valeurs fondamentales","tabTeam":"Notre équipe","tabTeamPak":"Équipe Pakistan","tabAdvisors":"Conseil consultatif","historyTitle":"Notre histoire","historyIntro":"Le Forum des affaires du Pakistan® a été créé comme une institution analytique structurée.","formationTitle":"Formation et développement"},"strategicAdvisory":{"title":"Conseil stratégique","lead":"Analyse structurée et fondée sur la recherche pour soutenir la clarté politique et la préparation institutionnelle.","tabOverview":"Aperçu","tabOpinion":"Formation d\'opinion","tabVigilance":"Vigilance","tab5gw":"Guerre de 5e génération","purposeTitle":"Objectif","purposeText":"Le Conseil stratégique fournit une analyse structurée et fondée sur la recherche.","scopeTitle":"Champ d\'action","scope1":"Analyse des politiques et de la réglementation","scope2":"Stratégie économique et institutionnelle","scope3":"Intelligence stratégique et évaluation des scénarios","scope4":"Résultats consultatifs incluant briefings et notes analytiques","relevanceTitle":"Pertinence politique","relevanceText":"La fonction contribue au discours politique par une analyse neutre et orientée par la recherche.","outcomesTitle":"Résultats","outcome1":"Amélioration de la compréhension des politiques","outcome2":"Préparation stratégique","outcome3":"Perspectives fondées sur des données","outcome4":"Clarté institutionnelle","opinionTitle":"Processus de formation d\'opinion","opinionText":"Nous avons le potentiel de changer fondamentalement les narratifs existants.","vigilanceTitle":"Stratégie de vigilance","vigilanceText":"Vigilance 24h/24 sur tous les segments d\'audience — chaque conversation reçoit une réponse.","fgwTitle":"Guerre de cinquième génération","fgwText":"La guerre de cinquième génération est une question d\'idées.","tabAmplification":"Amplification et jeux"},"gallery":{"title":"Galerie","lead":"Documentation visuelle des activités du Forum d\'affaires du Pakistan®.","aboutTitle":"À propos de la galerie","aboutText":"La galerie présente une documentation visuelle des activités et événements du Forum.","aboutText2":"Tous les matériaux visuels sont conservés à des fins de documentation institutionnelle.","eventsTitle":"Événements et séminaires internationaux","usageTitle":"Droits d\'utilisation","usageText":"Toutes les images sont la propriété du Forum d\'affaires du Pakistan®.","contributionsTitle":"Contributions","contributionsText":"Les organisations souhaitant contribuer peuvent contacter la fonction administrative."}}');

/***/ }),

/***/ 817:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"nav":{"about":"ہمارے بارے میں","home":"ہوم","strategicAdvisory":"اسٹریٹجک مشاورت","research":"تحقیق","practiceAreas":"مشق کے شعبے","impact":"اثرات","media":"میڈیا","regions":"علاقے","gallery":"گیلری","partners":"شراکت دار","events":"تقریبات","workWithUs":"ہمارے ساتھ کام کریں","becomeAMember":"رکن بنیں","contact":"رابطہ","brand":"پاکستان بزنس فورم","brandSubtitle":"اسٹریٹجک پالیسی اور تحقیقی پلیٹ فارم","openMenu":"مینو کھولیں","closeMenu":"مینو بند کریں","search":"تلاش کریں","latest":"تازہ ترین","language":"زبان"},"footer":{"brandDesc":"2016 سے شواہد پر مبنی پالیسی، ریگولیٹری اور اقتصادی تحقیق تیار کرنے والا آزاد تجزیاتی پلیٹ فارم۔","practiceAreas":"مشق کے شعبے","publicAffairs":"عوامی امور اور پالیسی","regulatoryMonitoring":"ریگولیٹری نگرانی","economicAffairs":"اقتصادی امور","mediaComms":"میڈیا اور مواصلات","crisisManagement":"بحران کا انتظام","strategicAdvisory":"اسٹریٹجک مشاورت","research":"تحقیق","researchOverview":"تحقیق کا جائزہ","publications":"اشاعتیں","knowledgeOutputs":"علمی نتائج","policyBriefings":"پالیسی بریفنگز","impact":"اثرات","regionalCoverage":"علاقائی کوریج","organisation":"تنظیم","aboutPbf":"پی بی ایف کے بارے میں","globalPartners":"عالمی شراکت دار","events":"تقریبات","gallery":"گیلری","membership":"رکنیت","workWithUs":"ہمارے ساتھ کام کریں","contact":"رابطہ","copyright":"© 2016–2026 پاکستان بزنس فورم®۔ تمام حقوق محفوظ ہیں۔ صرف معلوماتی اور علمی مقاصد کے لیے۔","privacy":"رازداری","terms":"شرائط","cookies":"کوکیز","accessibility":"رسائی"},"home":{"heroTitle":"شواہد پر مبنی پالیسی تجزیے کو فروغ دینا","heroLead":"پاکستان بزنس فورم® — اسٹریٹجک پالیسی اور تحقیقی فنکشن ایک آزاد اسٹریٹجک پالیسی اور تحقیقی پلیٹ فارم ہے جو گورننس، اقتصادی نظام، ریگولیٹری فریم ورک اور ادارہ جاتی ترقی پر تجزیاتی کام میں حصہ ڈالتا ہے۔","heroBody":"فورم عوامی اداروں، بین الاقوامی شراکت داروں اور علم پر مبنی اسٹیک ہولڈرز میں باخبر فیصلہ سازی کی حمایت کے لیے منظم تحقیق اور پالیسی تجزیہ کرتا ہے۔","purpose":"مقصد","purposeText1":"مؤثر پالیسی سازی کے لیے قابل اعتماد شواہد، ادارہ جاتی سیاق و سباق اور طویل مدتی نقطہ نظر کی ضرورت ہے۔ پاکستان بزنس فورم اس لیے موجود ہے کہ ایسی تحقیق تیار کرے جو طریقاتی طور پر درست، تجزیاتی طور پر مضبوط اور عصری گورننس چیلنجوں سے متعلق ہو۔","purposeText2":"فورم سیاسی وابستگی، وکالت کے ایجنڈوں اور تجارتی مفادات سے آزادانہ طور پر کام کرتا ہے۔","areasOfWork":"کام کے شعبے","work01Title":"عوامی پالیسی اور گورننس","work01Desc":"پالیسی ڈیزائن، ادارہ جاتی صلاحیت اور انتظامی نظام کا تجزیہ۔","work02Title":"اقتصادی اور ترقیاتی پالیسی","work02Desc":"میکرو اکنامک فریم ورک، سیکٹورل کارکردگی اور ترقیاتی منصوبہ بندی پر تحقیق۔","work03Title":"ریگولیٹری اور قانونی فریم ورک","work03Desc":"ریگولیٹری ماحول، تعمیل نظام اور ادارہ جاتی تاثیر کا جائزہ۔","work04Title":"ادارہ جاتی کارکردگی اور اصلاح","work04Desc":"عوامی شعبے کے ڈھانچوں، خدمات کی فراہمی اور اصلاحاتی اقدامات کی تشخیص۔","work05Title":"علاقائی اور بین الاقوامی امور","work05Desc":"علاقائی حرکیات، عالمی گورننس اور سرحد پار پالیسی معاملات پر تجزیاتی کام۔","explore":"دریافت کریں","latestTitle":"پی بی ایف® سے تازہ ترین","pub1Tag":"پالیسی بریف","pub1Title":"ریگولیٹری اصلاحات ایجنڈا: پاکستان کی ادارہ جاتی تیاری","pub1Meta":"مارچ 2026 · عوامی امور اور پالیسی","pub2Tag":"اسٹریٹجک بریف","pub2Title":"پانچویں نسل کی جنگ: اداروں کو معلوماتی دور کے لیے تیار کرنا","pub2Meta":"مارچ 2026 · اسٹریٹجک مشاورت","pub3Tag":"تحقیقی نوٹ","pub3Title":"ترقی پذیر معیشتوں میں دوطرفہ اقتصادی تعلقات اور روزگار کی تخلیق","pub3Meta":"فروری 2026 · اقتصادی امور","viewAll":"سب دیکھیں","viewAllTitle":"اشاعتیں اور علمی نتائج","browseLibrary":"لائبریری دیکھیں ←","read":"پڑھیں ←","analyticalApproach":"تجزیاتی نقطہ نظر","analyticalText1":"پاکستان بزنس فورم کی تحقیق قائم شدہ پالیسی تجزیہ طریقہ کار استعمال کرتی ہے جس میں تجرباتی تشخیص، تقابلی تجزیہ اور کیفیاتی ادارہ جاتی جائزہ شامل ہے۔ نتائج مواقف کی وکالت کے بجائے سمجھ بوجھ کو مطلع کرنے کے لیے تیار کیے جاتے ہیں۔","analyticalText2":"فورم لابنگ، سیاسی مہم یا مفاداتی گروہوں کی نمائندگی میں حصہ نہیں لیتا۔","engagement":"روابط","engagementText":"پاکستان بزنس فورم® — اسٹریٹجک پالیسی اور تحقیقی فنکشن حکومتی اداروں، بین الاقوامی تنظیموں، علمی اداروں اور پالیسی پیشہ ور افراد کے ساتھ معروضی تجزیہ اور منظم بصیرت کی تلاش میں مشغول ہوتا ہے۔","closingLine":"باخبر پالیسی کی ترقی کی حمایت میں آزادانہ تجزیہ۔","statFounded":"قائم","statResearch":"تحقیقی نتائج","statRegions":"احاطہ شدہ علاقے","statPracticeAreas":"مشق کے شعبے"},"common":{"readMore":"مزید پڑھیں","learnMore":"مزید جانیں","contactUs":"ہم سے رابطہ کریں","backToTop":"اوپر جائیں","loading":"لوڈ ہو رہا ہے...","trademark":"®","viewResearch":"تحقیق دیکھیں","viewRegion":"علاقہ دیکھیں","viewMethodology":"طریقہ کار دیکھیں","viewPublications":"اشاعتیں دیکھیں","viewBriefings":"بریفنگز دیکھیں"},"practiceAreas":{"title":"مشق کے شعبے","lead":"پاکستان بزنس فورم® کی تنظیمی سرگرمیاں پالیسی تحقیق، تجزیہ اور علمی تحقیق کے چھ شعبوں میں منظم ہیں۔ پاکستان بزنس فورم® - اسٹریٹجک پالیسی اور تحقیقی فنکشن ایک کراس کٹنگ تجزیاتی صلاحیت ہے جو ان مشق کے شعبوں کو شواہد پر مبنی طریقوں سے سپورٹ کرتی ہے۔","sectionTitle":"مشق کے شعبے","pa1Title":"پی بی ایف® – اسٹریٹجک پالیسی اور تحقیقی فنکشن","pa1Desc":"شواہد پر مبنی سمجھ بوجھ اور ادارہ جاتی تیاری کی حمایت کرنے والی ادارہ جاتی پالیسی تجزیہ اور اسٹریٹجک اسٹڈیز کی صلاحیت۔","pa2Title":"عوامی امور اور پالیسی مشاورت","pa2Desc":"پالیسی ترقی کے عمل، قانون سازی کے فریم ورک اور عوامی امور کے انتظام کو کنٹرول کرنے والے ادارہ جاتی میکانزم کا تجزیہ۔","pa3Title":"ریگولیٹری نگرانی اور اسٹریٹجک انٹیلیجنس","pa3Desc":"گورننس ڈھانچوں کے اندر ریگولیٹری پیش رفت، پالیسی ارتقاء اور ادارہ جاتی حرکیات کا منظم تجزیہ۔","pa4Title":"مطالعات اور تحقیق","pa4Desc":"سخت تجزیاتی فریم ورک کے ذریعے پالیسی مسائل، اقتصادی مظاہر اور گورننس چیلنجوں کا جائزہ لینے والی آزادانہ علمی تحقیق۔","pa5Title":"اقتصادی امور","pa5Desc":"اقتصادی پالیسی تجزیہ، مالیاتی پالیسی تشخیص اور اقتصادی ترقی کے فریم ورک میں خصوصی تحقیق۔","pa6Title":"بحران کا انتظام","pa6Desc":"پالیسی سے متعلق ہنگامی صورتحال، ریگولیٹری چیلنجز اور ادارہ جاتی بحرانوں کے لیے منظم تشخیص کی ضرورت والی تجزیاتی مدد۔","pa7Title":"میڈیا اور اسٹریٹجک مواصلات","pa7Desc":"مواصلاتی حکمت عملیوں، پالیسی پیغام رسانی کے فریم ورک اور عوامی مشغولیت کے میکانزم پر تحقیق اور تجزیہ۔"},"research":{"title":"تحقیق اور بصیرت","lead":"سخت طریقہ کار کے نقطہ نظر کے ذریعے عصری پالیسی چیلنجوں کا جائزہ لینے والی آزادانہ علمی تحقیق۔","methodTitle":"تحقیقی طریقہ کار","methodText":"ہماری تحقیقی سرگرمیاں قائم شدہ علمی معیارات اور طریقہ کار کے پروٹوکول کے مطابق چلتی ہیں۔","themesTitle":"تحقیقی موضوعات","theme1Title":"گورننس اور ادارے","theme1Desc":"ادارہ جاتی ڈیزائن، گورننس فریم ورک اور انتظامی صلاحیت کا تجزیہ۔","theme2Title":"اقتصادی پالیسی","theme2Desc":"مالیاتی پالیسی، مانیٹری پالیسی اور اقتصادی ترقی کی حکمت عملیوں پر تحقیق۔","theme3Title":"میڈیا تعلقات کی تحقیق","theme3Desc":"میڈیا مشغولیت کے میکانزم پر تحقیق۔","theme4Title":"پالیسی ڈیزائن اور تشخیص","theme4Desc":"پالیسی ڈیزائن کے عمل اور تشخیص کے میکانزم کا جائزہ لینے والی تحقیق۔","pubTitle":"اشاعتیں","pubText":"ہماری تحقیقی نتائج متعدد چینلز کے ذریعے پھیلائی جاتی ہیں جن میں تحقیقی رپورٹیں، پالیسی بریفس اور پیر ریویو شدہ علمی اشاعتیں شامل ہیں۔","portfolioTitle":"تحقیقی پورپفولیو","portfolioText":"ہمارا تحقیقی پورپفولیو متعدد شعبوں میں جدید سیاستی چیلنجز کا سامنا کرتا ہے۔","collaborationTitle":"تحقیقی تعاون","collaborationText":"ادارہ اکیڈمیک اداروں کے ساتھ مشترکہ تحقیقی سرگرمیوں میں مصروف ہے۔"},"regions":{"title":"علاقے","lead":"علاقائی تحقیق تقابلی تجزیہ، ادارہ جاتی سمجھ بوجھ اور متنوع گورننس نظاموں میں پالیسی کی مطابقت کی حمایت کے لیے منظم ہے۔","sectionTitle":"علاقائی کوریج","r1Title":"افریقہ","r1Desc":"علاقائی اور قومی سیاق و سباق میں گورننس نظام، ریگولیٹری ماحول اور اقتصادی پالیسی۔","r2Title":"ایشیا پیسیفک","r2Desc":"ایشیا پیسیفک معیشتوں میں ادارہ جاتی فریم ورک، اقتصادی پالیسی اور ریگولیٹری حرکیات۔","r3Title":"یورپ","r3Desc":"یورپ بھر میں ریگولیٹری گورننس، ادارہ جاتی توازن اور اقتصادی پالیسی کوآرڈینیشن۔","r4Title":"مشرق وسطیٰ اور شمالی افریقہ","r4Desc":"مینا میں ادارہ جاتی اصلاح، ریگولیٹری ماحول اور اقتصادی پالیسی۔","r5Title":"امریکہ","r5Desc":"امریکہ بھر میں اقتصادی پالیسی، ریگولیٹری نظام اور ادارہ جاتی صلاحیت۔","r6Title":"روس اور یوریشیا","r6Desc":"یوریشیا میں ادارہ جاتی نظام، ریگولیٹری فریم ورک اور اقتصادی پالیسی۔"},"impact":{"title":"پیمائش اور اثرات","lead":"پالیسی مداخلتوں، پروگرام کی تاثیر اور ادارہ جاتی کارکردگی کے لیے تشخیص کے طریقہ کار، اثرات کی تشخیص کے فریم ورک پر تحقیق۔","frameworkTitle":"تشخیص تحقیق فریم ورک","frameworkText":"منظم پیمائش اور اثرات کی تشخیص پالیسی مداخلتوں اور پروگرام نفاذ کی تاثیر کو سمجھنے کے لیے بنیادی ہے۔","methodsTitle":"طریقے","m1Title":"اثرات کی تشخیص","m1Desc":"پالیسی اور پروگرام اثرات کی جامع تشخیص۔","m2Title":"کارکردگی کی پیمائش","m2Desc":"کارکردگی کے فریم ورک، اشاریوں اور ڈیٹا جمع کرنے کے نظام کی تیاری اور نفاذ۔","m3Title":"عمل کی تشخیص","m3Desc":"پروگرام نفاذ کے عمل کا تجزیہ۔","m4Title":"اقتصادی تشخیص","m4Desc":"پالیسی مداخلتوں اور پروگراموں کی لاگت کی تاثیر اور فائدے کا تجزیہ۔","researchStandardsTitle":"تحقیقی معیارات","researchStandardsText":"تمام جائزاتی تحقیق قائم معیاروں کی پابندی کرتی ہے۔","ring1Label":"اثر جائزہ","ring1Desc":"تجرباتی ڈیزائن","ring2Label":"کارکردگی پیمائش","ring2Desc":"معیارات اور نگرانی","ring3Label":"عملی جائزہ","ring3Desc":"نفاذ تجزیہ","ring4Label":"معاشی جائزہ","ring4Desc":"لاگت فائدہ تجزیہ"},"media":{"title":"میڈیا اور مواصلات","lead":"پالیسی اور گورننس کے سیاق و سباق میں مواصلاتی حکمت عملیوں، پالیسی پیغام رسانی کے فریم ورک پر تحقیق اور تجزیہ۔","approachTitle":"مواصلاتی نقطہ نظر","approachText":"ہماری تنظیم متنوع مواصلاتی چینلز کے ذریعے تحقیقی نتائج پھیلاتی ہے۔","productsTitle":"علمی مصنوعات","p1Title":"اشاعتیں","p1Desc":"گورننس، اقتصادی پالیسی پر علمی اشاعتیں، تحقیقی رپورٹیں اور تجزیاتی نتائج۔","p2Title":"بریفنگز","p2Desc":"پالیسی سامعین کے لیے تحقیقی نتائج کا جامع خلاصہ فراہم کرنے والی تجزیاتی بریفنگز۔","p3Title":"علمی نتائج","p3Desc":"پیچیدہ پالیسی تحقیق کو متنوع سامعین کے لیے قابل رسائی بنانے کے لیے تجزیاتی نتائج کا مجموعہ۔","latestTitle":"تازہ ترین نتائج"},"about":{"title":"پاکستان بزنس فورم®","subtitle":"اسٹریٹجک پالیسی اور تحقیقی پلیٹ فارم","intro":"قومی اور بین الاقوامی سطح پر گورننس، اقتصادی نظام، ریگولیٹری فریم ورک اور ادارہ جاتی ترقی کے تجزیہ میں مصروف ایک آزاد اسٹریٹجک پالیسی اور تحقیقی پلیٹ فارم۔","tabHistory":"تاریخ","tabMessages":"پیغامات","tabValues":"ہماری بنیادی اقدار","tabTeam":"ہماری ٹیم","tabTeamPak":"ٹیم پاکستان","tabAdvisors":"بورڈ آف ایڈوائزرز","historyTitle":"ہماری تاریخ","historyIntro":"پاکستان بزنس فورم® — اسٹریٹجک پالیسی اور تحقیقی فنکشن کو واضح حدود اور آزادی کے عزم کے ساتھ ایک منظم تجزیاتی ادارے کے طور پر قائم کیا گیا تھا۔","formationTitle":"تشکیل اور ترقی"},"strategicAdvisory":{"title":"اسٹریٹجک مشاورت","lead":"منظم، تحقیق پر مبنی تجزیہ جو پالیسی وضاحت، ادارہ جاتی تیاری اور طویل مدتی اقتصادی سمجھ بوجھ کی حمایت کرتا ہے۔","tabOverview":"جائزہ","tabOpinion":"رائے سازی","tabVigilance":"چوکسی","tab5gw":"پانچویں نسل کی جنگ","purposeTitle":"مقصد","purposeText":"اسٹریٹجک مشاورت منظم، تحقیق پر مبنی تجزیہ فراہم کرتی ہے۔","scopeTitle":"کام کی گنجائش","scope1":"پالیسی اور ریگولیٹری تجزیہ","scope2":"اقتصادی اور ادارہ جاتی حکمت عملی","scope3":"اسٹریٹجک انٹیلیجنس اور منظرنامہ تشخیص","scope4":"مشاورتی نتائج بشمول بریفس، تشخیصات اور تجزیاتی نوٹس","relevanceTitle":"پالیسی مطابقت","relevanceText":"یہ فنکشن غیر جانبدار، تحقیق سے چلنے والے تجزیے کے ذریعے پالیسی گفتگو میں حصہ ڈالتا ہے۔","outcomesTitle":"نتائج","outcome1":"بہتر پالیسی سمجھ","outcome2":"اسٹریٹجک تیاری","outcome3":"شواہد پر مبنی بصیرت","outcome4":"ادارہ جاتی وضاحت","opinionTitle":"رائے سازی کا عمل","opinionText":"ہمارے پاس موجودہ بیانیوں پر نئی روشنی ڈالنے کی صلاحیت ہے۔","vigilanceTitle":"چوکسی کی حکمت عملی","vigilanceText":"تمام سامعین کے حلقوں میں 24/7 چوکسی — ہر گفتگو کو جواب ملتا ہے۔","fgwTitle":"پانچویں نسل کی جنگ","fgwText":"پانچویں نسل کی جنگ خیالات کے بارے میں ہے — ہم تنازعات کو کس طرح سمجھتے ہیں اور اداروں کو تیار کرتے ہیں۔","tabAmplification":"وسعت اور گیمز"},"gallery":{"title":"گیلری","lead":"پاکستان بیزنس فورم® کی سرگرمیوں کی بصری دستاویزی۔","aboutTitle":"گیلری کے بارے میں","aboutText":"گیلری پاکستان بیزنس فورم® کی سرگرمیوں، واقعات کی بصری دستاویزی۔","aboutText2":"تمام تصاویر ادارہ جاتی دستاویزی کے لیے محفوظ ہیں۔","eventsTitle":"بین الاقوامی تقاریب اور سیمینار","usageTitle":"استعمال کے حقوق","usageText":"گیلری کی تمام تصاویر پاکستان بیزنس فورم® کی ملکیت ہیں۔","contributionsTitle":"شرکت","contributionsText":"تصاویر فراہم کرنے کے خواہشمند ادارے سے رابطہ کر سکتے ہیں۔"}}');

/***/ }),

/***/ 874:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"nav":{"about":"关于我们","home":"首页","strategicAdvisory":"战略咨询","research":"研究","practiceAreas":"实践领域","impact":"影响力","media":"媒体","regions":"地区","gallery":"图库","partners":"合作伙伴","events":"活动","workWithUs":"与我们合作","becomeAMember":"成为会员","contact":"联系我们","brand":"巴基斯坦商业论坛","brandSubtitle":"战略政策与研究平台","openMenu":"打开菜单","closeMenu":"关闭菜单","search":"搜索","latest":"最新","language":"语言"},"footer":{"brandDesc":"自2016年以来，独立分析平台持续产出基于证据的政策、监管和经济研究成果。","practiceAreas":"实践领域","publicAffairs":"公共事务与政策","regulatoryMonitoring":"监管监察","economicAffairs":"经济事务","mediaComms":"媒体与传播","crisisManagement":"危机管理","strategicAdvisory":"战略咨询","research":"研究","researchOverview":"研究概述","publications":"出版物","knowledgeOutputs":"知识成果","policyBriefings":"政策简报","impact":"影响力","regionalCoverage":"区域覆盖","organisation":"组织","aboutPbf":"关于PBF","globalPartners":"全球合作伙伴","events":"活动","gallery":"图库","membership":"会员资格","workWithUs":"与我们合作","contact":"联系我们","copyright":"© 2016–2026 巴基斯坦商业论坛®。保留所有权利。仅供信息和学术目的。","privacy":"隐私","terms":"条款","cookies":"Cookie设置","accessibility":"无障碍访问"},"home":{"heroTitle":"推进循证政策分析","heroLead":"巴基斯坦商业论坛® — 战略政策与研究职能是一个独立的战略政策和研究平台，致力于在治理、经济体系、监管框架和机构发展领域开展分析工作。","heroBody":"论坛开展有组织的研究和政策分析，以支持公共机构、国际合作伙伴和基于知识的利益相关方做出知情决策。","purpose":"宗旨","purposeText1":"有效的政策制定需要可靠的证据、制度背景和长远视角。巴基斯坦商业论坛的存在，就是通过产出在方法论上严谨、分析上精确、与当代治理挑战相关的研究，来增强政策理解。","purposeText2":"论坛独立于政治派别、倡导议程和商业利益之外运作。","areasOfWork":"工作领域","work01Title":"公共政策与治理","work01Desc":"政策设计、机构能力和行政体系分析。","work02Title":"经济与发展政策","work02Desc":"宏观经济框架、行业绩效和发展规划研究。","work03Title":"监管与法律框架","work03Desc":"监管环境、合规体系和机构效能评估。","work04Title":"机构绩效与改革","work04Desc":"公共部门结构、服务交付和改革举措评估。","work05Title":"区域与国际事务","work05Desc":"区域动态、全球治理和跨境政策问题分析工作。","explore":"探索","latestTitle":"PBF®最新动态","pub1Tag":"政策简报","pub1Title":"监管改革议程：巴基斯坦的机构准备情况","pub1Meta":"2026年3月 · 公共事务与政策","pub2Tag":"战略简报","pub2Title":"第五代战争：为信息时代准备机构","pub2Meta":"2026年3月 · 战略咨询","pub3Tag":"研究笔记","pub3Title":"发展中经济体的双边经济关系与就业创造","pub3Meta":"2026年2月 · 经济事务","viewAll":"查看全部","viewAllTitle":"出版物与知识成果","browseLibrary":"浏览文库 →","read":"阅读 →","analyticalApproach":"分析方法","analyticalText1":"论坛的研究采用成熟的政策分析方法，包括实证评估、比较分析和定性机构审查。研究成果旨在增进理解，而非倡导立场。","analyticalText2":"论坛不参与游说、政治竞选或利益集团代表活动。","engagement":"合作","engagementText":"巴基斯坦商业论坛®与寻求客观分析和结构性洞察的政府机构、国际组织、学术机构和政策专业人士开展合作，所有合作均在明确定义的分析和道德边界内进行。","closingLine":"支持知情政策发展的独立分析。","statFounded":"成立年份","statResearch":"研究成果","statRegions":"覆盖地区","statPracticeAreas":"实践领域"},"common":{"readMore":"阅读更多","learnMore":"了解更多","contactUs":"联系我们","backToTop":"返回顶部","loading":"加载中...","trademark":"®","viewResearch":"查看研究","viewRegion":"查看地区","viewMethodology":"查看方法论","viewPublications":"查看出版物","viewBriefings":"查看简报"},"practiceAreas":{"title":"实践领域","lead":"巴基斯坦商业论坛®的组织活动围绕政策研究、分析和学术探究的六个领域展开。巴基斯坦商业论坛®——战略政策与研究职能是一种跨领域的分析能力，通过循证方法支持这些实践领域。","sectionTitle":"实践领域","pa1Title":"PBF® – 战略政策与研究职能","pa1Desc":"支持循证理解和机构准备的机构政策分析和战略研究能力。","pa2Title":"公共事务与政策咨询","pa2Desc":"分析政策制定过程、立法框架和管理公共事务的机构机制。","pa3Title":"监管监察与战略情报","pa3Desc":"对治理结构中监管发展、政策演变和机构动态的系统分析。","pa4Title":"研究与学术","pa4Desc":"通过严格的分析框架检验政策问题、经济现象和治理挑战的独立学术研究。","pa5Title":"经济事务","pa5Desc":"经济政策分析、财政政策评估和经济发展框架的专项研究。","pa6Title":"危机管理","pa6Desc":"为需要系统评估的政策相关突发事件、监管挑战和机构危机提供分析支持。","pa7Title":"媒体与战略传播","pa7Desc":"关于传播策略、政策信息框架和公众参与机制的研究与分析。"},"research":{"title":"研究与洞见","lead":"通过严格的方法论研究当代政策挑战的独立学术研究。","methodTitle":"研究方法","methodText":"我们的研究活动遵循既定的学术标准和方法论规程。","themesTitle":"研究主题","theme1Title":"治理与机构","theme1Desc":"分析机构设计、治理框架和行政能力。","theme2Title":"经济政策","theme2Desc":"研究财政政策、货币政策和经济发展战略。","theme3Title":"媒体关系研究","theme3Desc":"研究媒体参与机制。","theme4Title":"政策设计与评估","theme4Desc":"研究政策设计过程和评估机制。","pubTitle":"出版物","pubText":"我们的研究成果通过多种渠道传播，包括研究报告、政策简报和同行评审学术出版物。","portfolioTitle":"研究资料库","portfolioText":"我们的研究资料库涵盖多个领域的当代政策挑战。","collaborationTitle":"研究合作","collaborationText":"我们与学术机构和国际机构开展合作研究。"},"regions":{"title":"地区","lead":"区域研究的组织旨在支持比较分析、机构理解以及不同治理和经济体系的政策相关性。","sectionTitle":"区域覆盖","r1Title":"非洲","r1Desc":"区域和国家背景下的治理体系、监管环境和经济政策。","r2Title":"亚太地区","r2Desc":"亚太经济体的机构框架、经济政策和监管动态。","r3Title":"欧洲","r3Desc":"欧洲的监管治理、机构平衡和经济政策协调。","r4Title":"中东和北非","r4Desc":"中东和北非地区的机构改革、监管环境和经济政策。","r5Title":"美洲","r5Desc":"美洲的经济政策、监管体系和机构能力。","r6Title":"俄罗斯和欧亚地区","r6Desc":"欧亚地区的机构体系、监管框架和经济政策。"},"impact":{"title":"测量与影响","lead":"关于政策干预、项目有效性和机构绩效的评估方法论、影响评估框架和测量方法的研究。","frameworkTitle":"评估研究框架","frameworkText":"系统测量和影响评估是理解政策干预和项目实施有效性的基础。","methodsTitle":"方法","m1Title":"影响评估","m1Desc":"使用实验和准实验方法对政策和项目影响进行综合评估。","m2Title":"绩效测量","m2Desc":"制定和实施绩效框架、指标和数据收集系统。","m3Title":"过程评估","m3Desc":"分析项目实施过程，识别交付机制的优势和劣势。","m4Title":"经济评估","m4Desc":"对政策干预和项目进行成本效益分析。","researchStandardsTitle":"研究标准","researchStandardsText":"所有评估研究均遵循学术和专业标准，确保方法严谨性和分析客观性。","ring1Label":"影响评估","ring1Desc":"实验和准实验方法","ring2Label":"绩效测量","ring2Desc":"KPI、框架、监测系统","ring3Label":"过程评估","ring3Desc":"实施分析","ring4Label":"经济评估","ring4Desc":"成本效益分析"},"media":{"title":"媒体与传播","lead":"在政策和治理背景下，对传播策略、政策信息框架和公众参与机制的研究与分析。","approachTitle":"传播方式","approachText":"我们的组织通过多样化的传播渠道传播研究成果和分析产出。","productsTitle":"知识产品","p1Title":"出版物","p1Desc":"学术出版物、研究报告和分析产出，为治理、经济政策的学术和政策文献做出贡献。","p2Title":"简报","p2Desc":"分析简报，为政策受众提供研究成果、政策发展的简明摘要。","p3Title":"知识成果","p3Desc":"经过筛选的分析产出、数据可视化和研究摘要集合。","latestTitle":"最新成果"},"about":{"title":"巴基斯坦商业论坛®","subtitle":"战略政策与研究平台","intro":"独立的战略政策和研究平台，致力于在国家和国际层面分析治理、经济体系、监管框架和机构发展。","tabHistory":"历史","tabMessages":"消息","tabValues":"我们的核心价值观","tabTeam":"我们的团队","tabTeamPak":"巴基斯坦团队","tabAdvisors":"顾问委员会","historyTitle":"我们的历史","historyIntro":"巴基斯坦商业论坛®——战略政策与研究职能作为一个具有明确边界和独立承诺的结构性分析机构而成立。","formationTitle":"成立与发展"},"strategicAdvisory":{"title":"战略咨询","lead":"有组织的、基于研究的分析，支持政策清晰度、机构准备和长期经济理解。","tabOverview":"概述","tabOpinion":"舆论塑造","tabVigilance":"警戒","tab5gw":"第五代战争","purposeTitle":"目的","purposeText":"战略咨询提供有组织的、基于研究的分析，支持政策清晰度和机构准备。","scopeTitle":"工作范围","scope1":"政策和监管分析","scope2":"经济和机构战略","scope3":"战略情报和情景评估","scope4":"咨询产出，包括简报、评估和分析笔记","relevanceTitle":"政策相关性","relevanceText":"该职能通过中立的、研究驱动的分析为政策讨论做出贡献。","outcomesTitle":"成果","outcome1":"改善政策理解","outcome2":"战略准备","outcome3":"循证洞见","outcome4":"机构清晰度","opinionTitle":"舆论塑造过程","opinionText":"我们有能力对现有叙事进行根本性转变。","vigilanceTitle":"警戒策略","vigilanceText":"全天候对所有受众群体保持警戒——每次对话都会收到回应。","fgwTitle":"第五代战争","fgwText":"第五代战争关乎思想——我们如何构想冲突并准备机构来应对。","tabAmplification":"放大与游戏"},"gallery":{"title":"图库","lead":"巴基斯坦商业论坛®活动的视觉记录。","aboutTitle":"关于图库","aboutText":"图库展示巴基斯坦商业论坛®活动、事件和机构里程碑的视觉记录。","aboutText2":"所有照片均用于机构记录目的。","eventsTitle":"国际活动与研讨会","usageTitle":"使用权限","usageText":"所有图库图片均为巴基斯坦商业论坛®财产。","contributionsTitle":"投稿","contributionsText":"希望提供图片的机构可联系行政部门。"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(419));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES).middleware_middleware = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=middleware.js.map