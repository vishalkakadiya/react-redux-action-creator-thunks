import classes from './Notification.module.css';

const Notification = ({ data }) => {
  let specialClasses = '';

  if (data.status === 'error') {
    specialClasses = classes.error;
  }
  if (data.status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{data.title}</h2>
      <p>{data.message}</p>
    </section>
  );
};

export default Notification;
