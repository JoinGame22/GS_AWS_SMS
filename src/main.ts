import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from 'app/app.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { appConfig } from 'app/app.config';



bootstrapApplication(AppComponent, {
    providers: [
      provideAuth0({
        domain: 'dev-3tgncbyjqfirede5.us.auth0.com',
        clientId: 'CbQMJDZno82wRRZ056DfmwZhDR358YFr',
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      }),
    ]
  });


bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));



    