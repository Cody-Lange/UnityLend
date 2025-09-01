declare global {
  interface Window {
    Webflow: {
      require: (module: string) => any;
      ready: () => void;
      destroy: () => void;
      env: () => string;
    };
    jQuery: any;
    $: any;
  }
}

export {};
