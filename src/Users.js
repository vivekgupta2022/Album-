import View from "./View";
function Users({ data }) {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((show,index)=>(
              <tr key={index}>
                <td>{show.userId}</td>
                <td>{show.id}</td>
                <td>{show.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <View/>
      </>
    );
  }
  export default Users;
  