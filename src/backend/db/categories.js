import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "Sympathy",
    description:
      "Sending bereavement and sympathy flowers to someone who has suffered a loss is a kind gesture. It will remind them that you are there for them in their time of need. Whichever you choose, you can rest assured that your condolences will be greatly appreciated.",
    image: "/assets/images/sympathy.webp",
  },
  {
    _id: uuid(),
    categoryName: "Birthday",
    description:
      "Sending birthday flowers is a special way to remind your family and friends how happy you are that they are in your life. Serenata Blooms’s brilliant collection of Happy Birthday Flowers are specially designed to celebrate the joy and delight of the special day and is sure to put a smile on the person’s face.",
    image: "/assets/images/bday.webp",
  },
  {
    _id: uuid(),
    categoryName: "Get Well",
    description:
      "Wish your loved ones the best with good luck bouquets fresh from Serenata Blooms. Whether they have a significant life change coming up or could just use some extra luck, bring them some good fortune with a bright, vibrant bouquet from our collection.",
    image: "/assets/images/getwell.webp",
  },
  {
    _id: uuid(),
    categoryName: "Apology",
    description:
      "Say it like you mean it – I'm Sorry – with a selection from our collection of I'm Sorry flowers, plants, and gifts. Apology flowers make apologies easy, but nonetheless sincere.",
    image: "/assets/images/apology.webp",
  },
];
