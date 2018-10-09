export interface IdValue {
    id: number;
    value: string;
}

export interface idValueObject<T> {
    id: number;
    value: T;
}

export interface IdValueCollection extends Array<IdValue> { }
export interface IdValueObjectCollection<T> extends Array<idValueObject<T>> { }
