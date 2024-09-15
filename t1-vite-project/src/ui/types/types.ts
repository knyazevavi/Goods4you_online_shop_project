import { CartItem } from "../../types/interfaces";

export interface ButtonProps {
    id?: number | undefined;
    href?: string;
    name?: string;
    selectedItems?: CartItem[];
    onClick?: () => void;
    onAdd?: () => void;
    onIncrease?: () => void;
    onDecrease?: () => void;
    quantity?: number;
    flag?: boolean;
    isRemoved?: boolean;
    productIdx?: number[];
}

export interface ButtonCartProps {
    id: number;
    onAdd: () => void;
    onDelete: () => void;
    productIdx?: number[];
}