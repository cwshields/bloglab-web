// Ambient declarations for plain (non-module) style side-effect imports.
// react-scripts only declares the CSS-Module variants (*.module.scss, etc.),
// so plain `import "./foo.scss"` imports need these to satisfy TypeScript.
declare module '*.scss';
declare module '*.sass';
declare module '*.css';
