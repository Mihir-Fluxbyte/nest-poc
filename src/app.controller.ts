import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './Services/app.service';
import { TransientService } from './Services/transient.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly transientService: TransientService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): any{
    return "It Works first";
  }

  @Get('test/:id')
  getTestDynamicRoute(@Param() params): any{
    return "It Works:" + params.id;
  }

  @Post('test')
  postTest(@Body() body: {name: string}): any{
    return "It Works:" + body.name;
  }

  @Put('test/:id')
  putTest(@Body() body: {name: string}, @Param() params): any{
    return "It Works:"+ params.id + "" + body.name;
  }

  @Delete('test/:id')
  deleteTest(@Param() params): any{
    return "It Works:"+ params.id;
  }

}
