const menu = [
  {
    name: "Bacon Burger",
    price: 6,
    description:
      "High quality beef, medium well, with cheese, bacon, and onion on a multigrain bun",
    image:
      "https://houston.culturemap.com/media-library/drive-thru-gourmet-mcdonald-s-bacon-burger.jpg?id=31523615&width=2000&height=1500&quality=85&coordinates=0%2C2%2C0%2C2",
    meat: "beef, pork",
    drink: "n",
    vegetarian: "n",
  },
  {
    name: "French Fries",
    price: 4,
    description: "Long, thin pieces of potato fried in oil; thin and crispy",
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-fries-medium:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
    meat: "none",
    drink: "n",
    vegetarian: "n",
  },
  {
    name: "Chicken Nuggets",
    price: 5,
    description: "Deep-fried, crispy nuggets",
    image:
      "https://www.foodandwine.com/thmb/vTsDJfcGKypX_Xu6KQENyWJGR2g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/British-Woman-Breaks-Chicken-McNugget-Record-FT-BLOG0322-44f5477b01834bc983305c2aaca84946.jpg",
    meat: "chicken",
    drink: "n",
    vegetarian: "n",
  },
  {
    name: "Apple Slices",
    price: 1.5,
    description: "Juicy, red, crunchy slices of apple",
    image:
      "https://assets.epicurious.com/photos/54be81b7e231becc7f3d6e35/master/pass/EP_20141006_masters-2_6x4.jpg",
    meat: "none",
    drink: "n",
    vegetarian: "y",
  },
  {
    name: "Spaghetti & Meatballs",
    price: 5,
    description: "Pasta with beef & pork meatballs with tomato sauce",
    image:
      "https://www.pressurecookrecipes.com/wp-content/uploads/2022/06/instant-pot-spaghetti-and-meatballs.jpg",
    meat: "beef, pork",
    drink: "n",
    vegetarian: "n",
  },
  {
    name: "Caprese Pasta Salad",
    price: 7,
    description:
      "Salad with pasta, slices of mozzerella, tomatoes, basil, and italian dressing",
    image:
      "https://www.foodiecrush.com/wp-content/uploads/2021/05/Caprese-Pasta-Salad-foodiecrush.com-012-500x500.jpg",
    meat: "none",
    drink: "n",
    vegetarian: "y",
  },
  {
    name: "Chicken Burger",
    price: 7,
    description:
      "Crispy, juicy, high-quality chicken, with fresh lettuce and tomatos on a multi-grain bun",
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-deluxe-crispy-chicken-sandwich:product-header-desktop",
    meat: "chicken",
    drink: "n",
    vegetarian: "n",
  },
  {
    name: "Beef Wellington",
    price: 12,
    description:
      "Fillet steak coated with p??t?? and duxelles, wrapped in baked puff pastry",
    image:
      "https://static01.nyt.com/images/2019/12/13/dining/mc-beef-wellington/mc-beef-wellington-articleLarge-v2.jpg",
    meat: "beef",
    drink: "n",
    vegetarian: "n",
  },
  {
    name: "Veggie Burger",
    price: 6,
    description:
      "Burger with soybeans & tofu patty, with tomatoes, lettuce and sharp cheese",
    image:
      "https://minimalistbaker.com/wp-content/uploads/2021/04/Best-Vegan-Burger-SQUARE.jpg",
    meat: "none",
    drink: "n",
    vegetarian: "y",
  },
  {
    name: "Pork Chop",
    price: 8,
    description: "Tender & juicy pork chops",
    image:
      "https://www.lemonblossoms.com/wp-content/uploads/2018/10/Easy-Oven-Baked-Pork-Chops-S1.jpg",
    meat: "pork",
    drink: "n",
    vegetarian: "n",
  },
  {
    name: "Grilled Cheese",
    price: 4,
    description: "Sandwich made with freshly sliced cheese and toasted",
    image:
      "https://www.allrecipes.com/thmb/kIu4UD4ECbNxbPCIG9nUQ9gZP-k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/125434-GrilledCheeseoftheGods-mfs-1x1-067-7eb581d856d246389aa3c169b196046f.jpg",
    meat: "none",
    drink: "n",
    vegetarian: "y",
  },
  {
    name: "Braised Beef Short Ribs ",
    price: 8,
    description:
      "Beef short ribs simmered with red wine sauce and mashed potatoes",
    image:
      "https://cravinghomecooked.com/wp-content/uploads/2020/11/braised-short-ribs-1-2.jpg",
    meat: "beef",
    drink: "n",
    vegetarian: "n",
  },
  {
    name: "Mac and Cheese",
    price: 5,
    description:
      "Macaroni topped with cheese sauce made from cheddar, and baked",
    image:
      "https://makeyourmeals.com/wp-content/uploads/2021/11/featured-baked-mac-and-cheese.jpg",
    meat: "none",
    drink: "n",
    vegetarian: "y",
  },
  {
    name: "Chicken Alfredo",
    price: 10,
    description: "Rich and creamy chicken pasta with hearty Alfredo sauce",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/4/1/FN_chain-restaurant-entrees_Olive-Garden_Chicken-Alfredo_s6x4.jpg.rend.hgtvcom.616.411.suffix/1538685766492.jpeg",
    meat: "chicken",
    drink: "n",
    vegetarian: "n",
  },
  {
    name: "Braised Oxtail",
    price: 10,
    description:
      "Oxtail simmered in red wine and beef stock, with carrots and rosemary",
    image:
      "https://simply-delicious-food.com/wp-content/uploads/2019/10/Slow-braised-oxtail-.jpg",
    meat: "beef",
    drink: "n",
    vegetarian: "n",
  },
  {
    name: "Caesar Salad",
    price: 8,
    description:
      "Fresh romaine lettuce with high-quality olive oil dresssing, with organic eggs, parmesan cheese, and garnished with croutons",
    image:
      "https://www.jessicagavin.com/wp-content/uploads/2019/07/caesar-salad-10-1200.jpg",
    meat: "none",
    drink: "n",
    vegetarian: "y",
  },
  {
    name: "Ice Cream",
    price: 3,
    description:
      "exquisite vanilla, chocolate, strawberry, or matcha ice-cream drizzled with caramal syrup",
    image:
      "https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg",
    meat: "none",
    drink: "n",
    vegetarian: "n",
  },
  {
    name: "Steak",
    price: 11,
    description: "Medium-rare, Premium A5 Wagyu Steak",
    image:
      "https://www.thespruceeats.com/thmb/ZGuD7lAQ4F5LEG_TqU5zuoYpqP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wagyu-beef-vs-kobe-5090422-d779f7674c164ddbac2f01630c90701f.jpg",
    meat: "beef",
    drink: "n",
    vegetarian: "n",
  },
  {
    name: "Frappucino",
    price: 8,
    description:
      "Blended iced coffee, with a premium coffee or cr??me base, and topped with whipped cream",
    image:
      "https://lemonsandzest.com/wp-content/uploads/2021/01/Mocha-Frappuccino-20.jpg",
    meat: "none",
    drink: "y",
    vegetarian: "n",
  },
  {
    name: "Water",
    price: 1,
    description: "premium fresh water",
    image:
      "https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/conversions/b8a1309a-ba53-48c7-bca3-9c36aab2338a-thumb.jpg",
    meat: "none",
    drink: "y",
    vegetarian: "n",
  },
  {
    name: "Lemonade",
    price: 2,
    description: "Freshly squeezed lemonade",
    image:
      "https://i3.wp.com/lmld.org/wp-content/uploads/2022/04/Lemonade-4.jpg",
    meat: "none",
    drink: "y",
    vegetarian: "n",
  },
];

export { menu };
