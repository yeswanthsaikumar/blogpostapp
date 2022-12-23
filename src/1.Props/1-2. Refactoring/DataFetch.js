function DataFetch({ getData }) {
  const data = [
    {
      id: "1",
      comment: "first data",
    },
    {
      id: "2",
      comment: "second data",
    },
    {
      id: "3",
      comment: "third data",
    },
  ];

  const onClick = () => {
    getData(data);
  };

  return (
    <>
      <button onClick={onClick}> save </button>
    </>
  );
}
export default DataFetch;
