//Union 활용예시 // function: login -> success, fail

    //ellie 작성코드
    type SuccessState = {
      result: 'success';
      response: {body: string;};
  }
  type FailState = {
      result:'fail'
      reson: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
      return {response: {body:'logged in'}
  }
}
  //printLoginState(state: LoginState)
  //success -> 🎉 body
  //fail -> 😭 reason

 
  //Ellie 작성코드
  type SuccessState = {response: {body: string;};
  }
  type FailState = {reason: string;
  };
  type LoginState = SuccessState | FailState;

  function printLoginState(state: LoginState) {
      if(state.result === 'success') {
          console.log(`🎉 ${state.response.body}`);
      }else {
          console.log(`😭 ${state.reason}`)
      }
  }
}
