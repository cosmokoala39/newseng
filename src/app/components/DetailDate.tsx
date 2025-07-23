interface Article {
  date?: string;
  author?: string;
}

interface DetailDateProps {
  article: Article;
}

const reporter = "Reporter";

export default function DetailDate({ article }: DetailDateProps) {
  return (
    <div className="border-t border-b border-t-gray-400 border-b-gray-400 my-5 text-base text-gray-800">
      <div className="py-5 px-1 flex justify-between items-center flex-wrap gap-2">
        <div>
          <p>
            By: <strong>{article.author || reporter}</strong>
          </p>
        </div>
        <div className="text-right">
          <p>
            Published On:{" "}
            <span className="font-semibold">{article.date || "N/A"}</span>
          </p>
          <p>
            Updated On:{" "}
            <span className="font-semibold">{article.date || "N/A"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
