// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Operations = {
	queries:
		| { key: ['settings.get', GetSettingsArgs]; result: Settings | null }
		| { key: ['spaces.get']; result: Array<Spaces> }
		| { key: ['elements.get']; result: Array<Elements> };
	mutations:
		| { key: ['spaces.create']; result: Spaces }
		| { key: ['elements.create', CreateElementDataArgs]; result: null }
		| {
				key: ['spaces.updateSpaceIndexes', UpdateSpaceIndexesArgs];
				result: null;
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  }
		| { key: ['elements.resize', ResizeElementDataArgs]; result: Elements }
		| { key: ['elements.move_element', EditElementData]; result: Elements }
		| { key: ['settings.set', SetSettingsArgs]; result: Settings };
	subscriptions: never;
};

export interface Spaces {
	id: number;
	name: string;
	description: string;
	icon: string;
	color: string;
	index: number;
	createdAt: string;
	updatedAt: string;
	Elements: Array<Elements> | null;
}

export interface EditElementData {
	id: number;
	position_x: number;
	position_y: number;
}

export interface Elements {
	id: number;
	elementType: string;
	content: string;
	space: Spaces | null;
	positionX: number;
	positionY: number;
	createdAt: string;
	updatedAt: string;
	spaceId: number;
	width: string;
	height: string;
}

export interface Element {
	content: string;
	type: string;
}

export interface CreateElementDataArgs {
	space_id: number;
	type: string;
	value: Array<Element>;
}

export interface Settings {
	id: number;
	name: string;
	value: string;
	createdAt: string;
	updatedAt: string;
}

export interface SetSettingsArgs {
	key: string;
	value: string;
}

export interface GetSettingsArgs {
	key: string;
}

export interface ResizeElementDataArgs {
	id: number;
	height: number;
	width: number;
}

export interface UpdateSpaceIndexesArgs {
	spaces: Array<Spaces>;
}
