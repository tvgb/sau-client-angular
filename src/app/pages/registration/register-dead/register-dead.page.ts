import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { StatusbarService } from 'src/app/shared/services/statusbar.service';
import { RegistrationService } from '../services/registration.service';

@Component({
	selector: 'app-register-dead',
	templateUrl: './register-dead.page.html',
	styleUrls: ['./register-dead.page.scss'],
})

export class RegisterDeadPage {

	submitAttempt = false;
	registerDeadForm: FormGroup;
	invalidText = 'Obligatorisk felt';

	constructor(private navController: NavController,
				         private formbuilder: FormBuilder,
				         private statusBarService: StatusbarService,
				         private regService: RegistrationService) {
		this.registerDeadForm = this.formbuilder.group({
			deadCount: ['', Validators.required],
			comment: [''],
		});
	}

	ionViewWillEnter() {
		this.statusBarService.changeStatusBar(false, true);
	}

	onCompleteRegistration() {
		this.submitAttempt = true;
		if (this.registerDeadForm.valid) {
			this.regService.completeRegistration(undefined,
			this.registerDeadForm.controls.deadCount.value,
			this.registerDeadForm.controls.comment.value);
			this.navController.back();
		}
	}

	navigateBack() {
		this.navController.back();
	}
}
