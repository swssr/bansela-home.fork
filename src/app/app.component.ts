import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  private profile: any = null;
  private tiles: any = [
    {
      name: "Hunters",
      offer: "GET 50 BUCKS",
      img:
        "https://res.cloudinary.com/swssr/image/upload/v1602809680/bansela_assets/uq8vy3olgqt6n5ingh9k.jpg"
    },
    {
      name: "Viceroy",
      offer: "FREE AIRTIME",
      img:
        "https://res.cloudinary.com/swssr/image/upload/v1602813650/bansela_assets/xqddhkxhkzzvtxvjqoue.jpg",
      cta: "GET NOW"
    },
    {
      name: "4TH Street",
      offer: "DISCOUNT OFFER",
      img:
        "https://res.cloudinary.com/swssr/image/upload/v1602814949/bansela_assets/zlnl8gtu6jdlfewuwa1c.jpg"
    },
    {
      name: "Savanna",
      offer: "DISCOUNT OFFER",
      img:
        "https://res.cloudinary.com/swssr/image/upload/v1602815155/bansela_assets/jt7ko5spxnlrryr8qhmr.png",
      color: "#015319"
    },
    {
      name: "",
      offer: "",
      img:
        "https://res.cloudinary.com/swssr/image/upload/v1602820115/bansela_assets/t0yyvwen0grhtv8len7r.jpg",
      color: "#015319",
      cta: "PLAY NOW"
    }
  ];

  ngOnInit(): void {
    this.profile = { bucks: Math.round(Math.random() * 100) };
  }

  openDialog() {}

  setActive() {}
}
