export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((reg) => {
          console.log('Service Worker registered successfully:', reg);
          
          // Check for updates periodically
          setInterval(() => {
            reg.update();
          }, 60000); // Check every minute
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }
}

export function showNotification(title, options = {}) {
  if ('Notification' in window && Notification.permission === 'granted') {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification(title, {
        icon: '/icon-192.png',
        ...options,
      });
    });
  }
}

export function requestNotificationPermission() {
  if ('Notification' in window && navigator.serviceWorker) {
    if (Notification.permission === 'granted') {
      return Promise.resolve();
    }
    if (Notification.permission !== 'denied') {
      return Notification.requestPermission();
    }
  }
  return Promise.reject('Notifications not supported');
}
