import type {ITaskType} from "~/types/data/task.type";

export const formattedPriceUtil = (task: ITaskType) => {
    const contractAmount = task.contract?.amount;
    if (contractAmount) {
        return `${contractAmount.toLocaleString()} ₽`;
    }
    const min = task.minPrice;
    const max = task.maxPrice;
    if (min && max) {
        return `${min.toLocaleString()} - ${max.toLocaleString()} ₽`;
    }
    return "Цена не указана";
}