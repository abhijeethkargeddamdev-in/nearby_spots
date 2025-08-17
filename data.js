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

const shoppingMalls = [
  // Karnataka
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.6101, 12.9352] },
    "properties": {
      "name": "Garuda Mall",
      "address": "Garuda Mall, Magrath Road, Bangalore - 560025, Karnataka",
      "phone": "+91-8022200777",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [76.6649, 12.3108] },
    "properties": {
      "name": "BM Habitat Mall",
      "address": "BM Habitat Mall, Jayalakshmipuram, Mysore - 570012, Karnataka",
      "phone": "+91-8214000888",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [74.8355, 12.9182] },
    "properties": {
      "name": "City Centre Mall",
      "address": "City Centre Mall, K.S. Rao Road, Mangalore - 575001, Karnataka",
      "phone": "+91-8244211111",
      "type": "Shopping Mall"
    }
  },

  // Maharashtra
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [72.8330, 19.0726] },
    "properties": {
      "name": "Inorbit Mall",
      "address": "Inorbit Mall, Malad, Mumbai - 400064, Maharashtra",
      "phone": "+91-2240401000",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [73.7898, 18.5636] },
    "properties": {
      "name": "Phoenix Marketcity Pune",
      "address": "Phoenix Marketcity, Viman Nagar, Pune - 411014, Maharashtra",
      "phone": "+91-2066810000",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [79.0980, 21.1558] },
    "properties": {
      "name": "Trillium Mall",
      "address": "Trillium Mall, Medical Square, Nagpur - 440003, Maharashtra",
      "phone": "+91-7122778888",
      "type": "Shopping Mall"
    }
  },

  // Delhi NCR
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.2195, 28.5673] },
    "properties": {
      "name": "Select Citywalk",
      "address": "Select Citywalk Mall, Saket, New Delhi - 110017",
      "phone": "+91-1142150000",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.0728, 28.6215] },
    "properties": {
      "name": "Ambience Mall Vasant Kunj",
      "address": "Ambience Mall, Nelson Mandela Marg, Vasant Kunj, New Delhi - 110070",
      "phone": "+91-1146661000",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.2975, 28.5745] },
    "properties": {
      "name": "The Great India Place",
      "address": "The Great India Place, Sector 38A, Noida - 201301",
      "phone": "+91-1204211111",
      "type": "Shopping Mall"
    }
  },

  // Tamil Nadu
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [80.2475, 13.0550] },
    "properties": {
      "name": "Express Avenue",
      "address": "Express Avenue Mall, Royapettah, Chennai - 600014, Tamil Nadu",
      "phone": "+91-4428443333",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [80.2241, 13.0732] },
    "properties": {
      "name": "Phoenix Marketcity Chennai",
      "address": "Phoenix Marketcity, Velachery Road, Chennai - 600042, Tamil Nadu",
      "phone": "+91-4422251111",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [78.1518, 11.6643] },
    "properties": {
      "name": "Brookefields Mall",
      "address": "Brookefields Mall, Brookebond Road, Coimbatore - 641001, Tamil Nadu",
      "phone": "+91-4222253333",
      "type": "Shopping Mall"
    }
  },

  // Kerala
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [76.3097, 9.9816] },
    "properties": {
      "name": "Lulu Mall",
      "address": "Lulu Mall, Edappally, Kochi - 682024, Kerala",
      "phone": "+91-4842727777",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [76.9577, 8.5241] },
    "properties": {
      "name": "Mall of Travancore",
      "address": "Mall of Travancore, Near Airport, Thiruvananthapuram - 695008, Kerala",
      "phone": "+91-4716676777",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [75.7804, 11.2543] },
    "properties": {
      "name": "HiLite Mall",
      "address": "HiLite Mall, Thondayad Bypass, Kozhikode - 673014, Kerala",
      "phone": "+91-4954011222",
      "type": "Shopping Mall"
    }
  },

  // Telangana
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [78.3873, 17.4350] },
    "properties": {
      "name": "Inorbit Mall Hyderabad",
      "address": "Inorbit Mall, Madhapur, Hyderabad - 500081, Telangana",
      "phone": "+91-4046640000",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [78.4029, 17.3616] },
    "properties": {
      "name": "GVK One Mall",
      "address": "GVK One Mall, Banjara Hills, Hyderabad - 500034, Telangana",
      "phone": "+91-4046672222",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [78.5161, 17.4065] },
    "properties": {
      "name": "Next Galleria Mall",
      "address": "Next Galleria Mall, Punjagutta, Hyderabad - 500082, Telangana",
      "phone": "+91-4044466777",
      "type": "Shopping Mall"
    }
  },

  // West Bengal
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [88.4312, 22.5790] },
    "properties": {
      "name": "Quest Mall",
      "address": "Quest Mall, Syed Amir Ali Avenue, Kolkata - 700017, West Bengal",
      "phone": "+91-3340290000",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [88.4007, 22.5734] },
    "properties": {
      "name": "South City Mall",
      "address": "South City Mall, Prince Anwar Shah Road, Kolkata - 700068, West Bengal",
      "phone": "+91-3340074000",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [88.3600, 22.5726] },
    "properties": {
      "name": "Acropolis Mall",
      "address": "Acropolis Mall, Rashbehari Connector, Kolkata - 700107, West Bengal",
      "phone": "+91-3340676000",
      "type": "Shopping Mall"
    }
  },

  // Rajasthan
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [75.7873, 26.9124] },
    "properties": {
      "name": "World Trade Park",
      "address": "World Trade Park, Malviya Nagar, Jaipur - 302017, Rajasthan",
      "phone": "+91-1412725555",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [73.7189, 24.5854] },
    "properties": {
      "name": "Celebration Mall",
      "address": "Celebration Mall, Bhuwana, Udaipur - 313001, Rajasthan",
      "phone": "+91-2942453333",
      "type": "Shopping Mall"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [74.6297, 26.4499] },
    "properties": {
      "name": "City Mall",
      "address": "City Mall, Civil Lines, Ajmer - 305001, Rajasthan",
      "phone": "+91-1452622222",
      "type": "Shopping Mall"
    }
  }
];

const hospitals = [
  // Karnataka
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.5806, 12.9344] },
    "properties": {
      "name": "Apollo Hospitals",
      "address": "Bannerghatta Road, Bangalore - 560076, Karnataka",
      "phone": "+91-8026364050",
      "type": "Multispeciality Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [76.6394, 12.3182] },
    "properties": {
      "name": "JSS Hospital",
      "address": "MG Road, Mysore - 570004, Karnataka",
      "phone": "+91-8212548410",
      "type": "Teaching Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [74.8524, 12.8794] },
    "properties": {
      "name": "KMC Hospital",
      "address": "Ambedkar Circle, Mangalore - 575001, Karnataka",
      "phone": "+91-8242422271",
      "type": "Medical College Hospital"
    }
  },

  // Maharashtra
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [72.8397, 19.0995] },
    "properties": {
      "name": "Lilavati Hospital",
      "address": "Bandra Reclamation, Mumbai - 400050, Maharashtra",
      "phone": "+91-2266765555",
      "type": "Multispeciality Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [73.8796, 18.5293] },
    "properties": {
      "name": "Ruby Hall Clinic",
      "address": "Sassoon Road, Pune - 411001, Maharashtra",
      "phone": "+91-2026121234",
      "type": "Multispeciality Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [79.0882, 21.1446] },
    "properties": {
      "name": "Care Hospital",
      "address": "Ramdaspeth, Nagpur - 440010, Maharashtra",
      "phone": "+91-7126632000",
      "type": "Super Speciality Hospital"
    }
  },

  // Delhi NCR
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.2050, 28.5673] },
    "properties": {
      "name": "AIIMS Delhi",
      "address": "Ansari Nagar, New Delhi - 110029",
      "phone": "+91-1126593212",
      "type": "Government Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.1010, 28.5450] },
    "properties": {
      "name": "Fortis Hospital",
      "address": "Sector 62, Gurgaon - 122001, Haryana",
      "phone": "+91-1244962200",
      "type": "Private Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.3372, 28.5950] },
    "properties": {
      "name": "Apollo Hospital Noida",
      "address": "Sector 26, Noida - 201301, Uttar Pradesh",
      "phone": "+91-1202444444",
      "type": "Multispeciality Hospital"
    }
  },

  // Tamil Nadu
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [80.2510, 13.0100] },
    "properties": {
      "name": "MIOT International",
      "address": "Manapakkam, Chennai - 600089, Tamil Nadu",
      "phone": "+91-4422424444",
      "type": "International Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [80.2325, 13.0802] },
    "properties": {
      "name": "Stanley Medical College Hospital",
      "address": "Royapuram, Chennai - 600001, Tamil Nadu",
      "phone": "+91-4425292000",
      "type": "Government Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.0050, 11.0136] },
    "properties": {
      "name": "KG Hospital",
      "address": "Artillery Road, Coimbatore - 641018, Tamil Nadu",
      "phone": "+91-4222212121",
      "type": "Multispeciality Hospital"
    }
  },

  // Kerala
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [76.2890, 9.9970] },
    "properties": {
      "name": "Amrita Institute of Medical Sciences",
      "address": "Ponekkara, Kochi - 682041, Kerala",
      "phone": "+91-4842801234",
      "type": "Medical Institute Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [76.9620, 8.4941] },
    "properties": {
      "name": "KIMS Hospital",
      "address": "Anayara, Thiruvananthapuram - 695029, Kerala",
      "phone": "+91-4713041000",
      "type": "Super Speciality Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [75.7912, 11.2742] },
    "properties": {
      "name": "Baby Memorial Hospital",
      "address": "Indira Gandhi Road, Kozhikode - 673004, Kerala",
      "phone": "+91-4952723272",
      "type": "Private Hospital"
    }
  },

  // Telangana
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [78.3925, 17.4376] },
    "properties": {
      "name": "Apollo Health City",
      "address": "Jubilee Hills, Hyderabad - 500096, Telangana",
      "phone": "+91-4043636363",
      "type": "Multispeciality Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [78.4730, 17.3850] },
    "properties": {
      "name": "Osmania General Hospital",
      "address": "Afzal Gunj, Hyderabad - 500012, Telangana",
      "phone": "+91-4024650000",
      "type": "Government Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [78.5300, 17.4450] },
    "properties": {
      "name": "Yashoda Hospital",
      "address": "Somajiguda, Hyderabad - 500082, Telangana",
      "phone": "+91-4066666666",
      "type": "Super Speciality Hospital"
    }
  },

  // West Bengal
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [88.3670, 22.5411] },
    "properties": {
      "name": "Apollo Gleneagles",
      "address": "Salt Lake, Kolkata - 700054, West Bengal",
      "phone": "+91-3366033300",
      "type": "Multispeciality Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [88.3591, 22.5380] },
    "properties": {
      "name": "AMRI Hospital",
      "address": "Dhakuria, Kolkata - 700031, West Bengal",
      "phone": "+91-3340255555",
      "type": "Private Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [88.3950, 22.6020] },
    "properties": {
      "name": "Peerless Hospital",
      "address": "Panchasayar, Kolkata - 700094, West Bengal",
      "phone": "+91-3340124100",
      "type": "Super Speciality Hospital"
    }
  },

  // Rajasthan
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [75.8132, 26.9117] },
    "properties": {
      "name": "SMS Hospital",
      "address": "Jawahar Lal Nehru Marg, Jaipur - 302004, Rajasthan",
      "phone": "+91-1412560291",
      "type": "Government Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [73.7044, 24.5916] },
    "properties": {
      "name": "GBH American Hospital",
      "address": "Bhilwara Road, Udaipur - 313001, Rajasthan",
      "phone": "+91-2943056000",
      "type": "Multispeciality Hospital"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [74.6333, 26.4490] },
    "properties": {
      "name": "JLN Hospital",
      "address": "Civil Lines, Ajmer - 305001, Rajasthan",
      "phone": "+91-1452432477",
      "type": "Teaching Hospital"
    }
  }
];

const carShowrooms = [
  // Karnataka
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.6010, 12.9765] },
    "properties": {
      "name": "Maruti Suzuki Nexa",
      "address": "Richmond Road, Bangalore - 560025, Karnataka",
      "phone": "+91-8040555555",
      "type": "Maruti Suzuki Dealer"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [76.6380, 12.3252] },
    "properties": {
      "name": "Toyota Showroom",
      "address": "Hunsur Road, Mysore - 570017, Karnataka",
      "phone": "+91-8212456789",
      "type": "Toyota Dealer"
    }
  },

  // Maharashtra
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [72.8705, 19.1157] },
    "properties": {
      "name": "BMW Infinity Cars",
      "address": "Andheri East, Mumbai - 400059, Maharashtra",
      "phone": "+91-2266781234",
      "type": "BMW Dealer"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [73.8567, 18.5204] },
    "properties": {
      "name": "Audi Pune",
      "address": "Shivajinagar, Pune - 411005, Maharashtra",
      "phone": "+91-2025554321",
      "type": "Audi Dealer"
    }
  },

  // Delhi NCR
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.2167, 28.6333] },
    "properties": {
      "name": "Mercedes-Benz Central Star",
      "address": "Mathura Road, New Delhi - 110044",
      "phone": "+91-1145689000",
      "type": "Mercedes-Benz Dealer"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [77.0554, 28.4695] },
    "properties": {
      "name": "Hyundai Showroom",
      "address": "Sohna Road, Gurgaon - 122018, Haryana",
      "phone": "+91-1244056789",
      "type": "Hyundai Dealer"
    }
  },

  // Tamil Nadu
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [80.2345, 13.0604] },
    "properties": {
      "name": "Ford Showroom",
      "address": "Anna Salai, Chennai - 600002, Tamil Nadu",
      "phone": "+91-4423456789",
      "type": "Ford Dealer"
    }
  },

  // Telangana
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [78.4521, 17.4056] },
    "properties": {
      "name": "Kia Motors",
      "address": "Banjara Hills, Hyderabad - 500034, Telangana",
      "phone": "+91-4045678901",
      "type": "Kia Dealer"
    }
  },

  // Kerala
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [76.2860, 9.9700] },
    "properties": {
      "name": "Honda Cars Showroom",
      "address": "Vyttila, Kochi - 682019, Kerala",
      "phone": "+91-4842345678",
      "type": "Honda Dealer"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [76.9560, 8.5090] },
    "properties": {
      "name": "Volkswagen Showroom",
      "address": "Kazhakoottam, Thiruvananthapuram - 695582, Kerala",
      "phone": "+91-4712765432",
      "type": "Volkswagen Dealer"
    }
  }
];

const parks = [
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [72.8777, 19.0760] },
    "properties": {
      "name": "Shivaji Park",
      "address": "Shivaji Park, Dadar West, Mumbai - 400028, Maharashtra",
      "phone": "N/A",
      "type": "Recreational Park"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [85.8245, 20.2961] },
    "properties": {
      "name": "Indira Gandhi Park",
      "address": "Ashok Nagar, Bhubaneswar - 751001, Odisha",
      "phone": "N/A",
      "type": "Public Park"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [88.3639, 22.5726] },
    "properties": {
      "name": "Eco Park",
      "address": "New Town, Kolkata - 700156, West Bengal",
      "phone": "N/A",
      "type": "Urban Eco Park"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [78.4867, 17.3850] },
    "properties": {
      "name": "Indira Park",
      "address": "Lower Tank Bund, Hyderabad - 500080, Telangana",
      "phone": "N/A",
      "type": "Recreational Park"
    }
  },
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [75.7873, 26.9124] },
    "properties": {
      "name": "Central Park",
      "address": "C-Scheme, Jaipur - 302001, Rajasthan",
      "phone": "N/A",
      "type": "City Park"
    }
  }
];


const data = {
  shoppingMalls: shoppingMalls,
  hospitals: hospitals,
  carShowrooms: carShowrooms,
  parks: parks
};