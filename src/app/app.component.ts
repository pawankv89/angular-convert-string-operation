import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'project';

  ngOnInit(): void {
    const responseRuleset = null;
    if (this.isString(responseRuleset)){
      // String type
    }

    // Type String
    const string = String(responseRuleset);

    // Type String
    const string1 = string.concat('&', 'T');

  }
 

  isString(value: any) {
    return typeof value === 'string' || value instanceof String;
  }
}
