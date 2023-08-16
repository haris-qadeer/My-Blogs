import classes from "./post-header.module.css";

const PostHeader = (props) => {
  const { title, image } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <img src={image} alt={title} className={classes.img} />
    </header>
  );
};

export default PostHeader;
