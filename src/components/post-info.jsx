const PostInfo = ({ post }) => {
  const { title, body, views, reactions } = post || {};
  return (
    <>
      <h2 className="text-xl">Title: {title}</h2>
      <h6>
        Reactions: {views}👁️ {reactions?.likes}❤️
      </h6>
      <p>{body}</p>
    </>
  );
};

export default PostInfo;
