const Filter = props => {
  let filter;

  const handleChange = evt => {
    filter = evt.currentTarget.value;

    props.onChange(filter);
  };

  return (
    <label htmlFor="">
      Find contacts by name
      <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
};

export default Filter;
