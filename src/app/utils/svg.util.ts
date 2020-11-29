import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
    const imgDir = 'assets/svg';

    iconRegistry.addSvgIcon('myinfo', sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/icn_myinfo.svg`))
        .addSvgIcon('payroll', sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/icn_payroll.svg`))
        .addSvgIcon('benefits', sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/icn_benefits.svg`))
        .addSvgIcon('reminder', sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/icn_reminder.svg`))
        .addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/icn_settings.svg`))
        .addSvgIcon('dashboard', sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/icn_dashboard.svg`))
        .addSvgIcon('onboarding', sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/icn_onboarding.svg`))
        .addSvgIcon('performance', sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/icn_performance.svg`))
        .addSvgIcon('send-invite', sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/icn_send-invite.svg`))
        .addSvgIcon('user-delete', sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/icn_user-delete.svg`))
        .addSvgIcon('hr_calendar', sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/icn_hr_calendar.svg`))
        .addSvgIcon('organization', sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/icn_organization.svg`))
        .addSvgIcon('user-inactivate', sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/icn_user-inactivate.svg`));
};
