import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { FieldTripInfo } from '../classes/FieldTripInfo';
import { FieldTripInfoModel } from '../interfaces/FieldTripInfoModel';
import { AddRegistration, SetCurrentFieldTrip, SetDateTimeEnded } from './fieldTripInfo.actions';

@State<FieldTripInfoModel>({
	name: 'fieldTripInfo',
	defaults: {
		fieldTripInfo: {
			overseerId: null,
			overseerName: 'Sophus',
			fieldTripId: '123',
			fNumber: 1,
			bNumber: 2,
			municipality: 'Trondheim',
			weather: 'Overskyet',
			participants: 2,
			description: 'Nais med tur.',
			dateTimeStarted: Date.now(),
			dateTimeEnded: null,
			trackedRoute: [],
			registrations: []
		}
	}
})

@Injectable()
export class FieldTripInfoState {

	constructor() {}

	@Selector()
	static getCurrentFieldTripInfo(state: FieldTripInfoModel): FieldTripInfo {
		return state.fieldTripInfo;
	}

	@Action(SetCurrentFieldTrip)
	setCurrentFieldTrip(ctx: StateContext<FieldTripInfoModel>, action: SetCurrentFieldTrip) {
		ctx.setState({
			fieldTripInfo: action.fieldTripInfo,
		});
	}

	@Action(SetDateTimeEnded)
	setDateTimeEnded(ctx: StateContext<FieldTripInfoModel>, action: SetDateTimeEnded) {
		const state = ctx.getState();
		const fieldTripInfo = {...state.fieldTripInfo};
		Object.assign(fieldTripInfo, action.changes);
		ctx.patchState({
			fieldTripInfo
		});
	}

	@Action(AddRegistration)
	addRegistration(ctx: StateContext<FieldTripInfoModel>, action: AddRegistration) {
		const state = ctx.getState();
		if (state.fieldTripInfo.registrations) {
			ctx.setState({
			...state,
				fieldTripInfo: {
					...state.fieldTripInfo,
					registrations: [...state.fieldTripInfo.registrations, action.registration]
				}
			});
		} else {
			ctx.setState({
				...state,
				fieldTripInfo: {
					...state.fieldTripInfo,
					registrations: [action.registration]
				}
			});
		}
	}
}
