import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

// Using DataGrid component from mui
// Need to define rows and columns for it to work
//importing rows to make this component partially reusable

const columns = [
  {
    field: "id",
    //value of id key fetched from rows
    //col value
    headerName: "ID",
    //col title
    width: 90,
  },
  {
    field: "username",
    headerName: "Username",
    width: 200,
    //method used when this is a special column ie. not just fetching a value from rows, but a combo of values/styling/inserting custom value
    renderCell: (params) => {
      return (
        <div className="userListTableUser">
          <img src={params.row.avatar} alt="" className="userListTableImg" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "subscription",
    headerName: "Subscription",
    width: 120,
  },
  {
    field: "transaction",
    headerName: "Transaction Volume",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          {/* relative path to individual user */}
          <Link to={`${params.row.id}`}>
            <button className="userListTableEdit">Edit</button>
          </Link>
          <DeleteOutline className="userListTableDelete" />
        </>
      );
    },
  },
];

const UserList = () => {
  return (
    <div className="userList">
      <h3 className="userListTitle">Users</h3>
      <DataGrid
        className="userListTable"
        rows={userRows}
        columns={columns}
        pageSize={10}
        //can consider giving user more functionality by adding rows per page prop
        checkoxSelection
        //to prevent entire row from being selected when edit/delete button is clicked
        disableSelectionOnClick
        //can also consider making certain columns editable
      />
    </div>
  );
};
export default UserList;
