import { v4 as uuid } from "uuid";

export const flowers = [
  {
    _id: uuid(),
    name: "Clear Skies",
    blooms: ["delphinium", "hydrangea", "rose"],
    description:
      "Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood.",
    image: "/assets/images/clear_skies.jpeg",
    price: 6994,
    categoryName: "Sympathy",
  },
  {
    _id: uuid(),
    name: "Blue Hydrangea",
    blooms: ["hydrangea"],
    description:
      "Find out why everyone loves Blue Hydrangeas with this gardener's dream. The full blooms are long–lasting and bursting with color making it a treat for anyone looking to bring some life into indoor spaces.",
    image: "/assets/images/blue_hydrangea.webp",
    price: 6994,
    categoryName: "Sympathy",
  },
  {
    _id: uuid(),
    name: "Heaven Sent Floor",
    blooms: ["hydrangea", "lily", "rose", "stock"],
    description:
      "Blessings and prayers sent from above are captured in this stunning lavender and white arrangement. Each gorgeous bloom in our Heaven Sent Floor Basket is designed to bring solace during difficult times.",
    image: "/assets/images/heaven_sent.jpeg",
    price: 8500,
    categoryName: "Sympathy",
  },
  {
    _id: uuid(),
    name: "Cherished Friend",
    description:
      "For the friends who truly feel like family, share your thoughts and love with timeless white flowers. Our Cherished Friend Bouquet is comprised of a striking array of alstroemeria, carnations and roses. Each bloom combines your thoughtful messages with stunning texture.",
    blooms: ["rose", "carnation"],
    price: 7405,
    image: "/assets/images/cherished_friend.jpeg",
    categoryName: "Sympathy",
  },
  {
    _id: uuid(),
    name: "Beyond Blue",
    description:
      "There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason.",
    blooms: ["lily", "rose", "daisy"],
    price: 5994,
    image: "/assets/images/beyond_blue.webp",
    categoryName: "Sympathy",
  },
  {
    _id: uuid(),
    name: "The April",
    description:
      "Tickle them pink with this elegant arrangement of roses, alstroemeria, hypericum berries, and carnations set in a gold–dipped vase. As elegant as a string of pearls, add a touch of class to any room with roses and gerbera daisies.",
    blooms: ["stock", "lily", "hydrangea", "rose", "carnation"],
    price: 11999,
    image: "/assets/images/the_april.webp",
    categoryName: "Sympathy",
  },
  {
    _id: uuid(),
    name: "Hello Sunshine",
    description:
      "Give a dose of sunshine in bloom. This stunning bouquet is teeming with rays of sunflowers, textured snapdragons and darling daisy poms to deliver the perfect pick–me–up for an occasion or as a treat to yourself.",
    blooms: ["daisy", "snapdragon", "sunflower"],
    price: 6096,
    image: "/assets/images/hello_sunshine.webp",
    categoryName: "Birthday",
  },
  {
    _id: uuid(),
    name: "Periwinkle Breeze",
    description:
      "Like a long walk on the beach, this delightful bouquet of roses, alstroemeria, disbud mums, and Limonium will fill them with the joys of spring.",
    blooms: ["stock", "lily", "rose", "chrysanthemum"],
    price: 6664,
    image: "/assets/images/periwinkle_breeze.webp",
    categoryName: "Birthday",
  },
  {
    _id: uuid(),
    name: "Long Stem Pink Rose",
    description:
      "Enjoy the classic beauty of the rose with a playful twist in our Long Stem Pink Rose Bouquet. This arrangement features all pink roses that will look especially pretty in the hands of those you cherish most.",
    blooms: ["rose"],
    price: 8639,
    image: "/assets/images/long_stem_pink_rose.webp",
    categoryName: "Birthday",
  },
  {
    _id: uuid(),
    name: "Fresh Picked Porcelain",
    description:
      "With its beautiful blend of roses, larkspurs, hypericum berries, Queen Anne's Lace, trick dianthus, and Limonium, this artful arrangement could have inspired a Monet masterpiece.",
    blooms: ["rose", "larkspur", "hydrangea"],
    price: 14398,
    image: "/assets/images/fresh_picked_porcelain.webp",
    categoryName: "Birthday",
  },
  {
    _id: uuid(),
    name: "Sunshine Daffodil Bulb",
    description:
      "A sure sign that Spring has sprung is when daffodils begin to bloom. This bright garden of yellow florals is a fitting gift for birthdays, sharing a smile, and delighting your loved ones.",
    blooms: ["daffodil"],
    price: 3620,
    image: "/assets/images/sunshine_daffodil.webp",
    categoryName: "Birthday",
  },
  {
    _id: uuid(),
    name: "Garden of Love",
    description:
      "These stunning blooming plants are arranged in a gorgeous romantic design that's perfect for a special occasion or just because. ",
    blooms: ["lily", "orchid", "kalanchoe"],
    price: 3620,
    image: "/assets/images/garden_of_love.webp",
    categoryName: "Birthday",
  },
  {
    _id: uuid(),
    name: "Sweet & Preety",
    description:
      "The true beauty of this bouquet is within the sweet colors of the flowers. An array of hot pink roses, pale pink alstroemeria and more are set in a glass cylinder vase, making a wonderful gift to light up the face of its recipient.",
    blooms: ["carnation", "rose"],
    price: 4620,
    image: "/assets/images/sweet_pretty.webp",
    categoryName: "Cheer Up",
  },
  {
    _id: uuid(),
    name: "Spirit Basket",
    description:
      "Let them know how much you care with a gorgeous bouquet that features carnations, stock, roses, lilies and Fuji mums. Each bloom is a thoughtful reminder of your support and love, while sitting in a beautifully crafted basket.",
    blooms: ["carnation", "lily", "stock", "rose"],
    price: 8068,
    image: "/assets/images/spirit_basket.webp",
    categoryName: "Cheer Up",
  },
  {
    _id: uuid(),
    name: "Sunshine & Joy",
    description:
      "The color yellow expresses happiness, imagination and fun, as does this garden! The perfect present for anyone on any occasion, this plant is filled to the brim with smiles.",
    blooms: ["kalanchoes", "pothos", "croton"],
    price: 5348,
    image: "/assets/images/sunshine_joy.webp",
    categoryName: "Cheer Up",
  },
  {
    _id: uuid(),
    name: "Blush Crush",
    description:
      "It's just, a little blush! Whoever you're sending this bouquet to, your loved ones are sure to crush hard on these gorgeous pink and white shades.",
    blooms: ["rose", "carnation"],
    price: 5348,
    image: "/assets/images/blush_crush.webp",
    categoryName: "Cheer Up",
  },
  {
    id: uuid(),
    name: "Classic White Calla Lily",
    description:
      "It's just, a little blush! Whoever you're sending this bouquet to, your loved ones are sure to crush hard on these gorgeous pink and white shades.",
    blooms: ["lily"],
    price: 4772,
    image: "/assets/images/white_calla_lily.webp",
    categoryName: "Cheer Up",
  },
  {
    id: uuid(),
    name: "Peace Lily",
    description:
      "Peace lilies are a popular plant for many reasons. If you're a brand new plant parent, these plants both purify the air and are notoriously easy to care for.",
    blooms: ["lily"],
    price: 4772,
    image: "/assets/images/peace_lily.webp",
    categoryName: "Cheer Up",
  },
  {
    id: uuid(),
    name: "Lavender Fields",
    description:
      "Picked fresh from the farm to offer your special recipient a bouquet blooming with a sweet appeal, the Lavender Fields Mixed Flower Bouquet is set to send your warmest greetings to friends and family near and far.",
    blooms: ["daisy", "lavender", "lily"],
    price: 5348,
    image: "/assets/images/lavender_fields.webp",
    categoryName: "Get Well",
  },
  {
    id: uuid(),
    name: "Fresh Peony",
    description:
      "Send a spring favorite to your favorite person with our Fresh Peony Bouquet. The assorted pink peonies are one of the season's prettiest flowers and will arrive in bud form to watch them bloom.",
    blooms: ["peony"],
    price: 8227,
    image: "/assets/images/fresh_peony.webp",
    categoryName: "Get Well",
  },
  {
    id: uuid(),
    name: "Graceful Gardenia",
    description:
      "These elegant bright blooms are designed to celebrate the beauty of life.",
    blooms: ["lily", "rose"],
    price: 8227,
    image: "/assets/images/graceful.webp",
    categoryName: "Get Well",
  },
  {
    id: uuid(),
    name: "Vanilla Blossom",
    description:
      "Send a spring favorite to your favorite person with our Fresh Peony Bouquet. The assorted pink peonies are one of the season's prettiest flowers and will arrive in bud form to watch them bloom.",
    blooms: ["peony"],
    price: 8227,
    image: "/assets/images/vanilla_blossom.webp",
    categoryName: "Get Well",
  },
  {
    id: uuid(),
    name: "Rainbow Garden of Blooms",
    description:
      "There's nothing plain about this beautiful bouquet. Filled with white roses, hydrangeas, gerbera daisies, mini calla lilies, and Limonium, this classic arrangement is the epitome of taste.",
    blooms: ["lily", "rose", "stock", "daisy", "hydrangea"],
    price: 13164,
    image: "/assets/images/rainbow_garden.webp",
    categoryName: "Get Well",
  },
  {
    id: uuid(),
    name: "Marmalade Skies",
    description:
      "Flowers of yellow and green, and pops of orange and purple. Full of color and texture, all you need is love and our Marmalade Skies Bouquet.",
    blooms: ["rose"],
    price: 5348,
    image: "/assets/images/marmalade_skies.webp",
    categoryName: "Get Well",
  },
  {
    id: uuid(),
    name: "Cottagecore",
    description:
      "Romanticize every moment of their life once Cottagecore arrives. Designed with an array of pretty pastel flowers, this bouquet takes them out of their day–to–day and into the countryside.",
    blooms: ["rose", "daisy", "lisianthus"],
    price: 4936,
    image: "/assets/images/cottagecore.webp",
    categoryName: "Apology",
  },
  {
    id: uuid(),
    name: "Mother of Pearl Rose",
    description:
      "Send luminous pale pink roses that will bloom profusely in flushes from Spring to Fall. Wrapped in a burlap covering and tied with an elegant bow, ready to be planted in the garden or kept indoors.",
    blooms: ["rose"],
    price: 6170,
    image: "/assets/images/mother_pearl_rose.webp",
    categoryName: "Apology",
  },
  {
    id: uuid(),
    name: "Bliss White Orchid",
    description:
      "The most popular variety of this plant, the Phalaenopsis orchid makes a great gift for plant lovers and plant beginners alike! White orchids are easy to care for and add a touch of delicate beauty to any home, office or table.",
    blooms: ["orchid"],
    price: 6170,
    image: "/assets/images/bliss_white_orchid.webp",
    categoryName: "Apology",
  },
  {
    id: uuid(),
    name: "Sky Blue Delight",
    description:
      "The hydrangea and ivory rose bouquet exudes an elegant and timeless charm with its combination of delicate hydrangea blooms and pristine ivory roses, blending the lushness of hydrangeas with the purity and sophistication of ivory roses.",
    blooms: ["rose", "hydrangea"],
    price: 4278,
    image: "/assets/images/sky_blue_delight.webp",
    categoryName: "Apology",
  },
  {
    id: uuid(),
    name: "Pink Petals Roselea",
    description:
      "The hydrangea and ivory rose bouquet exudes an elegant and timeless charm with its combination of delicate hydrangea blooms and pristine ivory roses, blending the lushness of hydrangeas with the purity and sophistication of ivory roses.",
    blooms: ["azalea"],
    price: 2879,
    image: "/assets/images/pink_rosalea.webp",
    categoryName: "Apology",
  },
  {
    id: uuid(),
    name: "Belle of the Ball",
    description:
      "Arranged with elegant florals and fragrance, this show-stopping collection of lilies and irises shares the perfect expression for any reason or occasion.",
    blooms: ["iris", "lily"],
    price: 2879,
    image: "/assets/images/belle_ball.webp",
    categoryName: "Apology",
  },
];
