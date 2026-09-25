export const kenyaKnowledge = {
  general: {
    keywords: ['hello', 'hi', 'hey', 'jambo','sasa'],
    response:{
      sw: `🇰🇪 Karibu kwa msaidizi wako wa GHRIS!
Ninaweza kukusaidia na:

• 🔑 Kubadilisha password
• 📄 Kupakua payslip
• 📄 Pakia hati
• 🔒 Kufungua account
• ⚠️ Kusuluhisha 'Changamoto ya Kuingia kwenye Mfumo'
• ⚠️ Kusuluhisha 'Mfumo hautambui'
• ⚠️ Hitilafu ya Seva 404 / Hitilafu ya HTTP 504
• 💡 Kusuluhisha 'Makubaliano ya Kazi'
• 📅 Kutatua 'Tarehe ya Kwanza ya Kazi'
• 📞 Kuwasiliana na msaidizi

Nisaidie kwa kuandika swali lako hapa chini.`,
      en: `Welcome to your GHRIS assistant.
  I can guide you to:

• 🔑 Change password
• 📄 Download payslip
• 📄 Upload Documents
• 🔒 Register
• ⚠️ Resolve 'System Challenge'
• ⚠️ Resolve 'System does not recognize'
• ⚠️ 'Server Error 404/HTTP Error 504' issues
• 💡 Resolve 'Terms of Engagement'
• 📅 Resolve 'Date of First Appointment'
• 📞 Contact helpdesk

Proceed by typing your question or clicking one of the buttons and clinking send.`

    } 
  },
  register: {
    keywords: ['register', 'registration', 'kujiandikisha', 'regist', 'login', 'log-in'],
    response: {
      sw: `📄 Maelekezo ya Kujisajili:

1. Nenda kwenye portal ya GHRIS
2. Ingia upande wako wa kushoto wa rangi ya buluu
3. Bonyeza "New Employee? Register Here"
4. Andika Namba ya Mfanyakazi, Kitambulisho (ID), KRA PIN na jina la ukoo kimakinifu
5. Jaza tarehe za kuzaliwa na kuanza kazi kati ya vingine
6. Andika password utakayokumbuka bila alama
7. Bonyeza 'Submit'`,
      en: 
      `📄 How to register:

1. Go to the GHRIS portal
2. Click on the blue log-in interface to your left
3. Click on the "New Employee? Register Here" link below the 'Log In' button
4. Fill the UPN no., ID no., KRA PIN and surname correctly
5. Fill in the date of birth and date of first appointment among other things
6. Fill out and confirm the password you want without symbols
7. Click 'Submit'`
}
  },
  uploadDocuments : {
    keywords: ['documents', 'upload'],
    response:{
      sw: `📄 Maelekezo ya Kupakia Hati:

1. Nenda kwenye portal ya GHRIS
2. Ingia upande wako wa kulia wa rangi ya kijani
3. Andika Namba ya Kitambulisho (ID) kwenye User ID bila kuweka password na itafika mahali pa kujaza maelezo yako
4. Andika Namba ya Mfanyakazi, Kitambulisho (ID), KRA PIN na jina la ukoo kimakinifu pamoja na nenosiri la msingi
 (default password) ili upate nafasi ya kuweka nenosiri ambalo utatumia kupakia hati zako kwenye GHRIS.
5. Bonyeza 'Submit'
6. Rudi kwenye upande wako wa kulia wa rangi ya kijani wa GHRIS portal.
7. Ingia kutumia ID no. na neno siri ulilosajili
8. Pakia hati kama kitambulisho, cheti ya KRA PIN, cheti ya kuzaliwa na cheti cha kibali vikiwa katika umbizo ya PDF 
na picha ya pasipoti ikiwa kwenye umbizo ya JPEG
9. Hakikisha kisha bonyeza 'Submit to HR'`, 

en: `📄 How to Upload Documents:

1. Go to the GHRIS portal
2. Click to log-in to your right on the green interface
3. Enter your ID no. and the system will take you to another page to capture your details.
4. Enter your ID no., KRA PIN, Surname and default password among other details accurately.
 Enter and confirm your new password without symbols
5. Click 'Submit'
6. Go back to GHRIS and click on the log-in interface to your right green side.
7. Log in using your ID no. and the password you registered.
8. Upload documents like ID, KRA PIN certificate and Birth Certificate copy in PDF and let the passport JPEG format
9. Confirm and click 'Submit to HR.'`
} 
  },
  
  password: {
    keywords: ['password', 'forgot', 'reset', 'change', 'sahau', 'badilisha', 'nywila'],
    response: {
      sw: `🔑 Maelekezo ya Kubadilisha Password:

1. Nenda kwenye portal ya GHRIS
2. Ingia upande wako wa kushoto wa rangi ya buluu
3. Bonyeza "Forgot Your Password"
4. Andika Namba ya Mfanyakazi, Kitambulisho (ID), KRA PIN na jina la ukoo kimakinifu
5. Jaza tarehe za kuzaliwa na kuanza kazi kati ya vingine
6. Andika password utakayokumbuka bila alama
7. Bonyeza 'Submit'`,
en: `🔑 How to reset password:

1. Go to the GHRIS portal
2. Log in to the left blue side
3. Click on the "Forgot your Password" link below the "Log In" button
4. Enter your UPN, ID no., KRA PIN and surname correctly
5. Jaza tarehe za kuzaliwa na kuanza kazi kati ya vingine
6. Enter password and confirm without symbols.
7. Click "Submit"`}
  },

  timeOutError: {
    keywords: ['system challenge', 'timeout'],
    response: {
      sw: `⚠️ Kusuluhisha 'System Challenge':

1. Futa historia ya mtandao (clear all browser history)
2. Tumia mtandao wenye kasi zaidi; badilisha kutoka kwa Wifi utumie data
3. Badilisha kivinjari unachotumia (badilisha kati ya Google Chrome, Mozilla Firefox and Microsoft Edge)
4. Badilisha kifaa unachotumia (badilisha kati ya simu, kipakatalishi na tarakilishi).`,
en: `⚠️ To resolve System Access Challenge error try any of these:

1. Clear all browser history
2. Change internet connection source from wi-fi to data and vice versa
3. Change browsers between Google Chrome, Mozilla Firefox and Microsoft Edge etc
4. Change the device between smart phone,  laptop and desktop.`
}
  },
  DOFA: {
    keywords: ['first appointment', 'date of first appointment'],
    response: {
      sw: `📅 Kutatua maswala 'Tarehe ya kwanza ya kuanza kazi':

1. Kama siku na mwezi wa kuajiriwa iko chini ya 12, jaribu kubadilisha. Kwa mfano kama haijakubali 09-03-2000, jaribu kuweka 03-09-2000.
2. Jaribu kutumia (Date of Current Appointment).
3. Wasiliana na HR ili kupata tarehe haswa ya DOFA`,
      en: `📅 Resolving 'Date of First Appointment'issues:

1. If date of both and month are less than 12, try interchanging. e.g. if it hasn't accepted 09-03-2000, try 03-09-2000.
2. Try using Date of Current Appointment.
3. In case any of the above works, use the system for the short term need but follow up your HR for ammendment`
}
  },
  serverError: {
    keywords: ['404', '504', 'error', 'not working', 'cannot access', 'inakataa'],
    response: {
      sw: `⚠️ Hitilafu ya Seva 404 / Hitilafu ya HTTP 504:

• Subiri, GHRIS portal itarejea baada ya ukarabati`,
en: `⚠️ Server Error 404/HTTP Error 504:

• The system will be back after maintenance`
}
  },
  systemDoesNotRecognize: {
    keywords: ['system does not recognize', 'not recognize'],
    response: {
      sw: `⚠️ Kusuluhisha 'Mfumo hautambui':

1. Kama umepokea mshahara wako wa kwanza mwezi huu, utaweza kujisajili baada ya tarehe tano (5) mwezi unaofuata
2. Hakikisha umeweka Namba ya Mfanyakazi, Kitambulisho (ID), KRA PIN na jina la ukoo kimakinifu
3. Jaribu kutumia jina lako la kwanza na la pili badala ya jina la ukoo`,
    en: `⚠️ Resolving 'System does not recognize' issue:

1. If you have received you first salary this month, try registering on the 5th of the following month.
2. Ensure you have keyed in the UPN, ID no., KRA PIN and surname correctly.
3. If it doesn't accept your surname try using your first name and other name instead. If this works, 
use the system for the short term need but follow up with your HR for ammendment` 
  } 
  },
  termsOfEngagement: {
    keywords: ['engagement', 'terms of engagement'],
    response: {
      sw: `⚠️ Kusuluhisha 'Makubaliano ya Kazi':

1. Kama GHRIS haitakubali 'Permanent & Pensionable' tumia 'Probation' hata kama umeajiriwa zaidi ya miezi sita kisha wasiliana na HR
2. Chagua 'Local Contract' ama 'Temporary' kama unafanya kwenye kaunti ama 'Internship' yoyote.
3. Chagua 'Supernumerary' kama unafanya kwa ofisi ya Rais, Gavana, Mbunge, Mwakilishi wa Wadi
4. Chagua 'Consolidated' kama unafanya kwa 'Medical Services - UHC', casual na kadhalika`,
en: `⚠️ Resolving 'Terms of Engagement' issues:

1. If GHRIS doesn't accept 'Permanent & Pensionable' use 'Probation' even though you have worked more than 6 months.
2. Choose 'Local Contract' or 'Temporary' if you work at County level or in any Internship.
3. Choose 'Supernumerary' if you work in the office of the President, Governor, MP or MCA.
4. Choose 'Consolidated' if you work at 'Medical Services - UHC', casual etc.`
    }
  },
  payslip: {
    keywords: ['payslip', 'salary', 'payment', 'pay', 'malipo', 'mshahara'],
    response: {
      sw: `📄 Jinsi ya Kupakua Payslip:

1. Ingia kwenye GHRIS
2. Nenda "My Records" → "My Payslip"
3. Bonyeza  "UHR Payslips & P9"
4. Itakupela kwenye HRIS-Kenya Payroll Self Payroll (https://uhr.kenya.go.ke/ippd/auth/login.php)
5. Ingia kutumia Namba ya Mfanyakazi na password.
6. Chagua mwezi na mwaki.
7. Bonyeza "View Payslip"
8. Bonyeza "Print".
9. Bonyeza "Save As PDF" ili kuipata kwenye kifaa chako


💡 Njia Mbadala
1.  Ingia kwenye HRIS-Kenya Payroll Self Payroll (https://uhr.kenya.go.ke/ippd/auth/login.php)
2. Ingia kutumia Namba ya Mfanyakazi na password.
3. Chagua mwezi na mwaki.
4. Bonyeza "View Payslip"
5. Bonyeza "Print".
6. Bonyeza "Save As PDF" ili kuipata kwenye kifaa chako`,
en: `📄How to download a payslip:

    1. Log in to GHRIS
    2. Go to "My Records" → "My Payslip"
    3. Click "UHR Payslips & P9"
    4. It will take you to HRIS-Kenya Payroll Self Payroll (https://uhr.kenya.go.ke/ippd/auth/login.php)
    5. Log in using your UPN and password
    6. Select the month and year.
    7. Click "View Payslip"
    8. Click "Print".
    9. Click "Save As PDF" to get it on your device

💡 Alternative Method
    1. Log in to HRIS-Kenya Payroll Self Payroll (https://uhr.kenya.go.ke/ippd/auth/login.php)
    2. Log in using your UPN and password
    3. Select the month and year
    4. Click "View Payslip"
    5. Click "Print"
    6. Click "Save As PDF" to get it on your device` 
    }
  },
    
  helpdesk: {
    keywords: ['helpdesk', 'contact', 'support', 'wasiliana', 'msaada', 'phone', 'simu', 'email'],
    response: {
      sw: `📞 Mawasiliano ya GHRIS Helpdesk:

📞 Simu: +254715086262
📧 Barua Pepe: piugit@outlook.com
⏰ Saa za Kazi: Jumatatu-Ijumaa, 8:00 AM - 5:00 PM
📍 Pius Gitonga`, 
en: `📞 Contact GHRIS Helpdesk:
    Call: +254715086262
📧 E-mail: piugit@outlook.com
⏰ Working hours: Jumatatu-Ijumaa, 8:00 AM - 5:00 PM
📍 Pius Gitonga`

    } 
  }
};