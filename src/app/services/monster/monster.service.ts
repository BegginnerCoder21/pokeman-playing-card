import { Injectable } from '@angular/core';
import { Monster } from '../../models/app.model';
import { MonsterType } from '../../utils/monster.utils';

@Injectable({
  providedIn: 'root'
})

export class MonsterService {

  monsters: Monster[] = [];
  currentId: number = 0;

  constructor() {

    this.load();
    
   }

   private save(){

    localStorage.setItem("monsters", JSON.stringify(this.monsters));
   }

   private load(){

    const monstersData = localStorage.getItem("monsters");
    
    if(monstersData)
    {
      this.monsters = JSON.parse(monstersData!).map((monster: any) => Object.assign(new Monster(), monster));
      this.currentId = Math.max(...this.monsters.map((monster) => monster.id)); // ...[1,9,3,5,7] => Math.max(1,9,3,5,7) => 9
    }else{

        this.init();
        this.save();
    }
   }

   private init()
   {
    this.monsters = [];
   
    const monster1 = new Monster();
    monster1.id = this.currentId++;
    monster1.name = "Pika pika";
    monster1.hp = 87;
    monster1.numberMonster = "N°001 Monster";
    monster1.attackName = "Destruction";
    monster1.attackNumber = 60;
    monster1.attackDescription = "Ceci est un test de fonctionnalité 1";
    this.monsters.push(monster1);
 

    const monster2 = new Monster();
    monster2.id = this.currentId++;
    monster2.name = "Dracaufeu";
    monster2.hp = 57;
    monster2.numberMonster = "N°002 Monster";
    monster2.attackName = "kameha meha";
    monster2.attackNumber = 91;
    monster2.image = 'assets/monster3.jpg'
    monster2.type = MonsterType.FIRE
    monster2.attackDescription = "Ceci est un test de fonctionnalité 2";
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.id = this.currentId++;
    monster3.name = "Salamèche";
    monster3.hp = 66;
    monster3.numberMonster = "N°003 Monster";
    monster3.attackName = "kameha";
    monster3.type = MonsterType.PLANT;
    monster3.image = 'assets/monster4.jpg'
    monster3.attackNumber = 58;
    monster3.attackDescription = "Ceci est un test de fonctionnalité 2";
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.id = this.currentId++;
    monster4.name = "Saquedeneu";
    monster4.hp = 82;
    monster4.numberMonster = "N°004 Monster";
    monster4.attackName = "kameha";
    monster4.type = MonsterType.WATER;
    monster4.image = 'assets/monster2.jpg'
    monster4.attackNumber = 23;
    monster4.attackDescription = "Ceci est un test de fonctionnalité 2";
    this.monsters.push(monster4);

    const monster5 = new Monster();
    monster5.id = this.currentId++;
    monster5.name = "Fantominus";
    monster5.hp = 98;
    monster5.numberMonster = "N°0005 Monster";
    monster5.attackName = "kameha";
    monster5.type = MonsterType.PLANT;
    monster5.image = 'assets/monster5.jpg'
    monster5.attackNumber = 75;
    monster5.attackDescription = "Ceci est un test de fonctionnalité 2";
    this.monsters.push(monster5);
   }

  getAll(): Monster[] {

    return this.monsters.map((monster) => monster.copy());
  }

  get(id:number): Monster | undefined {

    const monster = this.monsters.find((monster) => monster.id === id);

    return monster ? monster.copy() : undefined;
  }

  add(addedMonster: Monster) {

    const monsterCopy = addedMonster.copy();

    monsterCopy.id = this.currentId++;
    this.monsters.push(monsterCopy);
    this.save();
    return monsterCopy;
  }


  update(updatedMonster: Monster)
  {
    const monsterCopy = updatedMonster.copy();
    const monsterIndex = this.monsters.findIndex((monster) => monster.id === monsterCopy.id);

    if(monsterIndex !== -1){
      this.save();
      return this.monsters[monsterIndex] = monsterCopy.copy();
    }

    return console.log("Monstre non trouvé !")
  }

  delete(deleteMonsterId: number)
  {
    const monsters = this.monsters.filter((monster) => monster.id !== deleteMonsterId);
    this.save();
    return monsters;
  }

}
