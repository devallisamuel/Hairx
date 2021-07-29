
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
public isScreenSmall:boolean;
constructor(private breakpointObserver:BreakpointObserver) { }

ngOnInit(): void {
  this.breakpointObserver
    // .observe([Breakpoints.XSmall]);
  .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
  .subscribe((state:BreakpointState) => {
    this.isScreenSmall = state.matches;
  });
}
}