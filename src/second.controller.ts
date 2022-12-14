import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './Services/app.service';
import { TestRequestDto } from './RequestDto/TestRequestDto';
import { ScopedService } from './Services/scoped.service';

@Controller('v2')
export class SecondController {
  constructor(private readonly appService: AppService, private readonly scopedService: ScopedService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): any{
    return "It Works";
  }

  @Get('test/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  getTestDynamicRoute(@Param('id') id: number): any{
    // With the auto-transformation option enabled, the ValidationPipe will also perform conversion of primitive types.
    // the ValidationPipe will try to automatically convert a string identifier to a number.
    return "It Works:" + id;
  }

  @Post('test')
  @UsePipes(new ValidationPipe({ transform: true }))
  postTest(@Body() testRequest: TestRequestDto): any{
    return "It Works:" + testRequest.email + " " + testRequest.password;
  }

  @Put('test/:id')
  putTest(@Body() body: {name: string}, @Param() params): any{
    return "It Works:"+ params.id + "" + body.name;
  }

  @Delete('test/:id')
  deleteTest(@Param('id', ParseIntPipe) id: number,): any{
    // ValidationPipe can implicitly transform query and path parameters based on the expected type. However, this feature requires having auto-transformation enabled.
    // Alternatively (with auto-transformation disabled), you can explicitly cast values using the ParseIntPipe or ParseBoolPipe (note that ParseStringPipe is not needed because, as every path parameter and query parameter comes over the network as a string by default).
    // Note: To validate the array, create a dedicated class which contains a property that wraps the array, or use the ParseArrayPipe. 
    //  > @Body(new ParseArrayPipe({ items: EntityType }))
    //  > @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' })) 
    //  url/?ids=1,2,3
    // More details: https://docs.nestjs.com/techniques/validation
    return "It Works:"+ id;
  }

  @Get('exceptionpage')
  exceptionTest(): any{
    // custom response
    throw new HttpException({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      error: 'Error'
    }, HttpStatus.INTERNAL_SERVER_ERROR);

    // default response { "statusCode": 500, "message": "Error" }
    // throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
  }

}
