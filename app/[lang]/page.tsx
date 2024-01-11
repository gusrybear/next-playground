import Counter from "@/app/[lang]/components/counter";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Locale } from ":@/language";
import { IWord } from "@/@types/dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict: IWord = await getDictionary(lang);
  return (
    <>
      <p>{dict.products.cart}</p>
      <Counter />
    </>
  );
}
