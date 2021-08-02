import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-paginal',
  templateUrl: './paginal.component.html',
  styles: [
  ]
})
export class PaginalComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  nombre: string = 'Manuel';
  segundos: number = 0;
  timerSubscription!: Subscription;

  constructor() { 
    console.log('constructor');
    
  }
  

  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription=interval(1000).subscribe(i=>{
      this.segundos = i;
    })
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    
  }

  ngOnDestroy(): void {
    if(this.timerSubscription){
      this.timerSubscription.unsubscribe();
      console.log('TIMER LIMPIADO');
      
    }
    
  }

  guardar(){

  }

}
