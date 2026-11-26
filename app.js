const mapStyle = [
  // Land: warm, weathered parchment
  { elementType: "geometry", stylers: [{ color: "#d8b98a" }] },

  // Labels: dark navy text with a light outline so it stays readable
  { elementType: "labels.text.fill", stylers: [{ color: "#1b2a49" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f2e2b8" }, { weight: 3 }] },

  // Ocean: deep Grand Line blue with light text
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#1f6f8b" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#f2e2b8" }] },
  { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#0e3a4d" }] },

  // Roads: dark brown "ink" lines
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#8a5a2b" }] },
  { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] },

  // Borders: bold gold, like routes on a treasure map
  { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#e8b923" }, { weight: 1.5 }] },
  { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#e8b923" }, { weight: 2.5 }] },

  // Parks and natural areas: muted green so land has some variety
  { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#c9a874" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#8fa66b" }] },

  // Hide clutter
  { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
];

const memories = [
  {
    title: "Soccer Trip to Barcelona",
    category: "soccer",
    lat: 41.3902,
    lng: 2.154,
    date: "2018",
    description: "My first trip to Europe, playing soccer in Barcelona, Spain.",
    photos: ["images/barcelona1.jpeg", "images/barcelona2.jpeg", "images/barcelona3.jpeg", "images/barcelona4.jpeg", "images/barcelona5.PNG"],
  },
  {
    title: "Senior Year of High School",
    category: "school",
    lat: 40.7826,
    lng: -77.8578,
    date: "2025",
    description: "My senior year at SCAHS.",
    photos: ["images/senioryear1.jpg", "images/senioryear2.jpeg", "images/senioryear3.JPG", "images/senioryear4.JPG", "images/senioryear5.JPG", "images/senioryear6.JPG", "images/senioryear7.JPG", "images/senioryear8.JPG", "images/senioryear9.JPG", "images/senioryear10.JPG", "images/senioryear11.JPG"],
  },
  {
    title: "SCCAC Youth Group Trip to Life Conference",
    category: "travel",
    lat: 39.7684,
    lng: -86.1581,
    date: "2025",
    description: "My youth group trip to the Life Conference in Indianapolis, Indiana.",
    photos: ["images/soloflic.jpeg", "images/indianapolis.JPG", "images/lifeconferencelunch.jpeg", "images/deathnoteatlife.jpeg", "images/life5k.JPG", "images/afterlife5k.jpeg", "images/duowithaustin.JPG", "images/grouplifephoto.JPG", "images/duowithjeremy.JPG", "images/lifeasianmeetup.jpeg", "images/lifemirrorflic.jpeg", "images/lunchbuffet.jpeg"],
  },
  {
    title: "Soccer in Italy",
    category: "soccer",
    lat: 45.4642,
    lng: 9.19,
    date: "2025",
    description: "My gap year playing for Juventus U19 in Italy.",
    photos: ["images/mediaday.JPG", "images/allianzstadium.jpeg", "images/blackandwhite.JPG", "images/grounding.JPG", "images/duowithpp.JPG", "images/vinovotraining.JPG", "images/parma.JPG", "images/springtourney.JPEG", "images/summertourney.JPG", "images/venezia.JPG", "images/willywong.JPG"],
  },
  {
    title: "China Trip",
    category: "travel",
    lat: 22.5428,
    lng: 114.063,
    date: "2026",
    description: "My first trip back to China in 7 years. Landed in Shenzhen.",
    photos: ["images/shenzhen.jpeg"],
  },
  {
    title: "Zhangjiajie National Forest Park",
    category: "travel",
    lat: 29.3499,
    lng: 110.4352,
    date: "2026",
    description: "In the mountains of Zhangjiajie National Forest Park, the inspiration for the floating mountains in Avatar.",
    photos: ["images/zhangjiajie1.jpeg", "images/zhangjiajie2.jpeg", "images/zhangjiajie3.jpeg", "images/zhangjiajie4.jpeg"],
  },
  {
    title: "Sanxingdui Museum",
    category: "travel",
    lat: 30.0037,
    lng: 104.2162,
    date: "2026",
    description: "Exploring the ancient Shu civilization.",
    photos: ["images/museumflicwithsis.jpeg"],
  },
  {
    title: "The Forbidden City",
    category: "travel",
    lat: 39.9166,
    lng: 116.3908,
    date: "2026",
    description: "Visiting the Forbidden City in Beijing.",
    photos: ["images/forbiddencity.jpeg"],
  },
  {
    title: "Tiananmen Square",
    category: "travel",
    lat: 39.9044,
    lng: 116.3914,
    date: "2026",
    description: "Walking in Tiananmen Square at night.",
    photos: ["images/tiananmensquare.jpeg"],
  },
  {
    title: "The Great Wall of China",
    category: "travel",
    lat: 40.36091,
    lng: 116.01278,
    date: "2026",
    description: "Hiking the Great Wall of China.",
    photos: ["images/greatwall.jpg"],
  },
  {
    title: "Temple of Heaven",
    category: "travel",
    lat: 39.8799,
    lng: 116.4042,
    date: "2026",
    description: "Visiting the Temple of Heaven in Beijing.",
    photos: ["images/templeofheaven.JPG"],
  },
  {
    title: "Dayanta Pagoda",
    category: "travel",
    lat: 34.2197,
    lng: 108.9594,
    date: "2026",
    description: "Exploring the Dayanta Pagoda in Xi'an at night.",
    photos: ["images/dayanta.jpeg"],
  },
  {
    title: "Penn State",
    category: "school",
    lat: 40.7982,
    lng: -77.8599,
    date: "2026",
    description: "Started my sophomore (freshman) year.",
    photos: ["images/aacfhalloween.jpg", "images/aacfconcessions.JPG", "images/aacfpaintnight.JPG", "images/dresstoimpress.jpeg", "images/epicnight.jpg", "images/gordon.jpeg", "images/IMchamps.JPG", "images/mensfallouting.jpg", "images/minutetowinit.jpg", "images/olivegarden.JPG"],
  },
];

function buildPopup(memory, number) {
  let index = 0;
  const total = memory.photos.length;

  const container = document.createElement("div");
  container.style.maxWidth = "240px";
  container.className = "popup";        // after creating the container

  const title = document.createElement("h3");
  title.textContent = `${number}. ${memory.title}`;
  title.className = "popup-title";      // after creating the title

  const date = document.createElement("small");
  date.textContent = memory.date;
  date.className = "popup-date";        // after creating the date

  const img = document.createElement("img");
  img.src = memory.photos[0];
  img.alt = memory.title;
  img.className = "popup-img";          // after creating the img

  const desc = document.createElement("p");
  desc.textContent = memory.description;
  desc.className = "popup-desc";        // after creating the desc

  container.append(title, date, img);

  // Only show controls if there's more than one photo
  if (total > 1) {
    const controls = document.createElement("div");
    controls.style.cssText =
      "display:flex;justify-content:space-between;align-items:center;margin-bottom:8px";

    const prev = document.createElement("button");
    prev.textContent = "‹ Prev";
    prev.className = "popup-btn";         // inside the if (total > 1) block

    const next = document.createElement("button");
    next.textContent = "Next ›";
    next.className = "popup-btn";         // same block
    
    const counter = document.createElement("span");
    counter.textContent = `1 / ${total}`;
    counter.className = "popup-counter";  // same block

    function show(i) {
      index = (i + total) % total; // wraps around at the ends
      img.src = memory.photos[index];
      counter.textContent = `${index + 1} / ${total}`;
    }

    prev.addEventListener("click", () => show(index - 1));
    next.addEventListener("click", () => show(index + 1));

    controls.append(prev, counter, next);
    container.append(controls);
  }

  container.append(desc);
  return container;
}

const iconSvgs = {
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <ellipse cx="32" cy="40" rx="30" ry="10" fill="#e8c56a" stroke="#8a5a2b" stroke-width="2"/>
      <path d="M16 38 C16 16 48 16 48 38 C48 44 16 44 16 38 Z" fill="#f0d27e" stroke="#8a5a2b" stroke-width="2"/>
      <path d="M16.3 31 C20 37 44 37 47.7 31 L48 38 C48 44 16 44 16 38 Z" fill="#d62828" stroke="#8a5a2b" stroke-width="1.5"/>
    </svg>`,

  soccer: `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="28" fill="#ffffff" stroke="#1b2a49" stroke-width="3"/>
      <polygon points="32,20 43,28 39,41 25,41 21,28" fill="#1b2a49"/>
      <path d="M32 20 L32 6 M43 28 L56 24 M39 41 L47 53 M25 41 L17 53 M21 28 L8 24"
            stroke="#1b2a49" stroke-width="3" fill="none"/>
    </svg>`,

  school: `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <polygon points="32,12 60,26 32,40 4,26" fill="#1b2a49" stroke="#e8b923" stroke-width="2.5"/>
      <path d="M16 33 L16 46 C16 52 48 52 48 46 L48 33 L32 41 Z" fill="#1f6f8b" stroke="#1b2a49" stroke-width="2.5"/>
      <line x1="56" y1="28" x2="56" y2="46" stroke="#e8b923" stroke-width="3"/>
      <circle cx="56" cy="48" r="4" fill="#e8b923"/>
    </svg>`,

  travel: `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="28" fill="#f2e2b8" stroke="#8a5a2b" stroke-width="3"/>
      <circle cx="32" cy="32" r="21" fill="none" stroke="#8a5a2b" stroke-width="1.5"/>
      <polygon points="32,8 38,32 32,56 26,32" fill="#d62828" stroke="#1b2a49" stroke-width="1.5"/>
      <polygon points="8,32 32,26 56,32 32,38" fill="#1f6f8b" stroke="#1b2a49" stroke-width="1.5"/>
      <circle cx="32" cy="32" r="3.5" fill="#e8b923" stroke="#1b2a49" stroke-width="1.5"/>
    </svg>`,
};

function initMap() {
  // Create the map with the specified center, zoom level, and custom styles
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7982, lng: -77.8599 },
    zoom: 3,
    styles: mapStyle,
  });

  // Create a custom SVG icon for the markers
  const hatSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <ellipse cx="32" cy="40" rx="30" ry="10" fill="#e8c56a" stroke="#8a5a2b" stroke-width="2"/>
    <path d="M16 38 C16 16 48 16 48 38 C48 44 16 44 16 38 Z" fill="#f0d27e" stroke="#8a5a2b" stroke-width="2"/>
    <path d="M16.3 31 C20 37 44 37 47.7 31 L48 38 C48 44 16 44 16 38 Z" fill="#d62828" stroke="#8a5a2b" stroke-width="1.5"/>
  </svg>
  `;
  
  // Create a custom icon object for the markers
  // const hatIcon = {
  //   url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(hatSvg),
  //   scaledSize: new google.maps.Size(48, 48),
  //   anchor: new google.maps.Point(24, 36),
  // };

  // Create a function to generate a custom icon object from an SVG string
  function makeIcon(svg) {
    return {
      url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg),
      scaledSize: new google.maps.Size(44, 44),
      anchor: new google.maps.Point(22, 22),
      labelOrigin: new google.maps.Point(38, 6),
    };
  }

  const icons = {};
  for (const name in iconSvgs) {
    icons[name] = makeIcon(iconSvgs[name]);
  }

  const infoWindow = new google.maps.InfoWindow();

  // before the forEach:
  const bounds = new google.maps.LatLngBounds();

  // Loop through the memories array and create a marker for each memory
  memories.forEach((memory, index) => {
    const number = index + 1;

    const marker = new google.maps.Marker({
      position: { lat: memory.lat, lng: memory.lng },
      map: map,
      title: memory.title,
      icon: icons[memory.category] || icons.default,
      label: {
        text: String(number),
        color: "#f2e2b8",
        fontSize: "12px",
        fontWeight: "bold",
        className: "marker-number",
      },
    });

    // inside the forEach, after creating the marker:
    bounds.extend(marker.getPosition());

    // Add a click listener to the marker to open the info window with the memory's details
    marker.addListener("click", () => {
      infoWindow.setContent(buildPopup(memory, number));
      infoWindow.open(map, marker);
    });
  });

  // The route: every memory's position, in array order
  const routePath = memories.map((m) => ({ lat: m.lat, lng: m.lng }));

  // Dotted line pieces
  const dot = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "#8a5a2b",
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 3,
  };

    // Thousand Sunny, drawn top-down in layers (bow points up)
  const hull = {
    path: "M 0,-16 C 5,-10 7,-2 6,10 L 4,15 L -4,15 L -6,10 C -7,-2 -5,-10 0,-16 Z",
    fillColor: "#c98b4b",
    fillOpacity: 1,
    strokeColor: "#5a3d1e",
    strokeWeight: 1.5,
    scale: 1,
  };

  const deck = {
    path: "M 0,-11 C 3.5,-6 4.5,0 4,10 L -4,10 C -4.5,0 -3.5,-6 0,-11 Z",
    fillColor: "#8fb96a", // the grass deck
    fillOpacity: 1,
    strokeColor: "#5a3d1e",
    strokeWeight: 1,
    scale: 1,
  };

  const sails = {
    path: "M -10,-5 L 10,-5 L 9,-1 L -9,-1 Z M -8,5 L 8,5 L 7,9 L -7,9 Z",
    fillColor: "#ffffff",
    fillOpacity: 1,
    strokeColor: "#1b2a49",
    strokeWeight: 1.5,
    scale: 1,
  };

  const lionMane = {
    path: "M -4.5,-19 a 4.5,4.5 0 1,0 9,0 a 4.5,4.5 0 1,0 -9,0 Z",
    fillColor: "#f28c28",
    fillOpacity: 1,
    strokeColor: "#5a3d1e",
    strokeWeight: 1.5,
    scale: 1,
  };

  const lionFace = {
    path: "M -2.5,-19 a 2.5,2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0 Z",
    fillColor: "#f9d949",
    fillOpacity: 1,
    strokeColor: "#5a3d1e",
    strokeWeight: 1,
    scale: 1,
  };

  // Drawn in this order, bottom layer first
  const shipLayers = [hull, deck, sails, lionMane, lionFace];

  const route = new google.maps.Polyline({
    path: routePath,
    geodesic: true,
    strokeOpacity: 0,
    icons: [
      { icon: dot, offset: "0", repeat: "14px" },
      ...shipLayers.map((layer) => ({ icon: layer, offset: "0%" })),
    ],
    map: map,
  });

  // Sail every layer along the route together
  let progress = 0;
  setInterval(() => {
    progress = (progress + 0.2) % 100;
    const current = route.get("icons");
    for (let i = 1; i < current.length; i++) {
      current[i].offset = progress + "%";
    }
    route.set("icons", current);
  }, 30);

  // after the forEach:
  map.fitBounds(bounds);
}

window.initMap = initMap;
