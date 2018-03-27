class ServiceWorkerService {
  constructor() {
    this.publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    this.swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  }

  register() {
    if (this.shouldRegister()) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register(this.swUrl)
          .catch(error => console.error('SW registration error:', error));
      });
    }
  }

  unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
      });
    }
  }

  shouldRegister() {
    return (
      process.env.NODE_ENV === 'production' &&
      'serviceWorker' in navigator &&
      this.publicUrl.origin === window.location.origin
    );
  }
}

export default new ServiceWorkerService();
