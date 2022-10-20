import { Component } from "@angular/core"

@Component({
   selector: "main",
   template: `
               <button (click)="addLove()">Love</button>
               <button (click)="addHate()">Hate</button>
               <p *ngFor="let e of data">{{ e }} </p>
              `
})
			
export class Main {
   // data = [ ]
   data: Array<string> = [ ]
   addLove() { this.data.push("Love") }
   addHate() { this.data.push("Hate") }
}
