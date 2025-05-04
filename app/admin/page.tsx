import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Eye, ArrowUp, ArrowDown } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Blog Yazıları</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Son 30 günde +2 yazı</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ziyaretçiler</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground flex items-center text-green-600">
              <ArrowUp className="h-3 w-3 mr-1" /> %12 artış
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sayfa Görüntüleme</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,678</div>
            <p className="text-xs text-muted-foreground flex items-center text-green-600">
              <ArrowUp className="h-3 w-3 mr-1" /> %18 artış
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ortalama Okunma Süresi</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2:45</div>
            <p className="text-xs text-muted-foreground flex items-center text-red-600">
              <ArrowDown className="h-3 w-3 mr-1" /> %5 azalış
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Son Blog Yazıları</CardTitle>
            <CardDescription>Son eklenen 5 blog yazısı</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "SwiftUI ile Modern UI Tasarımı", date: "12 Nisan 2023", views: 245 },
                { title: "iOS 16'daki Yeni Özellikler", date: "5 Mart 2023", views: 189 },
                { title: "Swift Concurrency ile Asenkron Programlama", date: "18 Şubat 2023", views: 321 },
                { title: "Core Data ile Veritabanı Yönetimi", date: "5 Ocak 2023", views: 178 },
                { title: "Combine Framework Kullanımı", date: "15 Aralık 2022", views: 203 },
              ].map((post, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{post.title}</p>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Eye className="h-4 w-4 mr-1" /> {post.views}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popüler Sayfalar</CardTitle>
            <CardDescription>En çok ziyaret edilen sayfalar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Ana Sayfa", views: 1245 },
                { title: "Blog", views: 856 },
                { title: "SwiftUI ile Modern UI Tasarımı", views: 523 },
                { title: "Hakkımda", views: 412 },
                { title: "Swift Concurrency ile Asenkron Programlama", views: 389 },
              ].map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="font-medium">{page.title}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Eye className="h-4 w-4 mr-1" /> {page.views}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
