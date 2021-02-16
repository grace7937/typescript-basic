{
    //undefined
    let name : undefined; 💩
    let name : string | undefined;
    name = 'hi';
    name = undefined;
        
    
    //null
    let person: null | null;
    
    
    //unKnown  💩 
    let notSure: unknown = 0;
    notSure = 'hi';
    notSure = 'true';
    notSure = 1;
    
    //any 💩
    let anything: any = 0;
    anything = 'hello';
    
    //void   (아무것도 return 하지 않는 것이 void type)
    function print() : void {
        console.log('hello')
    
    
    // never (에러를 던지거나 while문을 돌때 return이 없으면 never type)
    function throwEroor(message: string): never {
    throw new Error(message);
    while(true){}
    } 
    
    //object 💩 
    let obj: object;
    function acceptSomeObject(obj: object) {}
        acceptSomeObject({ name: 'hahahoho'});
        acceptSomeObject({ animal: 'dog'});
    
    //Javascript
    function jsAdd(num1, num2) { 
        return num1 + num2;
    }
    
    //Typescript 
    function add(num1: number, num2: number): number { 
        return num1 + num2;
    }
    
    
    //Javascript 
    function jsFetchNum(id) {
        //code ...
        //code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }
    
    //Typescript
    function FetchNum(id: string): Promise<number>  {
        //code ...
        //code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    
    }
    
    //Optional parameter (?는 전달받을수도 있고 전달 받지못할수도있다) // lastName: string | undefined 와 다른점은 ?는 생략가능하다 즉 lastNmae을 function parameter 로 전달 하지않아도 에러가 발생하지 않는다.
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    
    printName('Steve');
    printName('Ellie');
    
    
    //Default parameter(prameter 가 없을때 default 값을 설정 할 수 있다.)
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();
    
    
    //Rest parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a,b) => a + b);
    }
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3,4,5));
    
    }