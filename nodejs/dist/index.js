"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_media_server_1 = __importDefault(require("node-media-server"));
var nms = new node_media_server_1.default({
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 10,
        ping_timeout: 60,
    },
    http: {
        port: 8000,
        allow_origin: "*",
        mediaroot: "./media",
    },
    trans: {
        ffmpeg: "./ffmpeg",
        tasks: [
            {
                app: "live",
                hls: true,
                hlsFlags: "[hls_time=2:hls_list_size=3:hls_flags=delete_segments]",
            },
        ],
    }
});
nms.run();
