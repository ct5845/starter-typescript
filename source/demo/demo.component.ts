export class DemoComponent {
    constructor(private base: number){}

    demoFunction(a: number, b: number): number{
        return this.base * a + b;
    }
}