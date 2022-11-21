import { Component, OnInit ,} from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  constructor(private userService :UsersService){}

  

  ngOnInit(): void {
    console.log('ngOnInit login');
  }


  submitData(username:String,password:String) {
    let body = {
      username: username,
      password: password
    }
    console.log('body', body);

    this.userService.postData(body)
      .subscribe(response => {
        console.log('response', response, response.token)
        localStorage.setItem('token', response.token)
        //localStorage.getItem('token')
      })

  }

}

