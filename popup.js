document.getElementById('request-location').addEventListener('click', () => {
    // Check if geolocation is available
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Successfully got the location
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                document.getElementById('location-info').textContent = `Latitude: ${lat}, Longitude: ${lon}`;
            },
            (error) => {
                // Handle error
                console.error('Error getting location:', error);
                document.getElementById('location-info').textContent = 'Unable to retrieve location.';
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
        document.getElementById('location-info').textContent = 'Geolocation is not supported by this browser.';
    }
});
