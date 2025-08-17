# nearby_spots

# Nearby Spots

**Nearby‑Spots** is an interactive mapping web application built with **React** and **Leaflet**. Users can:

- View their current location on an OpenStreetMap-powered map.
- Browse nearby points of interest (pizza outlets, malls, hospitals, car showrooms, parks).
- Click on categories (like "hospitals") to view relevant spots.
- Fly the map to any selected location.
- Toggle between circular and standard markers.
- Highlight a place and reset the view with a close button.

## Built with:
- **Leaflet**, **OpenStreetMap** — for map rendering and interactions
- **Nominatim** — for geocoding/search
- **Leaflet Routing Machine** — for showing paths and directions
- **React** — for UI components (tabs, list, sidebar)
- **Custom CSS** — for buttons, tabs, details panel styling

---

## Features

| Feature                     | Description                                                                       |
|----------------------------|-----------------------------------------------------------------------------------|
| Live Location              | A crosshair icon button lets users fly the map to their current position instantly. |
| Category Tabs              | Clickable category pills (e.g., “parks”, “hospitals”) reorder themselves and show a close (×) to reset. |
| Dynamic List Panel         | Shows a list of locations for the selected category; clicking item flies to that spot. |
| Markers & Circle Markers   | Both standard pin markers and customizable circle markers with distinct colors.  |
| Details Pop-Up             | Displays name, address, phone, and type for the selected location.               |
| Smooth UX Transitions      | Map `flyTo` animations, smooth marker updates, and UI interactions.             |

---

## Getting Started

### Prerequisites

- Clone this repository
- Serve using a simple server (e.g. `npm install -g serve` or using React dev server if React-based)

### Running locally

```bash
git clone https://github.com/abhijeethkargeddamdev-in/nearby_spots.git
cd nearby_spots
# If using a static server:
serve .

# If using React (create-react-app):
npm install
npm start
```

---

## Project Structure

```
nearby_spots/
├── index.html             → main webpage
├── style.css              → custom styles (map container, tabs, buttons, sidebar)
├── script.js              → all JS logic (map setup, geolocation, UI control)
└── data.js                → GeoJSON arrays: pizzaPlaces, shoppingMalls, hospitals, carShowrooms, parks
```

---

## Usage Flow

1. **Default view** shows **parks** list and corresponding markers.
2. Click a **category tab** (e.g., "hospitals"):
   - Tab moves first and becomes active.
   - A close (×) button appears.
   - The list updates to show hospitals.
3. Click a place from the list:
   - Map animates (`flyTo`) to its location.
   - Displays details (name, address, phone).
4. Click the **close (×)** on the active tab:
   - Reverts to the default category ("parks").
   - Tab goes back to its original spot.

---

## Customization Guide

- **Add categories**: Add your own GeoJSON arrays in `data.js`.
- **Category colors**: Customize circle marker colors in `script.js`.
- **UI changes**: Modify `.category-tab` or `.location-btn` in `style.css` for different looks.
- **Live location behavior**: Adjust fly speed or marker details in the relevant JS section.

---

## Roadmap Ideas

- Filter places by proximity (e.g. within 5 km)
- Support external API for real locations (e.g. OpenRouteService)
- Add search/autocomplete integration
- Save favorite places locally or via backend
