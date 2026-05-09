import { getDictionary } from "@/lib/get-dictionary";
import PromptsClient from "@/components/pages/PromptsClient";

export default async function PromptsPage({ params: { locale } }: { params: { locale: string } }) {
  const dictionary = await getDictionary(locale);

  return <PromptsClient dictionary={dictionary} />;
}
