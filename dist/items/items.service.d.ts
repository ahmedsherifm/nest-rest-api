import { Model } from 'mongoose';
import { Item } from './schemas/item.schema';
import { CreateItemDto } from './dto/create-item.dto';
export declare class ItemsService {
    private itemModel;
    constructor(itemModel: Model<Item>);
    findAll(): Promise<Item[]>;
    findOne(id: string): Promise<Item>;
    create(item: CreateItemDto): Promise<Item>;
    delete(id: string): Promise<Item>;
    update(id: string, item: CreateItemDto): Promise<Item>;
}
