let registration = null;

function register_service__worker() {
	if ("serviceWorker" in navigator) {
		window.navigator.serviceWorker
			.register("/service-worker.js", { scope: "/" })
			.then((res) => {
				registration = res;
				console.log("Service worker successfully registerd");
			})
			.catch((err) => {
				console.log("Service worker not registerd");
			});
	}
}

function unregister_service__worker() {
	navigator.serviceWorker
		.getRegistrations()
		.then((registrations) => {
			registrations.forEach((registration) => {
				registration.unregister();
				console.log("Service worker unregistered");
			});
		})
		.catch((err) => {
			console.log("could not register service worker");
		});
}

register_service__worker();
