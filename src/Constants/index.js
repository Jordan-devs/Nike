import { FaGithub } from "react-icons/fa";
import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    rating: 4.7,
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    rating: 4.5,
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    rating: 4.6,
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
    rating: 4.5,
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    id: "1",
    customerName: "Sarah Johnson",
    feedback: "This product transformed our workflow completely.",
    imgURL: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
  },
  {
    id: "2",
    customerName: "Michael Chen",
    feedback: "Excellent solution with great performance metrics.",
    imgURL: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
  },
  {
    id: "3",
    customerName: "Emily Rodriguez",
    feedback: "Our design process became much more efficient.",
    imgURL: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5,
  },
  {
    id: "4",
    customerName: "David Wilson",
    feedback: "Reduced our development time significantly.",
    imgURL: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
  },
  {
    id: "5",
    customerName: "Jessica Kim",
    feedback: "Perfect solution for our growing startup.",
    imgURL: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    id: "6",
    customerName: "Robert Taylor",
    feedback: "The security features are outstanding.",
    imgURL: "https://randomuser.me/api/portraits/men/68.jpg",
    rating: 5,
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+2349120860508", link: "tel:+2349120860508" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
