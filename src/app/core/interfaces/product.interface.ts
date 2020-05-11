export class ProductInterface {
    id: number;
    picture: string;
    title: string;
    description: string;
    details: string;
    price: number;
    inStock: boolean;
    characteristicList: [
        {
            lable: string;
            value: string;
        }
    ]
}