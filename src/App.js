import React, { useEffect, useState } from "react";
import Users from "./Users";
import Pegination from "./Pegination";
import View from "./View";
export default function App() {
const [data, setData] = useState([]);
const [userdata, setUserData] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [postPerPage] = useState(9);
const getApi = () => {
fetch("https://jsonplaceholder.typicode.com/albums")
.then((res) => res.json())
.then((json) => {
setData(json);

});
};

const getAllUserData = () => {
fetch("http://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((json) => {
setUserData(json);
});
};

useEffect(() => {
getApi();
getAllUserData();


}, []);
const indexOfLastPost = currentPage * postPerPage;
const indexOfFirstPost = indexOfLastPost - postPerPage;
const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
const paginate = (pageNumber) => setCurrentPage(pageNumber);
return (
<div className="App mt-5">
<h1 className="text-primary mb-3">LISTS OF ALBUMS</h1>
<Users data={currentPosts} udata={userdata} />
<Pegination
postPerPage={postPerPage}
totalPosts={data.length}
paginate={paginate}
/>
<View />
</div>
);
}
