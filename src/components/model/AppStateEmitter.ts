import { EventEmitter } from '../base/EventEmitter';
import { IProductAPI } from '../../types/components/model/ProductAPI';
import {
    IAppState,
    IAppStateConstructor,
    IAppStateSetting,
    EnumAppStateModals,
    EnumAppStateChanges
} from '../../types/components/model/AppState';

/**
 * @class AppStateEmitter
 */
export class AppStateEmitter extends EventEmitter {
    public model: IAppState;
    protected previousModal: EnumAppStateModals = EnumAppStateModals.NONE;

    constructor(
        api: IProductAPI,
        settings: IAppStateSetting,
        Model: IAppStateConstructor
    ) {
        super();
        this.model = new Model(api, {
            ...settings,
            onChange: this.onModelChange.bind(this)
        })
    }

    protected onModelChange(changed: EnumAppStateChanges) {
		if (changed === EnumAppStateChanges.MODAL) {
			this.emit(changed, {
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
