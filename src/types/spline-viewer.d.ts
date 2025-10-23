declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        loading?: string;
        'loading-anim'?: string;
        'loading-anim-type'?: string;
        'background-color'?: string;
        'hide-ui'?: string;
        'autoplay'?: string;
        'scroll-smooth'?: string;
      };
    }
  }
}

export {};
