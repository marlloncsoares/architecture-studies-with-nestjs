import { Controller, Get } from '@nestjs/common';

@Controller('users')
export default class UserController {
  @Get()
  hello() {
    return 'Hello';
  }
}
