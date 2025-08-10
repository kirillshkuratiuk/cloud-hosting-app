import { Component, OnInit } from '@angular/core';
import { Instance, instanceList } from '../models/instance-list';

@Component({
    selector: 'app-instance-list',
    templateUrl: './instance-list.component.html',
    standalone: false
})
export class InstanceListComponent implements OnInit {
    instances: Instance[] = [];

    ngOnInit(): void {
        this.instances = instanceList;
    }

    getStatusText(status: boolean): string {
        return status ? 'Active' : 'Inactive';
    }
}