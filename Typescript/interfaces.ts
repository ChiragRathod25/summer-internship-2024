interface User {
  readonly dbId: number;
  name: string;
  age: number;
  googleId?: string;
  startTrial(): string;
  // startTrial:()=>string     //another syntax for same
  getCoupen(coupenName: string): string;
}
let chirag: User = {
  dbId: 65,
  name: "chirag",
  age: 26,
  googleId: "google.com",
  startTrial() {
    return "started";
  },
  getCoupen(name: "chirag") {
    return name;
  },
};
// chirag.dbId=654; //not modify because it is read only
chirag.age = 21;
console.log(chirag);
console.log(chirag.startTrial());
// console.log(chirag.getCoupen("Chirag Rathod is here"))
console.log(chirag.getCoupen("Coupen Name"));

export {};