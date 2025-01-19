
import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { tea1, tea2, tea3, customer1, customer2, premium, darjeeling, assam, kerela } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    { bigShoe: tea1 },
    { bigShoe: tea2 },
    { bigShoe: tea3 },
  ];

export const statistics = [
    { value: '10+', label: 'Products' },
    { value: '100+', label: 'Partners' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: premium,
        name: "Luxury Premium Tea",
        price: "$20.20",
    },
    {
        imgURL: darjeeling,
        name: "Darjeeling Tea",
        price: "$23.20",
    },
    {
        imgURL: assam,
        name: "Assam Tea",
        price: "$18.20",
    },
    {
        imgURL: kerela,
        name: "Kerela Tea",
        price: "$15.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Michael David',
        rating: 4.5,
        feedback: "The flavour and the aroma with a bit of sweetness and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Jenny Goggin',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Darjeeling Tea", link: "/" },
            { name: "Premium Darjeeling Tea", link: "/" },
            { name: "Assam Tea", link: "/" },
            { name: "Kerela Tea", link: "/" },
            { name: "Luxury premium Tea", link: "/" },
            { name: "Imported Japanese Tea", link: "/" },
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
            { name: "wellsipstea@gmail.com", link: "mailto:dmchakma47@gmail.com" },
            { name: "+91-8755045430", link: "tel:+91-8755045430" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
