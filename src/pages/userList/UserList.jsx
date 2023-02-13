import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";

// Using DataGrid component from mui
// Need to define rows and columns for it to work

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "username", headerName: "Username", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
  },
  {
    field: "transaction",
    headerName: "Transaction Volume",
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 3,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 4,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 5,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 6,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 7,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 8,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 9,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 10,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
];

const UserList = () => {
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
export default UserList;
