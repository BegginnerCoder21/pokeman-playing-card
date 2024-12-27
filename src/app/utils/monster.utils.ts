export enum MonsterType{

    PLANT = 'plant',
	ELECTRIC = 'electric',
	FIRE = 'fire',
	WATER = 'water',
}

export interface IMonterProperties{
    imageUrl: string,
    color: string
}

export const MonsterTypeProperties: {[key: string]: IMonterProperties }= {
    
    [MonsterType.PLANT] : {
        imageUrl: 'assets/icons/plant.png',
		color: 'rgba(135, 255, 124)'
    },
    [MonsterType.WATER] : {
        imageUrl: 'assets/icons/water.png',
		color: 'rgba(118, 234, 255)'
    },
    [MonsterType.FIRE] : {
        imageUrl: 'assets/icons/fire.png',
		color: 'rgb(255, 104, 104)'
    },
    [MonsterType.ELECTRIC] : {
        imageUrl: 'assets/icons/electric.png',
		color: 'rgb(255, 255, 104)'
    },
}