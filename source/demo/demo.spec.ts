import {DemoComponent} from "./demo.component";

describe("Demo Component", () => {
   describe("Demo Function", () => {
      it('1 * 2 + 2 = 4', () => {
         let dc = new DemoComponent(1);

         let res = dc.demoFunction(2,2);

         expect(res).toBe(4);
      });
   });
});