import { Button } from "@/components/ui/Button/button";
import { FormEvent, useState } from "react";

// ! Не придумал какой api подключить, поэтому решил использовать любой случайный
// * https://api.kanye.rest/ выдает цитаты Kanye West;)
type KanyeQuote = {
  quote: string;
};

const FindJobPage = () => {
  const [kanyeQuote, setKanyeQuote] = useState<KanyeQuote>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data: KanyeQuote;

    try {
      setIsLoading(() => true);
      const res = await fetch("https://api.kanye.rest/");
      data = await res.json();
    } catch (error) {
      console.log(error);
      return;
    } finally {
      setIsLoading(() => false);
    }

    setKanyeQuote(() => data);
  };
  return (
    <div className=" items-center">
      <h2>Press the button to get a quote from Kanye West</h2>
      <p>Kanye's Quote: {isLoading ? "Loading state" : kanyeQuote?.quote}</p>

      <form onSubmit={onSubmit} method="GET">
        <Button>Get new Quote</Button>
      </form>
    </div>
  );
};
export default FindJobPage;
