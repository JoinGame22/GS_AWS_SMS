import { Component, ViewEncapsulation } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


@Component({
    selector     : 'projects',
    standalone   : true,
    templateUrl  : './projects.component.html',
    styleUrls: ['./project.component.css'],
    encapsulation: ViewEncapsulation.None,
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatTabsModule, MatGridListModule, MatCardModule],
})
export class ProjectsComponent
{


    /**
     * Constructor
     */
    constructor()
    {
    }
}
