const numbers = [1, 2, 3];

console.log(numbers.map(i => i + 1));
console.log(numbers.reduce((total, amount) => total + amount));

const strings = ['asdf', 'uuuu'];

console.log(strings.map(i => i.toUpperCase()));

console.log(strings.filter(s => s.startsWith('a')));

const data = [
  {
    brand: 'porsche',
    model: '911'
  },
  {
    brand: 'ferrari',
    model: '458'
  }
];

console.log(data.filter(d => d.brand === 'ferrari'));
console.log(
  data.filter(d => d.brand === 'ferrari').map(d => d.brand.toUpperCase())
);
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const data$_ = of(data);

let message = [] as string[];

const data$ = of(data)
  .pipe(map(cars => cars.map(car => `${car.brand} ${car.model}`)))
  .subscribe(cars => (message = cars));

console.log(message);

interface A {
  name: string;
}

interface B extends A {
  firstName: string;
}

declare let f1: (x: A) => void;
declare let f2: (x: B) => void;

// f1 = f2 //not allow bivariance
// f2 = f1

// class A {
//   public field1: number
// }

class B {
  public field1: number = 1;
}

const arr: number[] = [1, 2, 3]
arr.push(4)
console.log(arr)
arr.pop()


console.log(arr)

let string1 : string = ``