import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {throwError} from "rxjs/internal/observable/throwError";
import {Product} from "./product.model";

@Injectable()
export class ProductService {
  private httpClient:HttpClient;

  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient;
  }

  fetch(url:string) {
    return this.httpClient.get<Product[]>(url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any
  {
    return throwError(error.message);
  }
}
