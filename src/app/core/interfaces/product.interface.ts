export class ProductInterface {
    id: number;
    picture: string;
    title: string;
    description: string;
    details: string;
    price: number;
    inStock: boolean;
    name: string;
    power: number;
    surfaceSoating: string;
    installationType: string;
    type: string;
    typeOfHeatingElement: string;
    capacity: number;
    // ємність
    range: number;
    // діапазон частот
    microphone: string;
    color: string;
    batteryLife: number;
    buttons: number;
    charactecristicList: [
        {
            lable: string;
            value: string;
        }
    ]
}
let productGrill = {
    name: "Tefal",
    id: 1,
    charactecristicList: [
        {
            lable: "Потужність(Вт):",
            value: "300"
        },
        {
            lable: "range",
            value: "100"
        }
    ]

}

let tv = {
    name: "LG",
    id: 1,
    charactecristicList: [
        {
            lable: "Діагональ",
            value: "30"
        }
    ]
}
