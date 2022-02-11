
import View from "./View";

const getAlbum = (id) => {
const apiName = `https://jsonplaceholder.typicode.com/albums
/${id}/photos`
fetch(apiName)
.then((res) => res.json())
.then((json) => {
console.log(json);
});
};


function Users({ data, udata }) {

return (
<table>
<tbody>
{data.map((show, index) => (
<tr key={index}>
<td>Album Name : {show.title}</td>
<td>
{udata.map((employee,key) => {
return udata[key].id == show.id ? <td>User: {employee.name}</td> : ""
})}
</td>
<View dataUserId={show.id} />
{/* <td><button href ="" onClick={() => <View dataUserId={show.id} />

}> View </button></td> */}
</tr>
))}
</tbody>
</table>
);
}
export default Users;
