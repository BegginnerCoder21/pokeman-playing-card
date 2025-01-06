import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MonsterType } from '../../utils/monster.utils';
import { PlayingCardComponent } from "../../components/playing-card/playing-card.component";
import { Monster } from '../../models/app.model';
import { MonsterService } from '../../services/monster/monster.service';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { DeleteMonsterConfirmationDialogComponent } from '../../delete-monster-confirmation-dialog/delete-monster-confirmation-dialog.component';

@Component({
  selector: 'app-monster',
  imports: [ReactiveFormsModule, PlayingCardComponent, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent implements OnInit, OnDestroy {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private routeSubscription: Subscription | null = null;
  private fb = inject(FormBuilder);
  private formValueSubscription: Subscription | null = null;
  private monsterService = inject(MonsterService);
  monsterId: number = -1;
  private dialog = inject(MatDialog);
  
  monsterTypes = Object.values(MonsterType);
  formGroup = this.fb.group({
    name: ['', [Validators.required]],
    image: ['', [Validators.required]],
    type: [MonsterType.ELECTRIC, [Validators.required]],
    hp: [0, [Validators.required, Validators.min(1), Validators.max(200)]],
    numberMonster: ['', [Validators.required]],
    attackName: ['', [Validators.required]],
    attackNumber: [0, [Validators.required, Validators.min(1), Validators.max(200)]],
    attackDescription: ['', [Validators.required]]
  });

  monster: Monster = Object.assign(new Monster(), this.formGroup.value);

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((data) => {
          this.monster = Object.assign(new Monster(), data);
    });

    console.log(this.monster);
    
      this.routeSubscription = this.route.params.subscribe((params) => {
        this.monsterId = parseInt(params['id'] ? params['id'] : -1);
        const monsterFound = this.monsterService.get(this.monsterId)
        
        if(monsterFound)
          {
          this.monster = monsterFound;
          this.formGroup.patchValue(this.monster)
        }

      });


  }

  ngOnDestroy(): void {
    this.formValueSubscription?.unsubscribe;
      this.routeSubscription?.unsubscribe;
  }

  navigateBack()
  {
    this.router.navigate(["/home"]);
  }

  submit(event: Event){
    event.preventDefault();
 
    if(this.monsterId == -1)
    {
      
      this.monsterService.add(this.monster)
    }else{
      this.monster.id = this.monsterId;
      this.monsterService.update(this.monster)
    }

   this.navigateBack(); 

  }

  onFileChange(event: any){
      const reader = new FileReader();
      if(event.target.files && event.target.files.length)
      {
        const [file] = event.target.files;
        
        reader.readAsDataURL(file); 
        reader.onload = () => {
          this.formGroup.patchValue({
            image: reader.result as string
          });
        };
      }
  }

  isFieldValid(fileName: string)
  {
      const formControl = this.formGroup.get(fileName);

      return formControl?.invalid && (formControl.dirty || formControl.touched);
  }

  deleteMonster(){
      const dialogRef = this.dialog.open(DeleteMonsterConfirmationDialogComponent);

      dialogRef.afterClosed().subscribe(confirmation => {

        if(confirmation)
        {
          this.monsterService.delete(this.monsterId);
          this.navigateBack();
        }
      })
  }

}
