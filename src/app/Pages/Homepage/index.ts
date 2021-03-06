import { Routes } from "@angular/router";
import { HeaderCompoenent } from "./Header/Header.component";
import { FooterComponent } from "./Footer/Footer.component";
import {
  AboutUsComponent,
  ContactUsComponent,
  CurrentProgramComponent,
  DEIInitiativeComponent,
  HomeComponent,
} from "./Content";

export const HomePageComponents = [
  AboutUsComponent,
  FooterComponent,
  HeaderCompoenent,
  HomeComponent,
  CurrentProgramComponent,
  ContactUsComponent,
  DEIInitiativeComponent,
];

export const HomeRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "CurrentProgram",
    component: CurrentProgramComponent,
  },
  {
    path: "dei",
    component: DEIInitiativeComponent,
  },
  {
    path: "AboutUs",
    component: AboutUsComponent,
  },
  {
    path: "ContactUs",
    component: ContactUsComponent,
  },
];
