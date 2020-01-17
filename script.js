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
        {
            name: "TEST8",
            location: {
                lat: 46.056001,
                lng: 14.502019,

            }
        },
        {
            name: "TEST9",
            location: {
                lat: 46.056077,
                lng: 14.502192,

            }
        },
        {
            name: "TEST10",
            location: {
                lat: 46.055740,
                lng: 14.502447,

            }
        },
        {
            name: "TEST11",
            location: {
                lat: 46.055759,
                lng: 14.502470,

            }
        },
        {
            name: "TEST12",
            location: {
                lat: 46.055773,
                lng: 14.502484,

            }
        },
        {
            name: "TEST13",
            location: {
                lat: 46.055754,
                lng: 14.502493,

            }
        },
        {
            name: "TEST14",
            location: {
                lat: 46.055152,
                lng: 14.503557,

            }
        },
        {
            name: "kolosej",
            location: {
                lat: 46.065666,
                lng: 14.548416,

            }
        },
        {
            name: "gledališče",
            location: {
                lat: 46.065656,
                lng: 14.545677,

            }
        },
        {
            name: "trg mladih",
            location: {
                lat: 46.067153,
                lng: 14.543929,

            }
        },
        {
            name: "a1",
            location: {
                lat: 46.068262,
                lng: 14.541971,

            }
        },
        {
            name: "w/e",
            location: {
                lat: 46.066914,
                lng: 14.541926,

            }
        },
        {
            name: "tržnica",
            location: {
                lat: 46.064166,
                lng: 14.543557,

            }
        },
        {
            name: "emporium",
            location: {
                lat: 46.061828,
                lng: 14.545029,

            }
        },
        {
            name: "sara",
            location: {
                lat: 46.062071,
                lng: 14.544957,

            }
        },
        {
            name: "španska",
            location: {
                lat: 46.063054,
                lng: 14.545251,

            }
        },
        {
            name: "w/e2",
            location: {
                lat: 46.063461,
                lng: 14.548218,

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
        icon.setAttribute('src', 'https://image.flaticon.com/icons/svg/1042/1042263.svg');

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale', '10, 10');

        icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

        scene.appendChild(icon);
    });
}