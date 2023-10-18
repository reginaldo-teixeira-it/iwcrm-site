import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';
// Models
import { User } from '../../../core/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css' ]
})

export class UserListComponent implements AfterViewInit {
  [x: string]: any;
  displayedColumns: string[] = [ 'Id', 'name', 'userName','password','email','role'];
  dataSource = new MatTableDataSource<User>([]);


  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;
  users: User[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private userService: UserService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('IWCRM - Users List');
    this.logger.log('Users loaded');
    this.notificationService.openSnackBar('Users loaded');


    //Chame service.getAll() para obter os dados
    this.userService.getAll().subscribe((data: User[]) => { // Corrigindo a tipagem aqui
      this.users = data; // Atribuir os dados retornados à propriedade users
      this.dataSource = new MatTableDataSource(this.users); // Atualize a dataSource
      this.dataSource.sort = this.sort;
      console.log(data);
    });

    setTimeout(() => {
      this.notificationService.openSnackBar('Welcome!');
    });
  }
}
