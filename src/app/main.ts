import { Component } from "@angular/core"

@Component({
   selector: "main",
   template: `
               <button (click)="nextBlue()">blue</button>
               <button (click)="nextRed()">red</button>
               <button (click)="reset()">Reset</button>
               <h3>Blue : {{ blue }}</h3>
               <h3>Red : {{ red }}</h3>
              `
})
			
export class Main {
   blue = 0
   red = 0
   nextRed() {
     this.red++
   } 
   nextBlue(){
     this.blue++
   }
   reset(){
     this.blue = 0
     this.red = 0
   }
}
