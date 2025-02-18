// "use strict";
// var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
//     var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
//     if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
//     else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
//     return c > 3 && r && Object.defineProperty(target, key, r), r;
// };
// exports.__esModule = true;
// exports.HomeComponent = void 0;
// var core_1 = require("@angular/core");
// var feather_icons_1 = require("feather-icons");
// // data
// var data_1 = require("./data");
// var HomeComponent = /** @class */ (function () {
//     function HomeComponent(titleService) {
//         this.titleService = titleService;
//         // landingDemos: Demo[] = [];
//         // pagesDemos: Demo[] = [];
//         // authDemos: Demo[] = [];
//         this.features = [];
//     }
//     HomeComponent.prototype.ngOnInit = function () {
//         this.titleService.setTitle("Buqipi | La solución que necesitas, prueba ahora gratis");
//         this._fetchData();
//     };
//     HomeComponent.prototype.ngAfterViewInit = function () {
//         // feather icon
//         feather_icons_1["default"].replace();
//     };
//     HomeComponent.prototype._fetchData = function () {
//         // this.landingDemos = LANDINGDEMOS;
//         // this.pagesDemos = PAGESDEMOS;
//         // this.authDemos = AUTHDEMOS;
//         this.features = data_1.features;
//     };
//     HomeComponent = __decorate([
//         core_1.Component({
//             selector: 'app-home-page',
//             templateUrl: './home.component.html',
//             styleUrls: ['./home.component.scss']
//         })
//     ], HomeComponent);
//     return HomeComponent;
// }());
// exports.HomeComponent = HomeComponent;
"use strict";