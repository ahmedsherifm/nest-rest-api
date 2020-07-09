import { Document } from 'mongoose';
export declare class Item extends Document {
    name: string;
    qty: number;
    description: string;
}
export declare const ItemSchema: import("mongoose").Schema<any>;
