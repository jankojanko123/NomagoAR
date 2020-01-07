window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};
/*
var x = 1;

setInterval(nonstatic, 5000);
function nonstatic() {
    var testRoute = [
        {lat: 46.05634, lon: 14.50158},
        {lat: 46.05625, lon: 14.50167},
        {lat: 46.05617, lon: 14.50177},
        {lat: 46.05611, lon: 14.50186},
        {lat: 46.05601, lon: 14.50198},
        {lat: 46.05594, lon: 14.50209},
        {lat: 46.05585, lon: 14.50222},
        {lat: 46.05578, lon: 14.50232},
        {lat: 46.05570, lon: 14.50245},
        {lat: 46.05565, lon: 14.50253},
    ];

    let scene = document.querySelector('a-scene');
    let latitude = testRoute[x].lat;
    let longitude = testRoute[x].lng;

    // add place icon
    const icon = document.createElement('a-image');
    icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    icon.setAttribute('name', 'test');
    icon.setAttribute('src', 'https://image.flaticon.com/icons/svg/526/526763.svg');

    icon.setAttribute('scale', '10, 10');

    icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

    scene.appendChild(icon);

    x++;
}
*/
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
        icon.setAttribute('src', 'https://image.flaticon.com/icons/svg/526/526763.svg');

        icon.setAttribute('scale', '10, 10');

        icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

        scene.appendChild(icon);
    });
}