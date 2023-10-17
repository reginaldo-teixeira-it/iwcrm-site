import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormControl, Validators, UntypedFormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm!: UntypedFormGroup;
    loading!: boolean;

    constructor(private router: Router,
        private titleService: Title,
        private notificationService: NotificationService,
        private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.titleService.setTitle('IWCRM - Login');
        this.authenticationService.logout();
        this.createForm();
    }

    private createForm() {
        const savedUserEmail = localStorage.getItem('savedUserEmail');

        this.loginForm = new UntypedFormGroup({
            email: new UntypedFormControl(savedUserEmail, [Validators.required, Validators.email]),
            password: new UntypedFormControl('', Validators.required),
            rememberMe: new UntypedFormControl(savedUserEmail !== null)
        });
    }

    login() {
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;
        const rememberMe = this.loginForm.get('rememberMe')?.value;

        this.loading = true;
        this.authenticationService
            .login(email.toLowerCase(), password)
            .subscribe(
                data => {
                    if (rememberMe) {
                        localStorage.setItem('savedUserEmail', email);
                    } else {
                        localStorage.removeItem('savedUserEmail');
                    }
                    let dados = localStorage.getItem('savedUserEmail');
                    console.log('----> '+dados);
                    this.router.navigate(['/home']);
                },
                error => {
                  let message="";
                  var result;
                    const errorObj = JSON.parse(error);
                    if (errorObj.hasOwnProperty("errorMessage"))
                    {
                      result = JSON.stringify(error['error']['errorMessage']);
                      if(result.length > 0 )
                      {
                        message = result.replace('"','').replace('"','').trim().trimStart().trimEnd();
                      }
                    }

                    console.log('Retorno : '+result);
                    this.notificationService.openSnackBar(message);
                    this.loading = false;
                }
            );
    }

    resetPassword() {
        this.router.navigate(['/auth/password-reset']);
    }
}
