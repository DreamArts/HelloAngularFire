import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  login(success: () => void, failure: (error) => void) {
    // 一旦無条件で成功を返す
    success();
  }
}
