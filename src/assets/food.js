const nigerianMeals = [
    "Jollof Rice",
    "Fried Rice",
    "Egusi Soup",
    "Suya",
    "Pounded Yam",
    "Amala",
    "Ewedu Soup",
    "Efo Riro",
    "Akara",
    "Moin Moin",
    "Chinchinga",
    "Fufu",
    "Ogbono Soup",
    "Banga Soup",
    "Edikang Ikong Soup",
    "Gizdodo",
    "Pepper Soup",
    "Oha Soup",
    "Okra Soup",
    "Yam Porridge",
    "White Soup",
    "African Salad",
    "Semo",
    "Plantain Porridge",
    "Achu",
    "Boli",
    "Achara Soup",
    "Boiled Plantains",
    "Groundnut Sauce",
    "Coconut Rice",
    "Ekpang Nkukwo",
    "Ikokore",
    "Semolina",
    "Owo Soup",
    "Porridge Yam and Plantain",
    "Starch",
    "Stewed Beans",
    "Ukodo",
    "Vegetable Soup",
    "Waakye",
    "Boiled Yam",
    "Garden Egg Sauce",
    "Ji Mmiri Oku",
    "Bgidi",
    "Ofe Owerri",
    "Sakasaka",
    "Tuwo Shinkafa",
    "Kilishi",
    "Gbegiri Soup",
    "Ofada Rice",
    "Ayamase Stew",
    "Coconut Jollof Rice",
    "Adalu (Beans and Corn Porridge)",
    "Ewa Agoyin",
    "Fried Plantains",
    "Egg Sauce",
    "Peppered Snail",
    "Fisherman Soup",
    "Ora Soup",
    "Vegetable Sauce",
    "Ojojo (Yam Fritters)",
    "Cocoyam",
    "Abak Atama Soup",
    "Groundnut Soup",
    "Plantain Fufu",
    "Peppered Okro Soup",
    "Egg Fritters",
    "Oatmeal Swallow",
    "Jollof Spaghetti",
    "Yellow Soup",
    "Uziza Sauce",
    "Fresh Fish",
    "Boiled Unripe Plantains",
    "Ugba Sauce",
    "Ofe Uha Soup",
    "Ekuru",
    "Ata Dindin",
    "Coconut Egusi Soup",
    "Porridge Beans and Plantain",
    "Agidi Jollof",
    "Nni Oka (African Yam Porridge)",
    "Egusi ain Pottage",
    "Ewa Riro",
    "Cabbage Swallow",
    "Plantain Pancakes",
    "Ofe Ugba (Oil Bean Soup)",
    "Porridge Yam and Smoked Fish",
    "Ademe",
    "Pounded Plantain (Plantain Fufu)",
    "Lafun (Cassava Fufu)",
    "Wheat Swallow",
    "Akpu (Cassava Swallow)",
    "Plantain Amala",
    "Unripe Plantain Fufu",
    "Plantain Semo",
    "Maize Swallow",
    "Bambara Nut Swallow",
    "Potato swallow",
    "Ogi (Pap)",
    "Corn swallow",
    "Millets Swallow",
    "Kunu (A Nigerian Pap)",
    "Sweet Potato swallow",
    "Cocoyam Swallow",
    "Plantain Lafun",
    "Plantain Starch",
    "Acha (Fonio) Swallow",
    "Brown Rice Swallow",
    "Barley Swallow",
    "Guinea Corn Swallow",
    "Black Soup (Obe Ewedu)",
    "Egusi Ijebu",
    "Egusi Soup with Okazi",
    "Nsala Soup",
    "Oha Soup with Cocoyam",
    "Afang Soup with Waterleaf",
    "Ogbono Soup with Ugwu",
    "Igbo Ora Soup",
    "Oha Soup with Achi",
    "Ogbono Soup with Spinach",
    "Afang Soup with Oha",
    "Edikang Ikong Soup with Afang",
    "Ogbono Soup with Oha",
    "Bitterleaf Soup with Egusi",
    "Okra Soup with Uziza",
    "Ogbono Soup with Uziza",
    "Afang Soup with Afia Efere",
    "Ijebu Garri Soup",
    "Afang Soup with Edikang Ikong",
    "Oha Soup with Ogbono",
    "Okra Soup with Ora",
    "Efo Riro with Ijebu Garri",
    "Groundnut Soup with Okazi",
    "Ogbono Soup with Uha",
    "indomie",
    "Fried Spaghetti",
    "Spaghetti Jollof",
    "Spaghetti Carbonara",
    "Spaghetti Bolognese",
    "Spaghetti Stir-Fry",
    "Spaghetti and Tomato Stew",
    "Coconut Spaghetti",
    "Spaghetti and Meatballs",
    "Spaghetti Alfredo",
    "Spaghetti Aglio e Olio",
    "Shrimp Sauce",
    "Chicken Sauce",
    "Spaghetti Pepper Soup",
    "Peanut Sauce",
    "Noodle Stir-Fry",
    "Curry Sauce",
    "Noodle with Chicken Stir-Fry",
    "Noodle with Shrimp Alfredo",
    "Noodle with Vegetable Sauce",
    "Noodle with Egg Sauce",
    "Noodle with Groundnut Sauce",
    "Noodle with Peas",
    "Noodle with Carrot Sauce",
    "Noodle with Corned Beef Sauce",
    "Noodle with Spinach Sauce",
    "Noodle with Sardine Sauce",
    "Noodle with Curry Sauce",
    "White Rice",
    "Banga Rice",
    "Asun Jollof Rice",
    "Mixed Vegetable Rice",
    "Party Jollof Rice",
    "Gizdodo",
    "Ewa Agoyin",
    "Coconut Fried Rice",
    "Ayamase Stew",
    "Native Jollof Rice",
    "Stir-fried Rice",
    "Chicken Fried Rice",
    "Beef and Mushroom Rice",
    "Curry Rice",
    "Mixed Rice",
    "Pineapple Fried Rice",
    "Egg Fried Rice",
    "Moi Moi",
    "Seafood Fried Rice",
    "Vegetable Fried Rice",
    "Mushroom Sauce",
    "Buttered Rice",
    "Fried Rice with Shrimp",
    "Jambalaya",
    "Gizzard Stew",
    "Omelette Fried Rice",
    "Beef Stew",
    "Fish Stew",
    "Mushroom Stew",
    "Gizzard Sauce",
    "Macaroni Jollof",
    "Macaroni and Cheese",
    "Macaroni and Tomato Sauce",
    "Macaroni Stir-Fry",
    "Creamy Macaroni and Chicken",
    "Spicy Macaroni and Vegetables",
    "Macaroni and Tuna Salad",
    "Macaroni and Beef Stroganoff",
    "Macaroni and Mixed Vegetables",
    "Macaroni and Sausage",
    "Macaroni and Minced Meat Sauce",
    "Macaroni and Bolognese Sauce",
    "Macaroni Alfredo",
    "Macaroni Carbonara",
    "Macaroni and Vegetable Curry",
    "Macaroni",
    "Coleslaw Salad",
    "Macaroni",
    "Macaroni and Peas",
    "Macaroni and Corned Beef",
];


const nigerianMacaroniMeals = [
    
    "Macaroni and Tomato Stew",
    "Macaroni and Egusi Soup",
    "Macaroni and Okra Soup",
    "Macaroni and Egusi Soup",
    "Macaroni and Ogbono Soup",
    "Macaroni and Ewedu Soup",
    "Macaroni and Oha Soup",
    "Macaroni and Afang Soup",
    "Macaroni and Edikang Ikong Soup",
    "Macaroni and White Soup",
    "Macaroni and Pepper Soup",
    "Macaroni and Groundnut Soup",
    "Macaroni and Banga Soup",
    "Macaroni and Ora Soup",
    "Macaroni and Nsala Soup",
    "Macaroni and Abak Atama Soup",
    "Macaroni and Black Soup (Obe Ewedu)",
    "Macaroni and Ofe Owerri",
    "Macaroni and Onugbu Soup (Bitterleaf Soup)",
    "Macaroni and Efo Riro",
    "Macaroni and Ofe Nsala (White Soup)",
    "Macaroni and Pepper Soup",
    "Macaroni and Groundnut Soup",
    "Macaroni and Achara Soup",
    "Macaroni and Ewedu Soup",
    "Macaroni and Egusi Ijebu",
    "Macaroni and Egusi Soup with Okazi",
    "Macaroni and Nsala Soup",
    "Macaroni and Ofe Akwu (Banga Soup)",
    "Macaroni and Oha Soup with Cocoyam",
    "Macaroni and Afang Soup with Waterleaf",
    "Macaroni and Uha Soup",
    "Macaroni and Ogbono Soup with Ugwu",
    "Macaroni and Atama Soup",
    "Macaroni and Igbo Ora Soup",
    "Macaroni and Oha Soup with Achi",
    "Macaroni and Ogbono Soup with Spinach",
    "Macaroni and Afang Soup with Oha",
    "Macaroni and Edikang Ikong Soup with Afang",
    "Macaroni and Ogbono Soup with Oha",
    "Macaroni and Bitterleaf Soup with Egusi",
    "Macaroni and Efo Riro with Uziza",
    "Macaroni and Okra Soup with Uziza",
    "Macaroni and Ogbono Soup with Uziza",
    "Macaroni and Afang Soup with Afia Efere",
    "Macaroni and Ijebu Garri Soup",
    "Macaroni and Ewedu Soup with Amala",
    "Macaroni and Afang Soup with Edikang Ikong",
    "Macaroni and Oha Soup with Ogbono",
    "Macaroni and Okra Soup with Ora",
    "Macaroni and Efo Riro with Ijebu Garri",
    "Macaroni and Groundnut Soup with Okazi",
    "Macaroni and Ogbono Soup with Uha",
    "Macaroni and Nkwobi Soup",
    "Macaroni and Ewedu Soup with Pounded Yam",
    "Macaroni and Bitterleaf Soup with Eba",
    "Macaroni and Achara Soup with Semolina",
    "Macaroni and Oha Soup with Fufu",
    "Macaroni and Ogbono Soup with Wheat",
    "Macaroni and Afang Soup with Garri",
    "Macaroni and Nsala Soup with Pounded Yam",
    "Macaroni and Okra Soup with Semo",
    "Macaroni and Egusi Soup with Starch",
    "Macaroni and Edikang Ikong Soup with Amala",
    "Macaroni and Pepper Soup with Semolina",
    "Macaroni and Ofe Akwu with Pounded Yam",
    "Macaroni and Efo Riro with Semo",
    "Macaroni and Ogbono Soup with Fufu",
    "Macaroni and Groundnut Soup with Pounded Yam",
    "Macaroni and Okra Soup with Wheat",
    "Macaroni and Bitterleaf Soup with Starch",
    "Macaroni and Oha Soup with Semo",
    "Macaroni and Afang Soup with Wheat",
    "Macaroni and Ogbono Soup with Plantain",
    "Macaroni and Ewedu Soup with Semolina",
    "Macaroni and Edikang Ikong Soup with Eba",
    "Macaroni and Nkwobi Soup with Pounded Yam",
    "Macaroni and Ofe Owerri with Fufu",
    "Macaroni and Achara Soup with Wheat",
    "Macaroni and Pepper Soup with Garri",
    "Macaroni and Banga Soup with Semolina",
    "Macaroni and Oha Soup with Starch",
    "Macaroni and Ogbono Soup with Semo",
    "Macaroni and Afang Soup with Pounded Yam",
    "Macaroni and Ewedu Soup with Amala",
    "Macaroni and Egusi Soup with Pounded Yam",
    "Macaroni and Nkwobi Soup with Semolina",
    "Macaroni and Ofe Akwu with Wheat",
    "Macaroni and Oha Soup with Fufu",
    "Macaroni and Nsala Soup with Plantain",
    "Macaroni and Efo Riro with Wheat",
    "Macaroni and Groundnut Soup with Starch",
    "Macaroni and Ogbono Soup with Eba",
    "Macaroni and Afang Soup with Garri",
    "Macaroni and Ogbono Soup with Semolina",
    "Macaroni and Edikang Ikong Soup with Wheat",
    "Macaroni and Ofe Owerri with Plantain",
  ];
  
  console.log(nigerianMacaroniMeals);
  
  


  

  



  

  
  

  