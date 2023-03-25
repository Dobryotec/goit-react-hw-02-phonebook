import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ol className={css.list}>
      {contacts.map(({ id, name, number }, index) => {
        return (
          <li className={css.item} key={id}>
            {index + 1}. {name}: {number}
            <button className={css.btn} onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ol>
  );
};

export default ContactList;
