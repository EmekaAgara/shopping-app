// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    resolver: {
      assetExts: [
        ...assetExts,
        "glb",
        "gltf",
        "mtl",
        "obj",
        "png",
        "jpg",
        "mp4",
        "ttf",
      ],
      sourceExts: [...sourceExts, "js", "jsx", "json", "ts", "tsx", "cjs"],
    },

    transformer: {
      assetPlugins: ["expo-asset/tools/hashAssetFiles"],
    },
  };
})();
