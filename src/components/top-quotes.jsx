import { useQuery } from "@tanstack/react-query";
import { getTopQuotes } from "../api/quotes";

const TopQuotes = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["top-quotes"],
    queryFn: getTopQuotes,
  });

  const quoteList = data?.quotes;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {quoteList?.map((quote) => (
        <div
          key={quote.id}
          className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-lg font-bold">{quote.quote}</div>
          <div className="text-sm text-gray-500">{quote.author}</div>
        </div>
      ))}
    </div>
  );
};

export default TopQuotes;
