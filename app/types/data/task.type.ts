import type {IBaseType} from "~/types/data/base.type";
import type {IContractType} from "~/types/data/contract.type";

export interface ITaskType extends IBaseType {
    contract?: IContractType
}