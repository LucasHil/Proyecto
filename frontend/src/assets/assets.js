import HL from './HL.svg'
import HL_png from './HL_png.png'
import align_right from './align_right.svg'
import search from './search.svg'
import shopping_bag from './shopping_bag.svg'
import user from './user.svg'
import menu from './menu.svg'
import chevron_left from './chevron_left.svg'
import heels_and_shoes_hl from './heels_and_shoes_hl.png'
import heels from './heels.png'
import shoes_hl from './shoes_hl.png'
import home_img from './home_img.png'
import sneakers1 from './sneakers1.jpg'
import sneakers2 from './sneakers2.jpg'
import sneakers3 from './sneakers3.jpg'
import sneakers4 from './sneakers4.jpg'
import sneakers5 from './sneakers5.jpg'
import sneakers6 from './sneakers6.jpg'
import sneakers7 from './sneakers7.jpg'
import sneakers8 from './sneakers8.jpg'
import sneakers9 from './sneakers9.jpg'
import sneakers10 from './sneakers10.jpg'
import sneakers11 from './sneakers11.jpg'
import sneakers12 from './sneakers12.jpg'
import sneakers13 from './sneakers13.jpg'
import sneakers14 from './sneakers14.jpg'
import sneakers15 from './sneakers15.jpg'


export const assets ={
    HL,
    HL_png,
    align_right,
    search,
    shopping_bag,
    user,
    menu,
    chevron_left,
    heels_and_shoes_hl,
    heels,
    shoes_hl,
    home_img,
    sneakers1,
    sneakers2,
    sneakers3,
    sneakers4,
    sneakers5,
    sneakers6,
    sneakers7,
    sneakers8,
    sneakers9,
    sneakers10,
    sneakers11,
    sneakers12,
    sneakers13,
    sneakers14,
    sneakers15
}

export const products = [
    {
        _id: "0001",
        name: "Zapatilla Urban X",
        description: "Color gris con detalles negros, suela antideslizante.",
        price: 72500,
        category: "Hombre",
        subCategory: "Zapatilla urbana",
        sizes: ["40", "41", "42"],
        date: "20230112",
        bestsaller: true,
        image: [sneakers1]
    },
    {
        _id: "0002",
        name: "Zapatilla Runner Pro",
        description: "Diseño deportivo, color azul marino.",
        price: 79900,
        category: "Mujer",
        subCategory: "Zapatilla deportiva",
        sizes: ["36", "37", "38"],
        date: "20230810",
        bestsaller: false,
        image: [sneakers2]
    },
    {
        _id: "0003",
        name: "Zapatilla Clásica 90s",
        description: "Estilo retro, blanco con líneas rojas.",
        price: 68500,
        category: "Hombre",
        subCategory: "Zapatilla clásica",
        sizes: ["42", "43", "44"],
        date: "20230522",
        bestsaller: true,
        image: [sneakers3]
    },
    {
        _id: "0004",
        name: "Zapatilla Flex Light",
        description: "Material liviano, transpirable, gris claro.",
        price: 65500,
        category: "Mujer",
        subCategory: "Zapatilla de verano",
        sizes: ["35", "36", "37.5"],
        date: "20230718",
        bestsaller: false,
        image: [sneakers4]
    },
    {
        _id: "0005",
        name: "Zapatilla Trekking Max",
        description: "Ideal para montaña, resistente al agua.",
        price: 112000,
        category: "Hombre",
        subCategory: "Zapatilla outdoor",
        sizes: ["43", "44", "45"],
        date: "20221120",
        bestsaller: true,
        image: [sneakers5]
    },
    {
        _id: "0006",
        name: "Zapatilla Urbana Soft",
        description: "Color negro, suela de goma flexible.",
        price: 68900,
        category: "Mujer",
        subCategory: "Zapatilla urbana",
        sizes: ["37", "38", "39"],
        date: "20230415",
        bestsaller: false,
        image: [sneakers6]
    },
    {
        _id: "0007",
        name: "Zapatilla Skate Pro",
        description: "Diseño robusto, ideal para skateboarding.",
        price: 73500,
        category: "Hombre",
        subCategory: "Zapatilla deportiva",
        sizes: ["40", "41.5", "42.5"],
        date: "20230225",
        bestsaller: true,
        image: [sneakers7]
    },
    {
        _id: "0008",
        name: "Zapatilla Casual Mix",
        description: "Combinación de colores pasteles, estilo moderno.",
        price: 70500,
        category: "Mujer",
        subCategory: "Zapatilla casual",
        sizes: ["36", "37", "38.5"],
        date: "20230609",
        bestsaller: false,
        image: [sneakers8]
    },
    {
        _id: "0009",
        name: "Zapatilla Trail Viento",
        description: "Color verde militar, ideal para senderismo.",
        price: 94500,
        category: "Hombre",
        subCategory: "Zapatilla outdoor",
        sizes: ["44", "45", "46"],
        date: "20230903",
        bestsaller: true,
        image: [sneakers9]
    },
    {
        _id: "0010",
        name: "Zapatilla Nova Fit",
        description: "Color blanco con detalles rosas, suela memory foam.",
        price: 81500,
        category: "Mujer",
        subCategory: "Zapatilla fitness",
        sizes: ["35", "36", "37"],
        date: "20230130",
        bestsaller: false,
        image: [sneakers10]
    },
    {
        _id: "0011",
        name: "Zapatilla Black Motion",
        description: "Negra entera, con suela ergonómica.",
        price: 88000,
        category: "Hombre",
        subCategory: "Zapatilla de invierno",
        sizes: ["42", "43.5", "44"],
        date: "20221102",
        bestsaller: false,
        image: [sneakers11]
    },
    {
        _id: "0012",
        name: "Zapatilla Coral Flow",
        description: "Color coral, fresca y ligera.",
        price: 65900,
        category: "Mujer",
        subCategory: "Zapatilla de verano",
        sizes: ["36", "37", "38"],
        date: "20220715",
        bestsaller: false,
        image: [sneakers12]
    },
    {
        _id: "0013",
        name: "Zapatilla Storm Grip",
        description: "Antideslizante, ideal para lluvia y terrenos húmedos.",
        price: 99000,
        category: "Hombre",
        subCategory: "Zapatilla outdoor",
        sizes: ["43", "44", "45.5"],
        date: "20231101",
        bestsaller: true,
        image: [sneakers13]
    },
    {
        _id: "0014",
        name: "Zapatilla Luna Rosa",
        description: "Color rosa claro, para uso diario.",
        price: 69900,
        category: "Mujer",
        subCategory: "Zapatilla casual",
        sizes: ["35", "36.5", "37"],
        date: "20230305",
        bestsaller: false,
        image: [sneakers14]
    },
    {
        _id: "0015",
        name: "Zapatilla Arctic Run",
        description: "Aislante térmico, ideal para invierno.",
        price: 101500,
        category: "Hombre",
        subCategory: "Zapatilla de invierno",
        sizes: ["44", "45", "46"],
        date: "20221220",
        bestsaller: false,
        image: [sneakers15]
    },
    {
        _id: "0016",
        name: "Zapatilla Sunset Wave",
        description: "Inspirada en atardeceres costeros, colores cálidos.",
        price: 72500,
        category: "Mujer",
        subCategory: "Zapatilla de verano",
        sizes: ["36", "37", "38"],
        date: "20230819",
        bestsaller: true,
        image: [sneakers5]
    },
    {
        _id: "0017",
        name: "Zapatilla High Street",
        description: "Estilo urbano, caña alta, color negro con gris.",
        price: 89500,
        category: "Hombre",
        subCategory: "Zapatilla urbana",
        sizes: ["42", "43", "44"],
        date: "20230401",
        bestsaller: false,
        image: [sneakers5]
    },
    {
        _id: "0018",
        name: "Zapatilla Active Pulse",
        description: "Diseño deportivo, colores vivos.",
        price: 77500,
        category: "Mujer",
        subCategory: "Zapatilla fitness",
        sizes: ["36", "37", "38.5"],
        date: "20230912",
        bestsaller: false,
        image: [sneakers5]
    },
    {
        _id: "0019",
        name: "Zapatilla Titan Step",
        description: "Zapatilla robusta, ideal para uso rudo.",
        price: 102000,
        category: "Hombre",
        subCategory: "Zapatilla outdoor",
        sizes: ["44", "45", "46.5"],
        date: "20220808",
        bestsaller: true,
        image: [sneakers5]
    },
    {
        _id: "0020",
        name: "Zapatilla Candy Pop",
        description: "Diseño juvenil, colores pasteles.",
        price: 68500,
        category: "Mujer",
        subCategory: "Zapatilla casual",
        sizes: ["35", "36", "37.5"],
        date: "20230318",
        bestsaller: false,
        image: [sneakers5]
    }
]
