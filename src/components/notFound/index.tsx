import classes from 'components/notFound/notFound.module.css';
export default function NotFound () {
  return (
    <div >
      <h1 className={classes.notFoundHeading}>404</h1>
      <p className={classes.notFoundSubHeading}>You landed on the wrong planet!</p>
    </div>
  );
}