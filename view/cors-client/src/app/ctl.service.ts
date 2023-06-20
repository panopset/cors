import { Injectable, isDevMode } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CtlService {
  baseURL = ""
  hiThere = <HiThere>{}

  constructor(private http: HttpClient) {
    if (isDevMode()) {
     this.baseURL = "http://localhost:8080/ctl"
    } else {
     this.baseURL = "https://something.com/ctl"
    }
  }

  getApiResult() {
      let options = {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
      };
      this.http.get<HiThere>(this.baseURL + "/helloApi", options)
      .subscribe(
        hiThere => {
          this.hiThere = hiThere
        },
        error => {
         // Normally bad practice to expose error info, but for tutorial this is fine.
         this.hiThere = {id: error.message}
        }
      )
  }
}

// Companion Object is ctl/src/main/kotlin/com/panopset/cors/HelloWorldController.HiThere
export interface HiThere {
 id: String
}
