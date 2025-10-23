// global.d.ts
declare module "*.css";
declare module "*.glb";
declare module "*.gltf";

// Declare the spline-viewer custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        loading?: 'lazy' | 'eager';
        'loading-anim'?: string;
        'loading-anim-type'?: 'spinner' | 'logo';
        autoplay?: string | boolean;
      };
    }
  }
}
