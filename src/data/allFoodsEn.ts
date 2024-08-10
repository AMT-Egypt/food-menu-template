import { oneFoodType } from "../types/dataType";
import { burgersEn } from "./burger/burderEn";
import { iceCreamEn } from "./iceCream/iceCreamEn";
import { pastaEn } from "./pasta/pastaEn";
import { allPizzaEn } from "./pizza/pizzaEn";
import { saladEn } from "./salad/saladEn";
import { sushiEn } from "./sushi/sushiEn";

export const allDataEn: oneFoodType[][] = [
    [
        {
            image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D",
            name: "Pizza"
        },
        ...allPizzaEn
    ],
    [
        {
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QnVyZ2VyfGVufDB8fDB8fHww",
            name: "Burger"
        },
        ...burgersEn
    ],
    [
        {
            image: "https://images.unsplash.com/photo-1607247098731-5bf6416d2e8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "sushi"
        },
        ...sushiEn
    ],
    [
        {
            image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFzdGF8ZW58MHx8MHx8fDA%3D",
            name: "Pasta"
        },
        ...pastaEn
    ],
    [
        {
            image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2FsYWR8ZW58MHx8MHx8fDA%3D",
            name: "Salad"
        },
        ...saladEn
    ],
    [
        {
            image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SWNlJTIwQ3JlYW18ZW58MHx8MHx8fDA%3D",
            name: "Ice Cream"
        },
        ...iceCreamEn
    ],
]