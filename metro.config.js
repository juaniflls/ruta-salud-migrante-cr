const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Permite que Metro trate los archivos .doc como assets de la aplicación.
if (!config.resolver.assetExts.includes("doc")) {
  config.resolver.assetExts.push("doc");
}

module.exports = config;
