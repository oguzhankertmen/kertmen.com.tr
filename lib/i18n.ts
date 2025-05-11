export type Locale = "tr" | "en"

export type Dictionary = {
  [key in Locale]: {
    [key: string]: string
  }
}

export const dictionary: Dictionary = {
  tr: {
    // import.meta.env value to disable cache in development
    "__cache_bust": Date.now().toString(),

    // Navigation
    "nav.home": "Ana Sayfa",
    "nav.blog": "Blog",
    "nav.about": "Hakkımda",
    "nav.bookmarks": "Yer İmleri",
    "nav.contact": "İletişim",

    // Home Page
    "home.title": "iOS Mühendisi & Mobil Uygulama Geliştirici",
    "home.intro":
      "Merhaba, ben Oğuzhan. 3 yılı aşkın süredir iOS geliştirme alanında çalışıyorum. Kullanıcı deneyimini ön planda tutan, temiz kod yazan ve modern teknolojileri takip eden bir iOS geliştiricisiyim.",
    "home.projects": "Projelerim",
    "home.blog": "Blog Yazılarım",
    "home.featured": "Seçkin Projelerim",
    "home.viewAll": "Tümünü Gör",
    "home.latestPosts": "Son Blog Yazılarım",
    "home.allPosts": "Tüm Yazılar",
    "home.expertise": "Uzmanlık Alanlarım",

    // Blog
    "blog.title": "Blog Yazılarım",
    "blog.subtitle": "iOS geliştirme, Swift, ve mobil teknolojiler hakkında düşüncelerim ve öğrendiklerim.",
    "blog.backHome": "Ana Sayfaya Dön",
    "blog.readMore": "Devamını Oku",
    "blog.backToBlog": "Blog'a Dön",
    "blog.share": "Bu yazıyı paylaş",

    // Blog Posts
    "blog.post1.title": "SwiftUI ile Modern UI Tasarımı",
    "blog.post1.date": "12 Nisan 2023",
    "blog.post2.title": "iOS 16'daki Yeni Özellikler",
    "blog.post2.date": "5 Mart 2023",
    "blog.post3.title": "Swift Concurrency ile Asenkron Programlama",
    "blog.post3.date": "18 Şubat 2023",
    "blog.post4.title": "Core Data ile Veritabanı Yönetimi",
    "blog.post4.date": "5 Ocak 2023",
    "blog.post5.title": "Combine Framework Kullanımı",
    "blog.post5.date": "15 Aralık 2022",
    "blog.post6.title": "iOS Uygulamalarında Test Yazımı",
    "blog.post6.date": "2 Kasım 2022",
    "blog.post7.title": "UIBezierPath ile Stepper Komponenti Tasarımı",
    "blog.post7.date": "17 Mayıs 2023",

    // Projects
    "project.fitness.title": "Fitness Takip Uygulaması",
    "project.fitness.description":
      "SwiftUI ile geliştirilmiş, kullanıcıların fitness aktivitelerini takip edebileceği kapsamlı bir iOS uygulaması.",
    "project.ecommerce.title": "E-Ticaret Uygulaması",
    "project.ecommerce.description":
      "UIKit ve MVVM mimarisi kullanılarak geliştirilmiş, modern bir e-ticaret uygulaması.",

    // About
    "about.title": "Hakkımda",
    "about.backHome": "Ana Sayfaya Dön",
    "about.intro":
      "Merhaba, ben Oğuzhan Kertmen. 3 yılı aşkın süredir iOS geliştirme alanında çalışıyorum. Kariyerim boyunca, kullanıcı deneyimini ön planda tutan, performanslı ve sürdürülebilir mobil uygulamalar geliştirmeye odaklandım.",
    "about.experience": "Deneyim",
    "about.experienceText":
      "Zubizu - Doğuş Teknoloji\n Zip BNPL - Innovance Consultancy\n Juzdan - Innovance Consultancy/Akbank",
    "about.education": "Eğitim",
    "about.educationText":
      "Karadeniz Teknik Üniversitesi - Bilgisayar Mühendisliği bölümünden mezun oldum. Eğitimim sırasında, mobil uygulama geliştirme ve kullanıcı arayüzü tasarımı konularına özel ilgi gösterdim.",
    "about.skills": "Beceriler",
    "about.interests": "İlgi Alanları",
    "about.interestsText":
      "İş dışında, yeni teknolojileri takip etmeyi, açık kaynak projelere katkıda bulunmayı ve teknik makaleler yazmayı seviyorum. Ayrıca saatler ve Horoloji alanına da ilgi duyuyorum.",
    "about.contact": "İletişim",
    "about.contactText":
      "Benimle iletişime geçmek, iş birliği yapmak veya sadece merhaba demek isterseniz, oguzhan@kertmen.com.tr adresinden bana ulaşabilirsiniz.",

    // Bookmarks
    "bookmarks.title": "Yer İmleri",
    "bookmarks.subtitle": "Beğendiğim ve faydalı bulduğum kaynaklar, araçlar ve web siteleri.",
    "bookmarks.backHome": "Ana Sayfaya Dön",
    "bookmarks.development": "Geliştirme",
    "bookmarks.design": "Tasarım",
    "bookmarks.productivity": "Verimlilik",
    "bookmarks.inspiration": "İlham Kaynakları",
    "bookmarks.tools": "Araçlar",
    "bookmarks.visit": "Ziyaret Et",

    // Contact
    "contact.title": "İletişim",
    "contact.subtitle":
      "Benimle iletişime geçmek, iş birliği yapmak veya sadece merhaba demek için aşağıdaki formu doldurabilirsiniz.",
    "contact.backHome": "Ana Sayfaya Dön",
    "contact.name": "Adınız",
    "contact.email": "E-posta Adresiniz",
    "contact.subject": "Konu",
    "contact.message": "Mesajınız",
    "contact.send": "Gönder",
    "contact.info": "İletişim Bilgileri",
    "contact.emailLabel": "E-posta",
    "contact.social": "Sosyal Medya",
    "contact.location": "Konum",
    "contact.hours": "Çalışma Saatleri",
    "contact.hoursText": "Pazartesi - Cuma: 08:00 - 17:00",

    // Footer
    "footer.rights": "Tüm hakları saklıdır.",

    // Theme
    "theme.dark": "Koyu Tema",
    "theme.light": "Açık Tema",
    "theme.system": "Sistem Teması",

    // Language
    "lang.tr": "Türkçe",
    "lang.en": "İngilizce",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.bookmarks": "Bookmarks",
    "nav.contact": "Contact",

    // Home Page
    "home.title": "iOS Engineer & Mobile App Developer",
    "home.intro":
      "Hello, I'm Oğuzhan. I've been working in iOS development for over 3 years. I'm an iOS developer who prioritizes user experience, writes clean code, and follows modern technologies.",
    "home.projects": "My Projects",
    "home.blog": "My Blog Posts",
    "home.featured": "Featured Projects",
    "home.viewAll": "View All",
    "home.latestPosts": "Latest Blog Posts",
    "home.allPosts": "All Posts",
    "home.expertise": "Areas of Expertise",

    // Blog
    "blog.title": "My Blog Posts",
    "blog.subtitle": "My thoughts and learnings about iOS development, Swift, and mobile technologies.",
    "blog.backHome": "Back to Home",
    "blog.readMore": "Read More",
    "blog.backToBlog": "Back to Blog",
    "blog.share": "Share this post",

    // Blog Posts
    "blog.post1.title": "Modern UI Design with SwiftUI",
    "blog.post1.date": "April 12, 2023",
    "blog.post2.title": "New Features in iOS 16",
    "blog.post2.date": "March 5, 2023",
    "blog.post3.title": "Asynchronous Programming with Swift Concurrency",
    "blog.post3.date": "February 18, 2023",
    "blog.post4.title": "Database Management with Core Data",
    "blog.post4.date": "January 5, 2023",
    "blog.post5.title": "Using the Combine Framework",
    "blog.post5.date": "December 15, 2022",
    "blog.post6.title": "Writing Tests for iOS Applications",
    "blog.post6.date": "November 2, 2022",
    "blog.post7.title": "UIBezierPath ile Stepper Komponenti Tasarımı",
    "blog.post7.date": "May 17, 2023",

    // Projects
    "project.fitness.title": "Fitness Tracking App",
    "project.fitness.description":
      "A comprehensive iOS app developed with SwiftUI that allows users to track their fitness activities.",
    "project.ecommerce.title": "E-Commerce App",
    "project.ecommerce.description": "A modern e-commerce app developed using UIKit and MVVM architecture.",

    // About
    "about.title": "About Me",
    "about.backHome": "Back to Home",
    "about.intro":
      "Hello, I'm Oğuzhan Kertmen. I've been working in iOS development for over 3 years. Throughout my career, I've focused on developing performant and sustainable mobile applications that prioritize user experience.",
    "about.experience": "Experience",
    "about.experienceText":
      "Zubizu - Doğuş Technology\n Zip BNPL - Innovance Consultancy\n Juzdan - Innovance Consultancy/Akbank",
    "about.education": "Education",
    "about.educationText":
      "Karadeniz Teknik Üniversitesi - Bilgisayar Mühendisliği bölümünden mezun oldum. Eğitimim sırasında, mobil uygulama geliştirme ve kullanıcı arayüzü tasarımı konularına özel ilgi gösterdim.",
    "about.skills": "Skills",
    "about.interests": "Interests",
    "about.interestsText":
      "Outside of work, I enjoy following new technologies, contributing to open source projects, and writing technical articles. Additionally, watches and horology are among my hobbies.",
    "about.contact": "Contact",
    "about.contactText":
      "If you want to get in touch with me, collaborate, or just say hello, you can reach me at oguzhan@kertmen.com.tr.",

    // Bookmarks
    "bookmarks.title": "Bookmarks",
    "bookmarks.subtitle": "Resources, tools, and websites that I find useful and enjoyable.",
    "bookmarks.backHome": "Back to Home",
    "bookmarks.development": "Development",
    "bookmarks.design": "Design",
    "bookmarks.productivity": "Productivity",
    "bookmarks.inspiration": "Inspiration",
    "bookmarks.tools": "Tools",
    "bookmarks.visit": "Visit",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "You can fill out the form below to get in touch with me, collaborate, or just say hello.",
    "contact.backHome": "Back to Home",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.subject": "Subject",
    "contact.message": "Your Message",
    "contact.send": "Send",
    "contact.info": "Contact Information",
    "contact.emailLabel": "Email",
    "contact.social": "Social Media",
    "contact.location": "Location",
    "contact.hours": "Working Hours",
    "contact.hoursText": "Monday - Friday: 08:00 - 17:00",

    // Footer
    "footer.rights": "All rights reserved.",

    // Theme
    "theme.dark": "Dark Theme",
    "theme.light": "Light Theme",
    "theme.system": "System Theme",

    // Language
    "lang.tr": "Turkish",
    "lang.en": "English",
  },
}
