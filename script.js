const map = L.map('map').setView([17.3850,78.4867],14);
const titleUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = "Abhijeethkar";
const tiles = L.tileLayer(titleUrl,{attribution});

tiles.addTo(map);


function generateList(){
    const ul = document.querySelector('.list');
    storeList.forEach((shop)=>{
        const li = document.createElement('li');
        const div = document.createElement('div');
        const a = document.createElement('a');
        a.addEventListener('click',()=>{
            flyToStore(shop);
        })
        const p = document.createElement('p');
        
        //add class for css
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

generateList();

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

const shopsLayer = L.geoJSON(storeList,{
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng){
         return L.marker(latlng, {});
    }
});

shopsLayer.addTo(map);

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
   },5000)

}

