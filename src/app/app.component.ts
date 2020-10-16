import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  private profile: any = null;

  ngOnInit(): void {
    this.profile = { bucks: Math.round(Math.random() * 100) };
  }
}
