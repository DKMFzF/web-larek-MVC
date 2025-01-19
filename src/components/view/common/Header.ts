import { View } from '../../base/View';

import {
	IHeaderData,
	IHeaderSettings,
} from '../../../types/components/view/common/Header';

/**
 * @class HeaderView - шапка с заголовком, описанием и каким-то действием, 
 * например, кнопкой "назад".
 */
export class HeaderView extends View<IHeaderData, IHeaderSettings> {
	set title(value: string) {
		this.setValue(this.settings.title, value);
	}
}
