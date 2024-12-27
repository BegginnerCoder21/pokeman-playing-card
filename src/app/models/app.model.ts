import { MonsterType } from "../utils/monster.utils";

export class Monster{

    name:string = "My Monster 2";
    hp: number = 40;
    numberMonster: string = "N°021 Monster";
    attackName: string = "Geo Impact";
    attackDescription: string = "This is a long description of a monster attack.Probably something to do with electricity...";
    attackNumber: number = 60;
    image = "assets/monster.jpg"
    type: MonsterType = MonsterType.ELECTRIC;
}