"use strict";
(self["webpackChunkngrx_io_example"] = self["webpackChunkngrx_io_example"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _book_list_books_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-list/books.service */ 2452);
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-list/book-list.component */ 3737);
/* harmony import */ var _book_collection_book_collection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-collection/book-collection.component */ 6406);




class AppComponent {
  onAdd(bookId) {
    const book = this.books.find(book => book.id === bookId);
    if (this.bookCollection.indexOf(book) > -1) {
      return;
    }
    this.bookCollection.push(book);
  }
  onRemove(bookId) {
    this.bookCollection = this.bookCollection.filter(book => book.id !== bookId);
  }
  constructor(booksService) {
    this.booksService = booksService;
    this.books = [];
    this.bookCollection = [];
  }
  ngOnInit() {
    this.booksService.getBooks().subscribe(books => {
      this.books = books;
      console.log(this.books);
    });
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_book_list_books_service__WEBPACK_IMPORTED_MODULE_0__.GoogleBooksService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 2,
      consts: [[1, "book-list", 3, "books", "add"], [1, "book-collection", 3, "books", "remove"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Available Books");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-book-list", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("add", function AppComponent_Template_app_book_list_add_2_listener($event) {
            return ctx.onAdd($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "My Collection");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-book-collection", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("remove", function AppComponent_Template_app_book_collection_remove_5_listener($event) {
            return ctx.onRemove($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("books", ctx.books);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("books", ctx.bookCollection);
        }
      },
      dependencies: [_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_1__.BookListComponent, _book_collection_book_collection_component__WEBPACK_IMPORTED_MODULE_2__.BookCollectionComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-list/book-list.component */ 3737);
/* harmony import */ var _book_collection_book_collection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-collection/book-collection.component */ 6406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);






class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
      //StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
      _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_1__.BookListComponent, _book_collection_book_collection_component__WEBPACK_IMPORTED_MODULE_2__.BookCollectionComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
    //StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
  });
})();

/***/ }),

/***/ 6406:
/*!**************************************************************!*\
  !*** ./src/app/book-collection/book-collection.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookCollectionComponent": () => (/* binding */ BookCollectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);



function BookCollectionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookCollectionComponent_div_0_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const book_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.remove.emit(book_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Remove from Collection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.volumeInfo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" by ", book_r1.volumeInfo.authors, "");
  }
}
class BookCollectionComponent {
  constructor() {
    this.books = [];
    this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  static {
    this.ɵfac = function BookCollectionComponent_Factory(t) {
      return new (t || BookCollectionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookCollectionComponent,
      selectors: [["app-book-collection"]],
      inputs: {
        books: "books"
      },
      outputs: {
        remove: "remove"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "book-item", 4, "ngFor", "ngForOf"], [1, "book-item"], ["data-test", "remove-button", 3, "click"]],
      template: function BookCollectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookCollectionComponent_div_0_Template, 7, 2, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3737:
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookListComponent": () => (/* binding */ BookListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);



function BookListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookListComponent_div_0_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const book_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.add.emit(book_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add to Collection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.volumeInfo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" by ", book_r1.volumeInfo.authors, "");
  }
}
class BookListComponent {
  constructor() {
    this.books = [];
    this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  static {
    this.ɵfac = function BookListComponent_Factory(t) {
      return new (t || BookListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookListComponent,
      selectors: [["app-book-list"]],
      inputs: {
        books: "books"
      },
      outputs: {
        add: "add"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "book-item", 4, "ngFor", "ngForOf"], [1, "book-item"], ["data-test", "add-button", 3, "click"]],
      template: function BookListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookListComponent_div_0_Template, 7, 2, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2452:
/*!********************************************!*\
  !*** ./src/app/book-list/books.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleBooksService": () => (/* binding */ GoogleBooksService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);



class GoogleBooksService {
  constructor(http) {
    this.http = http;
  }
  getBooks() {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(books => books.items || []));
  }
  static {
    this.ɵfac = function GoogleBooksService_Factory(t) {
      return new (t || GoogleBooksService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GoogleBooksService,
      factory: GoogleBooksService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ 7435);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);



_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;
  // Otherwise, log the boot error
}).catch(err => console.error(err));
/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/

/***/ }),

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 4924);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map