import { Directive , ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomeDirective]'
})

export class CustomeDirectiveDirective {

     //custome directive are classess to add custome behavior/ functionality to element
     //command = ng g d directive_name
     //in angular17 all directive, components are standalone means no nead to register inside the app.module file

    @Input('appCustomeDirective') newText:string='';
    @Input() myColor='';
  constructor(private el:ElementRef) {
    el.nativeElement.style.color="red";
   

    //hide the html element by using 
    // el.nativeElement.style.display="none" . 
   }

   ngOnInit(){
    this.el.nativeElement.innerText= this.newText;
    this.el.nativeElement.style.color=this.myColor;

   }

}
