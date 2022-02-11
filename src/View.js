import React from 'react'
import { Link } from 'react-router-dom';

function View({ dataUserId }) {
const apiName = `https://jsonplaceholder.typicode.com/albums
/${dataUserId}/photos`
fetch(apiName)
.then((res) => res.json())
.then((json) => {
console.log(json);

});
return <Link to="">view more</Link>

}

export default View;