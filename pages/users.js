function Users({ data }) {
  return (
    <div>
      <h1>here is users data</h1>
      {data.map((each) => (
        <p key={each.id}>{each.name}</p>
      ))}
    </div>
  );
}

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
