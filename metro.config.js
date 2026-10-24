// Learn more about configuring Metro: https://docs.expo.dev/guides/customizing-metro/
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// expo-sqlite's web build is wa-sqlite compiled to WebAssembly, and its worker
// imports the `.wasm` binary directly. Metro does not treat `.wasm` as an asset
// by default, so without this the web bundle fails to resolve it. Native builds
// never touch this.
config.resolver.assetExts.push('wasm');

module.exports = config;
