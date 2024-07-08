export default () => ({
  "import-export-entries": {
    enabled: true,
    config: {},
  },
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  "duplicate-button": true,
});
