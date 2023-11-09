self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1')
            .then(cache => {
                return cache.addAll([ // Add the return statement here
                    './',
                    './style.css',
                    './script.js'
                    './manifest.js'
                ]);
            })
            .then(() => {
                console.log('Assets cached');
            })
            .catch(err => console.log('Could not cache assets')) 
    )  
});
