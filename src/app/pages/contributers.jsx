"use client";

import { useEffect, useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const OWNER = "Gyanthakur";
const REPO = "yourcss_contribution";
const PER_PAGE = 100;

export default function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || null;

  const fetchContributors = async (pageToLoad = 1) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.github.com/repos/${OWNER}/${REPO}/contributors?per_page=${PER_PAGE}&page=${pageToLoad}&anon=1`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            ...(GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {}),
          },
        }
      );

      if (!res.ok) throw new Error(`GitHub API error: ${res.statusText}`);
      const data = await res.json();
      setContributors((prev) => (pageToLoad === 1 ? data : [...prev, ...data]));
      setHasMore(data.length === PER_PAGE);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContributors(1);
  }, []);

  const loadMore = () => {
    const next = page + 1;
    setPage(next);
    fetchContributors(next);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-10 text-gray-900 dark:text-gray-100">
          Contributors
        </h2>

        {error && (
          <p className="text-center text-red-600 dark:text-red-400 mb-6">
            {error}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {contributors.map((c) => (
            <div
              key={c.id}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg border border-gray-200 dark:border-gray-700 
              transition-transform transform hover:-translate-y-1 duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <img
                  src={c.avatar_url || "/profile.jpg"}
                  alt={c.login || "Anonymous"}
                  className="w-20 h-20 rounded-full border-2 border-blue-500 dark:border-blue-400 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {c.login || "Anonymous"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {c.contributions} Contributions
                </p>
              </div>

              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href={c.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-700 text-blue-600 dark:text-blue-300 transition"
                  title="View GitHub Profile"
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </a>

                <a
                  href={`https://github.com/${OWNER}/${REPO}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-green-700 text-green-600 dark:text-green-300 transition"
                  title="Go to Repository"
                >
                  <GlobeAltIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          {loading && <p className="text-gray-600 dark:text-gray-300">Loading...</p>}

          {!loading && hasMore && (
            <button
              onClick={loadMore}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white 
              px-6 py-2 rounded-full font-medium transition-all"
            >
              Load More
            </button>
          )}

          {!hasMore && !loading && (
            <p className="text-gray-600 dark:text-gray-400">All contributors loaded.</p>
          )}
        </div>
      </div>
    </section>
  );
}
