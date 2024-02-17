// import { icons, images } from "./constants";

const myProfile = {
    name: "ByProgrammers",
    address: "No. 88, Jln Padungan, Kuching"
}

const categories = [
    {
        id: 1,
        name: "Fast Food",
        icon: require("../assets/icons/burger.png")
    },
    {
        id: 2,
        name: "Fruit Item",
        icon: require("../assets/icons/cherry.png")
    },
    {
        id: 3,
        name: "Rice Item",
        icon: require("../assets/icons/rice.png")
    }
]

const hamburger = {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/images/hamburger.png"),
    rating:4.5,
    detailDescription:"A popular spice and vegetables mixed{\n} favoured rice dish which is typically prepared by layering the biryani gravy basmati rice in flat bottom vessel."
}

const hotTacos = {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../assets/images/hot_tacos.png"),
    rating:4.5,
    detailDescription:"A popular spice and vegetables mixed{\n} favoured rice dish which is typically prepared by layering the biryani gravy basmati rice in flat bottom vessel."
}

const vegBiryani = {
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/images/veg_biryani.png"),
    rating:4.5,
    detailDescription:"A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy basmati rice in flat bottom vessel."
}

const wrapSandwich = {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/images/wrap_sandwich.png"),
    rating:4.5,
    detailDescription:"A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy basmati rice in flat bottom vessel."
}

const menu = [
    {
        id: 1,
        name: "Featured",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 2,
        name: "Nearby you",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },
]

const MyCart = [
    {
        id: 1,
        name: "Hamburger",
        description: "Chicken patty hamburger",
        categories: [1, 2],
        price: 15.99,
        calories: 78,
        isFavourite: true,
        image: require("../assets/images/hamburger.png"),
        rating:4.5,
        qty:1
    },
    {
        id: 2,
        name: "Hot Tacos",
        description: "Mexican tortilla & tacos",
        categories: [1, 3],
        price: 10.99,
        calories: 78,
        isFavourite: false,
        image: require("../assets/images/hot_tacos.png"),
        rating:4.5,
        qty:1
    },
    {
        id: 3,
        name: "Veg Biryani",
        description: "Indian Vegetable Biryani",
        categories: [1, 2, 3],
        price: 10.99,
        calories: 78,
        isFavourite: true,
        image: require("../assets/images/veg_biryani.png"),
        rating:4.5,
        qty:1
    },
    {
        id: 4,
        name: "Wrap Sandwich",
        description: "Grilled vegetables sandwich",
        categories: [1, 2],
        price: 10.99,
        calories: 78,
        isFavourite: true,
        image: require("../assets/images/wrap_sandwich.png"),
        rating:4.5,
        qty:1
    },
]

const sizes = [
    {
        id: 1,
        size: "12",
    },
    {
        id: 2,
        size: "14",
    },
    {
        id: 3,
        size: "16",
    },
    {
        id: 4,
        size: "18",
    }
]

const coupons = [
    {
        id: 1,
        name: "Burger King",
        description:"Valid untill 01 Jan 2022",
        status:"Used",
        off:"20% Off",
        image: require("../assets/images/burgerking.png"),
    },
    {
        id: 2,
        name: "KFC",
        description:"Valid untill 01 Jan 2022",
        status:"",
        off:"10% Off",
        image: require("../assets/images/kfc.png"),
    },
    {
        id: 3,
        name: "Pizza Hut",
        description:"Valid untill 01 Jan 2022",
        status:"",
        off:"35% Off",
        image: require("../assets/images/pizzahut.png"),
    },
    {
        id: 4,
        name: "Starbucks",
        description:"Valid untill 01 Jan 2022",
        status:"Used",
        off:"15% Off",
        image: require("../assets/images/starburks.png"),
    },
    {
        id: 5,
        name: "Domino's Pizza",
        description:"Valid untill 01 Jan 2022",
        status:"",
        off:"30% Off",
        image: require("../assets/images/domino.png"),
    },
]

const notification = [
    {
        id: 1,
        title: "Today",
        data:[
            {
                id:1,
                image:require('../assets/images/domino.png'),
                name:"Domino's- Buy 1 get 1 free",
                offer:"Buy 1 get 1 free for small sizes \nuntill Nov 30,2021",
                time:"a few second ago"
            },
            {
                id:2,
                image:require('../assets/images/veg_biryani.png'),
                name:"Veg Biryani- 35% sale today",
                offer:"Buy 1 get 1 free for small sizes \nuntill Nov 30,2021",
                time:"5 min ago"
            }
        ]
    },
    {
        id: 2,
        title: "Yesterday",
        data:[
            {
                id:1,
                image:require('../assets/images/domino.png'),
                name:"Domino's- Buy 1 get 1 free",
                offer:"Buy 1 get 1 free for small sizes \nuntill Nov 30,2021",
                time:"1 day ago"
            },
            {
                id:2,
                image:require('../assets/images/veg_biryani.png'),
                name:"Veg Biryani- 35% sale today",
                offer:"Buy 1 get 1 free for small sizes \nuntill Nov 30,2021",
                time:"1 day ago"
            }
        ]
    },
]
const fromLocs = [
    {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
    },
    {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
    },
    {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
    },
    {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
    },
    {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
    },
    {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
    }
]

export default {
    myProfile,
    categories,
    menu,
    vegBiryani,
    sizes,
    MyCart,
    fromLocs,
    coupons,
    notification
}