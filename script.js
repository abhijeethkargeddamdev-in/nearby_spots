const map = L.map('map').setView([17.3850,78.4867],14);
const titleUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = "Abhijeethkar";
const tiles = L.tileLayer(titleUrl,{attribution});

tiles.addTo(map);

// your location code 
let userMarker = null;

function showUserLocation() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            // Remove previous user marker if exists
            if (userMarker) {
                map.removeLayer(userMarker);
            }
            // Add marker for user location

          L.circle([lat, lng], {
                radius: 380,
                color: '#ff990065',
                fillColor: '#ff990077',
                 weight: 1,
                
                title: "Your Location",
            }).addTo(map);

            userMarker =  L.circleMarker([lat, lng], {
                radius: 14,
                color: '#ffffffff',
                fillColor: '#ff9800',
                fillOpacity: 1,
            }).addTo(map);
           
            map.flyTo([lat, lng], 15, { animate: true, duration: 2 });
        },
        (error) => {
            alert("Unable to retrieve your location.");
        }
    );
}

showUserLocation();

document.getElementById('live-location-btn').addEventListener('click', () => {
    showUserLocation();
});

function generateList(mane){
    const ul = document.querySelector('.list');
    ul.innerHTML = ""; // Clear old data
    mane.forEach((shop)=>{
        const li = document.createElement('li');
        const div = document.createElement('div');
        const a = document.createElement('a');
        a.addEventListener('click',()=>{
            flyToStore(shop);
        })
        const p = document.createElement('p');
        
        div.classList.add('shope-item');
        a.innerText = shop.properties.name;
        a.href = '#';
        p.innerText = shop.properties.address;

        div.appendChild(a);
        div.appendChild(p);
        li.appendChild(div);
        ul.appendChild(li);
    });
}

generateList(parks);


let currentLayer = null;

function updateMarkers(features) {
    // Remove previous layer if exists
    if (currentLayer) {
        map.removeLayer(currentLayer);
    }
    // Add new layer for selected category
    currentLayer = L.geoJSON(features, {
        onEachFeature: onEachFeature,
        pointToLayer: function(feature, latlng){
            return L.marker(latlng, {});
        }
    });
    currentLayer.addTo(map);
}

const container = document.querySelector('.op-data');

// store original order
const order = {};

Object.keys(data).forEach((category, index) => {
  const div = document.createElement('div');
  div.classList.add('category-tab');
  div.innerText = category;
  order[category] = index; // keep track of position

  div.addEventListener('click', () => {

    
    if (div.classList.contains('active')) return; // already active

    // remove active from any other
    const active = document.querySelector('.category-tab.active');

    if (active) {
      active.classList.remove('active');
      const closeBtn = active.querySelector('.close-btn');
      if (closeBtn) closeBtn.remove();
    }

    // activate clicked tab
    div.classList.add('active');

    // add X button
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = "&times;";
    div.appendChild(closeBtn);

       generateList([]);
    const selectedData = category === 'Parks' ? parks : data[category];
    generateList(selectedData);

    updateMarkers(selectedData);
  

    // move it to the first
    container.prepend(div);

    // close button action
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent parent click
      div.classList.remove('active');
      closeBtn.remove();

      generateList(parks);

      // put it back to its original place
      const tabs = [...container.children].filter(c => c !== div);
      const pos = order[category];
      if (pos >= tabs.length) {
        container.appendChild(div);
      } else {
        container.insertBefore(div, tabs[pos]);
      }
    });
  });

  container.appendChild(div);
});

function makePopupContent(shop){
    return `<div>
      <h4>${shop.properties.name}  (${shop.properties.type})</h4>
      <p>${shop.properties.address}</p>
      <div class="phone-number">
      <a href="tel:${shop.properties.phone}">${shop.properties.phone}</a>
      </div>
    </div>
    
    `
}

function onEachFeature(feature,layer){
    layer.bindPopup(makePopupContent(feature), {closeButton: false, offset: L.point(0, 0)});
}

const myIcon = L.icon({
    iconUrl: 'https://png.pngtree.com/png-vector/20190903/ourmid/pngtree-map-location-marker-icon-in-red-png-image_1722078.jpg',
    iconSize: [30,40],
    className: 'blinking'
})

function flyToStore(store) {
    const lat =store.geometry.coordinates[1];
    const lng = store.geometry.coordinates[0];
  map.flyTo(
    [lat,lng],15, // zoom level
    {
      animate: true,
      duration: 5 // smooth animation duration in seconds
    });
     
    setTimeout(()=>{
      L.popup( {closeButton:false, offset: L.point(0,-28)})
      .setLatLng([lat,lng])
      .setContent(makePopupContent(store))
      .openOn(map);
   },4000)

}

