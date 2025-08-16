const storeList = [
  // Karnataka (Bangalore, Mysore, Mangalore)
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.5946, 12.9716] },
    "properties": { "name": "Pizza Hub", "address": "Pizza Hub, 12 MG Road, Near Trinity Metro Station, Bangalore - 560001, Karnataka", "phone": "+91-9876543210", "type": "Italian Pizza" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [76.6394, 12.2958] },
    "properties": { "name": "Crust Corner", "address": "Crust Corner, Sayyaji Rao Road, Opp. Mysore Palace Gate, Mysore - 570001, Karnataka", "phone": "+91-9876543221", "type": "Cheese Burst" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [74.8560, 12.9141] },
    "properties": { "name": "Cheezy Slice", "address": "Cheezy Slice, Hampankatta Main Road, Near City Centre Mall, Mangalore - 575001, Karnataka", "phone": "+91-9876543232", "type": "Thin Crust" }
  },

  // Maharashtra (Mumbai, Pune, Nagpur)
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [72.8777, 19.0760] },
    "properties": { "name": "Cheezy Crust", "address": "Cheezy Crust, Marine Drive, Opp. Nariman Point, Mumbai - 400001, Maharashtra", "phone": "+91-9123456780", "type": "New York Style" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [73.8567, 18.5204] },
    "properties": { "name": "Pizza Express", "address": "Pizza Express, Fergusson College Road, Near Deccan Gymkhana, Pune - 411004, Maharashtra", "phone": "+91-9123456791", "type": "Italian Pizza" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [79.0882, 21.1458] },
    "properties": { "name": "Slice Factory", "address": "Slice Factory, Sitabuldi Main Road, Opp. Variety Square, Nagpur - 440012, Maharashtra", "phone": "+91-9123456702", "type": "Stuffed Crust" }
  },

  // West Bengal (Kolkata, Darjeeling, Siliguri)
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [88.3639, 22.5726] },
    "properties": { "name": "Slice Factory", "address": "Slice Factory, Park Street, Near Park Street Metro Station, Kolkata - 700016, West Bengal", "phone": "+91-9988776655", "type": "Thin Crust" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [88.2627, 27.0410] },
    "properties": { "name": "Mountain Pizza", "address": "Mountain Pizza, Mall Road, Near Chowrasta, Darjeeling - 734101, West Bengal", "phone": "+91-9988776677", "type": "Wood Fired" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [88.4285, 26.7271] },
    "properties": { "name": "Pizza Town", "address": "Pizza Town, Hill Cart Road, Opp. Vega Circle Mall, Siliguri - 734005, West Bengal", "phone": "+91-9988776688", "type": "Pan Pizza" }
  },

  // Tamil Nadu (Chennai, Coimbatore, Madurai)
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [80.2707, 13.0827] },
    "properties": { "name": "Oven Fresh Pizza", "address": "Oven Fresh Pizza, T Nagar Main Road, Near Pondy Bazaar, Chennai - 600017, Tamil Nadu", "phone": "+91-9876501234", "type": "Deep Dish" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [76.9558, 11.0168] },
    "properties": { "name": "Hot Slice", "address": "Hot Slice, RS Puram, Near Brookefields Mall, Coimbatore - 641002, Tamil Nadu", "phone": "+91-9876501245", "type": "Cheese Burst" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [78.1198, 9.9252] },
    "properties": { "name": "Pizza Spot", "address": "Pizza Spot, Anna Nagar, Opp. Periyar Bus Stand, Madurai - 625020, Tamil Nadu", "phone": "+91-9876501256", "type": "Classic Pizza" }
  },

  // Delhi NCR (Connaught Place, Saket, Gurgaon)
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.2090, 28.6139] },
    "properties": { "name": "Crust & Cheese", "address": "Crust & Cheese, Connaught Place Block A, Near Rajiv Chowk Metro Station, New Delhi - 110001", "phone": "+91-9012345678", "type": "Cheese Burst" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.2167, 28.5245] },
    "properties": { "name": "Urban Pizza", "address": "Urban Pizza, Select Citywalk Mall, Saket District Centre, New Delhi - 110017", "phone": "+91-9012345690", "type": "Italian Pizza" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.0266, 28.4595] },
    "properties": { "name": "Metro Pizza", "address": "Metro Pizza, CyberHub, DLF Phase 3, Gurgaon - 122002, Haryana", "phone": "+91-9012345691", "type": "Thin Crust" }
  },

  // Kerala (Kochi, Trivandrum, Kozhikode)
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [76.2673, 9.9312] },
    "properties": { "name": "Backwater Pizza", "address": "Backwater Pizza, Marine Drive, Near High Court Jetty, Kochi - 682031, Kerala", "phone": "+91-9345678901", "type": "Pan Pizza" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [76.9366, 8.5241] },
    "properties": { "name": "Spicy Slice", "address": "Spicy Slice, MG Road, Near Statue Junction, Trivandrum - 695001, Kerala", "phone": "+91-9345678912", "type": "Spicy Pizza" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [75.7804, 11.2588] },
    "properties": { "name": "Malabar Pizza", "address": "Malabar Pizza, SM Street, Opp. Big Bazaar, Kozhikode - 673001, Kerala", "phone": "+91-9345678923", "type": "Wood Fired" }
  },

  // Gujarat (Ahmedabad, Surat, Vadodara)
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [72.5714, 23.0225] },
    "properties": { "name": "Crusty Delight", "address": "Crusty Delight, CG Road, Opp. Law Garden, Ahmedabad - 380006, Gujarat", "phone": "+91-9456789012", "type": "Italian Pizza" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [72.8311, 21.1702] },
    "properties": { "name": "Surati Slice", "address": "Surati Slice, Ring Road, Near Textile Market, Surat - 395002, Gujarat", "phone": "+91-9456789023", "type": "Cheese Burst" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [73.1812, 22.3072] },
    "properties": { "name": "Vadodara Pizza", "address": "Vadodara Pizza, Alkapuri Main Road, Near Race Course Circle, Vadodara - 390007, Gujarat", "phone": "+91-9456789034", "type": "Pan Pizza" }
  },

  // Rajasthan (Jaipur, Udaipur, Jodhpur)
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [75.7873, 26.9124] },
    "properties": { "name": "Royal Slice", "address": "Royal Slice, MI Road, Near Ajmeri Gate, Jaipur - 302001, Rajasthan", "phone": "+91-9567890123", "type": "Italian Pizza" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [73.6833, 24.5854] },
    "properties": { "name": "Lakeview Pizza", "address": "Lakeview Pizza, Fateh Sagar Road, Opp. Fateh Sagar Lake, Udaipur - 313001, Rajasthan", "phone": "+91-9567890134", "type": "Wood Fired" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [73.0243, 26.2389] },
    "properties": { "name": "Desert Crust", "address": "Desert Crust, Clock Tower Market, Near Sardar Market, Jodhpur - 342001, Rajasthan", "phone": "+91-9567890145", "type": "Cheese Burst" }
  },

  // Punjab (Amritsar, Ludhiana, Chandigarh)
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [74.8723, 31.6340] },
    "properties": { "name": "Golden Pizza", "address": "Golden Pizza, Golden Temple Road, Opp. Jallianwala Bagh, Amritsar - 143001, Punjab", "phone": "+91-9678901234", "type": "Tandoori Pizza" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [75.8573, 30.9010] },
    "properties": { "name": "Ludhiana Crust", "address": "Ludhiana Crust, Model Town Main Market, Near Fountain Chowk, Ludhiana - 141001, Punjab", "phone": "+91-9678901245", "type": "Cheese Burst" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [76.7794, 30.7333] },
    "properties": { "name": "Chandigarh Slice", "address": "Chandigarh Slice, Sector 17 Plaza, Opp. Rose Garden, Chandigarh - 160017", "phone": "+91-9678901256", "type": "Classic Pizza" }
  },

  // Telangana (Hyderabad, Warangal, Nizamabad)
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [78.4867, 17.3850] },
    "properties": { "name": "Hyderabadi Pizza", "address": "Hyderabadi Pizza, Charminar Road, Opp. Mecca Masjid, Hyderabad - 500002, Telangana", "phone": "+91-9789012345", "type": "Spicy Chicken Pizza" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [79.5882, 17.9784] },
    "properties": { "name": "Warangal Slice", "address": "Warangal Slice, Hanamkonda Chowrasta, Near Bus Stand, Warangal - 506001, Telangana", "phone": "+91-9789012356", "type": "Pan Pizza" }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [78.0941, 18.6725] },
    "properties": { "name": "Nizam Crust", "address": "Nizam Crust, Armoor Road, Near Gandhi Chowk, Nizamabad - 503001, Telangana", "phone": "+91-9789012367", "type": "Cheese Burst" }
  }
];
