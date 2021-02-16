{
  // Type Aliases
  type Text = string;
  const name: Text = 'ellie';
  const adress: Text = 'korea';

  type Num = number;

  type Student = {
      name: string;
      age: number;
  };

  const person: Student = {
      name: 'ellie',
      age: 12,
  };
  
  //String Literal Types
  type Name = 'name';
  let ellie: Name;

  ellie: 'name';

  type JSON = 'json';
  const j: JSON = 'json';
}