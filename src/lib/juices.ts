import green from "@/assets/juice-green.jpg";
import orange from "@/assets/juice-orange.jpg";
import red from "@/assets/juice-red.jpg";
import yellow from "@/assets/juice-yellow.jpg";
import beet from "@/assets/juice-beet.jpg";
import mango from "@/assets/juice-mango.jpg";
import shot from "@/assets/juice-shot.jpg";

export type Juice = {
  name: string;
  tagline: string;
  price: string;
  image: string;
  category: "Cleanses" | "Boosters" | "Wellness Shots";
};

export const juices: Juice[] = [
  { name: "Green Detox", tagline: "Cleanse & Refresh", price: "$6.49", image: green, category: "Cleanses" },
  { name: "Tropical Glow", tagline: "Energy Booster", price: "$6.49", image: orange, category: "Boosters" },
  { name: "Berry Boost", tagline: "Immunity Support", price: "$6.49", image: red, category: "Boosters" },
  { name: "Citrus Kick", tagline: "Vitamin C Power", price: "$6.49", image: yellow, category: "Boosters" },
  { name: "Orange Zing", tagline: "Revive & Energize", price: "$6.49", image: orange, category: "Boosters" },
  { name: "Beet Glow", tagline: "Blood & Skin Health", price: "$6.49", image: beet, category: "Cleanses" },
  { name: "Mango Bliss", tagline: "Tropical Refreshment", price: "$6.49", image: mango, category: "Boosters" },
  { name: "Wellness Shot", tagline: "Daily Immunity", price: "$3.49", image: shot, category: "Wellness Shots" },
];
