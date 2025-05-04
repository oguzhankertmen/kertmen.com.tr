// CloudFlare Workers ve KV için yardımcı fonksiyonlar

export interface KVNamespace {
  get(key: string, options?: { type: "text" | "json" | "arrayBuffer" | "stream" }): Promise<any>
  put(key: string, value: string | ReadableStream | ArrayBuffer, options?: { expirationTtl?: number }): Promise<void>
  delete(key: string): Promise<void>
  list(options?: { prefix?: string; limit?: number; cursor?: string }): Promise<{
    keys: { name: string; expiration?: number }[]
    list_complete: boolean
    cursor?: string
  }>
}

// Blog yazıları için KV işlemleri
export async function getBlogPosts(KV: KVNamespace) {
  try {
    const posts = await KV.get("blog_posts", { type: "json" })
    return posts || []
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

export async function getBlogPost(KV: KVNamespace, slug: string) {
  try {
    return await KV.get(`blog_post:${slug}`, { type: "json" })
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error)
    return null
  }
}

export async function saveBlogPost(KV: KVNamespace, post: any) {
  try {
    // Tekil blog yazısını kaydet
    await KV.put(`blog_post:${post.slug}`, JSON.stringify(post))

    // Blog yazıları listesini güncelle
    const posts = await getBlogPosts(KV)
    const existingPostIndex = posts.findIndex((p: any) => p.slug === post.slug)

    const postSummary = {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      status: post.status,
      coverImage: post.coverImage,
    }

    if (existingPostIndex >= 0) {
      posts[existingPostIndex] = postSummary
    } else {
      posts.push(postSummary)
    }

    await KV.put("blog_posts", JSON.stringify(posts))

    return true
  } catch (error) {
    console.error("Error saving blog post:", error)
    return false
  }
}

export async function deleteBlogPost(KV: KVNamespace, slug: string) {
  try {
    // Tekil blog yazısını sil
    await KV.delete(`blog_post:${slug}`)

    // Blog yazıları listesinden kaldır
    const posts = await getBlogPosts(KV)
    const updatedPosts = posts.filter((post: any) => post.slug !== slug)
    await KV.put("blog_posts", JSON.stringify(updatedPosts))

    return true
  } catch (error) {
    console.error(`Error deleting blog post ${slug}:`, error)
    return false
  }
}

// Sayfa içerikleri için KV işlemleri
export async function getPageContent(KV: KVNamespace, path: string) {
  try {
    return await KV.get(`page:${path}`, { type: "json" })
  } catch (error) {
    console.error(`Error fetching page content for ${path}:`, error)
    return null
  }
}

export async function savePageContent(KV: KVNamespace, path: string, content: any) {
  try {
    await KV.put(`page:${path}`, JSON.stringify(content))
    return true
  } catch (error) {
    console.error(`Error saving page content for ${path}:`, error)
    return false
  }
}
