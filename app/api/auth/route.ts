import { type NextRequest, NextResponse } from "next/server"

// Bu bir örnek API route'udur. Gerçek uygulamada daha güvenli bir kimlik doğrulama sistemi kullanılmalıdır.
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Basit bir kimlik doğrulama kontrolü
    if (email === "admin@kertmen.com.tr" && password === "password") {
      // Gerçek uygulamada JWT veya başka bir token sistemi kullanılmalıdır
      return NextResponse.json({
        success: true,
        token: "example-token-12345",
        user: {
          name: "Admin",
          email: "admin@kertmen.com.tr",
          role: "admin",
        },
      })
    }

    return NextResponse.json({ success: false, message: "Geçersiz e-posta veya şifre" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Bir hata oluştu" }, { status: 500 })
  }
}
