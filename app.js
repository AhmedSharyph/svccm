if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed:', error);
      });
  });
}

document.getElementById('tempForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted (demo only)');
  this.reset();
});