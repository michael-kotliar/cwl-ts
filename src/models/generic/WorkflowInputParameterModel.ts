import {ValidationBase} from "../helpers/validation/ValidationBase";
import {Serializable} from "../interfaces/Serializable";
import {ParameterTypeModel} from "../d2sb/ParameterTypeModel";
import {InputParameterTypeModel} from "./InputParameterTypeModel";

export class WorkflowInputParameterModel extends ValidationBase implements Serializable<any> {
    id: string;
    type: InputParameterTypeModel;

    get connectionId(): string {
        return this.id;
    }

    customProps: any = {};

    serialize(): any {
        return null;
    }

    deserialize(attr: any): void {
    }
}