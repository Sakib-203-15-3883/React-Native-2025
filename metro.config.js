const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// Get the default Metro config
const defaultConfig = getDefaultConfig(__dirname);

// Define your custom Metro configuration
const customConfig = {
  // Add any custom Metro settings here
};

// Merge the default and custom configurations
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap the final configuration with Reanimated's wrapper
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
