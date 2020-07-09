import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './schemas/item.schema';
export declare class ItemsController {
    private itemsService;
    constructor(itemsService: ItemsService);
    findAllItems(): Promise<Item[]>;
    findOne(param: any): Promise<Item>;
    create(createItemDto: CreateItemDto): Promise<Item>;
    delete(id: any): Promise<Item>;
    update(id: any, updateItemDto: CreateItemDto): Promise<Item>;
}
