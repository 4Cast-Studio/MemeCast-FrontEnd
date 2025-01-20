export default {
  extends: [
    'stylelint-config-standard-scss',
  ],
  rules: {
    'alpha-value-notation': 'number',
    'color-hex-length': 'long',
    'declaration-property-value-no-unknown': true,
    'selector-class-pattern': [/^[a-z0-9_]+$/, { resolveNestedSelectors: true }],
  },
};
