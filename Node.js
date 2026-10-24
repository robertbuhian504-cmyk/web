// ============================================================
// HOOP X — court finder UI
// ============================================================

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function courtPic(color1, color2, label) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340">
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="${color2}"/>
                    <stop offset="1" stop-color="${color1}"/>
                </linearGradient>
            </defs>
            <rect width="600" height="340" fill="url(#g)"/>
            <rect x="40" y="40" width="520" height="260" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
            <rect x="230" y="40" width="140" height="180" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
            <circle cx="300" cy="220" r="55" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
            <rect x="270" y="40" width="60" height="90" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
            <circle cx="300" cy="110" r="26" fill="#f5a623" opacity="0.9"/>
            <path d="M274 110 h52 M300 84 v52 M281 92 q19 18 0 36 M319 92 q-19 18 0 36" stroke="${color1}" stroke-width="2" fill="none"/>
            <text x="300" y="305" font-family="Arial, sans-serif" font-size="30" font-weight="bold" fill="rgba(255,255,255,0.85)" text-anchor="middle" letter-spacing="4">${label}</text>
        </svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const COURTS = [
    {
        name: "Kaingin 2 Basketball Court",
        type: "indoor",
        address: "Playground, Quezon City, Metro Manila",
        coords: { lat: 14.6042, lng: 120.9822 },
        hours: {
            Monday: ["6:00 AM", "9:00 PM"],
            Tuesday: ["6:00 AM", "9:00 PM"],
            Wednesday: ["6:00 AM", "9:00 PM"],
            Thursday: ["6:00 AM", "9:00 PM"],
            Friday: ["6:00 AM", "10:00 PM"],
            Saturday: ["7:00 AM", "10:00 PM"],
            Sunday: ["7:00 AM", "8:00 PM"]
        },
        image: courtPic("#2a3a28", "#202a20", "KAINGIN 2 COURT")
    },
    {
        name: "Sunrise Street Court",
        type: "outdoor",
        address: "Corner of Sunrise St. and Mabini Ave.",
        coords: { lat: 14.6068, lng: 120.9884 },
        hours: {
            Monday: ["5:00 AM", "10:00 PM"],
            Tuesday: ["5:00 AM", "10:00 PM"],
            Wednesday: ["5:00 AM", "10:00 PM"],
            Thursday: ["5:00 AM", "10:00 PM"],
            Friday: ["5:00 AM", "10:00 PM"],
            Saturday: ["5:00 AM", "10:00 PM"],
            Sunday: ["5:00 AM", "10:00 PM"]
        },
        image: courtPic("#202a20", "#3a4a36", "SUNRISE COURT")
    },
    {
        name: "Kaingin 1 Blk 6 Covered Court",
        type: "indoor",
        address: "blk 6 Kaingin 1, Pansol, Bagong sibol, Quezon City, Metro Manila",
        coords: { lat: 14.5995, lng: 120.9791 },
        hours: {
            Monday: ["8:00 AM", "8:00 PM"],
            Tuesday: ["8:00 AM", "8:00 PM"],
            Wednesday: ["8:00 AM", "8:00 PM"],
            Thursday: ["8:00 AM", "8:00 PM"],
            Friday: ["8:00 AM", "9:00 PM"],
            Saturday: ["8:00 AM", "9:00 PM"],
            Sunday: ["CLOSED"]
        },
        image: courtPic("#1a2418", "#2a3a28", "BLK 6 COURT")
    },
    {
        name: "Barangay San Isidro Court",
        type: "outdoor",
        address: "San Isidro Barangay Hall compound",
        coords: { lat: 14.6113, lng: 120.9738 },
        hours: {
            Monday: ["6:00 AM", "8:00 PM"],
            Tuesday: ["6:00 AM", "8:00 PM"],
            Wednesday: ["6:00 AM", "8:00 PM"],
            Thursday: ["6:00 AM", "8:00 PM"],
            Friday: ["6:00 AM", "8:00 PM"],
            Saturday: ["6:00 AM", "9:00 PM"],
            Sunday: ["6:00 AM", "12:00 PM"]
        },
        image: courtPic("#3a4a36", "#202a20", "SAN ISIDRO")
    },
    {
        name: "Riverside Half Court",
        type: "outdoor",
        address: "Riverside Park, beside the walking bridge",
        coords: { lat: 14.6132, lng: 120.9687 },
        hours: {
            Monday: ["OPEN 24 HOURS"],
            Tuesday: ["OPEN 24 HOURS"],
            Wednesday: ["OPEN 24 HOURS"],
            Thursday: ["OPEN 24 HOURS"],
            Friday: ["OPEN 24 HOURS"],
            Saturday: ["OPEN 24 HOURS"],
            Sunday: ["OPEN 24 HOURS"]
        },
        image: courtPic("#202a20", "#1a2418", "RIVERSIDE")
    },
    {
        name: "St. Anne School Gym",
        type: "indoor",
        address: "St. Anne Academy grounds, Del Pilar St.",
        coords: { lat: 14.5966, lng: 120.9868 },
        hours: {
            Monday: ["4:00 PM", "8:00 PM"],
            Tuesday: ["4:00 PM", "8:00 PM"],
            Wednesday: ["4:00 PM", "8:00 PM"],
            Thursday: ["4:00 PM", "8:00 PM"],
            Friday: ["4:00 PM", "9:00 PM"],
            Saturday: ["9:00 AM", "6:00 PM"],
            Sunday: ["CLOSED"]
        },
        image: courtPic("#2a3a28", "#4a5a44", "ST. ANNE GYM")
    },
    {
        name: "Old Balara Basketball Court",
        type: "indoor",
        address: "Tandang Sora Avenue, Matandang Balara, 1119 Quezon City, Metro Manila",
        coords: { lat: 14.5966, lng: 120.9868 },
        hours: {
            Monday: ["OPEN 24 HOURS"],
            Tuesday: ["OPEN 24 HOURS"],
            Wednesday: ["OPEN 24 HOURS"],
            Thursday: ["OPEN 24 HOURS"],
            Friday: ["OPEN 24 HOURS"],
            Saturday: ["OPEN 24 HOURS"],
            Sunday: ["CLOSED"]
        },
        image: courtPic("#2a3a28", "#4a5a44", "OLD BALARA COURT")
    },
    {
        name: "La Vista Basketball Court",
        type: "indoor",
        address: "24, 1100 Bagobo St, La Vista subdivision, Quezon City, 1800 Metro Manila",
        coords: { lat: 14.5966, lng: 120.9868 },
        hours: {
            Monday: ["8:00 AM", "8:00 PM"],
            Tuesday: ["8:00 AM", "8:00 PM"],
            Wednesday: ["8:00 AM", "8:00 PM"],
            Thursday: ["8:00 AM", "8:00 PM"],
            Friday: ["8:00 AM", "8:00 PM"],
            Saturday: ["8:00 AM", "6:00 PM"],
            Sunday: ["CLOSED"]
        },
        image: courtPic("#2a3a28", "#4a5a44", "LA VISTA COURT")
    },
    {
        name: "Daan Tubo Area 2 Basketball Court",
        type: "outdoor",
        address: "121, Area 2 Basketball court, 1108 Daan Tubo, Quezon City, 1180 Metro Manila",
        coords: { lat: 14.5966, lng: 120.9868 },
        hours: {
            Monday: ["8:00 AM", "8:00 PM"],
            Tuesday: ["8:00 AM", "8:00 PM"],
            Wednesday: ["8:00 AM", "8:00 PM"],
            Thursday: ["8:00 AM", "8:00 PM"],
            Friday: ["8:00 AM", "8:00 PM"],
            Saturday: ["8:00 AM", "6:00 PM"],
            Sunday: ["CLOSED"]
        },
        image: courtPic("#2a3a28", "#4a5a44", "DAAN TUBO COURT")
    }
];

let currentFilter = "all";

function getTodayName() {
    return DAYS[new Date().getDay()];
}

function getCourtHoursLabel(court) {
    const todayName = getTodayName();
    const hours = court.hours[todayName];

    if (!hours || hours.length === 0) return "No hours listed";
    if (hours.length === 1) return hours[0].toUpperCase();
    return `${hours[0]} - ${hours[1]}`;
}

function toMinutes(text) {
    if (!text || typeof text !== "string") return null;
    const match = text.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!match) return null;

    let hour = parseInt(match[1], 10) % 12;
    if (match[3].toUpperCase() === "PM") hour += 12;
    return hour * 60 + parseInt(match[2], 10);
}

function isOpenNow(court) {
    const today = getTodayName();
    const hours = court.hours[today];
    if (!hours || hours.length !== 2) return false;

    if (hours[0].toUpperCase().includes("OPEN 24")) return true;

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const openAt = toMinutes(hours[0]);
    const closeAt = toMinutes(hours[1]);

    if (openAt === null || closeAt === null) return false;
    return currentMinutes >= openAt && currentMinutes < closeAt;
}

function render() {
    const searchInput = document.getElementById("search");
    const grid = document.getElementById("grid");
    if (!searchInput || !grid) return;

    const text = searchInput.value.trim().toLowerCase();
    const matches = COURTS
        .map((court, index) => ({ court, index }))
        .filter(({ court }) => {
            const matchesType = currentFilter === "all" || court.type === currentFilter;
            const matchesText = !text ||
                court.name.toLowerCase().includes(text) ||
                court.address.toLowerCase().includes(text);
            return matchesType && matchesText;
        });

    if (matches.length === 0) {
        grid.innerHTML = '<p class="empty">No courts found. Try a different search.</p>';
        return;
    }

    grid.innerHTML = matches.map(({ court, index }) => {
        const open = isOpenNow(court);
        const locationLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${court.address} ${court.name}`)}`;

        return `
            <div class="card" onclick="openModal(${index})">
                <img src="${court.image}" alt="${court.name}">
                <div class="info">
                    <span class="status ${open ? "open" : "shut"}">${open ? "OPEN NOW" : "CLOSED"}</span>
                    <h2>${court.name}</h2>
                    <p>${court.address}</p>
                    <span class="badge">${court.type.toUpperCase()}</span>
                    <div class="hours-line"><span class="label">TODAY: </span>${getCourtHoursLabel(court)}</div>
                    <a class="map-link" href="${locationLink}" target="_blank" rel="noopener" onclick="event.stopPropagation()">LOCATION: GOOGLE MAPS</a>
                </div>
            </div>
        `;
    }).join("");
}

function setFilter(type) {
    currentFilter = type;
    const filterMap = {
        all: "chip-all",
        indoor: "chip-indoor",
        outdoor: "chip-outdoor"
    };

    Object.entries(filterMap).forEach(([key, id]) => {
        const chip = document.getElementById(id);
        if (!chip) return;
        chip.className = `chip${type === key ? " active" : ""}`;
    });

    try {
        sessionStorage.setItem("filter", type);
    } catch (error) {
        // Ignore storage failures in restricted/sandboxed browsers.
    }

    render();
}

function openModal(index) {
    const court = COURTS[index];
    if (!court) return;

    const img = document.getElementById("m-img");
    const name = document.getElementById("m-name");
    const address = document.getElementById("m-addr");
    const mapLink = document.getElementById("m-map");
    const hoursTable = document.getElementById("m-hours");
    const backdrop = document.getElementById("backdrop");

    if (!img || !name || !address || !mapLink || !hoursTable || !backdrop) return;

    img.src = court.image;
    name.textContent = court.name;
    address.textContent = court.address;
    mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${court.address} ${court.name}`)}`;
    mapLink.textContent = "GET DIRECTIONS";

    const todayName = getTodayName();
    let rows = "";
    let todayRow = "";

    DAYS.forEach((day) => {
        const hours = court.hours[day] || ["CLOSED"];
        const isClosed = hours[0].toUpperCase() === "CLOSED";
        const isAlwaysOpen = hours[0].toUpperCase().includes("24");
        const text = isClosed ? "CLOSED" : (isAlwaysOpen ? "OPEN 24 HOURS" : `${hours[0]} - ${hours[1] || ""}`);
        const cells = `<td>${day}${day === todayName ? " (today)" : ""}</td><td class="${isClosed ? "closed" : ""}">${text}</td>`;

        if (day === todayName) {
            todayRow = cells;
        } else {
            rows += `<tr>${cells}</tr>`;
        }
    });

    hoursTable.innerHTML = `<tr style="background: rgba(0,0,0,0.35)">${todayRow}</tr>${rows}`;
    backdrop.classList.add("open");
}

function closeModal() {
    const backdrop = document.getElementById("backdrop");
    if (backdrop) backdrop.classList.remove("open");
}

function initializeApp() {
    const searchInput = document.getElementById("search");
    const backdrop = document.getElementById("backdrop");
    const nearMeButton = document.getElementById("near-me");
    const filterButtons = document.querySelectorAll(".chip");

    if (searchInput) {
        searchInput.addEventListener("input", render);
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter || "all";
            setFilter(filter);
        });
    });

    if (backdrop) {
        backdrop.addEventListener("click", (event) => {
            if (event.target === backdrop) closeModal();
        });
    }

    const closeButton = document.getElementById("close-modal");
    if (closeButton) closeButton.addEventListener("click", closeModal);

    const savedFilter = (() => {
        try {
            return sessionStorage.getItem("filter");
        } catch (error) {
            return null;
        }
    })();

    setFilter(savedFilter || "all");

    if (nearMeButton) {
        nearMeButton.addEventListener("click", window.findNearMe);
        nearMeButton.style.cssText += ";padding:10px 22px;border-radius:10px;border:1px solid #f5a623;background:#f5a623;color:#141a12;font-weight:700;letter-spacing:1px;cursor:pointer;";
    }
}

(function initLocationFeatures() {
    let userPosition = null;
    let locating = false;

    function getPosition(callback) {
        if (!("geolocation" in navigator)) {
            callback(null, "Geolocation is not supported on this device.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                userPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                callback(userPosition, null);
            },
            (error) => {
                const message = error.code === 1
                    ? "Location permission was denied."
                    : error.code === 2
                        ? "Your location could not be found."
                        : "Location request timed out.";
                callback(null, message);
            },
            { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
        );
    }

    function distanceKm(from, court) {
        if (!court || !court.coords) return null;
        const radiusEarthKm = 6371;
        const deltaLat = (court.coords.lat - from.lat) * Math.PI / 180;
        const deltaLng = (court.coords.lng - from.lng) * Math.PI / 180;
        const a = Math.sin(deltaLat / 2) ** 2 +
            Math.cos(from.lat * Math.PI / 180) *
            Math.cos(court.coords.lat * Math.PI / 180) *
            Math.sin(deltaLng / 2) ** 2;
        return 2 * radiusEarthKm * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    function directionsUrl(courtIndex) {
        const court = COURTS[courtIndex];
        const destination = encodeURIComponent(`${court.address} ${court.name}`);
        const origin = userPosition ? `&origin=${encodeURIComponent(`${userPosition.lat},${userPosition.lng}`)}` : "";
        return `https://www.google.com/maps/dir/?api=1&destination=${destination}${origin}&travelmode=driving`;
    }

    window.openDirections = function (courtIndex) {
        if (!userPosition) {
            const status = document.getElementById("geo-status");
            if (status) status.textContent = "Finding your location...";
            getPosition((pos, err) => {
                if (status) status.textContent = pos ? "" : "Could not get your location. Opening Maps anyway.";
                window.open(directionsUrl(courtIndex), "_blank");
            });
            return;
        }
        window.open(directionsUrl(courtIndex), "_blank");
    };

    function reportNearest() {
        if (!userPosition) return;

        const nearest = COURTS
            .map((court, index) => ({ court, index, km: distanceKm(userPosition, court) }))
            .filter((entry) => entry.km !== null)
            .sort((a, b) => a.km - b.km)[0];

        const status = document.getElementById("geo-status");
        if (!status) return;

        status.textContent = nearest
            ? `Nearest court: ${nearest.court.name} (${nearest.km.toFixed(1)} km away)`
            : "Location found. Court distances are unavailable.";
    }

    window.findNearMe = function () {
        if (locating) return;
        locating = true;

        const status = document.getElementById("geo-status");
        if (status) status.textContent = "Finding your location...";

        getPosition((pos, err) => {
            locating = false;
            if (status) status.textContent = err || "";
            if (pos) reportNearest();
        });
    };

    const mapLink = document.getElementById("m-map");
    if (mapLink) {
        const originalOpenModal = window.openModal;
        window.openModal = function (index) {
            originalOpenModal(index);
            mapLink.href = directionsUrl(index);
            mapLink.textContent = "GET DIRECTIONS";
        };
    }
})();

window.addEventListener("DOMContentLoaded", initializeApp, { once: true });
