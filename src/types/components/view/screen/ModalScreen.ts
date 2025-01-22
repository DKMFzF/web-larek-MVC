export interface IModalScreenErrorInfo {
    message: string;
	isError: boolean;
}

export interface IModalScreenStatusIsActive {
    isActive: boolean;
}

export interface IModalScreenStatusIsDisabled {
    isDisabled: boolean;
}

export interface IModalScreenChangeSettings<T> {
    onChange: (data: T) => void;
}

export interface IModalScreenSelectSettings<T> {
    onSelect: (data: T) => void;
}

export interface IModalScreenSettings {
    onClose: () => void;
	onNext: () => void;
}
