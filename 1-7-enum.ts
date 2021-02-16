{
  //Enum 모바일 클라이언트에서 사용하는 네이티브 프로그래밍에서는 유니온 타입을 표현할수 없기때문에 enum타입을 쓰기도 하지만  이를 제외 다른경우는 유니온 타입으로 대체 가능 함으로 enum은 사용하지 않는것이 좋다.

  //Javascript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY =1;
  const DAYS_ENUM = Object.freeze({'MONDAY': 0, 'TUESDAY': 1,})
  const dayOfToday = DAYS_ENUM.MONDAY;


  //TypeScript //eunm 에 0부터 숫자가 부여된다. ex) Monday =1
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' ;
  enum Days {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
  }

  console.log(Days.Tuesday);
  const day = Days.Friday;
  console.log(day)

  let dayOfweek: DaysOfWeek = 'Monday'




}