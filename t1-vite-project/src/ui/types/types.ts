import { CartItem } from "../../types/interfaces";

export interface ButtonProps {
    id?: number;
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
}