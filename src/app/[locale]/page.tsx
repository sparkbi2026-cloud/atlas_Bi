import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import HomePageClient from "@/components/pages/HomePageClient";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as Locale);

  return <HomePageClient dictionary={dictionary} />;
}
