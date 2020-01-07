window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [

        {
            name: "TEST",
            location: {
                lat: 46.056648,
                lng: 14.500986,

            }
        },
        {
            name: "TEST 2",
            location: {
                lat: 46.056544,
                lng: 14.502188,

            }
        },
        {
            name: "TEST 3",
            location: {
                lat: 46.056739,
                lng: 14.501869,

            }
        },
        {
            name: "TEST 4",
            location: {
                lat: 46.056272,
                lng: 14.501944,

            }
        },
        {
            name: "TEST5",
            location: {
                lat: 46.057670,
                lng: 14.501333,

            }
        },
        {
            name: "TEST6",
            location: {
                lat: 46.057882,
                lng: 14.501987,

            }
        },
        {
            name: "TEST7",
            location: {
                lat: 46.057908,
                lng: 14.501611,

            }
        },
    ];
}
function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        // add place icon
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        icon.setAttribute('name', place.name);
        icon.setAttribute('src', '../assets/map-marker.png');

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale', '20, 20');

        icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

        scene.appendChild(icon);
    });
}