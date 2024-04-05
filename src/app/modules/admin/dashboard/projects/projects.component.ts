import { Component, ViewEncapsulation } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector     : 'projects',
    standalone   : true,
    templateUrl  : './projects.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
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
