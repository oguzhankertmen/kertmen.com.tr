import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Eye, MoreHorizontal, Pencil, Plus, Trash2 } from "lucide-react"

export default function BlogPostsAdmin() {
  // Bu veri normalde bir CMS veya veritabanından gelecektir
  const blogPosts = [
    {
      id: "1",
      title: "SwiftUI ile Modern UI Tasarımı",
      status: "Yayında",
      date: "12 Nisan 2023",
      views: 245,
    },
    {
      id: "2",
      title: "iOS 16'daki Yeni Özellikler",
      status: "Yayında",
      date: "5 Mart 2023",
      views: 189,
    },
    {
      id: "3",
      title: "Swift Concurrency ile Asenkron Programlama",
      status: "Yayında",
      date: "18 Şubat 2023",
      views: 321,
    },
    {
      id: "4",
      title: "Core Data ile Veritabanı Yönetimi",
      status: "Yayında",
      date: "5 Ocak 2023",
      views: 178,
    },
    {
      id: "5",
      title: "Combine Framework Kullanımı",
      status: "Yayında",
      date: "15 Aralık 2022",
      views: 203,
    },
    {
      id: "6",
      title: "iOS Uygulamalarında Test Yazımı",
      status: "Taslak",
      date: "2 Kasım 2022",
      views: 0,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blog Yazıları</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" /> Yeni Yazı
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Başlık</TableHead>
              <TableHead>Durum</TableHead>
              <TableHead>Tarih</TableHead>
              <TableHead className="text-right">Görüntülenme</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      post.status === "Yayında" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {post.status}
                  </span>
                </TableCell>
                <TableCell>{post.date}</TableCell>
                <TableCell className="text-right">{post.views}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Menü</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" /> Görüntüle
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Pencil className="h-4 w-4 mr-2" /> Düzenle
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" /> Sil
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
