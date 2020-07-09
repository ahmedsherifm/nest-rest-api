import { CreateItemDto } from './dto/create-item.dto';
export declare class ItemsController {
    findAllItems(): string;
    findOne(param: any): string;
    create(createItemDto: CreateItemDto): string;
    delete(id: any): string;
    update(id: any, updateItemDto: CreateItemDto): string;
}
