{
  //Array 
  const fruits: string[] = ['apple', 'banana']
  const scores:Array<number> = [1,2,3]  // 이렇게 쓰는것보다는 일관성 있게 number[] 가 더좋다 readonly 에서는 이거 밖에 못쓰니까
  const score:number[] = [1,2,4]

  function print(fruits: readonly string[]) {

  }

  //Tuple (가독성이 떨어지기 때문에 interface, type alias, class로 대체해서 사용하는 것이 좋다.)

  let student: [string, number];

  student = ['Ellie', 123];

  const [name, age] = student;

}