import Rating from "@mui/material/Rating";
import Bag from "../assets/img/Bag.webp";
import shirt1 from "../assets/img/shirt1.webp";
import shirt2 from "../assets/img/shirt2.webp";
import jew1 from "../assets/img/jew1.webp";
import jew2 from "../assets/img/jew2.webp";
import jew3 from "../assets/img/jew3.webp";
import jew4 from "../assets/img/jew4.webp";
import elec1 from "../assets/img/elec1.webp";
import elec2 from "../assets/img/elec2.webp";
import elec3 from "../assets/img/elec3.webp";
import elec4 from "../assets/img/elec4.webp";
import elec5 from "../assets/img/elec5.webp";
import elec6 from "../assets/img/elec6.webp";
import wm1 from "../assets/img/wm1.webp";
import wm2 from "../assets/img/wm2.webp";
import wm3 from "../assets/img/wm3.webp";
import wm4 from "../assets/img/wm4.webp";
import wm5 from "../assets/img/wm5.webp";
import wm6 from "../assets/img/wm6.webp";
import jacket1 from "../assets/img/jacket1.webp";

import Bag2 from "../assets/img/Bag2.webp";
import elec1a from "../assets/img/elec1a.webp";
import elec2a from "../assets/img/elec2a.webp";
import elec3a from "../assets/img/elec3a.webp";
import elec4a from "../assets/img/elec4a.webp";
import elec5a from "../assets/img/elec5a.webp";
import elec6a from "../assets/img/elec6a.webp";
import jacket1a from "../assets/img/jacket1a.webp";
import jew1a from "../assets/img/jew1a.webp";
import jew2a from "../assets/img/jew2a.webp";
import jew3a from "../assets/img/jew3a.webp";
import jew4a from "../assets/img/jew4a.webp";
import shirt1a from "../assets/img/shirt1a.webp";
import shirt2a from "../assets/img/shirt2a.webp";
import wm1a from "../assets/img/wm1a.webp";
import wm2a from "../assets/img/wm2a.webp";
import wm3a from "../assets/img/wm3a.webp";
import wm4a from "../assets/img/wm4a.webp";
import wm5a from "../assets/img/wm5a.webp";
import wm6a from "../assets/img/wm6a.webp";


const ProductsD = [ 
  {
    id: 1,
    img: Bag,
    Fullname: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.99",
    productName: "Fjallraven...",
    text: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    catg: "MENS Clothing",
    productRat: "Rating 3.9",
    img2: Bag2,
  },
  {
    id: 2,
    price: "$22.3",
    img: shirt1,
    img2: shirt1a,
    Fullname: "Mens Casual Premium Slim Fit T-Shirts",
    productName: "Mens Casual...",
    text: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight...",
    catg: "MENS Clothing",
    productRat: "Rating 4.1",
  },
  {
    id: 3,
    price: "$ 55.99",
    img: jacket1,
    img2: jacket1a,
    Fullname: "Mens Cotton Jacket",
    productName: "Mens Cotton...",
    text: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as wor...",
    catg: "MENS Clothing",
    productRat: "Rating 4.7 ",
  },
  {
    id: 4,
    price: "$ 15.99",
    img: shirt2,
    img2: shirt2a,
    Fullname: "Mens Casual Slim Fit",
    productName: "Mens Casual...",
    text: "The color could be slightly different between on the screen and in practice. / Please note...",
    catg: "MENS Clothing",
    productRat: "Rating 2.1",
  },
  {
    id: 5,
    price: "$695",
    img: jew1,
    img2: jew1a,
    Fullname:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    productName: "John Hardy...",
    text: "From our Legends Collection, the Naga was inspired by the mythical water dragon that prote...",
    catg: "Jewelery ",
    productRat: "Rating 4.6 ",
  },
  {
    id: 6,
    price: "$168",
    img: jew2,
    img2: jew2a,
    Fullname: "Solid Gold Petite Micropave",
    productName: "Solid Gold...",
    text: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by ...",
    catg: "Jewelery ",
    productRat: "Rating 3.9 ",
  },
  {
    id: 7,
    price: "$9.99",
    img: jew3,
    img2: jew3a,
    Fullname: "White Gold Plated Princess",
    productName: "White Gold...",
    text: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil ..",
    catg: "Jewelery ",
    productRat: "Rating 3",
  },
  {
    id: 8,
    price: "$ 10.99",
    img: jew4,
    img2: jew4a,
    Fullname: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    productName: "Pierced Owl...",
    text: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel...",
    catg: "Jewelery ",
    productRat: "Rating 1.9 ",
  },
  {
    id: 9,
    price: "$ 64",
    img: elec1,
    img2: elec1a,
    Fullname: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    productName: "WD 2TB Eleme...",
    text: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity...",
    catg: "Electronics",
    productRat: "Rating 3.3",
  },
  {
    id: 10,
    price: "$109",
    img: elec2,
    img2: elec2a,
    Fullname: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    productName: "SanDisk SSD...",
    text: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5...",
    catg: "Electronics ",
    productRat: "Rating 2.9 ",
  },
  {
    id: 11,
    price: "$109",
    img: elec3,
    img2: elec3a,
    Fullname:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    productName: "Silicon Power...",
    text: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that ...",
    catg: "Electronics",
    productRat: "Rating 4.8 ",
  },
  {
    id: 12,
    price: "$114",
    img: elec4,
    img2: elec4a,
    Fullname:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive  ",
    productName: "WD 4TB Gaming...",
    text: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with hi...",
    catg: "Electronics ",
    productRat: "Rating 4.8",
  },
  {
    id: 13,
    price: "$ 599",
    img: elec5,
    img2: elec5a,
    Fullname: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    productName: "Acer SB220Q...",
    text: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology....",
    catg: "Electronics",
    productRat: "Rating 2.9 ",
  },
  {
    id: 14,
    price: "$999.99",
    img: elec6,
    img2: elec6a,
    Fullname:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
    productName: "Samsung 49-I...",
    text: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side Q...",
    catg: "Electronics",
    productRat: "Rating 2.2",
  },
  {
    id: 15,
    price: "$56.99",
    img: wm1,
    img2: wm1a,
    Fullname: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    productName: "BIYLACLESEN...",
    text: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100%...",
    catg: " Women's Clothing",
    productRat: "Rating 2.6 ",
  },
  {
    id: 16,
    price: "$29.95",
    img: wm2,
    img2: wm2a,
    Fullname:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    productName: "Lock and Lov...",
    text: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux l...",
    catg: "Women's Clothing",
    productRat: "Rating 2.9 ",
  },
  {
    id: 17,
    price: "$ 39.99",
    img: wm3,
    img2: wm3a,
    Fullname: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    productName: "Rain Jacket...",
    text: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstrin...",
    catg: "Women's Clothing",
    productRat: "Rating 3.8",
  },
  {
    id: 18,
    price: "$ 9.85",
    img: wm4,
    img2: wm4a,
    Fullname: "MBJ Women's Solid Short Sleeve Boat Neck V",
    productName: "MBJ Women's...",
    text: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with",
    catg: "Women's Clothing",
    productRat: "Rating 4.7 ",
  },
  {
    id: 19,
    price: "$ 7.95",
    img: wm5,
    img2: wm5a,
    Fullname: "Opna Women's Short Sleeve Moisture",
    productName: "Opna Women's...",
    text: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk...",
    catg: "Women's  Clothing",
    productRat: "Rating 4.5 ",
  },
  {
    id: 20,
    price: "$12.99",
    img: wm6,
    img2: wm6a,
    Fullname: "DANVOUY Womens T Shirt Casual Cotton Short",
    productName: "DANVOUY Wome...",
    text: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The...",
    catg: "Women's Clothing",
    productRat: "Rating 3.6 ",
  },
];

export default ProductsD;
