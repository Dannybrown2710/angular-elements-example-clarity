import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'made-with-love',
  template: `
    <ng-template #noUrl>
      {{ name }}
    </ng-template>
     
    <span [style.font-size.em]="size">
      Click the link <span [style.color]="color"></span> 
      <ng-container *ngIf="url && url.length > 0; else noUrl">
        <a (click)='a()'>{{ name }}</a>
      </ng-container>
    </span>
    <div class="header-actions"  (click)='a()'>
        <clr-dropdown>
            <button class="nav-icon" clrDropdownTrigger 
            aria-label="toggle settings menu">
                <clr-icon shape="cog"></clr-icon>
                <clr-icon shape="caret down"></clr-icon>gele
            </button>
            <clr-dropdown-menu *clrIfOpen clrPosition="bottom-left">
                <a href="#" clrDropdownItem>About</a>
                <a href="#" clrDropdownItem>Preferences</a>
                <a href="#" clrDropdownItem>Log out</a>
            </clr-dropdown-menu>
        </clr-dropdown>
    </div>
  `,
  styleUrls: ['./made-with-love.component.scss']
})
export class MadeWithLoveComponent implements OnInit {
  @Input()
  public name: string;

  @Input()
  public url: string;

  @Input()
  public color: string = 'red';

  @Input()
  public size: number = 1;

  @Input()
  public pro: any = {};

  @Output()
  public use = new EventEmitter();

  ngOnInit() {
    if(!this.name || this.name.length === 0) {
      console.error(`Name attribute must be provided!`);
    }
  }

  ngAfterViewInit() {
    console.log(this.pro)
  }

  a(){
    console.log('data from web component', this.pro)
    this.use.next('hey'+this.pro);
  }
}