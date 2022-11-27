const ContactList = ({ data }) => {
  console.log(data);
  if (!data.length) return;
  return (
    <>
      <ul>
        {data.map(el => {
          const { name, number, id } = el;
          return (
            <li key={id}>
              <p>{name}</p>
              <p>{number}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
