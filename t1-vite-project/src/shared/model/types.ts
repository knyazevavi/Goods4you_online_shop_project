
export interface CartItem {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    quantity: number;
    discountedTotal: number;
    discountPercentage: number;
    total: number;
}

export interface ProductItem {
    id: number;
    title?: string;
    thumbnail: string;
    price: number;
    description?: string;
    discountPercentage: number;
    images?: string[];
    rating?: number;
    returnPolicy?: string;
    shippingInformation?: string;
    availabilityStatus?: string;
    stock?: number;
    category?: string;
    warrantyInformation?: string;
    tags?: string[];
    quantity?: number;
}

export interface ButtonProps {
    id?: number | undefined;
    href?: string;
    name?: string;
    onClick?: (e: React.FormEvent) => void;
    onAdd?: () => void;
    isRemoved?: boolean;
}

export interface ButtonCartProps {
    id?: number;
    type?: string;
    product: ProductItem;
    onIncrease?: () => void;
    onDecrease?: () => void;
    quantities?: { [key: number]: number };
}

export interface AddControlProps {
    type?: string;
    quantity?: number;
    quantities?: { [key: number]: number };
    onDelete?: () => void;
    onAdd?: () => void;
    id?: number;
}

export interface ButtonControlProps {
    onDelete?: () => void;
    onAdd?: () => void;
    value?: string;
    label: string;
    control: string;
    onIncrease?: () => void;
    onDecrease?: () => void;
}

export interface ErrorObj {
    data: {
        message: string;
    };
    status: number;
}