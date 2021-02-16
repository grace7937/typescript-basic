{
  //Intersection Types: & 둘다 넣어줘야함

  type Student = {
      name: string;
      score: number;
  };

  type Worker = {
      employeeId: number;
      work: () => void;
  }

  function internWork(person: Student & Worker) {
      console.log(person.name, person.employeeId, person.work());
  }

  internWork({
      name: 'ellie',
      score: 100,
      employeeId: 111,
      work:() => {},
});



}