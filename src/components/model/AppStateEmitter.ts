import { EventEmitter } from '../base/EventEmitter';
import { IProductAPI } from '../../types/components/model/ProductAPI';
import {
    IAppState,
    IAppStateConstructor,
    IAppStateSetting,
    EnumAppStateModals,
    EnumAppStateChanges
} from '../../types/components/model/AppState';
import { TModalChange } from '../../types/components/model/AppStateEmitter';

/**
 * @class AppStateEmitter
 */
export class AppStateEmitter extends EventEmitter {
    public model: IAppState;
    protected previousModal: EnumAppStateModals = EnumAppStateModals.NONE;

    constructor(
        api: IProductAPI,
        settings: Omit<IAppStateSetting, 'onChange'>,
        Model: IAppStateConstructor
    ) {
        super();
        this.model = new Model(api, {
            ...settings,
            onChange: this.onModelChange.bind(this)
        })
    }

    // метод для изменения модели
    protected onModelChange(changed: EnumAppStateChanges) {
		if (changed === EnumAppStateChanges.MODAL) {
            console.log(`${this.previousModal} предыдущее состояние`);
            console.log(`${this.model.openedModal} текущее состояние`);
			this.emit<TModalChange>(changed, {
				previous: this.previousModal,
				current: this.model.openedModal,
			});
			this.emit(this.model.openedModal, {});
        } else {
			this.emit(changed, {});
		}
		this.previousModal = this.model.openedModal;
	}
}
