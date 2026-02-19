import { Component } from '@angular/core';

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss',
})
export class MyCalculatorComponent {
  public first: number = 1;
  public second: number = 1;
  public operation: string = '+';
  public operations: string[] = ['+', '-', '*', '/'];
  // public result: number | undefined = undefined;
  public result?: number;

  public calc() {}
}
