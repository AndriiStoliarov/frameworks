import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface CalcGroup {
  first: CalcVar;
  second: CalcVar;
  operation: CalcOperations;
}

interface CalcVar {
  value: number;
  modificator: CalcModifiers;
}

enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/',
}

enum CalcModifiers {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  square = 'square',
}

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss',
})
export class MyCalculatorComponent {
  public calcOperations = CalcOperations;
  public calcModifiers = CalcModifiers;
  // public result: number | undefined = undefined;
  public result?: number;

  public calc() {
    switch (this.operation) {
      case '+':
        this.result = this.first + this.second;
        break;
      case '-':
        this.result = this.first - this.second;
        break;
      case '*':
        this.result = this.first * this.second;
        break;
      case '/':
        this.result = this.first / this.second;
        break;
    }
  }
}
