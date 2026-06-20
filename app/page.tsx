import AnnouncementBanner from '@/components/announcement-banner'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Bestsellers from '@/components/bestsellers'
import Categories from '@/components/categories'
import TimelessFeature from '@/components/timeless-feature'
import AsSeenOn from '@/components/as-seen-on'
import NewIn from '@/components/new-in'
import EverydayLiving from '@/components/everyday-living'
import BlogPosts from '@/components/blog-posts'
import QualityFeature from '@/components/quality-feature'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <Navbar />
      <Hero />
      <Bestsellers />
      <Categories />
      <TimelessFeature />
      <AsSeenOn />
      <NewIn />
      <EverydayLiving />
      <BlogPosts />
      <QualityFeature />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  )
}
