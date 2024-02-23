/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    {
      id: 1,
      product_name: "Auryn Bangles",
      photo: JSON.stringify([
        "http://localhost:8080/products/AurynBangles/1.jpg",
        "http://localhost:8080/products/AurynBangles/2.jpg",
        "http://localhost:8080/products/AurynBangles/3.jpg",
        "http://localhost:8080/products/AurynBangles/4.jpg",
      ]),
      category: "Bangles",
      description:
        "Elevate your style with our Auryn Bangles Set of 3. Crafted with exquisite detail and luxurious materials, these bangles exude elegance and sophistication. Slip them on for an instant touch of glamour and elevate any outfit. Add a touch of art and exclusivity to your wardrobe.",
      price: 35,
      collection: "Maxima",
      trending: true,
    },
    {
      id: 2,
      product_name: "Bay Chain",
      photo: JSON.stringify([
        "http://localhost:8080/products/BayChain/1.jpg",
        "http://localhost:8080/products/BayChain/2.jpg",
        "http://localhost:8080/products/BayChain/3.jpg",
      ]),
      category: "Chain",
      description:
        "Perfect to pair with the bay hoops to make a dainty set of sophistication.",
      price: 25,
      collection: "Anaash",
      trending: false,
    },
    {
      id: 3,
      product_name: "Chained Choker",
      photo: JSON.stringify([
        "http://localhost:8080/products/ChainedChoker/1.jpg",
        "http://localhost:8080/products/ChainedChoker/2.jpg",
        "http://localhost:8080/products/ChainedChoker/3.jpg",
        "http://localhost:8080/products/ChainedChoker/4.jpg",
      ]),
      category: "Choker",
      description:
        "Pearls are back with a bang! Style your ensemble with our versatile choker, evincing charm and panache.",
      price: 99,
      collection: "Anaash",
      trending: false,
    },
    {
      id: 4,
      product_name: "Eleanor Danglers In Charcoal Black",
      photo: JSON.stringify([
        "http://localhost:8080/products/EleanorDanglersInCharcoalBlack/1.jpg",
        "http://localhost:8080/products/EleanorDanglersInCharcoalBlack/2.jpg",
      ]),
      category: "Danglers",
      description:
        "The Charcoal Black Eleanor Danglers are intricately handcrafted pieces of art that are the quintessence of perfection. These crystal-studded shoulder dusters sophisticatedly sway your iconic charm.",
      price: 35,
      collection: "Maxima",
      trending: true,
    },
    {
      id: 5,
      product_name: "Eleanor Danglers in Lilac",
      photo: JSON.stringify([
        "http://localhost:8080/products/EleanorDanglersInLilac/1.jpg",
        "http://localhost:8080/products/EleanorDanglersInLilac/2.jpg",
        "http://localhost:8080/products/EleanorDanglersInLilac/3.jpg",
        "http://localhost:8080/products/EleanorDanglersInLilac/4.jpg",
      ]),
      category: "Danglers",
      description:
        " The Eleanor Danglers in Lilac is an intricately handcrafted piece of art that is the quintessence of perfection. These crystal-studded shoulder dusters sophisticatedly sway your iconic charm.",
      price: 35,
      collection: "Maxima",
      trending: true,
    },
    {
      id: 6,
      product_name: "Froot Loops Earrings",
      photo: JSON.stringify([
        "http://localhost:8080/products/FrootLoopsEarrings/1.jpg",
        "http://localhost:8080/products/FrootLoopsEarrings/2.jpg",
        "http://localhost:8080/products/FrootLoopsEarrings/3.jpg",
        "http://localhost:8080/products/FrootLoopsEarrings/4.jpg",
      ]),
      category: "Earrings",
      description:
        " Indulge in the colourful and playful charm of our Froot Loops Earrings in Gold. These delightful earrings feature the iconic cereal loops made of luxurious gold, adding a touch of whimsy and sophistication to any outfit. Embrace your inner child while looking effortlessly chic in these one-of-a-kind earrings.",
      price: 45,
      collection: "Maxima",
      trending: false,
    },
    {
      id: 7,
      product_name: "Infinity Nano Bag Blue",
      photo: JSON.stringify([
        "http://localhost:8080/products/InfinityNanoBagBlue/1.jpg",
        "http://localhost:8080/products/InfinityNanoBagBlue/2.jpg",
        "http://localhost:8080/products/InfinityNanoBagBlue/3.jpg",
        "http://localhost:8080/products/InfinityNanoBagBlue/4.jpg",
      ]),
      category: "Bags",
      description:
        "Here to win your hearts with this Infinity Nano Bag, a sophisticated and stylish bag designed for luxury. Crafted in the finest of materials, it is adorned with glimmering details and the beautiful handle finishes off the elegant design. This bag is the perfect addition to add some Amama sparkle to your life and your outfits!",
      price: 100,
      collection: "Maxima",
      trending: true,
    },
    {
      id: 8,
      product_name: "Infinity Nano Bag Gold",
      photo: JSON.stringify([
        "http://localhost:8080/products/InfinityNanoBagGold/1.jpg",
        "http://localhost:8080/products/InfinityNanoBagGold/2.jpg",
        "http://localhost:8080/products/InfinityNanoBagGold/3.jpg",
        "http://localhost:8080/products/InfinityNanoBagGold/4.jpg",
      ]),
      category: "Bags",
      description:
        "Here to win your hearts with this Infinity Nano Bag, a sophisticated and stylish bag designed for luxury. Crafted in the finest of materials, it is adorned with glimmering details and the beautiful handle finishes off the elegant design. This bag is the perfect addition to add some Amama sparkle to your life and your outfits!",
      price: 100,
      collection: "Maxima",
      trending: true,
    },
    {
      id: 9,
      product_name: "Maxima Choker",
      photo: JSON.stringify([
        "http://localhost:8080/products/MaximaChoker/1.jpg",
        "http://localhost:8080/products/MaximaChoker/2.jpg",
        "http://localhost:8080/products/MaximaChoker/3.jpg",
        "http://localhost:8080/products/MaximaChoker/4.jpg",
      ]),
      category: "Choker",
      description:
        "Indulge in luxury with the Maxima Choker. Crafted with intricate details and exquisite materials, this statement piece is designed to elevate any look. Its striking design and impeccable craftsmanship make it a must-have for those with a taste for the finer things in life. Complete your ensemble with this exclusive choker and exude sophistication and elegance.",
      price: 55,
      collection: "Maxima",
      trending: false,
    },
    {
      id: 10,
      product_name: "Maxima Front Back Earrings",
      photo: JSON.stringify([
        "http://localhost:8080/products/MaximaFrontBackEarrings/1.jpg",
        "http://localhost:8080/products/MaximaFrontBackEarrings/2.jpg",
        "http://localhost:8080/products/MaximaFrontBackEarrings/3.jpg",
        "http://localhost:8080/products/MaximaFrontBackEarrings/4.jpg",
      ]),
      category: "Earrings",
      description:
        "Introducing our Maxima Front Back Earrings - the epitome of elegance and luxury. These stunning earrings offer a versatile design with front and back options, allowing you to effortlessly switch up your look. Handcrafted with premium materials, these earrings are the perfect accessory for any occasion.",
      price: 35,
      collection: "Maxima",
      trending: false,
    },
    {
      id: 11,
      product_name: "Maxima love studs",
      photo: JSON.stringify([
        "http://localhost:8080/products/MaximaLoveStuds/1.jpg",
        "http://localhost:8080/products/MaximaLoveStuds/2.jpg",
        "http://localhost:8080/products/MaximaLoveStuds/3.jpg",
        "http://localhost:8080/products/MaximaLoveStuds/4.jpg",
      ]),
      category: "Earrings",
      description:
        "Indulge in the luxurious and exclusive world of Maxima Love Studs. Crafted with precision and elegance, these studs offer a touch of sophistication to any outfit. Elevate your style with the intricate design and superior craftsmanship of Maxima.",
      price: 35,
      collection: "Maxima",
      trending: false,
    },
    {
      id: 12,
      product_name: "Meteor earrings",
      photo: JSON.stringify([
        "http://localhost:8080/products/MeteorEarrings/1.jpg",
        "http://localhost:8080/products/MeteorEarrings/2.jpg",
        "http://localhost:8080/products/MeteorEarrings/3.jpg",
      ]),
      category: "Earrings",
      description:
        "The Mini Meteor Earrings in Champagne Gold are handcrafted with gleaming perfection, exuberating elegant urbanity. The versatility of these earrings heavenly treasures the dazzling look blended with the two-way styling of studs and drop earrings. Embrace the glam and style them gracefully.",
      price: 35,
      collection: "Anaash",
      trending: true,
    },
    {
      id: 13,
      product_name: "Mini Eleanor Studs In Hot Pink",
      photo: JSON.stringify([
        "http://localhost:8080/products/MiniEleanorStudsInHotPink/1.jpg",
        "http://localhost:8080/products/MiniEleanorStudsInHotPink/2.jpg",
        "http://localhost:8080/products/MiniEleanorStudsInHotPink/3.jpg",
        "http://localhost:8080/products/MiniEleanorStudsInHotPink/4.jpg",
      ]),
      category: "Earrings",
      description:
        "Elegantly handcrafted and dressed in 22kt gold plating, The Mini Eleanor Studs features a fancy-cut heart entirely studded with Crystals in a Hot Pink shade. The composition of the piece makes it feather-light yet extravagant in its own poise. This pair of earrings is your perfect cocktail partner. Wear it and be the glam of the events!",
      price: 35,
      collection: "Anaash",
      trending: true,
    },
    {
      id: 14,
      product_name: "Mini Eleanor Studs In Rainbow",
      photo: JSON.stringify([
        "http://localhost:8080/products/MiniEleanorStudsInRainbow/1.jpg",
        "http://localhost:8080/products/MiniEleanorStudsInRainbow/2.webp",
        "http://localhost:8080/products/MiniEleanorStudsInRainbow/3.webp",
        "http://localhost:8080/products/MiniEleanorStudsInRainbow/4.webp",
      ]),
      category: "Earrings",
      description:
        "Elegantly handcrafted and dressed in 22kt gold plating, The Mini Eleanor Studs features a fancy-cut heart entirely studded with Crystals in a Hot Pink shade. The composition of the piece makes it feather-light yet extravagant in its own poise. This pair of earrings is your perfect cocktail partner. Wear it and be the glam of the events!",
      price: 35,
      collection: "Anaash",
      trending: false,
    },
    {
      id: 15,
      product_name: "Nova Hoops",
      photo: JSON.stringify([
        "http://localhost:8080/products/NovaHoops/1.webp",
        "http://localhost:8080/products/NovaHoops/2.webp",
        "http://localhost:8080/products/NovaHoops/3.webp",
      ]),
      category: "Hoops",
      description:
        "Our Nova hoops are an alluring silhouette inspired by natural folds with a pearl strung to it. Handcrafted with 22kt gold plated with a specially customized metal alloy.",
      price: 35,
      collection: "Anaash",
      trending: true,
    },
    {
      id: 16,
      product_name: "Pearl Studs",
      photo: JSON.stringify([
        "http://localhost:8080/products/PearlStuds/1.webp",
        "http://localhost:8080/products/PearlStuds/2.webp",
      ]),
      category: "Earrings",
      description:
        "Indulge in luxury with our Andi Pearl Studs. These elegant studs are perfect for daily wear, adding a touch of sophistication to any outfit. Made with lustrous pearls, they are a timeless addition to your jewellery collection. Elevate your style and feel exclusive with the Andi Pearl Studs.",
      price: 35,
      collection: "Anaash",
      trending: false,
    },
    {
      id: 17,
      product_name: "Scrunchie Handcuff",
      photo: JSON.stringify([
        "http://localhost:8080/products/ScrunchieHandcuff/1.webp",
        "http://localhost:8080/products/ScrunchieHandcuff/2.webp",
        "http://localhost:8080/products/ScrunchieHandcuff/3.webp",
        "http://localhost:8080/products/ScrunchieHandcuff/4.webp",
      ]),
      category: "Bracelet",
      description:
        "Made from luxurious silk, our Scrunchie Handcuff is the perfect combination of fashion and function. Not only does it keep your hair in place, but it also doubles as a subtle and stylish handcuff. Perfect for the sophisticated and stylish individual who values both beauty and practicality.",
      price: 45,
      collection: "Maxima",
      trending: true,
    },
    {
      id: 18,
      product_name: "Snake Layered Chains",
      photo: JSON.stringify([
        "http://localhost:8080/products/SnakeLayeredChains/1.webp",
        "http://localhost:8080/products/SnakeLayeredChains/2.webp",
        "http://localhost:8080/products/SnakeLayeredChains/3.webp",
        "http://localhost:8080/products/SnakeLayeredChains/4.webp",
      ]),
      category: "Chain",
      description:
        "This set of 3 necklaces is the easiest way to achieve your layering goals! With one stone necklace and two textured basic necklaces, this set will give you a full neck without looking crowded or messy.",
      price: 45,
      collection: "Anaash",
      trending: false,
    },
    {
      id: 19,
      product_name: "Veron Loops Earrings",
      photo: JSON.stringify([
        "http://localhost:8080/products/VeronLoopEarrings/1.webp",
        "http://localhost:8080/products/VeronLoopEarrings/2.webp",
        "http://localhost:8080/products/VeronLoopEarrings/3.webp",
        "http://localhost:8080/products/VeronLoopEarrings/4.webp",
      ]),
      category: "Hoops",
      description:
        "Verona loop earrings are meticulously handcrafted with 22kt gold plating that feature intertwined crystal studded rings. These earrings capture the essence of a harmonious free spirit, this piece of jewellery takes the beauty and rawness of hardware.",
      price: 35,
      collection: "Anaash",
      trending: false,
    },
  ]);
};
