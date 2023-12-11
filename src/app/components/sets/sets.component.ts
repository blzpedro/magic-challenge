import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { Booster, Card, } from 'src/app/models/Booster';
import { Sets, Set } from 'src/app/models/Sets';
import { MtgService } from 'src/app/services/mtg.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent implements OnInit {
  setsList: Set[] | undefined;
  errorToFoundBooster = false;
  creatureCards: Card[] = []

  constructor(public mtgService: MtgService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.handleSets()
  }

  handleSets(){
    this.mtgService.setsResponse$.subscribe((sets: Sets | undefined) => {
      this.creatureCards = []
      this.setsList = sets?.sets
    });
  }

  getBoosterBySet(set: Set, firstCall = true){
    this.mtgService.showSpinner()
    this.openSnackBar('Abrindo seus boosters. Aguarde...', 'center')
    if(this.creatureCards.length >= 30 && !firstCall) {
      this._snackBar.dismiss()
      this.mtgService.hideSpinner()
      return
    }

    this.mtgService.getBoosterBySetId(set.code).subscribe(res => {
      const cards = res.body?.cards || []
      const filteredCreatureCards = cards?.filter(card => card.types?.includes('Creature'))
      if(filteredCreatureCards.length){
        const remainingCards = 30 - this.creatureCards.length;
        const cardsToAdd = filteredCreatureCards.slice(0, remainingCards);
        this.creatureCards.push(...cardsToAdd);
      }
      this.getBoosterBySet(set, false)
    }, (error) => {
      console.log(error)
      this.openSnackBar('Não foi possível encontrar um booster para esse set. Escolha outro.')
      this._snackBar.dismiss()
      this.mtgService.hideSpinner()
    }, () => {
      if(this.creatureCards.length >= 30 && !firstCall){
        this._snackBar.dismiss()
        this.mtgService.hideSpinner()
      }
    })
  }

  openSnackBar(msg: string, position: MatSnackBarHorizontalPosition = 'left') {
    this._snackBar.open(msg, 'X', {horizontalPosition: position});
  }
}
