import { Component } from "@angular/core"

@Component({
   selector: "main",
   template: `
               <input #task>
               <button (click)="add(task)">Add</button>
               <p *ngFor="let e of list"> {{ e }} </p>
              `
})
			
export class Main {
   list: Array<string> = [ ] 
   add(input : any) {
     this.list.push(input.value)
     input.value = ""
   }
}
