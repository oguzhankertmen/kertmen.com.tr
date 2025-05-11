"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"

export function BlogPostPageClient({ params }: { params: { slug: string } }) {
  const { t, locale } = useLocale()

  // Örnek blog yazısı içeriği
  const post = {
    title: t("blog.post7.title"),
    date: t("blog.post7.date"),
    content: locale === "tr" ? `
      <p>Kullanıcı deneyimi ve ergonomi, günümüz web ve mobil uygulamalarında neredeyse en önemli metrikler haline geldi. Bu doğrultuda, özellikle ödeme, kayıt süreci veya kimlik doğrulama gibi ilerleyen işlemlerde stepper, önde gelen ekran tasarım trendlerinden biri haline geldi. Stepper, kullanıcının hangi adımda olduğunu ve önlerindeki yol haritasının nasıl olacağını bilgilendiren, göze hoş gelen bir tasarımla sunulduğunda kullanıcı deneyimini büyük ölçüde artıran vazgeçilmez bir tasarım bileşenidir.</p>

      <h2>Stepper Özellikleri</h2>
      <p>Bileşenin çalışma mantığına başlarken, öncelikle bileşende kullandığımız değişkenlere ve nesnelere bakalım. Farklı kullanım senaryoları olduğu için, stepper tipini seçtiğimiz bir enum yapısı bulunuyor. Bu enum, .Numeric ve .Icon olmak üzere iki durumdan oluşuyor. Sayısal bir stepper veya ikonlardan oluşan bir stepper oluşturabiliriz. Bunu ekranlarda uygularken ayarlayacağız. Stepper, .Icon seçimi ile uygulanacaksa, stepperIcons adlı bir sözlük tarafından beslenir. Bu sözlük, stepper'ın adımlarında kullanılan ikonların isimlerini içerir. Bu isimler, Assets klasöründeki ikonların isimleri veya sistem ikonlarının isimleri olabilir.</p>

      <pre><code>
import UIKit
@IBDesignable
final class StepperView: UIView {
    
    enum StepperType {
        case Numeric
        case Icon
    }
    /// The stepper type selection
    var stepperType: StepperType = .Numeric
    var stepperIcons = [Int:String]()
}
      </code></pre>

      <h2>CALayer, CAShapeLayer ve CATextLayer</h2>
      <p>Stepper'ı çizerken, Core Animation kullanarak CALayer ve CATextLayer yapılarını kullandım. Aslında, kullanıcının ekranda gördüğü tasarımlar katmanlardan oluşur. Bu katmanlara yerleştirdiğimiz farklı nesnelerle tüm tasarımı ortaya çıkarırız.</p>

      <h2>Ekran tasarımlarında uygulama</h2>
      <p>Storyboard veya programatik olarak arayüzünüzü oluşturduktan sonra, bir UIView oluşturun. Bu view, StepperView sınıfından bir nesne olmalıdır. Uygulamak istediğiniz adım sayısına göre genişlik kısıtlamasını güncellemelisiniz. 3 adımlı bir stepper için ideal genişlik 220 punto olarak alınabilir.</p>

      <h2>Genel Bakış</h2>
      <p>Stepper'ı isteklerinize göre özelleştirebilirsiniz. Bunun için anahtar noktalar renderTextImages, renderImageIndexes ve renderCustomImageIndexes fonksiyonları olacaktır. Stepper üzerindeki ikonlar bu fonksiyonlarda güncellenebilir.</p>

      <p>Yine, _shapePath fonksiyonu çizimlerin yapıldığı yer olduğu için, renk değişiklikleri ve güncellemeler için bu fonksiyona odaklanabilirsiniz.</p>

      <p>Bu yazıda, Swift kullanarak UIBezierPath ve Core Animation katmanlarıyla bir stepper bileşeni nasıl oluşturabileceğimizi anlatmaya çalıştım. Umarım faydalı ve anlaşılır bir yazı olmuştur. Uygulama hakkında sorularınız olursa, iletisim@oguzhankertmen.com.tr adresinden bana ulaşabilirsiniz. Demo projeye aşağıdaki GitHub hesabımdan erişebilirsiniz. Bir sonraki yazıda görüşmek üzere! 👋🏻</p>

      <p>📎 <a href="https://github.com/oguzhankertmen/Stepper" target="_blank" rel="noopener noreferrer">https://github.com/oguzhankertmen/Stepper</a></p>
    ` : `
      <p>User experience and ergonomics are now almost the most important metrics in today's web and mobile applications. In this direction, stepper is one of the leading screen design trends, especially in progressive transactions such as payment, registration process or identity verification. Stepper is an indispensable design component, which provides information about which step the user is on and how the road map will be in front of them, and when it is presented with a design that is pleasing to the eye, greatly enhances the user experience.</p>

      <h2>Stepper Properties</h2>
      <p>While starting the working logic of the component, let's first look at the variables and objects we use in the component. Since there are different usage scenarios, there is an enum structure where we choose the stepper type. This enum consists of two cases, .Numeric and .Icon. We can create a numeric stepper or a stepper consisting of icons. We will be setting this when we implement it on the screens. If the stepper will be implemented with the .Icon selection, it is fed by a dictionary called stepperIcons. This dictionary contains the names of the icons used in the steps of the stepper. These names can be the names of the icons in the Assets folder or the names of the system icons.</p>

      <pre><code>
import UIKit
@IBDesignable
final class StepperView: UIView {
    
    enum StepperType {
        case Numeric
        case Icon
    }
    /// The stepper type selection
    var stepperType: StepperType = .Numeric
    var stepperIcons = [Int:String]()
}
      </code></pre>

      <h2>CALayer, CAShapeLayer and CATextLayer</h2>
      <p>While drawing the stepper, I used CALayer and CATextLayer structures using Core Animation. In fact, the designs seen by the user on the screen consist of layers. With the different objects we place on these layers, we reveal the entire design.</p>

      <h2>Implementation in screen designs</h2>
      <p>After creating your interface with storyboard or programmatic, create a UIView. This view should be an object from the StepperView class. You should update the width constraint according to the number of steps you want to apply. For a stepper with 3 steps, the ideal width can be taken as 220 points.</p>

      <h2>Overview</h2>
      <p>You can customize the stepper according to your wishes. The key points for this will be the renderTextImages, renderImageIndexes and renderCustomImageIndexes functions. The icons on the stepper can be updated on these functions.</p>

      <p>Again, since the _shapePath function is where the drawings are made, you can focus on this function for color changes and updates.</p>

      <p>In this article, I tried to explain how we can build a stepper component with Swift using UIBezierPath and Core Animation layers. I hope it was a useful and understandable article. If you have any questions about the implementation, you can contact me at iletisim@oguzhankertmen.com.tr. You can access the demo project from my GitHub account below. See you in the next article! 👋🏻</p>

      <p>📎 <a href="https://github.com/oguzhankertmen/Stepper" target="_blank" rel="noopener noreferrer">https://github.com/oguzhankertmen/Stepper</a></p>
    `,
  }

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-24">
      <main>
        <article>
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> {t("blog.backToBlog")}
            </Link>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="text-neutral-500 dark:text-neutral-500 text-sm">{post.date}</div>
          </div>

          <div
            className="prose prose-neutral dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-medium mb-4">{t("blog.share")}</h3>
            <div className="flex space-x-4">
              <button className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                Twitter
              </button>
              <button className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                LinkedIn
              </button>
              <button className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                Facebook
              </button>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
