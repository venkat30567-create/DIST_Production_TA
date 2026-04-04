import './styles/main.css';
import { initApp } from './components/app';
import { registerServiceWorker } from './utils/pwa-utils';

// Register Service Worker
registerServiceWorker();

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// Handle app installation prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  // Show install button if available
  const installBtn = document.getElementById('install-btn');
  if (installBtn) {
    installBtn.style.display = 'block';
    installBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt = null;
      }
    });
  }
});

// Log when app is successfully installed
window.addEventListener('appinstalled', () => {
  console.log('PWA was installed successfully');
});
