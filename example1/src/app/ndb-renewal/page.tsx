import type { Metadata } from "next";
import Hero from "@/components/ndb/Hero";
import ServiceList from "@/components/ndb/ServiceList";
import Features from "@/components/ndb/Features";
import Recruit from "@/components/ndb/Recruit";
import NewsList from "@/components/ndb/NewsList";
import Contact from "@/components/ndb/Contact";

export const metadata: Metadata = {
  title: "NDB Renewal | 研修用モック",
  description: "日本デェイブレイクWebサイトリニューアル 研修用モックページ",
};

export default function NdbRenewalPage() {
  return (
    <main>
      <Hero />
      <ServiceList />
      <Features />
      <Recruit />
      <NewsList />
      <Contact />
    </main>
  );
}
