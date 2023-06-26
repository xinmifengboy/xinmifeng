"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.three = exports.renderer = exports.camera = exports.scene = exports.WebGLCompatibilityCheck = void 0;
const WebGL_js_1 = __importDefault(require("./WebGL.js"));
const three = __importStar(require("three"));
/**
 * @name WebGL兼容性检查
 * @param 方法调用 fn
 */
const WebGLCompatibilityCheck = (fn) => {
    if (WebGL_js_1.default.isWebGLAvailable()) {
        fn;
    }
    else {
        const warning = WebGL_js_1.default.getWebGLErrorMessage();
        document.getElementById('app').appendChild(warning);
    }
};
exports.WebGLCompatibilityCheck = WebGLCompatibilityCheck;
/**
 * @name 场景
 */
exports.scene = new three.Scene(); //  创建场景
/**
 * @name 相机
 * @param 视野角度 FOV 视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。
 * @param 长宽比（aspect ratio） 一个物体的宽除以它的高的值
 * @param 近截面（near）当物体某些部分比摄像机的远截面远或者比近截面近的时候，该这些部分将不会被渲染到场景中
 * @param 远截面（far）
 */
const camera = (FOV = 75, ar = window.innerWidth / window.innerHeight, near = 0.1, far = 1000) => {
    const red = new three.PerspectiveCamera(FOV, ar, near, far);
    return red;
};
exports.camera = camera;
/**
 * @name 渲染器
 */
exports.renderer = new three.WebGLRenderer();
exports.three = __importStar(require("three"));
