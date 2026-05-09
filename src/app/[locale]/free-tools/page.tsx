import { getDictionary } from "@/lib/get-dictionary";
import FreeToolsClient from "@/components/pages/FreeToolsClient";

export default async function FreeToolsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <FreeToolsClient dictionary={dictionary} />;
}
