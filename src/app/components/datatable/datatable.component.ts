import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

export interface UsersData {
  name: string;
  email:string;
  id: number;
}

const ELEMENT_DATA: UsersData[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    { id: 4, name: 'Bob Williams', email: 'bob.williams@example.com' },
    { id: 5, name: 'Emma Davis', email: 'emma.davis@example.com' },
    { id: 6, name: 'Michael Brown', email: 'michael.brown@example.com' },
    { id: 7, name: 'Olivia Wilson', email: 'olivia.wilson@example.com' },
    { id: 8, name: 'Sophia Taylor', email: 'sophia.taylor@example.com' },
    { id: 9, name: 'Matthew Thomas', email: 'matthew.thomas@example.com' },
    { id: 10, name: 'Ava Anderson', email: 'ava.anderson@example.com' },
    { id: 11, name: 'James Martinez', email: 'james.martinez@example.com' },
    { id: 12, name: 'Emily Jackson', email: 'emily.jackson@example.com' },
    { id: 13, name: 'Daniel White', email: 'daniel.white@example.com' },
    { id: 14, name: 'Mia Thompson', email: 'mia.thompson@example.com' },
    { id: 15, name: 'William Garcia', email: 'william.garcia@example.com' },
];

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;

  constructor(public dialog: MatDialog) {}

  openDialog(action: any,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  updateRowData(row_obj: any){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj: any){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
  
}
