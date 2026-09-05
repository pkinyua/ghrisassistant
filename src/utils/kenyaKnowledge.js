export const kenyaKnowledge = {
  general: {
    keywords: ['hello', 'hi', 'hey', 'jambo','sasa'],
    response: `🇰🇪 Karibu GHRIS! Mimi ni msaidizi wako.

Ninaweza kukusaidia na:
• 🔑 Kubadilisha password
• 📄 Kupakua payslip
• 📄 Pakia hati (Upload Documents)
• 🔒 Kufungua account
• ⚠️ Kusuluhisha 'System Challenge'
• ⚠️ Kusuluhisha 'System does not recognize'
• ⚠️ Server Error 404/HTTP Error 504
• 💡 Kusuluhisha 'Terms of Engagement'
• 📅 Kutatua 'Date of First Appointment

• 📞 Kuwasiliana na helpdesk

Nisaidie kwa kuandika swali lako hapa chini.`
  },
  register: {
    keywords: ['register', 'registration', 'kujiandikisha', 'regist'],
    response: `📄 Maelekezo ya Kujisajili:

1. Nenda kwenye portal ya GHRIS
2. Ingia upande wako wa kushoto wa rangi ya buluu
3. Bonyeza "New Employee? Register Here"
4. Andika Namba ya Mfanyakazi, Kitambulisho (ID), KRA PIN na jina la ukoo kimakinifu
5. Jaza tarehe za kuzaliwa na kuanza kazi kati ya vingine
6. Andika password utakayokumbuka bila alama (symbols)
7. Bonyeza 'Submit'`
  },
  uploadDocuments : {
    keywords: ['upload documents', 'appointee', 'new appointee'],
    response: `📄 Maelekezo ya Kubadilisha Password:

1. Nenda kwenye portal ya GHRIS
2. Ingia upande wako wa kulia wa rangi ya kijani
3. Andika Namba ya Kitambulisho (ID) kwenye User ID bila kuweka password na itafika mahali pa kujaza maelezo yako
4. Andika Namba ya Mfanyakazi, Kitambulisho (ID), KRA PIN na jina la ukoo kimakinifu pamoja na nenosiri la msingi
 (default password) ili upate nafasi ya kuweka nenosiri ambalo utatumia kupakia hati zako kwenye GHRIS.
5. Bonyeza 'Submit'`
  },
  
  password: {
    keywords: ['password', 'forgot', 'reset', 'change', 'sahau', 'badilisha', 'nywila'],
    response: `🔑 Maelekezo ya Kubadilisha Password:

1. Nenda kwenye portal ya GHRIS
2. Ingia upande wako wa kushoto wa rangi ya buluu
3. Bonyeza "Forgot Your Password"
4. Andika Namba ya Mfanyakazi, Kitambulisho (ID), KRA PIN na jina la ukoo kimakinifu
5. Jaza tarehe za kuzaliwa na kuanza kazi kati ya vingine
6. Andika password utakayokumbuka bila alama (symbols)
7. Bonyeza 'Submit'`
  },

  timeOutError: {
    keywords: ['system challenge', 'error', 'not working', 'cannot access', 'inakataa', 'timeout'],
    response: `⚠️ Kusuluhisha 'System Challenge':

1. Futa historia ya mtandao (clear all browser history)
2. Tumia mtandao wenye kasi zaidi; badilisha kutoka kwa Wifi utumie data
3. Badilisha kivinjari unachotumia (badilisha kati ya Google Chrome, Mozilla Firefox and Microsoft Edge)
4. Badilisha kifaa unachotumia (badilisha kati ya simu, kipakatalishi na tarakilishi)`
  },
  DOFA: {
    keywords: ['first appointment', 'date of first appointment'],
    response: `📅 Kutatua 'Date of First Appointment':

1. Kama siku na mwezi wa kuzaliwa iko chini ya 12, jaribu kubadilisha. Kwa mfano kama haijakubali 09-03-2000, jaribu kuweka 03-09-2000.
2. Jaribu kutumia (Date of Current Appointment).
3. Wasiliana na HR ili kupata tarehe haswa ya DOFA`
  },
  serverError: {
    keywords: ['404 - File or directory not found.', '404', 'Server Error', 'Not found', '504', 'timeout', 'http error 504'],
    response: `⚠️ Server Error 404/HTTP Error 504:

• Subiri, GHRIS portal itarejea baada ya ukarabati`
  },
  systemDoesNotRecognize: {
    keywords: ['system does not recognize', 'not recognize'],
    response: `⚠️ Kusuluhisha 'System does not recognize':

1. Kama umepokea mshahara wako wa kwanza mwezi huu, utaweza kujisaji baada ya tarehe tano (5) mwezi unaofuata
2. Hakikisha umeweka Namba ya Mfanyakazi, Kitambulisho (ID), KRA PIN na jina la ukoo kimakinifu
3. Jaribu kutumia jina lako la kwanza na la pili badala ya jina la ukoo`
  },
  termsOfEngagement: {
    keywords: ['engagement', 'terms of engagement'],
    response: `⚠️ Kusuluhisha 'Terms of Engagement':

1. Kama GHRIS haitakubali 'Permanent & Pensionable' tumia 'Probation' hata kama umeajiriwa zaidi ya miezi sita kisha wasiliana na HR
2. Chagua 'Local Contract' ama 'Temporary' kama unafanya kwenye kaunti ama 'Internship' yoyote.
3. Chagua 'Supernumerary' kama unafanya kwa ofisi ya Rais, Gavana, Mbunge, Mwakilishi wa Wadi
4. Chagua 'Consolidated' kama unafanya kwa 'Medical Services - UHC', casual na kadhalika`
  },
  payslip: {
    keywords: ['payslip', 'salary', 'payment', 'pay', 'malipo', 'mshahara'],
    response: `📄 **Jinsi ya Kupakua Payslip:**

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
6. Bonyeza "Save As PDF" ili kuipata kwenye kifaa chako`
  },
    
  helpdesk: {
    keywords: ['helpdesk', 'contact', 'support', 'wasiliana', 'msaada', 'phone', 'simu', 'email'],
    response: `📞 Mawasiliano ya GHRIS Helpdesk:

📞 Simu: 0715086262
📧 Barua Pepe: piugit@outlook.com
⏰ Saa za Kazi: Jumatatu-Ijumaa, 8:00 AM - 5:00 PM
📍 Pius Gitonga`
  }
};