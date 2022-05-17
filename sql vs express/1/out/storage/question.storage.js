"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nanoid_1 = require("nanoid");
let questions = [
    {
        id: (0, nanoid_1.nanoid)(),
        question: 'kim darsni tshunmadi?',
        variants: [
            { text: "Abror", isRight: true },
            { text: "Olimjon", isRight: false },
            { text: "Javohir", isRight: false },
        ]
    },
    {
        id: (0, nanoid_1.nanoid)(),
        question: 'kim darsni tshunmadi?',
        variants: [
            { text: "Abror", isRight: true },
            { text: "Olimjon", isRight: false },
            { text: "Javohir", isRight: false },
        ]
    },
    {
        id: (0, nanoid_1.nanoid)(),
        question: 'kim darsni tshunmadi?',
        variants: [
            { text: "Abror", isRight: true },
            { text: "Olimjon", isRight: false },
            { text: "Javohir", isRight: false },
        ]
    },
    {
        id: (0, nanoid_1.nanoid)(),
        question: 'kim darsni tshunmadi?',
        variants: [
            { text: "Abror", isRight: false },
            { text: "Olimjon", isRight: false },
            { text: "Javohir", isRight: true },
        ]
    }
];
