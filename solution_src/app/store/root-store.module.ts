import {
  StoreDevtoolsModule,
  StoreDevtoolsOptions,
} from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { rootReducers } from './root.reducers';
import { rootEffects } from './root.effects';

const storeDevToolsOptions: StoreDevtoolsOptions = {
  maxAge: 25,
  logOnly: environment.production,
};

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(rootReducers),
    EffectsModule.forRoot(rootEffects),
    StoreDevtoolsModule.instrument(storeDevToolsOptions),
  ],
})
export class RootStoreModule {}
