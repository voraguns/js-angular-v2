import { Component } from "@angular/core"

@Component({
   selector: "main",
   template: `
               <button (click)="next()">{{ status[current]  }}</button>
              `
})
			
export class Main {
   current = 0
   status = [ "Single", "Married", "Divorce" ]
   next() {
     this.current++
     if (this.current >= this.status.length) {
        this.current = 0
     }
   }
}
