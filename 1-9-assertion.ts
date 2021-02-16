//Type Assertions 💩
//Type Assertions 💩 내가 100%타입을 장담할때 사용해야한다.
{
  function jsStrFunc(): any {
  return 'hi';

}

  const result = jsStrfunc();
// (result as string).length;
  console.log((result as string).length);
  console.log((<string>result).length);


  const wrong: any = 5;
  console.log((wrong as Array<nember>).push(1));😱

  function findNumbers(): number[] | undefined {
    return undefined;
}
  const numbers = findNumbers();
  numbers!.push(2);

//버튼이 있는경우가 있고 쿼리로 잡지 못하면 null 인데 진짜 있는게 확실할때 !를 쓰면 button.NodeValue 쓸수있다. !를쓰지 않으면 null 일수도 있기떄문에 .nodeValue 같은거 못씀
  const button = document.querySelector('btn')!;
  console.log(button.nodeVlaue); 
}