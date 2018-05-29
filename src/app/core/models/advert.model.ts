import { UserModel } from "./profile.model";

export interface AdvertModel {
    activated_at: string;
    category: number;
    contract_price: boolean;
    currency: number;
    images: ImageModel[];
    is_active: boolean;
    location: number;
    owner: UserModel;
    pk: number;
    price: number;
    text: string;
    theme: string;
}

export interface ImageModel {
    pk: number;
    advert: number;
    file: string;
}
