import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Request } from "express";
import { Observable, tap } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest() as Request;
    const url = request.url;
    const body = request.body;
    const query = request.query;
    const params = request.params;
    const headers = request.headers;

    return next
      .handle()
      .pipe(
        tap(() => {
          console.log("\n=======================================")
          console.log(" url    : ", url)
          console.log(" params : ", params)
          console.log(" query  : ", query)
          console.log(" body   : ", body)
          // console.log(" headers: ", headers)
          console.log(` time   : ${Date.now() - now}ms.`)
          console.log("=======================================\n")
        }),
      );
  }
}