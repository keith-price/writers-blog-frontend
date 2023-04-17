export const useUtils = () => {
  // fetches all posts and orders by date (latest first)
  const fetchAllPosts = () => {
    const query = groq`*[_type == 'post'] | order(date desc)`;
    const { data } = useSanityQuery(query);
    return data;
  };

  //   fetches only the latest post
  const fetchLatestPost = () => {
    const query = groq`*[_type == "post"] | order(date desc) [0]`;
    const { data } = useSanityQuery(query);
    return data;
  };

  // ignores the latest post and returns the 4 next most recent
  const fetchFeaturedPosts = () => {
    const query = groq`*[ _type == "post"] | order(date desc) [1...5]`;
    const { data } = useSanityQuery(query);
    return data;
  };

  const fetchByCategory = (category) => {
    const query = groq`*[_type == "post" && category == "${category}"]`;
    const { data } = useSanityQuery(query);
    return data;
  };

  const fetchSinglePost = (path) => {
    const query = groq`*[_type == "post" && slug.current == "${path}"]`;
    const { data } = useSanityQuery(query);
    return data;
  };

  return {
    fetchAllPosts,
    fetchLatestPost,
    fetchFeaturedPosts,
    fetchByCategory,
    fetchSinglePost,
  };
};
