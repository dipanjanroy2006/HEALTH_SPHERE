// Simple client-side i18n helper
(function(window){
  const translations = {
    en: {
      site_title: 'Health Sphere',
      site_subtitle: 'Knowledge is healthcare',
      join_pill: 'Join Our Community',
      create_account: 'Create Your Account',
      signup_desc: 'Sign up to access health tools, symptom checker, and personalized resources.',
      full_name_label: 'Full Name',
      email_label: 'Email Address',
      password_label: 'Password',
      language_label: 'Preferred Language',
      create_account_btn: 'Create Account',
      already_have_account: 'Already have an account? Sign In',
      sign_in_title: 'Welcome Back',
      sign_in_btn: 'Sign In',
      placeholder_name: 'Your full name',
      placeholder_email: 'you@example.com',
      placeholder_password: 'Enter a password',
      sign_in_desc: 'Enter your email and password to continue',
      or_text: 'or',
      sign_in_link: 'Sign In',
      sign_up_link: 'Create account',
      nav_home: 'Home',
      nav_dashboard: 'Dashboard',
      nav_healthopedia: 'Healthopedia',
      nav_chatbot: 'AI Assistant',
      nav_symptom: 'Symptom Checker',
      nav_emergency: 'Emergency',
      emergency_text: 'In case of medical emergency, call your local emergency services immediately',
      welcome_back: 'Welcome back,',
      quick_search: 'Quick Search',
      emergency_btn: 'Emergency',
      bookmarked_articles: 'Bookmarked Articles',
      articles_read: 'Articles Read',
      health_goals: 'Health Goals',
      day_streak: 'Day Streak',
      personalized_insights: 'Personalized Health Insights',
      refresh: 'Refresh',
      view_all: 'View All',
      recent_activity: 'Recent Activity',
      explore_articles: 'Explore Articles',
      talk_to_ai: 'Talk to AI Assistant',
      continue_learning: 'Continue Learning',
      medical_disclaimer_title: 'Important Medical Disclaimer',
      medical_disclaimer_text: 'This AI assistant provides general health information only and should not replace professional medical advice.',
      badge_trusted_info: 'Trusted Health Information',
      hero_title: 'Health Literacy at Every Step',
      hero_description: "We believe in health education's potential to make life better for everyone.",
      search_placeholder: 'Search diseases, symptoms, or treatments...',
      search_btn: 'Search',
      get_started_btn: 'Get Started',
      features_link: 'Features',
      about_link: 'About',
      label_symptoms: 'Symptoms:',
      label_treatment: 'Treatment:',
      label_prevention: 'Prevention:',
      see_more: 'See More'
    },
    hi: {
      site_title: 'हेल्थ स्फीयर',
      site_subtitle: 'ज्ञान ही स्वास्थ्य है',
      join_pill: 'हमारे समुदाय से जुड़ें',
      create_account: 'अपना खाता बनाएं',
      signup_desc: 'हेल्थ टूल्स, लक्षण जाँच और व्यक्तिगत संसाधनों तक पहुँचने के लिए साइन अप करें।',
      full_name_label: 'पूरा नाम',
      email_label: 'ईमेल पता',
      password_label: 'पासवर्ड',
      language_label: 'पसंदीदा भाषा',
      create_account_btn: 'खाता बनाएं',
      already_have_account: 'पहले से खाता है? साइन इन करें',
      sign_in_title: 'वापसी पर स्वागत है',
      sign_in_btn: 'साइन इन',
      placeholder_name: 'आपका पूरा नाम',
      placeholder_email: 'aap@udaharan.com',
      placeholder_password: 'एक पासवर्ड लिखें',
      sign_in_desc: 'जारी रखने के लिए अपना ईमेल और पासवर्ड दर्ज करें',
      or_text: 'या',
      sign_in_link: 'साइन इन',
      sign_up_link: 'खाता बनाएँ',
      nav_home: 'होम',
      nav_dashboard: 'डैशबोर्ड',
      nav_healthopedia: 'हेल्थोपीडिया',
      nav_chatbot: 'एआई सहायक',
      nav_symptom: 'लक्षण जाँच',
      nav_emergency: 'आपातकाल',
      emergency_text: 'आपातकालीन स्थिति में, तुरंत अपने स्थानीय आपातकालीन सेवाओं को कॉल करें',
      welcome_back: 'वापसी पर स्वागत है,',
      quick_search: 'त्वरित खोज',
      emergency_btn: 'आपातकाल',
      bookmarked_articles: 'बुकमार्क किए गए लेख',
      articles_read: 'पढ़े गए लेख',
      health_goals: 'स्वास्थ्य लक्ष्य',
      day_streak: 'दिनों की लगातारता',
      personalized_insights: 'व्यक्तिगत स्वास्थ्य अंतर्दृष्टि',
      refresh: 'रिफ्रेश',
      view_all: 'सभी देखें',
      recent_activity: 'हाल की गतिविधि',
      explore_articles: 'लेख एक्सप्लोर करें',
      talk_to_ai: 'एआई असिस्टेंट से बात करें',
      continue_learning: 'सीखना जारी रखें',
      medical_disclaimer_title: 'महत्वपूर्ण चिकित्सा अस्वीकरण',
      medical_disclaimer_text: 'यह एआई सहायक सामान्य स्वास्थ्य जानकारी प्रदान करता है और पेशेवर चिकित्सा सलाह का विकल्प नहीं होना चाहिए।',
      badge_trusted_info: 'विश्वसनीय स्वास्थ्य जानकारी',
      hero_title: 'हर कदम पर स्वास्थ्य साक्षरता',
      hero_description: 'हम मानते हैं कि स्वास्थ्य शिक्षा की क्षमता जीवन को बेहतर बना सकती है।',
      search_placeholder: 'रोग, लक्षण, या उपचार खोजें...',
      search_btn: 'खोजें',
      get_started_btn: 'शुरू करें',
      features_link: 'विशेषताएँ',
      about_link: 'हमारे बारे में',
      label_symptoms: 'लक्षण:',
      label_treatment: 'उपचार:',
      label_prevention: 'रोकथाम:',
      see_more: 'और देखें'
    },
    bn: {
      site_title: 'হেলথ স্ফিয়ার',
      site_subtitle: 'জ্ঞানই স্বাস্থ্য',
      join_pill: 'আমাদের কমিউনিটির সাথে যোগ দিন',
      create_account: 'আপনার অ্যাকাউন্ট তৈরি করুন',
      signup_desc: 'স্বাস্থ্য টুল, উপসর্গ চেকার এবং ব্যক্তিগতকৃত সংস্থাগুলিতে প্রবেশ করতে সাইন আপ করুন।',
      full_name_label: 'পূর্ণ নাম',
      email_label: 'ইমেল ঠিকানা',
      password_label: 'পাসওয়ার্ড',
      language_label: 'পছন্দের ভাষা',
      create_account_btn: 'অ্যাকাউন্ট তৈরি করুন',
      already_have_account: 'ইতিমধ্যে একটি অ্যাকাউন্ট আছে? সাইন ইন করুন',
      sign_in_title: 'ফিরে আসায় স্বাগতম',
      sign_in_btn: 'সাইন ইন',
      placeholder_name: 'আপনার সম্পূর্ণ নাম',
      placeholder_email: 'you@example.com',
      placeholder_password: 'একটি পাসওয়ার্ড লিখুন',
      sign_in_desc: 'চালিয়ে যেতে আপনার ইমেল এবং পাসওয়ার্ড লিখুন',
      or_text: 'অথবা',
      sign_in_link: 'সাইন ইন',
      sign_up_link: 'অ্যাকাউন্ট তৈরি',
      nav_home: 'হোম',
      nav_dashboard: 'ড্যাশবোর্ড',
      nav_healthopedia: 'হেলথোপিডিয়া',
      nav_chatbot: 'এআই সহকারী',
      nav_symptom: 'লক্ষণ পরীক্ষা',
      nav_emergency: 'জরুরি',
      emergency_text: 'চিকিৎসা জরুরি অবস্থায়, আপনার স্থানীয় জরুরি পরিষেবাগুলিকে দ্রুত কল করুন',
      welcome_back: 'ফিরে এসে স্বাগতম,',
      quick_search: 'দ্রুত অনুসন্ধান',
      emergency_btn: 'জরুরি',
      bookmarked_articles: 'বুকমার্ক করা নিবন্ধ',
      articles_read: 'পড়া নিবন্ধ',
      health_goals: 'স্বাস্থ্য লক্ষ্য',
      day_streak: 'দিন স্ট্রিক',
      personalized_insights: 'ব্যক্তিগতকৃত স্বাস্থ্য অন্তর্দৃষ্টি',
      refresh: 'রিফ্রেশ',
      view_all: 'সব দেখুন',
      recent_activity: 'সাম্প্রতিক কার্যক্রম',
      explore_articles: 'নিবন্ধ অন্বেষণ করুন',
      talk_to_ai: 'এআই অ্যাসিস্ট্যান্টের সাথে কথা বলুন',
      continue_learning: 'শেখা চালিয়ে যান',
      medical_disclaimer_title: 'গুরুত্বপূর্ণ চিকিৎসা অস্বীকৃতি',
      medical_disclaimer_text: 'এই এআই অ্যাসিস্ট্যান্ট সাধারণ স্বাস্থ্য তথ্য সরবরাহ করে এবং পেশাদার চিকিৎসা পরামর্শের বিকল্প হওয়া উচিত নয়।',
      badge_trusted_info: 'বিশ্বাসযোগ্য স্বাস্থ্য তথ্য',
      hero_title: 'প্রতিটি ধাপে স্বাস্থ্য সাক্ষরতা',
      hero_description: 'আমরা বিশ্বাস করি স্বাস্থ্য শিক্ষার ক্ষমতা জীবনকে সবার জন্য উন্নত করতে পারে।',
      search_placeholder: 'রোগ, লক্ষণ বা চিকিৎসা অনুসন্ধান করুন...',
      search_btn: 'সন্ধান',
      get_started_btn: 'শুরু করুন',
      features_link: 'বৈশিষ্ট্য',
      about_link: 'সম্বন্ধে',
      label_symptoms: 'লক্ষণসমূহ:',
      label_treatment: 'চিকিৎসা:',
      label_prevention: 'প্রতিরোধ:',
      see_more: 'আরও দেখুন'
    }
  };

  function applyLanguage(lang){
    if(!translations[lang]) lang = 'en';
    const dict = translations[lang];
    // text content
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(!key) return;
      if(dict[key]) el.textContent = dict[key];
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(!key) return;
      if(dict[key]) el.setAttribute('placeholder', dict[key]);
    });
    // update selects (language selectors) to reflect current language
    document.querySelectorAll('select[data-i18n-select]').forEach(sel=>{
      try{ sel.value = lang; }catch(e){}
    });
    // persist
    try{ localStorage.userLang = lang; }catch(e){}
  }

  function init(){
    const stored = (localStorage.userLang || 'en');
    applyLanguage(stored);
    // wire any selects with id 'language' or data-i18n-select
    document.querySelectorAll('select[data-i18n-select], select#language').forEach(sel=>{
      sel.addEventListener('change', ()=>{
        applyLanguage(sel.value);
      });
    });
  }

  window.i18n = { init, applyLanguage, translations };

  // auto-init on DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})(window);
