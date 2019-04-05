import { NgModule, Optional, SkipSelf } from '@angular/core';
import { mockBackendProvider } from './mock-backend/mock-backend';
import { StorageService } from './services/storage.service';
import { AuthorizatedGuard } from './guards/authorizated.guard';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [FlexLayoutModule],
  exports: [FlexLayoutModule],
  providers: [StorageService, AuthorizatedGuard, mockBackendProvider],
  bootstrap: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
