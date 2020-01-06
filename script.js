window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite',
            location: {
                lat: 46.056648,
                lng: 14.500986,
            }
        },
    ];
}

/*
const PLACES = [
    {
        name: "TEST",
        location: {
            lat: 46.056648, // add here latitude if using static data
            lng: 14.500986, // add here longitude if using static data

        }
    },
    {
        name: "TEST 2",
        location: {
            lat: 46.056544, // add here latitude if using static data
            lng: 14.502188, // add here longitude if using static data

        }
    },
    {
        name: "TEST 3",
        location: {
            lat: 46.056739, // add here latitude if using static data
            lng: 14.501869, // add here longitude if using static data

        }
    },
    {
        name: "TEST 4",
        location: {
            lat: 46.056272, // add here latitude if using static data
            lng: 14.501944, // add here longitude if using static data

        }
    },
];
*/



function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}