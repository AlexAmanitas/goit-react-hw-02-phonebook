const ContactList = props => {
  const { data, filter } = props;
  let filterData = data.filter(el => {
    console.log(filter, el.name.includes(filter));
    return el.name.toLowerCase().includes(filter);
  });

  const handleOnClick = evt => {
    props.onDelete(evt.currentTarget.id);
  };

  if (!filterData.length) return;
  return (
    <ul>
      {filterData.map(el => {
        const { name, number, id } = el;
        return (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button id={id} type="button" onClick={handleOnClick}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
